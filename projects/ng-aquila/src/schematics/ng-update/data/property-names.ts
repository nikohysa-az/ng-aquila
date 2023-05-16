import { PropertyNameUpgradeData, TargetVersion, VersionChanges } from '@angular/cdk/schematics';

export const propertyNames: VersionChanges<PropertyNameUpgradeData> = {
    [TargetVersion.V16]: [
        { pr: '', changes: [{ replace: 'ignoreItemTrunctation', replaceWith: 'ignoreItemTruncation', limitedTo: { classes: ['NxDropdownComponent'] } }] },
        { pr: '', changes: [{ replace: 'nxRowJustify', replaceWith: 'rowJustify', limitedTo: { classes: ['NxRowComponent'] } }] },
        { pr: '', changes: [{ replace: 'nxRowAlignContent', replaceWith: 'rowAlignContent', limitedTo: { classes: ['NxRowComponent'] } }] },
        { pr: '', changes: [{ replace: 'nxRowAlignItems', replaceWith: 'rowAlignItems', limitedTo: { classes: ['NxRowComponent'] } }] },
        { pr: '', changes: [{ replace: 'nxRowWrap', replaceWith: 'rowWrap', limitedTo: { classes: ['NxRowComponent'] } }] },
    ],
};
