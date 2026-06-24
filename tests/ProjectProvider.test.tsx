import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectProvider, useProject } from '../src/react';

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

    expect(captured?.project).toBe('7k');
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
      <ProjectProvider defaultProject="circle">
        <Consumer />
      </ProjectProvider>
    );

    expect(renders).toBeGreaterThanOrEqual(1);
    expect(captured?.project).toBe('circle');
  });
});
