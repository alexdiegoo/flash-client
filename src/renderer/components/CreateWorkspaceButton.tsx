import { Plus } from 'lucide-react';

interface CreateWorkspaceButtonProps {
  onCreate: () => void;
}

export function CreateWorkspaceButton({ onCreate }: CreateWorkspaceButtonProps) {
  return (
    <button
      onClick={onCreate}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm"
      aria-label="Create New Workspace"
    >
      <Plus size={20} />
      <span>Create New Workspace</span>
    </button>
  );
}
