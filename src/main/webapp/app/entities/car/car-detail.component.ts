import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICar } from 'app/shared/model/car.model';
import { DocumentService } from 'app/entities/document';
import * as FileSaver from 'file-saver';
import { IDocument } from 'app/shared/model/document.model';

@Component({
    selector: 'jhi-car-detail',
    templateUrl: './car-detail.component.html'
})
export class CarDetailComponent implements OnInit {
    car: ICar;

    constructor(private activatedRoute: ActivatedRoute, private documentService: DocumentService) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ car }) => {
            this.car = car;
        });
    }

    previousState() {
        window.history.back();
    }

    downloadDocument(document: IDocument) {
        this.documentService.download(document.id).subscribe(file => {
            FileSaver.saveAs(file, document.title);
        });
    }
}
