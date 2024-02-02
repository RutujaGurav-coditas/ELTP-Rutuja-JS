/*const stringNumber='123'
const integer=+(stringNumber);
console.log(integer);
console.log(typeof(integer));*/
const name='Rutuja Sadanand Gurav';
const greet='Hello';
const subject='Javascript';
console.log(`${greet}`);
console.log(`${greet}, ${name}`);   
console.log(name[-1]);
console.log(greet.charAt(2));
console.log(greet.charCodeAt(1));
greet[0]='j';//we cannot do this because strings are immutable;
console.log(greet);
greet.length//length of string
console.log(name.split(" "));
console.log(greet.toLocaleLowerCase());
console.log(subject.substr(4,6));//print 6 characters from 4th index
console.log(subject.substring(4,6));
console.log(subject.trim());//end spaces
subject.includes();//check for character
console.log(subject.indexOf('s'));
console.log(subject.indexOf('j'));
console.log(subject.lastIndexOf('i'));
console.log(name.slice(2,4));
console.log(name.substring(2,4));
console.log(name.substr(2,4));

const beast='chickadee';
const dish='chocolate cake';
function feast(beast, dish) {
      return(beast[0]===dish[0]&&beast.slice(-1)===dish.slice(-1))
     }
feast(beast,dish);
