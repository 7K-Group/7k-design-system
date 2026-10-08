import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal, Tabs, TabList, Tab, TabPanel, Input, Button } from '../src/react';

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
