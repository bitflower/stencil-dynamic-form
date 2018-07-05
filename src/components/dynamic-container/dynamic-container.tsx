import { Component, Element, Prop } from '@stencil/core';

@Component({
    tag: 'dynamic-container',
    styleUrl: 'dynamic-container.css',
    shadow: true
})
export class DynamicContainer {

    @Element() el: HTMLStencilElement;

    @Prop() component: string;
    @Prop() props: any;

    render() {

        let c: HTMLElement = document.createElement(this.component.toUpperCase());        // Create a <button> element

        if (this.props) {
            Object.keys(this.props).forEach((key: string) => {
                console.log(`${key}: ${this.props[key]}`);
                // c.attributes[key] = this.props[key];
                // c.attributes.setNamedItem(key) = this.props[key];
                c.setAttribute(key, this.props[key]);
            });
        }

        // for (let p in this.props) {
        // c.attributes = this.props
        // }

        this.el.shadowRoot.appendChild(c);

        // WOrks
        // document.body.appendChild(c);  



        return (
            <div>
            </div>
        );
    }
}
