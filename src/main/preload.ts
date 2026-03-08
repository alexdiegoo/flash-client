import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getWorkspaces: () => ipcRenderer.invoke('getWorkspaces'),
  createWorkspace: (name: string) => ipcRenderer.invoke('createWorkspace', name),
  openWorkspace: (id: string) => ipcRenderer.invoke('openWorkspace', id),
});
