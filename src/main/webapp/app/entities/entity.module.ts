import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DocumentCarCarModule } from './car/car.module';
import { DocumentCarDocumentModule } from './document/document.module';
import { DocumentCarContentModule } from './content/content.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        DocumentCarCarModule,
        DocumentCarDocumentModule,
        DocumentCarContentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentCarEntityModule {}
