export type Project = '7kgroup' | '7kminato' | 'inari';

export const PROJECTS: readonly Project[] = ['7kgroup', '7kminato', 'inari'];

export const PROJECT_STORAGE_KEY = '7k-project';

export function isProject(value: unknown): value is Project {
  return typeof value === 'string' && PROJECTS.includes(value as Project);
}
