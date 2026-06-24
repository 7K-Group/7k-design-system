export type Project = '7k' | 'square' | 'triangle' | 'circle' | 'grid' | 'line';

export const PROJECTS: readonly Project[] = ['7k', 'square', 'triangle', 'circle', 'grid', 'line'];

export const PROJECT_STORAGE_KEY = '7k-project';

export function isProject(value: unknown): value is Project {
  return typeof value === 'string' && PROJECTS.includes(value as Project);
}
