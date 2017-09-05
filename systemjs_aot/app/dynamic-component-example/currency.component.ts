import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'currency-cell',
    template: `{{params.value | currency:'EUR'}}`
})
export class CurrencyComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params): boolean {
        if(params.value !== this.params.value) {
            this.params = params;
        }
        return true;
    }
}