//Declare an empty array;
const blankArray=[];

//Declare an array with more than 5 number of elements
const numbers=[10,20,30,40,50,60,70];

//Find the length of your array
console.log(numbers.length);

//Get the first item, the middle item and the last item of the array
console.log('first element:'+numbers[0]);
if(numbers.length%2){
    console.log('middle element:'+numbers[Math.floor(numbers.length/2)]);
}else{
    console.log('middle elements are:'+numbers[(numbers.length/2)-1]+','+numbers[numbers.length/2]);
}
console.log('last element:'+numbers[numbers.length-1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=[1,2,'Rutuja','Siddhi',[5,6],['A','B'],40];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies=['Coditas','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor((itCompanies.length)/2)]);
console.log(itCompanies[itCompanies.length-1]);

//Print out each company
console.log(itCompanies);

//by using for loop
for(let index=0;index<itCompanies.length;index++){
    console.log(itCompanies[index]);
}

//Change each company name to uppercase one by one and print them out
for(let index=0;index<itCompanies.length;index++){
    console.log(itCompanies[index].toUpperCase());
}

//Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ')+' are big IT companies');

/*Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
const findCompany='CODITAS';
const checkItCompany=itCompanies.toString().toLowerCase();
const checkForCompany=findCompany.toLowerCase();
checkItCompany.includes(checkForCompany)?console.log(findCompany+' is found'):console.log('company not found');

//Filter out companies which have more than one 'o' without the filter method

for (let index = 0; index < itCompanies.length; index++) {
    let count = 0;
    for (let secondIndex = 0; secondIndex < itCompanies[index].length; secondIndex++) {
        if (itCompanies[index][secondIndex].toLowerCase() === 'o') {
            count++;
            if (count > 1) {
                break; 
            }
        }
    }
    if (count > 1) {
        console.log(itCompanies[index]);
    }
}

//Sort the array using sort() method
console.log(itCompanies.sort());

//Sort the array by country name length without sort
for(let index=0;index<itCompanies.length-1;index++){
    for(let firstIndex=0;firstIndex<itCompanies.length-index-1;firstIndex++){
        let temp;
        if(itCompanies[firstIndex].length>itCompanies[firstIndex+1].length){
            temp=itCompanies[firstIndex];
            itCompanies[firstIndex]=itCompanies[firstIndex+1];
            itCompanies[firstIndex+1]=temp;
        }
    }
}console.log(itCompanies);
//using sort
console.log(itCompanies.sort((a,b)=>a.length-b.length));

//Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

//Slice out the middle IT company or companies from the array
if(itCompanies.length%2){
    console.log(itCompanies[Math.floor(itCompanies.length/2)]);
}else{
    console.log(itCompanies[(itCompanies.length/2)-1]+','+itCompanies[itCompanies.length/2]);
}

//Remove the first IT company from the array
console.log(itCompanies.shift());

//Remove the middle IT company or companies from the array
itCompanies.length%2?console.log(itCompanies.pop(Math.floor(itCompanies.length/2))):
console.log(itCompanies.pop(itCompanies.length/2)+','+itCompanies.pop((itCompanies.length/2)-1));

//Remove the last IT company from the array
console.log(itCompanies.pop());

//Remove all IT companies
while(itCompanies.length){
itCompanies.pop()}
console.log(itCompanies);

/*First remove all the punctuations and change the 
string to array and count the number of words in the array, dont use regex*/
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let textWithoutComma=text.split(',');
textWithoutComma=textWithoutComma.join('');
let revisedText=textWithoutComma.split('.');
revisedText=revisedText.join('');
const words=revisedText.split(' ');
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart.unshift('Rasmalai'));

//add Gulabjamun at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push('Gulabjamun'));

//remove 'Honey' if you are allergic to honey
console.log(shoppingCart);
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'),1));

//modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
console.log(shoppingCart);

/*In countries array check if 'India' exists in the array if it exists print 'INDIA'. 
If it does not exist add to the countries list.*/
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia', 'Finland','India','Germany',
                'Hungary','Ireland','Japan']
  
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

countries.includes('India')?console.log('INDIA'):console.log(countries.push('India'));
/*In the webTechs array check if Sass exists in the array and 
if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.*/
webTechs.includes('Saas')?console.log('Saas is a CSS preprocess'):console.log(webTechs.push('Saas'));
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort((a,b)=>a-b);
const minimumAge=ages[0];
const maximumAge=ages[ages.length-1]
//minimum
console.log(minimumAge);
//maximum
console.log(maximumAge);
//Find the median age(one middle item or two middle items divided by two)
ages.length%2?console.log(ages[(Math.floor(ages.length/2))]):
console.log([ages[(ages.length/2)]+ages[(ages.length/2)-1]]/2);
//Find the average age(all items divided by number of items)
let sumOfAges=0;
for(let index=0;index<ages.length;index++){
sumOfAges+=ages[index];
}
const averageAge=sumOfAges/ages.length
console.log(averageAge);
//Find the range of the ages(max minus min)
console.log(maximumAge-minimumAge);

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array*/
if(Math.abs(minimumAge-averageAge)<Math.abs(maximumAge-averageAge)){
    console.log('average is  in between range');
}else{
    console.log('average is out of range');
}
//Slice the first ten countries from the countries array
console.log(countries.slice(0,10));
//30. Find the middle countries in the countries array.
if(countries.length%2){
    console.log('middle country:'+countries[Math.floor(countries.length/2)]);
}else{
    console.log('middle countries are:'+countries[(countries.length/2)-1]+','+countries[countries.length/2]);
}
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
let firstArray;
let secondArray;
if(countries.length%2){
    firstArray=countries.slice(0,(Math.floor(countries.length/2)));
    secondArray=countries.slice(Math.floor(((countries.length)/2)));
    firstArray.push('Kochi');
}else{
    firstArray=countries.slice(0,(countries.length/2));
    secondArray=countries.slice((countries.length)/2);
}
console.log(firstArray);
console.log(secondArray);

