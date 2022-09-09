interface Bird {
    fly(): void;

    eat(): void;

    run(): void;

    swim(): void;
}

class Tucan implements Bird {

    public fly() {
        console.log('I can fly');
    }

    public eat() {
        console.log('I can eat');
    }

    public run() {
        console.log('I can run');
    }

    public swim() {
        throw new Error('I can not swim');
    }

}

class Hummingbird implements Bird {

    public fly() {
        console.log('I can fly');
    }

    public eat() {
        console.log('I can eat');
    }

    public run() {
        console.log('I can run');
    }

    public swim() {
        throw new Error('I can not swim');
    }

}

class Ostrich implements Bird {

    public fly() {
        throw new Error('I can not fly');
    }

    public eat() {
        console.log('I can eat');
    }

    public run() {
        console.log('I can run');
    }

    public swim() {
        throw new Error('I can not swim');
    }

}

class Penguin implements Bird {

    public fly() {
        throw new Error('I can not fly');
    }

    public eat() {
        console.log('I can eat');
    }

    public run() {
        console.log('I can run');
    }

    public swim() {
        console.log('I can swim');
    }

}