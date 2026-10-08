import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader,
  ModalFooter,
  Drawer,
  Toast,
  Tooltip,
  Alert,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Nav,
  NavItem,
  Checkbox,
  Radio,
  Toggle,
  Select,
  Textarea,
  TextureOverlay,
  IsometricBackground,
  Spinner,
  Skeleton,
  Avatar,
  Progress,
  Listbox,
  Icon,
} from '../src/react';

describe('Card', () => {
  it('renders with content', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
      </Card>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('applies texture class', () => {
    render(<Card texture="halftone">Content</Card>);
    expect(screen.getByText('Content')).toHaveClass('card-halftone');
  });
});

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal open>
        <ModalHeader>Title</ModalHeader>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toHaveTextContent('Title');
  });

  it('is hidden when closed', () => {
    const { container } = render(<Modal open={false}>Content</Modal>);
    expect(container.firstChild).toBeNull();
  });
});

describe('Drawer', () => {
  it('renders when open', () => {
    render(<Drawer open>Drawer content</Drawer>);
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });
});

describe('Toast', () => {
  it('renders with role status', () => {
    render(<Toast>Saved</Toast>);
    expect(screen.getByRole('status')).toHaveTextContent('Saved');
  });

  it('calls onDismiss', () => {
    const onDismiss = vi.fn();
    render(<Toast onDismiss={onDismiss}>Message</Toast>);
    fireEvent.click(screen.getByLabelText('Dismiss notification'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});

describe('Alert', () => {
  it('renders with role alert', () => {
    render(<Alert>Warning</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Warning');
  });

  it('calls onClose', () => {
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Message</Alert>);
    fireEvent.click(screen.getByLabelText('Dismiss alert'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Tabs', () => {
  it('switches tab panels', () => {
    render(
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>First</Tab>
          <Tab index={1}>Second</Tab>
        </TabList>
        <TabPanel index={0}>Panel 1</TabPanel>
        <TabPanel index={1}>Panel 2</TabPanel>
      </Tabs>
    );
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.queryByText('Panel 2')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: /second/i }));
    expect(screen.getByText('Panel 2')).toBeInTheDocument();
  });
});

describe('Nav', () => {
  it('renders nav and items', () => {
    render(
      <Nav>
        <NavItem href="/" active>
          Home
        </NavItem>
        <NavItem href="/about">About</NavItem>
      </Nav>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toHaveClass('active');
  });
});

describe('Checkbox', () => {
  it('renders label and checks', () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByLabelText('Accept')).toBeInTheDocument();
  });
});

describe('Radio', () => {
  it('renders label', () => {
    render(<Radio label="Option" name="group" />);
    expect(screen.getByLabelText('Option')).toBeInTheDocument();
  });
});

describe('Toggle', () => {
  it('renders switch', () => {
    render(<Toggle label="Enable" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
});

describe('Select & Textarea', () => {
  it('renders select', () => {
    render(
      <Select>
        <option>A</option>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders textarea', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

describe('Layout helpers', () => {
  it('renders TextureOverlay', () => {
    render(<TextureOverlay texture="halftone">Content</TextureOverlay>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders IsometricBackground', () => {
    render(<IsometricBackground pattern="grid">Content</IsometricBackground>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});

describe('Spinner', () => {
  it('renders with status role', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('spinner-lg');
  });
});

describe('Skeleton', () => {
  it('renders with dimensions', () => {
    const { container } = render(<Skeleton width={120} height={24} />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('skeleton');
    expect(el.style.width).toBe('120px');
    expect(el.style.height).toBe('24px');
  });
});

describe('Avatar', () => {
  it('renders initials', () => {
    render(<Avatar initials="7K" />);
    expect(screen.getByText('7K')).toBeInTheDocument();
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="/avatar.png" alt="User" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/avatar.png');
  });
});

describe('Progress', () => {
  it('renders progressbar with value', () => {
    render(<Progress value={40} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '40');
    expect(bar.firstChild).toHaveStyle({ width: '40%' });
  });

  it('clamps out-of-range values', () => {
    render(<Progress value={150} />);
    expect(screen.getByRole('progressbar').firstChild).toHaveStyle({ width: '100%' });
  });
});

describe('Icon', () => {
  it('renders an icon', () => {
    render(<Icon name="check" />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('returns null for unknown icon', () => {
    const { container } = render(<Icon name={'unknown' as never} />);
    expect(container.firstChild).toBeNull();
  });
});

describe('Listbox', () => {
  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C', disabled: true },
  ];

  it('opens on click and selects an option', async () => {
    const user = (await import('@testing-library/user-event')).default.setup();
    const onChange = vi.fn();
    render(<Listbox options={options} onChange={onChange} />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.click(screen.getByRole('option', { name: 'Option B' }));
    expect(onChange).toHaveBeenCalledWith('b');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = (await import('@testing-library/user-event')).default.setup();
    const onChange = vi.fn();
    render(<Listbox options={options} onChange={onChange} />);
    screen.getByRole('button').focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.keyboard('{ArrowDown}'); // highlight B (skips nothing, first move from A)
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('shows the selected label', () => {
    render(<Listbox options={options} value="b" />);
    expect(screen.getByRole('button')).toHaveTextContent('Option B');
  });
});
