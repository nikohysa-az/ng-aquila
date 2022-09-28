import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

/**
 * @title Selectable cards expert example
 */
@Component({
    selector: 'selectable-card-expert-example',
    templateUrl: './selectable-card-expert-example.html',
    styleUrls: ['./selectable-card-expert-example.css'],
})
export class SelectableCardExpertExampleComponent {
    readonly formGroup = this.fb.group({
        card: [false, Validators.requiredTrue],
    });

    constructor(private readonly fb: UntypedFormBuilder) {
        this.formGroup.markAllAsTouched();
    }
}
