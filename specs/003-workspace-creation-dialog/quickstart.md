# Quickstart: Workspace Creation Dialog

## Verification Scenarios

### Scenario 1: Successful Creation
1. Start the application.
2. Click the "Create New Workspace" button.
3. Verify the Shadcn Dialog appears.
4. Enter "Project Alpha" in the name field.
5. Click "Create".
6. Verify the dialog closes.
7. Verify "Project Alpha" appears at the top of the workspace list.

### Scenario 2: Validation Error
1. Open the creation dialog.
2. Leave the name field empty.
3. Click "Create".
4. Verify an error message "Name is required" is displayed.
5. Verify the dialog remains open.

### Scenario 3: Cancel Action
1. Open the creation dialog.
2. Enter any name.
3. Click "Cancel".
4. Verify the dialog closes.
5. Verify no new workspace was added to the list.
