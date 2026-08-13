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
  MangaPanel,
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

  it('renders MangaPanel', () => {
    render(
      <MangaPanel frame texture="halftone">
        Panel
      </MangaPanel>
    );
    expect(screen.getByText('Panel')).toBeInTheDocument();
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
