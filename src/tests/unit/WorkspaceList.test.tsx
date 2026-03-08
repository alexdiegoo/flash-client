import { render, screen } from '@testing-library/react';
import { WorkspaceList } from '../../renderer/components/WorkspaceList';
import { Workspace } from '../../renderer/types/workspace';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('WorkspaceList Component', () => {
  const mockWorkspaces: Workspace[] = [
    { id: '1', name: 'Project A', lastAccessed: Date.now() },
    { id: '2', name: 'Project B', lastAccessed: Date.now() },
  ];

  it('renders a list of workspaces', () => {
    render(<WorkspaceList workspaces={mockWorkspaces} onOpen={() => {}} />);
    expect(screen.getByText('Project A')).toBeInTheDocument();
    expect(screen.getByText('Project B')).toBeInTheDocument();
  });

  it('renders empty state when no workspaces are provided', () => {
    render(<WorkspaceList workspaces={[]} onOpen={() => {}} />);
    expect(screen.getByText(/No workspaces found/i)).toBeInTheDocument();
  });
});
