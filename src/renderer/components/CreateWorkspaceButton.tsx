import React from 'react';
import { Plus } from 'lucide-react';

interface CreateWorkspaceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onCreate?: () => void;
}

export const CreateWorkspaceButton = React.forwardRef<HTMLButtonElement, CreateWorkspaceButtonProps>(
  ({ onCreate, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onCreate}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm"
        aria-label="Create New Workspace"
        {...props}
      >
        <Plus size={20} />
        <span>Create New Workspace</span>
      </button>
    );
  }
);

CreateWorkspaceButton.displayName = 'CreateWorkspaceButton';
