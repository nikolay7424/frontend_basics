class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Pererson', '11-13-1980');
mary.getsMarried('Williams');

// console.log(Person.addNumbers(1, 2));

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, memebership){
    super(firstName, lastName, dob);
    this.phone = phone;
    this.memebership = memebership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '11-13-1980', '1234567', 'pro');
console.log(Customer.getMembershipCost());
