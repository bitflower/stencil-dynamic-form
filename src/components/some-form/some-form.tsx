import { Component, Prop } from '@stencil/core';

export interface FormElement {
    component: string;
    props: any;
};

const myForm: FormElement[] = [
    {
        component: 'my-component',
        props: {
            first: 'Matthias',
            last: 'Max'
        }
    },
    {
        component: 'input',
        props: {
            value: 'blub'
        }
    },
    {
        component: 'input',
        props: {
            type: 'number',
            value: 5,
            step: 1
        }
    }
];
@Component({
    tag: 'some-form',
    styleUrl: 'some-form.css',
    shadow: true
})
export class SomeForm {

    @Prop() elements: FormElement[] = myForm;

    render() {
        return this.elements.map((fe: FormElement) => {
            // OPTION 1: with container component
            return <dynamic-container component={fe.component} props={...fe.props}></dynamic-container>

            // OPTION 2: without container component
            //return h(fe.component, { ...fe.props });
        });
    }
}
