import { Component, Type, ViewChild, Directive } from '@angular/core';
import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';

import { NxLabelComponent, LabelDefaultOptions, LABEL_DEFAULT_OPTIONS, LABEL_SIZE_TYPE } from './label.component';
import { NxLabelModule } from './label.module';

// For better readablity here, We can safely ignore some conventions in our specs
// tslint:disable:component-class-suffix

const customDefaultOptions: LabelDefaultOptions = { size: 'small' };

@Directive()
abstract class LabelTest {
  @ViewChild(NxLabelComponent) labelInstance!: NxLabelComponent;
  size!: LABEL_SIZE_TYPE;
}

describe('NxLabelComponent', () => {
  let fixture: ComponentFixture<LabelTest>;
  let testInstance: LabelTest;
  let labelInstance: NxLabelComponent;
  let labelElement: HTMLElement;

  function createTestComponent(component: Type<LabelTest>) {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    testInstance = fixture.componentInstance;
    labelInstance = testInstance.labelInstance;
    labelElement = fixture.nativeElement.querySelector('nx-label');
  }

  describe('basic', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ BasicLabel ],
        imports: [ NxLabelModule ]
      }).compileComponents();
    }));

    it('creates the nx-label', waitForAsync(() => {
      createTestComponent(BasicLabel);
      expect(labelInstance).toBeTruthy();
      expect(labelInstance.size).toBe('large');
    }));
  });

  describe('injection token', () => {
    beforeEach(waitForAsync(() => {
      customDefaultOptions.size = 'small';
      TestBed.configureTestingModule({
        declarations: [ BasicLabel, ConfigurableLabel ],
        imports: [ NxLabelModule ],
        providers: [
          { provide: LABEL_DEFAULT_OPTIONS, useValue: customDefaultOptions }
        ]
      }).compileComponents();
    }));

    it('creates a label with the correct size', () => {
      createTestComponent(BasicLabel);
      expect(labelInstance.size).toBe('small');
      expect(labelElement.classList).toContain('nx-label--small');
      expect(labelElement.classList).not.toContain('nx-label--large');
    });

    it('changes the appearance on changes',
      inject([LABEL_DEFAULT_OPTIONS], (defaultOptions: LabelDefaultOptions) => {
        createTestComponent(BasicLabel);
        defaultOptions.size = 'large';
        fixture.detectChanges();
        expect(labelInstance.size).toBe('large');
        expect(labelElement.classList).not.toContain('nx-label--small');
        expect(labelElement.classList).toContain('nx-label--large');
      })
    );

    it('creates a label with the correct size if the size is explicilty set', () => {
      createTestComponent(ConfigurableLabel);
      testInstance.size = 'large';
      fixture.detectChanges();
      expect(labelInstance.size).toBe('large');
      expect(labelElement.classList).not.toContain('nx-label--small');
      expect(labelElement.classList).toContain('nx-label--large');
    });
  });
});

@Component({
  template: `
    <nx-label>I am a label</nx-label>
  `
})
class BasicLabel extends LabelTest {
}

@Component({
  template: `<nx-label [size]="size">I am a label</nx-label>`
})
class ConfigurableLabel extends LabelTest { }
