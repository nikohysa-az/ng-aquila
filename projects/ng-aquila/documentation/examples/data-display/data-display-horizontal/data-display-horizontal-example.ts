import {
    DATA_DISPLAY_DEFAULT_OPTIONS,
    DataDisplayDefaultOptions,
} from '@allianz/ng-aquila/data-display';
import { Component } from '@angular/core';

const options: DataDisplayDefaultOptions = {
    size: 'medium', // expert mode default size
};

/**
 * @title Horizontal data display example
 */
@Component({
    selector: 'data-display-horizontal-example',
    templateUrl: './data-display-horizontal-example.html',
    styleUrls: ['./data-display-horizontal-example.css'],
    providers: [
        {
            provide: DATA_DISPLAY_DEFAULT_OPTIONS,
            useValue: options,
        },
    ],
})
export class DataDisplayHorizontalExampleComponent {}
