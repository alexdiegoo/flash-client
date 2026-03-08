import { useEffect, useState } from 'react';
import { WorkspaceList } from '../components/WorkspaceList';
import { CreateWorkspaceButton } from '../components/CreateWorkspaceButton';
import { Workspace } from '../types/workspace';

export function Home() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkspaces = async () => {
    try {
      const data = await window.electronAPI.getWorkspaces();
      setWorkspaces(data);
    } catch (error) {
      console.error('Failed to fetch workspaces:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const handleOpen = async (id: string) => {
    await window.electronAPI.openWorkspace(id);
  };

  const handleCreate = async () => {
    const name = window.prompt('Enter workspace name:');
    if (name && name.trim()) {
      try {
        await window.electronAPI.createWorkspace(name.trim());
        await fetchWorkspaces();
      } catch (error) {
        console.error('Failed to create workspace:', error);
        window.alert('Failed to create workspace');
      }
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Workspaces</h1>
        <CreateWorkspaceButton onCreate={handleCreate} />
      </div>
      <WorkspaceList workspaces={workspaces} onOpen={handleOpen} />
    </div>
  );
}
