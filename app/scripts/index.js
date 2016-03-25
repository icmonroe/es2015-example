import John from './John';

var sayHello = () => {
  var john = new John();
  console.log('Hello, ' + john.getFullName());
};

sayHello();