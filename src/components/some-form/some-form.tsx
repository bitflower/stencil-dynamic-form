import { Component, Element, Prop } from '@stencil/core';

@Component({
    tag: 'some-form',
    styleUrl: 'some-form.css',
    shadow: true
})
export class SomeForm {

    @Element() el: HTMLStencilElement;

    @Prop() component: string;
    @Prop() props: any;

    render() {
        return (
            <dynamic-container component='my-component' props={{ first: 'Matthias', last: 'Max' }}></dynamic-container>
        );
    }
}
