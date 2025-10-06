// section B: short questions

/*21. In javascript varible is a container.That is contain a value in a valid variable name.

example : a = 5;
          b = "abid"
          let a = 10;
          const x = "abid";
*/

/*22. Object is a differant type of data container. It's contain data with key and value pare.

example : let objectname = {name: "abid hasan", age: 22, roll: 676786767}

*/

/*23. Array is an another type of data container that contain data a with an index.

example : const student = ["name: abid", "age = 23"]

*/

/*24. A function is independent set of code. It's help us to  do  any specific work.*/

/*25. a loop help us to do any work many time with a condition.

example : for (let i = 0; i <=10; i++){
            console.log(i)            
}
it's help us to print i with a condition many time's.
*/

//section C code output:

// 26.

let x = 5;
let y ="5";

console.log(x===y,y===x); // both are false couse data type are not same.

// 27.

let arr = [1,2,3]

arr.pop(); // remove last element
arr.push(4);// add element in after last element
console.log(arr);


// 28.

let obj = {name: "john", age: 25};
console.log(obj.name);

// 29.   

let number = [2,4,6,8];
console.log(number[2]);

// 30.


let text = "javascript"

console.log(text.slice(4,10));


//section D: coding problem

// 31.

function isEven(num) {
    if(num%2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(22));
console.log(isEven(23));

// 32.



function sumOfArray(){
    let array = [1,2,3,4,5];
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum = sum + array[i]
    }
    console.log(sum)
}

sumOfArray()

// 33.

let evenArray = [1,3,3,4,5,8,5,25,3,5,78,23423,45346678,546,234,34257,543546,21546678]
let count = 0;
for(let i = 0; i < evenArray.length; i++) {
    if(evenArray[i]%2 == 0){
        count += 1;
    }
}
console.log(count)

// 34.

const maxNumber = [232,535,434,34343423]
let largestNumber = 0;

for(let i = 0; i < maxNumber.length; i++){
    if(maxNumber[i]>largestNumber){
        largestNumber =maxNumber[i]
    }
}
console.log(largestNumber);