import { Component, Type, ViewChild, DebugElement, ViewChildren, QueryList, Directive } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';

import { NxSelectableCardComponent } from './selectable-card.component';
import { NxCardModule } from './card.module';
import { NxSelectableCardChangeEvent } from './selectable-card-change-event';
import { By } from '@angular/platform-browser';
import { NxErrorComponent, NxErrorModule } from '@aposin/ng-aquila/base';

// We can safely ignore some conventions in our specs
// tslint:disable:component-class-suffix

@Directive()
abstract class SelectableCardTest {
  @ViewChild(NxSelectableCardComponent) selectableCardInstance!: NxSelectableCardComponent;
  @ViewChildren(NxErrorComponent) errors!: QueryList<NxErrorComponent>;

  checked: boolean = false;
  disabled: boolean = false;
  testForm!: FormGroup;
  customError!: boolean;
}

describe('NxSelectableCardComponent', () => {
  let fixture: ComponentFixture<SelectableCardTest>;
  let testInstance: SelectableCardTest;
  let selectableCardInstance: NxSelectableCardComponent;
  let inputElement: HTMLInputElement;
  let selectableCardDebugElement: DebugElement;
  let selectableCardNativeElement: HTMLElement;
  let labelElement: HTMLLabelElement;
  let errors: QueryList<NxErrorComponent>;

  function createTestComponent(component: Type<SelectableCardTest>) {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    testInstance = fixture.componentInstance;
    selectableCardInstance = testInstance.selectableCardInstance;
    inputElement = (fixture.nativeElement.querySelector('input') as HTMLInputElement);
    selectableCardDebugElement = fixture.debugElement.query(By.directive(NxSelectableCardComponent));
    selectableCardNativeElement = selectableCardDebugElement.nativeElement;
    labelElement = (fixture.nativeElement.querySelector('label') as HTMLLabelElement);
    errors = testInstance.errors;
  }

  function assertChecked(checked: boolean) {
    fixture.detectChanges();
    expect(testInstance.checked).toBe(checked);
    expect(selectableCardInstance.checked).toBe(checked);
    expect(inputElement.checked).toBe(checked);
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicSelectableCard,
        ReactiveSelectableCard,
        DynamicErrorSelectableCard,
        ExpertSelectableCard
      ],
      imports: [
        NxCardModule,
        FormsModule,
        ReactiveFormsModule,
        NxErrorModule
      ]
    }).compileComponents();
  }));

  it('Should create the test component without errors', () => {
      createTestComponent(BasicSelectableCard);
      expect(testInstance).toBeTruthy();
  });

  it('Should label refer to the hidden input', () => {
    createTestComponent(BasicSelectableCard);
    expect(inputElement).not.toBeNull();
    expect(labelElement).not.toBeNull();
    expect(labelElement.htmlFor).toBe(inputElement.id);
  });

  it('Should be disabled', () => {
    createTestComponent(BasicSelectableCard);
    testInstance.disabled = true;
    fixture.detectChanges();
    expect(inputElement.disabled).toEqual(true);
  });

  it('toggles the checked state based on [checked] input', () => {
    createTestComponent(BasicSelectableCard);
    assertChecked(false);
    testInstance.checked = true;
    assertChecked(true);
  });

  it('emits proper change event objects on card checked change', fakeAsync(() => {
    createTestComponent(BasicSelectableCard);

    spyOn(selectableCardInstance.checkedChange, 'emit');
    const spy = jasmine.createSpy('Card selection spy');
    const subscription = fixture.componentInstance.selectableCardInstance.selectionChange.subscribe(spy);
    labelElement.click();
    fixture.detectChanges();
    tick();
    expect(spy).toHaveBeenCalledWith(jasmine.any(NxSelectableCardChangeEvent));
    expect(selectableCardInstance.checkedChange.emit).toHaveBeenCalledWith(true);

    subscription.unsubscribe();
  }));

  describe('appearance', () => {
    it('has default appearance', () => {
      createTestComponent(BasicSelectableCard);
      expect(selectableCardInstance.appearance).toBe('default');
      expect(labelElement).not.toHaveClass('is-expert');
    });

    it('has expert appearance', () => {
      createTestComponent(ExpertSelectableCard);
      expect(selectableCardInstance.appearance).toBe('expert');
      expect(selectableCardNativeElement).toHaveClass('is-expert');
    });
  });

  describe('reactive support', () => {
    // Ensures that setDisabledState is implemented correctly.
    it('accepts disabled from the form model', fakeAsync(() => {
      createTestComponent(ReactiveSelectableCard);
      testInstance.testForm.controls.card.disable();

      fixture.detectChanges();
      tick();

      expect(inputElement.disabled).toEqual(true);

      testInstance.testForm.controls.card.enable();

      fixture.detectChanges();
      tick();

      expect(inputElement.disabled).toEqual(false);
    }));

    it('toggles error states accordingly when in a reactive form', fakeAsync(() => {
      createTestComponent(ReactiveSelectableCard);
      expect(selectableCardNativeElement.classList.contains('has-error')).toBeFalsy();
      selectableCardInstance.ngControl.control!.markAsTouched();
      fixture.detectChanges();
      expect(selectableCardNativeElement.classList.contains('has-error')).toBeTruthy();
    }));
  });

  describe('a11y', () => {
    it('default card has no accessibility violations', async () => {
      createTestComponent(BasicSelectableCard);
      await expectAsync(fixture.nativeElement).toBeAccessible();
    });

    it('expert card has no accessibility violations', async () => {
      createTestComponent(ExpertSelectableCard);
      await expectAsync(fixture.nativeElement).toBeAccessible();
    });

    it('should use nx-error IDs for aria-describedby', fakeAsync(() => {
      createTestComponent(DynamicErrorSelectableCard);
      selectableCardInstance.ngControl.control!.markAsTouched();
      fixture.detectChanges();

      expect(errors.length).toBe(inputElement.attributes.getNamedItem('aria-describedby')!.value.split(' ').length);

      expect(inputElement.attributes.getNamedItem('aria-describedby')!.value).toBe(errors.toArray()[0].id);
      testInstance.customError = true;
      fixture.detectChanges();

      const errorIds = inputElement.attributes.getNamedItem('aria-describedby')!.value.split(' ');

      expect(errorIds.length).toBe(errors.length);

      errors.toArray().forEach((errorId) => {
        expect(errorIds).toContain(errorId.id);
      });
    }));
  });
});

@Component({
  template: `
    <nx-selectable-card [disabled]="disabled" [checked]="checked">
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
    </nx-selectable-card>
  `
})
class BasicSelectableCard extends SelectableCardTest {}

@Component({
  template: `
    <nx-selectable-card appearance="expert">
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
    </nx-selectable-card>
  `
})
class ExpertSelectableCard extends SelectableCardTest {}

@Component({
  template: `
      <form [formGroup]="testForm">
          <nx-selectable-card formControlName="card">
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
          </nx-selectable-card>
      </form>
  `
})
class ReactiveSelectableCard extends SelectableCardTest {
  constructor() {
    super();

    const fb = new FormBuilder();

    this.testForm = fb.group({
      card: [false, Validators.requiredTrue]}
    );
  }
}

@Component({
  template: `
    <form [formGroup]="testForm">
        <nx-selectable-card formControlName="card">
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            <nx-error appearance="text" *ngIf="testForm.controls.card.hasError('required')">
                This card must be selected.
            </nx-error>
            <nx-error appearance="text" *ngIf="customError">
                Another Error
            </nx-error>
        </nx-selectable-card>
  </form>
  `
})
class DynamicErrorSelectableCard extends SelectableCardTest {
  constructor() {
    super();

    const fb = new FormBuilder();

    this.testForm = fb.group({
      card: [false, Validators.requiredTrue]
    });
  }
}
