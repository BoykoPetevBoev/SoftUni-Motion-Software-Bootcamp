class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }
    findCustomer(id) {
        return this.allCustomers.find(person => person.personalId === id);
    }
    newCustomer(customer) {
        console.log(this.findCustomer(customer.personalId));
        if (this.findCustomer(customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(personalId, amount) {
        const customer =  this.findCustomer(personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        customer.totalMoney += amount;
        return customer.totalMoney + '$';
    }
    withdrawMoney (personalId, amount) {
        const customer =  this.findCustomer(personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        if(customer.totalMoney < amount){
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
        customer.totalMoney -= amount;
        return customer.totalMoney + '$';

    }
    customerInfo (personalId){
        const customer =  this.findCustomer(personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        return `Bank name: ${this.bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$`;
    }
}


const bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(4151596, 555));
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

