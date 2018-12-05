import { NgModule } from '@angular/core';

import { DocumentCarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DocumentCarSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DocumentCarSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DocumentCarSharedCommonModule {}
