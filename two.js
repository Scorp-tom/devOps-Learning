function myFun(myArray){
    let maxIncome = 0;
    myArray.forEach(customer => {
        let currentCustomerWealth = 0;
        customer.forEach(bank => {
            currentCustomerWealth += bank[i];

        });
        maxIncome = Math.max(maxIncome, currentCustomerWealth);
    });
}

