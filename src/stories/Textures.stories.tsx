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
      <TextureBox className="scanline" label=".scanline" />
      <TextureBox className="scanline-fast" label=".scanline-fast" />
    </div>
  ),
};

export const Halftone: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="halftone-sm" label=".halftone-sm" />
      <TextureBox className="halftone-md" label=".halftone-md" />
      <TextureBox className="halftone-lg" label=".halftone-lg" />
      <TextureBox className="halftone-accent" label=".halftone-accent" />
    </div>
  ),
};

export const DotMatrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="dot-matrix" label=".dot-matrix" />
      <TextureBox className="dot-matrix-dense" label=".dot-matrix-dense" />
      <TextureBox className="dot-matrix-sparse" label=".dot-matrix-sparse" />
    </div>
  ),
};

export const Stripes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="diagonal-stripes" label=".diagonal-stripes" />
      <TextureBox className="diagonal-stripes-dense" label=".diagonal-stripes-dense" />
      <TextureBox className="stripes-h" label=".stripes-h" />
      <TextureBox className="stripes-v" label=".stripes-v" />
    </div>
  ),
};

export const Noise: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="noise" label=".noise" />
      <TextureBox className="noise-heavy" label=".noise-heavy" />
    </div>
  ),
};

export const Vignette: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="vignette-onebit" label=".vignette-onebit" />
      <TextureBox className="vignette-onebit-sharp" label=".vignette-onebit-sharp" />
    </div>
  ),
};

export const Isometric: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox className="isometric-grid" label=".isometric-grid" />
      <TextureBox className="isometric-grid-dense" label=".isometric-grid-dense" />
      <TextureBox className="isometric-cubes" label=".isometric-cubes" />
      <TextureBox className="isometric-terrain" label=".isometric-terrain" />
      <TextureBox className="isometric-pipes" label=".isometric-pipes" />
      <TextureBox className="isometric-hex" label=".isometric-hex" />
      <TextureBox className="isometric-city" label=".isometric-city" />
      <TextureBox className="isometric-wave" label=".isometric-wave" />
    </div>
  ),
};

export const IsometricAnimated: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <TextureBox
        className="isometric-grid isometric-grid-animated"
        label=".isometric-grid-animated"
      />
      <TextureBox
        className="isometric-cubes isometric-cubes-animated"
        label=".isometric-cubes-animated"
      />
      <TextureBox
        className="isometric-terrain isometric-terrain-animated"
        label=".isometric-terrain-animated"
      />
      <TextureBox
        className="isometric-pipes isometric-pipes-animated"
        label=".isometric-pipes-animated"
      />
      <TextureBox
        className="isometric-city isometric-city-animated"
        label=".isometric-city-animated"
      />
    </div>
  ),
};
