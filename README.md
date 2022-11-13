# Random User Generation

@arti.oga/random-package is mainly developed for the purpose of generating random users. With the help of this package we can create random users with specific attributes.

## Installation

Install the package via the following command by npm

```
npm i @arti.oga/random-package
```

Then just import into your node.js project with the following lines of code

```
const Randomizer = require('@arti.oga/random-package')
```

## Methods

generateUser - is used to generate a random user. You are able to pass as a parameter of the method an options object.
**If you want to generate a completely random user than don't pass any parameters.** However, if you want to generate a user with specific values, you can pass a parameter object with a key `specific`.

### example

```
Randomizer.generateUser({
  specific: {
    age: 34, firstName: 'Nancy',
  },
});
// {
//   id: '694-49-2448',
//   gender: 'male',
//   age: 34,
//   birthDay: '02.11.1988',
//   email: 'Nancy.Nelson34@contact.kz',
//   ip: '197.154.13.154',
//   userFirstName: 'Nancy',
//   userLastName: 'Nelson',
//   userFullName: 'Nancy Nelson'
// }
```

If we need to generate a number of different users we can pass an `amount` in our options as a string or number. If we pass a specific option then we will generate a list of users with specific information.

```
Randomizer.generateUser({
  specific: {
    idPattern: '## ## ###-###', firstName: 'Nancy',
  },
  amount: "2"
});
// [
//   {
//     id: '33 22 355-476',
//     gender: 'female',
//     age: 66,
//     birthDay: '24.05.1956',
//     email: 'NancyGonzalez66@gmail.org',
//     ip: '241.131.102.218',
//     userFirstName: 'Nancy',
//     userLastName: 'Gonzalez',
//     userFullName: 'Nancy Gonzalez'
//   },
//   {
//     id: '73 88 557-699',
//     gender: 'male',
//     age: 74,
//     birthDay: '12.12.1947',
//     email: 'NancyCarter74@writeme.net',
//     ip: '220.211.109.72',
//     userFirstName: 'Nancy',
//     userLastName: 'Carter',
//     userFullName: 'Nancy Carter'
//   }
// ]
```

If we are interested in specific attributes than we can pass an parameter with the key `attributes`. This will generate a user, however, only the attributes that we are interested in will appear.

```
Randomizer.generateUser({
    amount: 4,
    specific: { age: 53, firstName: 'Nancy' },
    attributes: ['age', 'email'],
  })

// [
//   { age: 53, email: 'Nancy.Wilson53@email.org' },
//   { age: 53, email: 'Nancy.Phillips@yandex.ru' },
//   { age: 53, email: 'Nancy.Torres53@writeme.net' },
//   { age: 53, email: 'NancyMartinez53@yandex.ru' }
// ]
```

---

**_p.s_** \
_If you want for specific attributes to be added to the package please feel free to contact via github._

**_p.s.s_**\
_I know that there are no test cases and the documentation might not be as good as it can be. However, there will be updates in the future. If you want to share your knowledge on package development please don't hold back and contact me._
