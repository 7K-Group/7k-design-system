import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectProvider, useProject, ProjectIcon } from '../src/react';

describe('ProjectProvider', () => {
  it('provides default project and exposes setter', () => {
    let captured: ReturnType<typeof useProject> | undefined;

    function Consumer() {
      captured = useProject();
      return null;
    }

    render(
      <ProjectProvider>
        <Consumer />
      </ProjectProvider>
    );

    expect(captured?.project).toBe('7kgroup');
    expect(typeof captured?.setProject).toBe('function');
  });

  it('uses defaultProject prop', () => {
    let captured: ReturnType<typeof useProject> | undefined;
    let renders = 0;

    function Consumer() {
      renders += 1;
      captured = useProject();
      return null;
    }

    render(
      <ProjectProvider defaultProject="7kminato">
        <Consumer />
      </ProjectProvider>
    );

    expect(renders).toBeGreaterThanOrEqual(1);
    expect(captured?.project).toBe('7kminato');
  });
});

describe('ProjectIcon', () => {
  it('renders the base icon for 7KGroup with no accent blob', () => {
    const { container } = render(
      <ProjectProvider defaultProject="7kgroup">
        <ProjectIcon />
      </ProjectProvider>
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('data-project', '7kgroup');
    const fills = Array.from(container.querySelectorAll('path')).map((p) => p.getAttribute('fill'));
    expect(fills).not.toContain('var(--accent-7kminato)');
    expect(fills).not.toContain('var(--accent-inari)');
  });

  it('recolors blob-3 with cyan for 7KMinato', () => {
    const { container } = render(
      <ProjectProvider defaultProject="7kminato">
        <ProjectIcon />
      </ProjectProvider>
    );
    const accent = Array.from(container.querySelectorAll('path')).find(
      (p) => p.getAttribute('fill') === 'var(--accent-7kminato)'
    );
    expect(accent).toBeDefined();
  });

  it('recolors blob-4 with inari orange for Inari', () => {
    const { container } = render(
      <ProjectProvider defaultProject="inari">
        <ProjectIcon />
      </ProjectProvider>
    );
    const accent = Array.from(container.querySelectorAll('path')).find(
      (p) => p.getAttribute('fill') === 'var(--accent-inari)'
    );
    expect(accent).toBeDefined();
    expect(accent?.getAttribute('transform')).toContain('translate(111,17)');
  });
});
