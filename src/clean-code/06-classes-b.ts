(() => {

    // NO aplicamos el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthDate: Date,
    }

    class Person {
        public birthDate: Date;
        public gender: Gender;
        public name: string;

        constructor({
                        name,
                        gender,
                        birthDate
                    }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }

    }


    interface UserProps {
        birthDate: Date,
        email: string,
        gender: Gender,
        name: string,
        role: string,
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({email, role, name, gender, birthDate}: UserProps) {
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date,
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
                        workingDirectory,
                        lastOpenFolder,
                        email,
                        role,
                        name,
                        gender,
                        birthDate,
                    }: UserSettingsProps) {
            super({email, role, name, gender, birthDate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const newUserSettings = new UserSettings({
        workingDirectory: 'C:\\',
        lastOpenFolder: 'C:\\',
        email: 'arian@gmail.com',
        role: 'admin',
        name: 'Arian',
        gender: 'M',
        birthDate: new Date('2000-06-07'),
    });

    console.log({newUserSettings});

})();
