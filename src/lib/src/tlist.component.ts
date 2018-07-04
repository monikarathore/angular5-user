import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'tlist',
    template: `
    <ul>
    <ng-template ngFor [ngForOf]="items" [ngForTemplate]="template">
    </ng-template>
</ul>
    `
})
export class TListComponentDemo {
    items: any[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ];
}

