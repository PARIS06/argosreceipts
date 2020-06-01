const faker = require('faker');
// const _ = require('lodash');


// Add padding from the start of the current string/number
export const myPadStart = (el, targetLength, padString) => {
    return el.toString().padStart(targetLength, padString);
 };
 
 // Insert something after every n characters in the string
 export const chunker = (el, step, string) => {
    const regExp = new RegExp(`.{${step}}`, 'g');
    return el
       .toString()
       .match(regExp)
       .join(string);
 };



// export const defaultUserData = {
//     email: faker.internet.email(),
//     password: 'admin123',
//     firstName: 'John',
//     lastName: 'Tsiros',
//     dateOfBirth: faker.date.between('1960-01-01', '2000-12-31'),
//     phone: faker.phone.phoneNumberFormat(1),
//     picture: faker.internet.avatar(),
//     streetAddr: faker.address.streetAddress(),
//     postcode: faker.address.zipCode(),
//     city: faker.address.city()
//  };
 
//  const createUser = () => {
//     const user = new User({ ...defaultUserData });
 
//     return user.save();
//  };
 
//  const createControlledUser = () => {
//     const user = new User({
//        ...defaultUserData,
//        email: 'email@example.com'
//     });
 
//     return user.save();
//  };
 
//  // Accounts
//  const createAccount = user => {
//     const account = new Account({
//        type: faker.random.arrayElement(['credit', 'debit']),
//        owner: user._id,
//        isActive: faker.random.boolean(),
//        sortcode: faker.finance.mask(6, false, false),
//        number: faker.finance.mask(8, false, false),
//        currency: faker.finance.currencyCode(),
//        balance: faker.finance.amount(1, 10000, 2)
//     });
 
//     return account.save();
//  };


export const defaultUser = {
    firstName: 'Mo',
    lastName: 'Abdo',
    dateOfBirth: faker.date.between('1960-01-01', '2000-12-31'),
    phone: faker.phone.phoneNumberFormat(1),
    picture: faker.internet.avatar(),
    streetAddr: faker.address.streetAddress(),
    postcode: faker.address.zipCode(),
    city: faker.address.city()
 };
 
 // Accounts

 export const accounts =  [
   {
       id: 1,
       type: faker.random.arrayElement(['credit', 'debit']),
       owner: defaultUser.id,
       isActive: faker.random.boolean(),
       sortcode: faker.finance.mask(6, false, false),
       number: faker.finance.mask(8, false, false),
       currency: faker.finance.currencyCode(),
       balance: faker.finance.amount(1, 10000, 2)
    },
    {
      id: 2,
       type: faker.random.arrayElement(['credit', 'debit']),
       owner: defaultUser.id,
       isActive: faker.random.boolean(),
       sortcode: faker.finance.mask(6, false, false),
       number: faker.finance.mask(8, false, false),
       currency: faker.finance.currencyCode(),
       balance: faker.finance.amount(1, 10000, 2)
    },

]


 // Cards
    export const bankCards =  [
        {
            cardId: 1, 
            owner: defaultUser._id,
            firstName: 'John',
            lastName: 'Tsiros',
            isActive: faker.random.boolean(),
            number: faker.finance.mask(16, false, false),
            expiresMonth: faker.random.number({ min: 1, max: 12 }),
            expiresYear: faker.random.number({ min: 2020, max: 2030 }),
         },
         {
            cardId: 2, 
            owner: defaultUser._id,
            isActive: faker.random.boolean(),
            number: faker.finance.mask(16, false, false),
            expiresMonth: faker.random.number({ min: 1, max: 12 }),
            expiresYear: faker.random.number({ min: 2020, max: 2030 }),
         },

    ]

 
 // Receipts
 
    export const merchantReceipts = [
        {
            type: faker.random.arrayElement(['Amazon', 'Target', 'Popeyes']),
            payeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
            merchant_logo: `${faker.name.firstName()} ${faker.name.lastName()}`,
            merchant_id: faker.finance.mask(16, false, false),
            merchant_address: faker.random.arrayElement(['normal', 'turbo']),
            coupon_barcode: faker.finance.mask(16, false, false),
            register_terminal_id: faker.finance.mask(16, false, false),
            cashier_info: faker.finance.mask(16, false, false),
            item_name: faker.random.arrayElement(['normal', 'turbo']),
            item_category: faker.random.arrayElement(['normal', 'turbo']),
            offer:faker.finance.mask(16, false, false),
            item_number: faker.finance.mask(16, false, false),
            sku: faker.finance.mask(16, false, false),
            transaction_type: faker.random.arrayElement(['normal', 'turbo']),
            number_of_items: faker.finance.mask(16, false, false),
            date: faker.date.between('2020-01-01', '2020-12-31'),
            receipt_expiration_date: faker.date.between('2020-01-01', '2020-12-31'),
            receipt_barcode: faker.finance.mask(16, false, false),
            receipt_number: faker.finance.mask(16, false, false),
            tax_amount: faker.finance.amount(1, 2500, 2),
            tax_percentage: faker.finance.amount(1, 2500, 2),
            sub_total: faker.finance.amount(1, 2500, 2),
            total: faker.finance.amount(1, 2500, 2),
            card_type: faker.random.arrayElement(['normal', 'turbo']),
            last_four_digits: faker.finance.mask(16, false, false),
            chip_read: faker.random.boolean(),
            loyalty_rewards_member_id: faker.finance.mask(16, false, false),
            authorization_number: faker.finance.mask(16, false, false),
            aid_code: faker.finance.mask(16, false, false),
            vcd_number: faker.finance.mask(16, false, false),
            consumer: faker.finance.mask(16, false, false),
            status: faker.random.arrayElement(['planned', 'done']),
            reference: faker.lorem.words(3).substring(0, 20),
    },
    {
        type: faker.random.arrayElement(['Amazon', 'Target', 'Popeyes']),
        payeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        merchant_id: faker.finance.mask(16, false, false),
        mercant_address: faker.random.arrayElement(['normal', 'turbo']),
        coupon_barcode: faker.finance.mask(16, false, false),
        register_terminal_id: faker.finance.mask(16, false, false),
        cashier_info: faker.finance.mask(16, false, false),
        item_name: faker.random.arrayElement(['normal', 'turbo']),
        item_category: faker.random.arrayElement(['normal', 'turbo']),
        offer:faker.finance.mask(16, false, false),
        item_number: faker.finance.mask(16, false, false),
        sku: faker.finance.mask(16, false, false),
        transaction_type: faker.random.arrayElement(['normal', 'turbo']),
        number_of_items: faker.finance.mask(16, false, false),
        date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_expiration_date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_barcode: faker.finance.mask(16, false, false),
        receipt_number: faker.finance.mask(16, false, false),
        tax_amount: faker.finance.amount(1, 2500, 2),
        tax_percentage: faker.finance.amount(1, 2500, 2),
        sub_total: faker.finance.amount(1, 2500, 2),
        total: faker.finance.amount(1, 2500, 2),
        card_type: faker.random.arrayElement(['normal', 'turbo']),
        last_four_digits: faker.finance.mask(16, false, false),
        chip_read: faker.random.boolean(),
        loyalty_rewards_member_id: faker.finance.mask(16, false, false),
        authorization_number: faker.finance.mask(16, false, false),
        aid_code: faker.finance.mask(16, false, false),
        vcd_number: faker.finance.mask(16, false, false),
        consumer: faker.finance.mask(16, false, false),
        status: faker.random.arrayElement(['planned', 'done']),
        reference: faker.lorem.words(3).substring(0, 20),
     },
     {
        type: faker.random.arrayElement(['Amazon', 'Target', 'Popeyes']),
        payeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        merchant_id: faker.finance.mask(16, false, false),
        mercant_address: faker.random.arrayElement(['normal', 'turbo']),
        coupon_barcode: faker.finance.mask(16, false, false),
        register_terminal_id: faker.finance.mask(16, false, false),
        cashier_info: faker.finance.mask(16, false, false),
        item_name: faker.random.arrayElement(['normal', 'turbo']),
        item_category: faker.random.arrayElement(['normal', 'turbo']),
        offer:faker.finance.mask(16, false, false),
        item_number: faker.finance.mask(16, false, false),
        sku: faker.finance.mask(16, false, false),
        transaction_type: faker.random.arrayElement(['normal', 'turbo']),
        number_of_items: faker.finance.mask(16, false, false),
        date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_expiration_date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_barcode: faker.finance.mask(16, false, false),
        receipt_number: faker.finance.mask(16, false, false),
        tax_amount: faker.finance.amount(1, 2500, 2),
        tax_percentage: faker.finance.amount(1, 2500, 2),
        sub_total: faker.finance.amount(1, 2500, 2),
        total: faker.finance.amount(1, 2500, 2),
        card_type: faker.random.arrayElement(['normal', 'turbo']),
        last_four_digits: faker.finance.mask(16, false, false),
        chip_read: faker.random.boolean(),
        loyalty_rewards_member_id: faker.finance.mask(16, false, false),
        authorization_number: faker.finance.mask(16, false, false),
        aid_code: faker.finance.mask(16, false, false),
        vcd_number: faker.finance.mask(16, false, false),
        consumer: faker.finance.mask(16, false, false),
        status: faker.random.arrayElement(['planned', 'done']),
        reference: faker.lorem.words(3).substring(0, 20),
     },
     {
        type: faker.random.arrayElement(['Amazon', 'Target', 'Popeyes']),
        payeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        merchant_id: faker.finance.mask(16, false, false),
        mercant_address: faker.random.arrayElement(['normal', 'turbo']),
        coupon_barcode: faker.finance.mask(16, false, false),
        register_terminal_id: faker.finance.mask(16, false, false),
        cashier_info: faker.finance.mask(16, false, false),
        item_name: faker.random.arrayElement(['normal', 'turbo']),
        item_category: faker.random.arrayElement(['normal', 'turbo']),
        offer:faker.finance.mask(16, false, false),
        item_number: faker.finance.mask(16, false, false),
        sku: faker.finance.mask(16, false, false),
        transaction_type: faker.random.arrayElement(['normal', 'turbo']),
        number_of_items: faker.finance.mask(16, false, false),
        date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_expiration_date: faker.date.between('2020-01-01', '2020-12-31'),
        receipt_barcode: faker.finance.mask(16, false, false),
        receipt_number: faker.finance.mask(16, false, false),
        tax_amount: faker.finance.amount(1, 2500, 2),
        tax_percentage: faker.finance.amount(1, 2500, 2),
        sub_total: faker.finance.amount(1, 2500, 2),
        total: faker.finance.amount(1, 2500, 2),
        card_type: faker.random.arrayElement(['normal', 'turbo']),
        last_four_digits: faker.finance.mask(16, false, false),
        chip_read: faker.random.boolean(),
        loyalty_rewards_member_id: faker.finance.mask(16, false, false),
        authorization_number: faker.finance.mask(16, false, false),
        aid_code: faker.finance.mask(16, false, false),
        vcd_number: faker.finance.mask(16, false, false),
        consumer: faker.finance.mask(16, false, false),
        status: faker.random.arrayElement(['planned', 'done']),
        reference: faker.lorem.words(3).substring(0, 20),
     }
];
 
export const profile = 
    {
    firstName: 'Tali',
    lastName: 'Oppenheimer',
    email: 'tali@oppenheimer.com',
    phone: '617-555-5585',
    streetAddr: '181 Guanajato',
    city: 'Mexico City',
    postcode: 12345,
}

export const stats = {
accsDetails: {
    balance: 2000,
    count: 2
    }
}
 
//  // Messages
//  const createMessage = user => {
//     const message = new Message({
//        title: faker.lorem.words(5),
//        sentDate: faker.date.between('2020-01-01', '2020-12-31'),
//        recipient: user._id,
//        content: faker.lorem.paragraph(),
//        isRead: faker.random.boolean()
//     });
 
//     return message.save();
//  };
 
//  // Statistics
//  const createStats = accountId => {
//     const stats = new Stat({
//        accountId,
//        name: faker.date.recent(_.random(1, 60, false)),
//        // Date is NOW or 1-60 days before
//        date: faker.date.recent(_.random(1, 60, false)),
//        income: faker.finance.amount(100, 5000, 2),
//        expenses: faker.finance.amount(100, 5000, 2)
//     });
 
//     return stats.save();
//  };