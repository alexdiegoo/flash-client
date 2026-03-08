import { render, screen, fireEvent } from '@testing-library/react';
import { CreateWorkspaceButton } from '../../renderer/components/CreateWorkspaceButton';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('CreateWorkspaceButton Component', () => {
  it('renders the create button', () => {
    render(<CreateWorkspaceButton onCreate={() => {}} />);
    expect(screen.getByRole('button', { name: /Create New Workspace/i })).toBeInTheDocument();
  });

  it('calls onCreate when clicked', () => {
    const mockOnCreate = vi.fn();
    render(<CreateWorkspaceButton onCreate={mockOnCreate} />);
    fireEvent.click(screen.getByRole('button', { name: /Create New Workspace/i }));
    expect(mockOnCreate).toHaveBeenCalled();
  });
});
