import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { createWindow } from './window';
import * as storage from './storage';

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('getWorkspaces', async () => {
    return await storage.getWorkspaces();
  });

  ipcMain.handle('createWorkspace', async (_event, name: string) => {
    return await storage.createWorkspace(name);
  });

  ipcMain.handle('openWorkspace', async (_event, id: string) => {
    console.log(`Opening workspace: ${id}`);
    // Future implementation: logic to change application state to workspace view
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
