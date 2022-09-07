(() => {

    // SI aplicamos el principio de responsabilidad única
    // Priorizar la composicion frente a la herencia

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
        email: string,
        role: string,
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email, role}: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true
        }
    }

    interface SettingsProps {
        lastOpenFolder: string,
        workingDirectory: string,
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({workingDirectory, lastOpenFolder}: SettingsProps) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
                        name,
                        gender,
                        birthDate,
                        role,
                        email,
                        workingDirectory,
                        lastOpenFolder
                    }: UserSettingsProps) {
            this.person = new Person({name, gender, birthDate})
            this.user = new User({email, role})
            this.settings = new Settings({workingDirectory, lastOpenFolder})
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

    console.log(newUserSettings.user.checkCredentials())

})();
