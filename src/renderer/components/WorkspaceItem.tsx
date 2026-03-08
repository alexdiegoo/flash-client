import { Folder } from 'lucide-react';
import { Workspace } from '../types/workspace';

interface WorkspaceItemProps {
  workspace: Workspace;
  onOpen: (id: string) => void;
}

export function WorkspaceItem({ workspace, onOpen }: WorkspaceItemProps) {
  return (
    <div 
      className="p-4 border rounded shadow-sm cursor-pointer hover:bg-gray-100 flex justify-between items-center transition-colors"
      onClick={() => onOpen(workspace.id)}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Folder className="text-blue-500 shrink-0" size={20} />
        <span className="text-lg font-medium truncate" title={workspace.name}>
          {workspace.name}
        </span>
      </div>
      <span className="text-sm text-gray-500 shrink-0 ml-4">
        {new Date(workspace.lastAccessed).toLocaleDateString()}
      </span>
    </div>
  );
}
