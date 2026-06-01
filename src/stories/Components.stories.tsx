import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'CSS/Components',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'CSS-only component classes available in the design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <button className="btn-modern btn-modern-primary">Primary</button>
      <button className="btn-modern btn-modern-secondary">Secondary</button>
      <button className="btn-modern btn-modern-ghost">Ghost</button>
      <button className="btn-modern btn-modern-glow">Glow</button>
      <button className="btn-modern btn-modern-danger">Danger</button>
    </div>
  ),
};

export const Inputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <input className="input" placeholder="Text input" />
      <input className="input" placeholder="Disabled" disabled />
      <textarea className="textarea" placeholder="Textarea" rows={3} />
      <select className="select-native">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  ),
};

export const Badges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <span className="badge">Default</span>
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
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item active">Active</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item">Contact</a>
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
