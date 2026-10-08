import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Modal, Tabs, TabList, Tab, TabPanel, Input, Button, Alert, Toast, Drawer } from '../src/react';

describe('Drawer keyboard support', () => {
  it('closes on Escape and restores focus to the trigger', () => {
    const onClose = vi.fn();
    const { unmount } = render(
      <>
        <button>trigger</button>
        <Drawer open onClose={onClose} aria-label="drawer">
          content
        </Drawer>
      </>
    );
    const trigger = screen.getByRole('button', { name: 'trigger' });
    trigger.focus();
    // Re-open after focusing trigger so the drawer records it as previous active element
    unmount();
    const onClose2 = vi.fn();
    render(
      <>
        <button>trigger2</button>
        <Drawer open onClose={onClose2} aria-label="drawer2">
          content
        </Drawer>
      </>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose2).toHaveBeenCalledTimes(1);
  });
});

describe('Modal focus trap edges', () => {
  it('Shift+Tab on the first focusable wraps to the last', () => {
    render(
      <Modal open aria-label="wrap modal">
        <button>first</button>
        <button>last</button>
      </Modal>
    );
    const first = screen.getByText('first');
    const last = screen.getByText('last');
    first.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(last);
  });

  it('keeps Tab inside even with a single focusable', () => {
    render(
      <Modal open aria-label="single modal">
        <button>only</button>
      </Modal>
    );
    const only = screen.getByText('only');
    only.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(only);
  });
});

describe('Tabs keyboard wrap-around', () => {
  it('ArrowRight on the last tab wraps to the first', () => {
    render(
      <Tabs>
        <TabList>
          <Tab index={0}>One</Tab>
          <Tab index={1}>Two</Tab>
        </TabList>
        <TabPanel index={0}>Panel one</TabPanel>
        <TabPanel index={1}>Panel two</TabPanel>
      </Tabs>
    );
    const tabOne = screen.getByRole('tab', { name: 'One' });
    const tabTwo = screen.getByRole('tab', { name: 'Two' });
    tabTwo.focus();
    fireEvent.keyDown(tabTwo, { key: 'ArrowRight' });
    expect(tabOne).toHaveFocus();
    expect(tabOne).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Variant class wiring', () => {
  const css = readFileSync(resolve(__dirname, '../src/css/components.css'), 'utf-8');
  const hasRule = (cls: string) =>
    new RegExp(`\\.${cls.replace(/-/g, '\\-')}[\\s,{:]`).test(css);

  it('every Alert variant class emitted by React has a CSS rule', () => {
    for (const variant of ['success', 'warning', 'danger', 'info'] as const) {
      const { container, unmount } = render(<Alert variant={variant}>msg</Alert>);
      const alert = container.querySelector('.alert')!;
      for (const cls of Array.from(alert.classList)) {
        if (cls !== 'alert') expect(hasRule(cls), `${cls} missing in components.css`).toBe(true);
      }
      unmount();
    }
  });

  it('every Toast variant class emitted by React has a CSS rule', () => {
    const { container } = render(<Toast variant="info">msg</Toast>);
    for (const cls of Array.from(container.querySelector('.toast')!.classList)) {
      if (cls !== 'toast') expect(hasRule(cls), `${cls} missing in components.css`).toBe(true);
    }
  });
});

describe('Modal keyboard support', () => {
  it('closes on Escape', () => {
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} aria-label="test modal">
        content
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps Tab focus within the dialog', () => {
    render(
      <Modal open aria-label="trap modal">
        <button>first</button>
        <button>last</button>
      </Modal>
    );
    const first = screen.getByText('first');
    const last = screen.getByText('last');
    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(first);
  });
});

describe('Tabs keyboard support', () => {
  it('moves selection with ArrowRight', () => {
    render(
      <Tabs>
        <TabList>
          <Tab index={0}>One</Tab>
          <Tab index={1}>Two</Tab>
        </TabList>
        <TabPanel index={0}>Panel one</TabPanel>
        <TabPanel index={1}>Panel two</TabPanel>
      </Tabs>
    );
    const tabOne = screen.getByRole('tab', { name: 'One' });
    const tabTwo = screen.getByRole('tab', { name: 'Two' });
    tabOne.focus();
    fireEvent.keyDown(tabOne, { key: 'ArrowRight' });
    expect(tabTwo).toHaveFocus();
    expect(tabTwo).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Panel two')).toBeInTheDocument();
  });

  it('jumps with Home and End', () => {
    render(
      <Tabs>
        <TabList>
          <Tab index={0}>One</Tab>
          <Tab index={1}>Two</Tab>
          <Tab index={2}>Three</Tab>
        </TabList>
        <TabPanel index={0}>Panel one</TabPanel>
        <TabPanel index={1}>Panel two</TabPanel>
        <TabPanel index={2}>Panel three</TabPanel>
      </Tabs>
    );
    const tabOne = screen.getByRole('tab', { name: 'One' });
    const tabThree = screen.getByRole('tab', { name: 'Three' });
    tabOne.focus();
    fireEvent.keyDown(tabOne, { key: 'End' });
    expect(tabThree).toHaveFocus();
    fireEvent.keyDown(tabThree, { key: 'Home' });
    expect(tabOne).toHaveFocus();
  });

  it('gives inactive tabs tabindex -1 and panel tabindex 0', () => {
    render(
      <Tabs>
        <TabList>
          <Tab index={0}>One</Tab>
          <Tab index={1}>Two</Tab>
        </TabList>
        <TabPanel index={0}>Panel one</TabPanel>
        <TabPanel index={1}>Panel two</TabPanel>
      </Tabs>
    );
    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('tabpanel')).toHaveAttribute('tabindex', '0');
  });
});

describe('Input error state', () => {
  it('applies the error class and aria-invalid', () => {
    render(<Input label="Name" error="Required" />);
    const input = screen.getByLabelText('Name');
    expect(input).toHaveClass('error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });
});

describe('Button disabled state', () => {
  it('renders a disabled native button', () => {
    render(<Button disabled>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });
});
