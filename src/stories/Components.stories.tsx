import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  parameters: {
    layout: 'padded',
  },
  tags: ['ai-generated'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <button className="btn-modern btn-modern-primary">Primary</button>
      <button className="btn-modern btn-modern-secondary">Secondary</button>
      <button className="btn-modern btn-modern-ghost">Ghost</button>
      <button className="btn-modern btn-modern-glow">Glow</button>
      <button className="btn-modern btn-modern-accent">Accent</button>
      <button className="btn-modern btn-modern-glow-accent">Glow Accent</button>
      <button className="btn-modern btn-modern-danger">Danger</button>
    </div>
  ),
};

export const Inputs: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div className="card" style={{ padding: '24px', width: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">DEFAULT</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input className="input" placeholder="Text input" />
          <input className="input" placeholder="Disabled" disabled />
          <textarea className="textarea" placeholder="Textarea" rows={3} />
          <select className="select-native">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
      <div className="card accent-secondary-border-top" style={{ padding: '24px', width: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">ACCENT</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input className="input" placeholder="Text input" />
          <input className="input" placeholder="Disabled" disabled />
          <textarea className="textarea" placeholder="Textarea" rows={3} />
          <select className="select-native">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    </div>
  ),
};

export const Badges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <span className="badge">Default</span>
      <span className="badge badge-accent">Accent</span>
      <span className="badge badge-success">Success</span>
      <span className="badge badge-warning">Warning</span>
      <span className="badge badge-danger">Danger</span>
      <span className="badge badge-info">Info</span>
      <span className="badge badge-neutral">Neutral</span>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '4px' }}>
      <a href="#" className="nav-item">
        Home
      </a>
      <a href="#" className="nav-item active">
        Active
      </a>
      <a href="#" className="nav-item">
        About
      </a>
      <a href="#" className="nav-item">
        Contact
      </a>
    </div>
  ),
};

export const Cards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div className="card" style={{ padding: '24px', maxWidth: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">FEATURED</span>
        </div>
        <h3>Card Title</h3>
        <p className="body">Card content with the 1-bit manga aesthetic.</p>
      </div>
      <div className="card accent-border-top" style={{ padding: '24px', maxWidth: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">ACCENT</span>
        </div>
        <h3>With Accent</h3>
        <p className="body">Card with top accent border.</p>
      </div>
    </div>
  ),
};

export const TexturedButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <button className="btn-modern btn-modern-primary btn-modern-halftone">Halftone</button>
      <button className="btn-modern btn-modern-primary btn-modern-scanline">Scanline</button>
      <button className="btn-modern btn-modern-accent btn-modern-dots">Dots</button>
    </div>
  ),
};

export const TexturedCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div className="card card-halftone" style={{ padding: '24px', maxWidth: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">HALFTONE</span>
        </div>
        <h3>Textured Card</h3>
        <p className="body">Low-opacity halftone texture sits behind the content.</p>
      </div>
      <div className="card card-scanline" style={{ padding: '24px', maxWidth: '300px' }}>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <span className="mono-label">SCANLINE</span>
        </div>
        <h3>Scanline Card</h3>
        <p className="body">CRT-style scanline overlay on a card surface.</p>
      </div>
    </div>
  ),
};

export const MangaPanels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div className="panel panel-frame" style={{ maxWidth: '300px' }}>
        <span className="mono-label">FRAME</span>
        <p className="body">Manga panel with inset frame outline.</p>
      </div>
      <div className="panel panel-invert" style={{ maxWidth: '300px' }}>
        <span className="mono-label">INVERT</span>
        <p>High-contrast splash panel.</p>
      </div>
      <div className="panel panel-halftone" style={{ maxWidth: '300px' }}>
        <span className="mono-label">TEXTURED</span>
        <p className="body">Panel with halftone screentone overlay.</p>
      </div>
    </div>
  ),
};

export const Alerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px' }}>
      <div className="alert">
        <span className="alert-content">Default alert message</span>
      </div>
      <div className="alert alert-success">
        <span className="alert-icon" />
        <span className="alert-content">Success alert message</span>
      </div>
      <div className="alert alert-warning">
        <span className="alert-icon" />
        <span className="alert-content">Warning alert message</span>
      </div>
      <div className="alert alert-danger">
        <span className="alert-icon" />
        <span className="alert-content">Danger alert message</span>
      </div>
    </div>
  ),
};

export const Toasts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="toast">
        <span className="toast-icon" />
        <span className="toast-content">Default toast</span>
      </div>
      <div className="toast toast-success">
        <span className="toast-icon" />
        <span className="toast-content">Success toast</span>
      </div>
      <div className="toast toast-error">
        <span className="toast-icon" />
        <span className="toast-content">Error toast</span>
      </div>
    </div>
  ),
};

export const FormControls: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
      <label className="checkbox">
        <input type="checkbox" className="sr-only" />
        <span className="checkbox-box" />
        <span className="checkbox-text">Checkbox label</span>
      </label>
      <label className="radio">
        <input type="radio" name="radio-story" className="sr-only" />
        <span className="radio-circle" />
        <span className="radio-text">Radio label</span>
      </label>
      <label className="toggle">
        <input type="checkbox" role="switch" className="sr-only" />
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        <span className="toggle-text">Toggle label</span>
      </label>
    </div>
  ),
};
