# Stencil dynamic form playground

Goal: building a form (not actually the `<form>` tag but the looks) dynamically from an array.

Took 10 minutes!

# Result:

Turn this:
```typescript
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
```

into this:

![https://raw.githubusercontent.com/bitflower/stencil-dynamic-form/master/preview.png](preview)