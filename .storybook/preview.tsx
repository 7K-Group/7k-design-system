import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { ThemeProvider } from '../src/react/theme/ThemeProvider';
import { ProjectProvider } from '../src/react/theme/ProjectProvider';
import type { Theme } from '../src/react/types';
import type { Project } from '../src/react/theme/projects';
import { mswHandlers } from './msw-handlers';
import '../src/css/index.css';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    'data-theme': {
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
    'data-project': {
      toolbar: {
        title: 'Project',
        icon: 'paintbrush',
        items: [
          { value: '7kgroup', title: '7KGroup' },
          { value: '7kminato', title: '7KMinato' },
          { value: 'inari', title: 'Inari' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    'data-theme': 'dark',
    'data-project': '7kgroup',
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals['data-theme'] as Theme) || 'dark';
      const project = (context.globals['data-project'] as Project) || '7kgroup';
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-project', project);
      }, [theme, project]);
      window.localStorage.removeItem('sb-theme');
      window.localStorage.removeItem('sb-project');
      return (
        <ThemeProvider key={theme} defaultTheme={theme} storageKey="sb-theme">
          <ProjectProvider key={project} defaultProject={project} storageKey="sb-project">
            <Story />
          </ProjectProvider>
        </ThemeProvider>
      );
    },
  ],
  loaders: [mswLoader],
  parameters: {
    msw: { handlers: mswHandlers },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
