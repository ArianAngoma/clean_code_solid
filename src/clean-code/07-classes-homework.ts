(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {
        }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() {
        };

        getValue() {
        };

        isActive() {
        };

        removeValue() {
        };
    }

    interface InputElementProps {
        id: string,
        value: string,
        placeholder: string,
    }

    class InputElement {
        public element: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor({
                        id,
                        value,
                        placeholder
                    }: InputElementProps) {

            this.element = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();

        }
    }


    //? Idea para la nueva clase InputElement

    // const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');
    const nameField = new InputElement({value: 'Fernando', placeholder: 'Enter first name', id: 'txtName'});

    console.log({nameField});

})()