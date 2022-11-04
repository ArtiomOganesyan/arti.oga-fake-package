#  Random User Generation

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
**If you want to generate a completely random user than don't pass any parameters.**

### example

```
Randomizer.generateUser({
  specific: {
    age: 34, firstName: 'Nancy',
  },
});
// {
//   gender: 'female',
//   age: 34,
//   email: 'Nancy.Robinson@contact.uk',
//   userFirstName: 'Nancy',
//   userLastName: 'Robinson'
// }
```

___ 

___p.s___ \
_If you want for specific attributes to be added to the package please feel free to contact via github._

___p.s.s___\
_I know that there are no test cases and the documentation might not be as good as it can be. However, there will be updates in the future. If you want to share your knowledge on package development please don't hold back and contact me._