interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly() {
        console.log('I can fly');
        return 10
    }

    public eat() {
        console.log('I can eat');
    }

}

class Hummingbird implements Bird, FlyingBird {

    public fly() {
        console.log('I can fly');
        return 100;
    }

    public eat() {
        console.log('I can eat');
    }

}

class Ostrich implements Bird, RunningBird {

    public eat() {
        console.log('I can eat');
    }

    public run() {
        console.log('I can run');
    }

}

class Penguin implements Bird, SwimmingBird {

    public eat() {
        console.log('I can eat');
    }

    public swim() {
        console.log('I can swim');
    }

}