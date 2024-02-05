console.log(typeof(70)===typeof('70'));
console.log(parseInt('8.8')===9);//parseInt converts '8.8' to 8
//javascript statement that provide falsy value
console.log(3===4);
console.log(6==='6');
console.log(3!=3);
console.log(2==null);
console.log(4>10);
//javascript statement that provide truthy value
console.log(2===2);
console.log(2=='2');
console.log(6>2);
console.log(8!=2);
console.log(1>0);
5 > 4       //true
4 >= 3      //true
4 < 3        //false
4 <= 3      //false
5 == 5      //true
9 === 9     //true
9 == '9'    //true
8 === '8'    //false
4 != 4      // false
4 !== 4      // false
4 != '4'      // false
4 != '4'    // false
4 !== '4'   // true
const subject='python';
const language='jargon';
console.log(5>4);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(5==5);
console.log(9===9);
console.log(9=='9');
console.log(8==='8');
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4!=='4');
console.log(subject.length>language.length);

4 > 3 && 10 < 12  //true
4 > 3 && 10 > 12  //false
4 > 3 || 10 < 12  //true
4 > 3 || 10 > 12  //true
!(4 > 3)          //false
!(4 < 3)          //true
!(false)          //true
!(4 > 3 && 10 < 12)  //false
!(4 > 3 && 10 > 12)  //true
!(4 === '4')        //true
//There is no 'on' in both dragon and python //false
const animal='dragon';
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!animal.includes('on')|| !subject.includes('on'));