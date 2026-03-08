import { useEffect, useState } from 'react';
import { WorkspaceList } from '../components/WorkspaceList';
import { CreateWorkspaceButton } from '../components/CreateWorkspaceButton';
import { WorkspaceCreationDialog } from '../components/WorkspaceCreationDialog';
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

  const handleCreateSuccess = async () => {
    await fetchWorkspaces();
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Workspaces</h1>
        <WorkspaceCreationDialog onSuccess={handleCreateSuccess}>
          <CreateWorkspaceButton />
        </WorkspaceCreationDialog>
      </div>
      <WorkspaceList workspaces={workspaces} onOpen={handleOpen} />
    </div>
  );
}
