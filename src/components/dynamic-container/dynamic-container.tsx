import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'dynamic-container',
    styleUrl: 'dynamic-container.css',
    shadow: true
})
export class DynamicContainer {
    @Prop() props: any;
    @Prop() component: string;

    render() {
        return h(this.component, { ...this.props });
    }
}
