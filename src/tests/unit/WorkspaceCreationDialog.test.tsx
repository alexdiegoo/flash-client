import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { WorkspaceCreationDialog } from '../../renderer/components/WorkspaceCreationDialog';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

// Mock electronAPI
const mockCreateWorkspace = vi.fn();
(window as any).electronAPI = {
  createWorkspace: mockCreateWorkspace,
};

describe('WorkspaceCreationDialog Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly and validates empty input', async () => {
    const onSuccess = vi.fn();
    render(
      <WorkspaceCreationDialog onSuccess={onSuccess}>
        <button>Open</button>
      </WorkspaceCreationDialog>
    );

    // Open dialog
    fireEvent.click(screen.getByText('Open'));

    // Try to create with empty name
    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);

    // Check validation error
    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(mockCreateWorkspace).not.toHaveBeenCalled();
  });

  it('calls createWorkspace and onSuccess when valid name is provided', async () => {
    const onSuccess = vi.fn();
    mockCreateWorkspace.mockResolvedValue({ id: '1', name: 'New Project' });

    render(
      <WorkspaceCreationDialog onSuccess={onSuccess}>
        <button>Open</button>
      </WorkspaceCreationDialog>
    );

    // Open dialog
    fireEvent.click(screen.getByText('Open'));

    // Enter name
    const input = screen.getByLabelText('Workspace Name');
    fireEvent.change(input, { target: { value: 'New Project' } });

    // Click create
    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);

    await waitFor(() => {
      expect(mockCreateWorkspace).toHaveBeenCalledWith('New Project');
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
