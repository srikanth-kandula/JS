/**Object destructuring */
console.clear();

let gadget = {
  name: 'laptop',
  price: 50
};

let mobile = {
  type: 'smart',
  screen: 'OLED'
}

//new variable name is written after :
let { name: newName, price: newPrice } = gadget;
console.log(`newName: ${newName}, newPrice: ${newPrice}`);

let someName, somePrice;
//default values
({ name: someName, price: somePrice, age=5 } = gadget); //notice the usage of paranthesis here.
console.log(`someName: ${someName}, somePrice: ${somePrice}, age: ${age}`);

let { name, price } = gadget; //when object property and the name of new variable are same
console.log(`name: ${name}, price: ${price}`);

//default values
let { model = 'Precision', type, screen } = mobile;
console.log(`model: ${model}, type: ${type} , screen: ${screen}`);

//order doesn't impact assignment when same name is used
let shirt = {
  size: 30,
  color: 'pink',
  cloth: 'polyster'
};
let { fit = 'slim', color, size } = shirt;
console.log(`fit: ${fit}, color: ${color} , size: ${size}, cloth: ${cloth}`);//notice that order doesn't matter


/**nested array-object destructuring */

const metadata = {
  title: 'google',
  traslations: [{
    title: 'destructuring demo',
    value: 'somevalue'
  }],
  url: 'www.google.com'
};

let {title, traslations: [{title: newTitle, value}], url: newUrl} = metadata;
console.log(`title: ${title}, url: ${newUrl},
inside translations: 
            title: ${newTitle},
            value: ${value}`);