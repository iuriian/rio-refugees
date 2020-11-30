import { Component } from '@angular/core';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.page.html',
    styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage {

    public readonly url = 'http://www.pf.gov.br/servicos-pf/imigracao/refugio/refugio-termo-solicitacao';

    constructor() { }

}
