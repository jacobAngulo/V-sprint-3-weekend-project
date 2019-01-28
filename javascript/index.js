class User {
    constructor(input) {
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.age = input.age;
        this.birthday = input.birthday;
    }
}

class UserPost extends User {
    constructor(input) {
        super(input);
    }

    post(input) {
        return `${input}`;
    }
}
