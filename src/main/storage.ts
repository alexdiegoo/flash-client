import fs from 'fs/promises';
import path from 'path';
import { app } from 'electron';
import crypto from 'crypto';

const STORAGE_FILE = path.join(app.getPath('userData'), 'workspaces.json');

export interface Workspace {
  id: string;
  name: string;
  lastAccessed: number;
}

export type WorkspaceList = Workspace[];

async function ensureStorage() {
  try {
    await fs.access(STORAGE_FILE);
  } catch {
    await fs.writeFile(STORAGE_FILE, JSON.stringify([]), 'utf-8');
  }
}

export async function getWorkspaces(): Promise<WorkspaceList> {
  await ensureStorage();
  const data = await fs.readFile(STORAGE_FILE, 'utf-8');
  return JSON.parse(data);
}

export async function saveWorkspaces(workspaces: WorkspaceList): Promise<void> {
  await fs.writeFile(STORAGE_FILE, JSON.stringify(workspaces, null, 2), 'utf-8');
}

export async function createWorkspace(name: string): Promise<Workspace> {
  const workspaces = await getWorkspaces();
  const newWorkspace: Workspace = {
    id: crypto.randomUUID(),
    name,
    lastAccessed: Date.now(),
  };
  workspaces.push(newWorkspace);
  await saveWorkspaces(workspaces);
  return newWorkspace;
}
