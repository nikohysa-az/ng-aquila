import {
    NxFileUploadConfig,
    NxFileUploader,
} from '@allianz/ng-aquila/file-uploader';
import {
    NxMessageToastConfig,
    NxMessageToastService,
} from '@allianz/ng-aquila/message';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const myCustomConfig: NxMessageToastConfig = {
    duration: 3000,
    context: 'success',
    announcementMessage: 'Yay, you see a success message toast',
};

/** @title File uploader reactive form example */
@Component({
    selector: 'file-uploader-reactive-example',
    templateUrl: './file-uploader-reactive-example.html',
    styleUrls: ['./file-uploader-reactive-example.css'],
})
export class FileUploaderReactiveExampleComponent implements OnInit, OnDestroy {
    readonly uploadConfig: NxFileUploadConfig = {
        requestUrl: 'file-upload',
        options: {
            params: new HttpParams(),
            reportProgress: true,
        },
    };

    readonly uploader = new NxFileUploader(this.uploadConfig, this.http);

    readonly testForm = new UntypedFormGroup({
        documents: new UntypedFormControl([], Validators.required),
    });

    private readonly _destroyed = new Subject<void>();

    constructor(
        private readonly messageToastService: NxMessageToastService,
        private readonly http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.uploader.response
            .pipe(takeUntil(this._destroyed))
            .subscribe(result => {
                if (result.success) {
                    this.messageToastService.open(
                        'All files were uploaded successfully!',
                        myCustomConfig,
                    );
                } else if (result.error) {
                    // error handling
                    console.log(result.error);
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
