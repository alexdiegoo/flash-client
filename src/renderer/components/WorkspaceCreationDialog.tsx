import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/renderer/components/ui/dialog';
import { Button } from '@/renderer/components/ui/button';
import { Input } from '@/renderer/components/ui/input';
import { Label } from '@/renderer/components/ui/label';

interface WorkspaceCreationDialogProps {
  children: React.ReactNode;
  onSuccess: () => void;
}

export function WorkspaceCreationDialog({ children, onSuccess }: WorkspaceCreationDialogProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Name is required');
      return;
    }

    if (trimmedName.length > 100) {
      setError('Name must be 100 characters or less');
      return;
    }

    setLoading(true);
    try {
      await window.electronAPI.createWorkspace(trimmedName);
      setName('');
      setOpen(false);
      onSuccess();
    } catch (err) {
      console.error('Failed to create workspace:', err);
      setError('Failed to create workspace. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) {
        setName('');
        setError(null);
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleCreate}>
          <DialogHeader>
            <DialogTitle>Create New Workspace</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="workspace-name">Workspace Name</Label>
              <Input
                id="workspace-name"
                placeholder="My Awesome Project"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className={error ? 'border-red-500' : ''}
              />
              {error && <p className="text-sm font-medium text-red-500">{error}</p>}
            </div>
          </div>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading} className="gap-2">
              {loading ? (
                'Creating...'
              ) : (
                <>
                  <Plus size={18} />
                  Create
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
