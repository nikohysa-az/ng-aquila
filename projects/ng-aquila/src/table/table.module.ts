import { NxCopytextModule } from '@allianz/ng-aquila/copytext';
import { NxIconModule } from '@allianz/ng-aquila/icon';
import { NxSwipebarModule } from '@allianz/ng-aquila/swipebar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NxExpandableTableDirective } from './expandable/expandable-table.directive';
import { NxExpandableTableCellComponent } from './expandable/expandable-table-cell.component';
import { NxExpandableTableRowComponent } from './expandable/expandable-table-row.component';
import { NxToggleButtonComponent } from './expandable/toggle-button.component';
import { NxHeaderCellDirective } from './header-cell.directive';
import { NxSortDirective } from './sort-header/sort.directive';
import { NxSortHeaderComponent } from './sort-header/sort-header.component';
import { NxSortHeaderIntl } from './sort-header/sort-header-intl';
import { NxTableComponent } from './table.component';
import { NxTableCellComponent } from './table-cell.component';
import { NxTableRowComponent } from './table-row.component';

const EXPORTED_DECLARED_ELEMENTS = [
    NxHeaderCellDirective,
    NxTableComponent,
    NxTableCellComponent,
    NxTableComponent,
    NxTableRowComponent,
    NxToggleButtonComponent,
    NxExpandableTableDirective,
    NxExpandableTableRowComponent,
    NxExpandableTableCellComponent,
    NxSortHeaderComponent,
    NxSortDirective,
];

@NgModule({
    declarations: EXPORTED_DECLARED_ELEMENTS,
    exports: [...EXPORTED_DECLARED_ELEMENTS, NxSwipebarModule],
    imports: [CommonModule, NxIconModule, NxCopytextModule, NxSwipebarModule],
    providers: [NxSortHeaderIntl],
})
export class NxTableModule {}
