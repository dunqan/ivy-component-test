import {ɵmarkDirty, Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'mta-root',
    encapsulation: ViewEncapsulation.None,
    template: '<h1>{{title}}{{clock}}</h1><mta-drugi></mta-drugi>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTestComponent {
    title = 'my simple component';
    clock = 0;

    constructor() {
        setInterval(() => {
            this.clock++;
            ɵmarkDirty(this);
            console.log(this.clock);
        }, 1000);
    }
}
