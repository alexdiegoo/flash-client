import { FolderPlus } from 'lucide-react';
import { Workspace } from '../types/workspace';
import { WorkspaceItem } from './WorkspaceItem';

interface WorkspaceListProps {
  workspaces: Workspace[];
  onOpen: (id: string) => void;
}

export function WorkspaceList({ workspaces, onOpen }: WorkspaceListProps) {
  if (workspaces.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border-2 border-dashed rounded-lg text-center">
        <FolderPlus className="text-gray-300 mb-4" size={48} />
        <p className="text-gray-600 text-lg font-medium">No workspaces found</p>
        <p className="text-gray-400 text-sm mt-1">Create a new workspace to get started with your project</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] p-2 pr-4 custom-scrollbar">
      {workspaces.map((workspace) => (
        <WorkspaceItem 
          key={workspace.id} 
          workspace={workspace} 
          onOpen={onOpen} 
        />
      ))}
    </div>
  );
}
