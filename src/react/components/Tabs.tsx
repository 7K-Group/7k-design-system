import { createContext, useContext, useState, useId, type ReactNode } from 'react';
import type { TabsProps, TabProps } from '../types';

interface TabsContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab components must be used within Tabs');
  return context;
}

export function Tabs({
  children,
  defaultIndex = 0,
  index,
  onChange,
  className = '',
  style,
}: TabsProps) {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const selectedIndex = index !== undefined ? index : internalIndex;
  const baseId = useId();

  const setSelectedIndex = (value: number) => {
    if (index === undefined) setInternalIndex(value);
    onChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ selectedIndex, setSelectedIndex, baseId }}>
      <div className={`tabs ${className}`} style={style}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className = '', style }: TabsProps) {
  return (
    <div className={`tab-list ${className}`} role="tablist" style={style}>
      {children}
    </div>
  );
}

export function Tab({ children, index: indexProp, className = '', style }: TabProps) {
  const { selectedIndex, setSelectedIndex, baseId } = useTabs();
  const index = indexProp ?? 0;
  const isSelected = selectedIndex === index;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${index}`}
      id={`${baseId}-tab-${index}`}
      className={`tab ${isSelected ? 'active' : ''} ${className}`}
      style={style}
      onClick={() => setSelectedIndex(index)}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  children,
  index: indexProp,
  className = '',
  style,
}: TabProps & { children: ReactNode }) {
  const { selectedIndex, baseId } = useTabs();
  const index = indexProp ?? 0;
  const isSelected = selectedIndex === index;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${index}`}
      aria-labelledby={`${baseId}-tab-${index}`}
      className={`tab-panel ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
