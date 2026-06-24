import { useContext } from 'react';
import { ProjectContext, type ProjectContextValue } from './ProjectProvider';

export function useProject(): ProjectContextValue {
  return useContext(ProjectContext);
}
