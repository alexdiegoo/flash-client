import { Workspace, WorkspaceList } from './workspace';

export interface IElectronAPI {
  getWorkspaces: () => Promise<WorkspaceList>;
  createWorkspace: (name: string) => Promise<Workspace>;
  openWorkspace: (id: string) => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
