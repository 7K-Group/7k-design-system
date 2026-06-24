import React, { createContext, useEffect, useState, useCallback } from 'react';
import { type Project, isProject, PROJECT_STORAGE_KEY } from './projects';

export type { Project } from './projects';

export interface ProjectContextValue {
  project: Project;
  setProject: (project: Project) => void;
}

export const ProjectContext = createContext<ProjectContextValue>({
  project: '7k',
  setProject: () => {},
});

export interface ProjectProviderProps {
  children: React.ReactNode;
  defaultProject?: Project;
  storageKey?: string;
}

export function ProjectProvider({
  children,
  defaultProject = '7k',
  storageKey = PROJECT_STORAGE_KEY,
}: ProjectProviderProps) {
  const [project, setProjectState] = useState<Project>(() => {
    if (typeof window === 'undefined') return defaultProject;
    const stored = localStorage.getItem(storageKey);
    return isProject(stored) ? stored : defaultProject;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-project', project);
    localStorage.setItem(storageKey, project);
  }, [project, storageKey]);

  const setProject = useCallback((newProject: Project) => {
    setProjectState(newProject);
  }, []);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>{children}</ProjectContext.Provider>
  );
}
