export interface Workspace {
  id: string;
  name: string;
  lastAccessed: number; // timestamp
}

export type WorkspaceList = Workspace[];
