(() => {

    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,
        ) {}

    }

    const newPerson = new Person('Arian', 'M', new Date('2000-07-06'));
    console.log({newPerson});

})();
