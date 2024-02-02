//declare variable
const statement='Easy JavaScript Assignments';
//length of string
console.log(statement.length);
//string in uppercase
console.log(statement.toUpperCase());
//string in lowercase
console.log(statement.toLowerCase());
//slice string using substr
console.log(statement.substr(0,statement.indexOf(' ')));
//slice string using substring
console.log(statement.substring(0,statement.indexOf(' ')));
//slice out phrase 
console.log(statement.slice(statement.indexOf('J')));
//includes
console.log(statement.includes('Script'));
//split string into array
console.log(statement.split());
//split string using space
console.log(statement.split(" "));
//split string at comma
const eltp_batch_three_string = "ELTP, BATCH, THREE";
console.log(eltp_batch_three_string.split(','));
//replace()
const changeStatement=statement.replace('JavaScript','Python');
console.log(changeStatement);
//charAt()
console.log(statement.charAt(20));
//charCodeAt()
console.log(statement.charCodeAt('J'));
//indexOf()
console.log(statement.indexOf('a'));
//lastIndexOf()
console.log(statement.lastIndexOf('a'));
const sentence='Easy JavaScript Assignments, Easy Easy';
//indexOf('Easy')
console.log(sentence.indexOf('Easy'));
//lastIndexOf('Easy')
console.log(sentence.lastIndexOf('Easy'));
//search()
console.log(sentence.search('Easy'));
//trim()
const stringToTrim='       Easy JavaScript Assignments, Easy Easy             ';
console.log(stringToTrim.trim());
//startsWith()
console.log(statement.startsWith('E'));
//endswith()
console.log(statement.endsWith('s'));
//match()
console.log(statement.match(/a/g));
//concat()
const word='Easy ';
const subject='Javascript';
const concatedString=word.concat(subject);
console.log(concatedString);
//repeat()
console.log(concatedString.repeat(3));
//count no of times Easy occured in sentence
const newStatement='Javascript is Easy , too Easy , too Easy , Easy to learn';
const matchWord = 'Easy';
let count = 0;
let words = newStatement.split(' ');
for (let i = 0; i < words.length; i++) {
    if (words[i] === matchWord) {
        count++;
    }
}
console.log(count);
//using match()
count = (newStatement.match(/\bEasy\b/g) || []).length;
console.log(count);
//clean text
const regexString= '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
const cleanedText = regexString.replace(/[^\w\s]/gi,'');
console.log(cleanedText);
const stringWithNumber= 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const number=stringWithNumber.match(/\d+/g);
console.log(number);
function calculateTotalIncome(){
    let sum=0;
    number[0]=Number(number[0])*12;
    for(let i=0;i<number.length;i++){
       sum+=Number(number[i]);
    }
    console.log(`Total annual income is:${sum}`);
}
calculateTotalIncome();