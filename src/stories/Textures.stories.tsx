import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  parameters: {
    layout: 'padded',
  },
  tags: ['ai-generated'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const TextureBox = ({ className, label }: { className: string; label: string }) => (
  <div
    style={{
      width: '200px',
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--border-default)',
      position: 'relative',
    }}
    className={className}
  >
    <span
      style={{ position: 'relative', zIndex: 2, fontSize: '12px', fontFamily: 'var(--font-mono)' }}
    >
      {label}
    </span>
  </div>
);

export const Scanline: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-scanline" label=".bg-scanline" />
      <TextureBox className="bg-scanline-fast" label=".bg-scanline-fast" />
    </div>
  ),
};

export const Halftone: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-halftone-sm" label=".bg-halftone-sm" />
      <TextureBox className="bg-halftone-md" label=".bg-halftone-md" />
      <TextureBox className="bg-halftone-lg" label=".bg-halftone-lg" />
      <TextureBox className="bg-halftone-accent" label=".bg-halftone-accent" />
    </div>
  ),
};

export const DotMatrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-dot-matrix" label=".bg-dot-matrix" />
      <TextureBox className="bg-dot-matrix-dense" label=".bg-dot-matrix-dense" />
      <TextureBox className="bg-dot-matrix-sparse" label=".bg-dot-matrix-sparse" />
    </div>
  ),
};

export const Stripes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-diagonal-stripes" label=".bg-diagonal-stripes" />
      <TextureBox className="bg-diagonal-stripes-dense" label=".bg-diagonal-stripes-dense" />
      <TextureBox className="bg-stripes-h" label=".bg-stripes-h" />
      <TextureBox className="bg-stripes-v" label=".bg-stripes-v" />
    </div>
  ),
};

export const Noise: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-noise" label=".bg-noise" />
      <TextureBox className="bg-noise-heavy" label=".bg-noise-heavy" />
    </div>
  ),
};

export const Vignette: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="bg-vignette-ink" label=".bg-vignette-ink" />
      <TextureBox className="bg-vignette-ink-sharp" label=".bg-vignette-ink-sharp" />
    </div>
  ),
};

export const Isometric: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="iso-grid" label=".iso-grid" />
      <TextureBox className="iso-grid-dense" label=".iso-grid-dense" />
      <TextureBox className="iso-cubes" label=".iso-cubes" />
      <TextureBox className="iso-terrain" label=".iso-terrain" />
      <TextureBox className="iso-pipes" label=".iso-pipes" />
      <TextureBox className="iso-hex" label=".iso-hex" />
      <TextureBox className="iso-city" label=".iso-city" />
      <TextureBox className="iso-wave" label=".iso-wave" />
    </div>
  ),
};

export const IsometricAnimated: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox
        className="iso-grid iso-grid-animated"
        label=".iso-grid-animated"
      />
      <TextureBox
        className="iso-cubes iso-cubes-animated"
        label=".iso-cubes-animated"
      />
      <TextureBox
        className="iso-terrain iso-terrain-animated"
        label=".iso-terrain-animated"
      />
      <TextureBox
        className="iso-pipes iso-pipes-animated"
        label=".iso-pipes-animated"
      />
      <TextureBox
        className="iso-city iso-city-animated"
        label=".iso-city-animated"
      />
    </div>
  ),
};
