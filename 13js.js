//Пропишіть приклади використання всі допоміжних функцій починаючи з Math і закінчуючи Object
console.log('Пропишіть приклади використання всі допоміжних функцій починаючи з Math і закінчуючи Object');
// Math
const floor = n => Math.floor(n);
console.log(floor(1.34));
const ceil = n => Math.ceil(n);
console.log(ceil(55.43));
const random = n => Math.round(Math.random(n)*1000);
console.log(random(4));
const numbe = (num1, num2) => num1 ** num2;
console.log(numbe(2, 4));
const sqrt = n => Math.round(Math.sqrt(n));
console.log(sqrt(100));
// Методи масиву
let ar1 = [1, 5, true];
ar1.push('Hello')
console.log('push', ar1);
ar1.unshift('HelloArray')
console.log('unshift', ar1);
ar1.pop();
console.log('pop', ar1);
ar1.shift()
console.log('shift', ar1);
let ar2 = [5, true, 'hello', false, null, 5];
console.log(ar2);
let newar2 = ar2.slice(1, 6);
console.log('slice', newar2);
let ar3 = [5, true, 'hello', false, null, 5];
console.log(ar3);
ar3.splice(1, 5)
console.log('splice', ar3);
console.log(ar2);
let nevarr = ar1.concat(ar2,ar3); 
console.log('concat', nevarr);
let string = nevarr.join(', ');
console.log('join', nevarr, string);
let arrString = string.split()
console.log('split', arrString);
let arr = [2, 5, 'hello', 'arrow', true, 2, null, 'jop', false];
let a1 = arr.find((el, ind, arr) => {
    return el === 'arrow';
})
console.log('find', a1);
let a2 = arr.findIndex((el, ind,arr) => {
    return el === 5;
})
console.log('findIndex', a2);
let a3 = arr.indexOf(2)
console.log('indexOf', a3);
let a4 = arr.lastIndexOf(2)
console.log('lastIndexOf', a4);
console.log('sort', arr);
let a5 = arr.sort((a, b) => b - a)
console.log(a5);
let a6 = arr.sort()
console.log(a6);
const arr1 = ['222', '5', '11', '32'];
console.log(arr1);
let a7 = arr1.sort();
console.log(a7);
let arr2 = [ 
    {name: 'Yaroslav', id: 30},
   {name: 'Irina', id: 28},
    {name: 'Oleg', id: 35},
    {name: 'Vlad', id: 17}, 
 ]
arr2.sort((a, b) => a.id - b.id )
console.log(arr2);
const arr3 = [2, 4, 7, 21, 0, 1, 55, 32, 4];
let b = arr3.filter((el, ind, arr) => el > 7);
console.log('filter', arr3, b);
let b1 = arr3.some(el =>  el > 55);
console.log('some', b1);
let b2 = arr3.every(el => el <= 55);
console.log('every', b2);
let b3 = arr3.includes(55);
console.log('includes', b3);
const arr4 = [2, 4, ['jok', 43, ['hi', 31, 6]] ];
console.log(arr4);
let b4 = arr4.flat(Infinity);
console.log('flat', b4);
let b5 = arr4.concat([3, 33])
console.log('concat', b5);
let b6 = arr4.toLocaleString();
console.log('toLocaleString', b6);
console.log(arr);
let b7 = arr.map((el, ind, arr) => {
    if(el === 2){
        return -150
    } else if(el == 'hello') {
        return 333
    }
    else {
        return el
    }
} )
console.log('map', b7);
const ara = 'fdfdfd'
console.log('Array.isArray', arr);
console.log(Array.isArray(arr));
console.log(ara);
console.log(Array.isArray(ara));

const arrr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 11, 20, [11, true]];
console.log(arrr);
let a21 = arrr.reverse();
console.log('reverse,', a21);                         
let a22 = arrr.flat(Infinity);
console.log('flat, infinity,', a22);                   
let a23 = arrr.includes(55);
console.log('includes, 55,', a23);                     
let a24 = arrr.join(', ')
console.log('join');                                  
console.log(arrr, a24);
let a25 = arrr.map(el => {                              
    if(el > 10) {
        return 10;
    } else {
        return el;
    }
} )
console.log('map, el > 10,', a25);
let sum = arrr.flat(Infinity).reduce((prev, curr) => {    
    return prev + curr
}, 0)
console.log('reduce сума масиву,', sum);
let a26 = 'Hello world and my dear friend ...';
const arr22 = a26.split();                                         
console.log('split,', a26, arr22);
console.log('trim,', a26.trim());                                
console.log('toLocaleUpperCase,', a26.toLocaleUpperCase());      
console.log('toLocaleLowerCase,', a26.toLocaleLowerCase());      
let c4 = a26.charAt(4);
console.log('carAt,(4)', c4);                                  
let c5 = a26.charCodeAt(4);
console.log('charCodeAt(4),', c5);                              
let c = a26.includes('ll');
console.log('includes, (ll)', c);                               
let a9 = a26.concat('add concat text');
console.log('concat,', a9);                                     
let c6 = a26.search('my');
console.log('search, (my)', c6);                               
let c2 = a26.startsWith('hi');                                   
console.log('startWith, (hi)', c2);
let c3 = a26.endsWith('friend ...');                           
console.log('endsWith, (friend ...)', c3);
let aa7 = a26.indexOf('o');                                      
console.log('indexOf, (o),', aa7);
let a8 = a26.lastIndexOf('o');                                  
console.log('lasstIndexOf, (o),', a8);                           
let c1 = a26.replace('Hello', 'hi replace');                    
console.log('replace,', c1);
const arrr3 = [2, 5, 6, 11, 3, 1, 'hi', 'login', 'red', true, 51, 32];
console.log(arrr3);
let br = arrr3.toString();
console.log('to string');                                      
console.log(arrr3, br);
let br1 = 24343.23;
console.log(br1);
console.log('toExponential,', br1.toExponential(2));             
console.log('valueOf,', br1.valueOf());                          
console.log('toPrecision,', br1.toPrecision(4));                 
console.log('toFixed,', br1.toFixed(2));                         
let bb = a26.padStart(2, 'padStart');                               
console.log('padStart,', bb);
let bb1 = a26.padEnd(40, 'padEnd');                               
console.log('padEnd,', bb1);
console.log('repeat,', a26.repeat(2));    
// Object                     
const people = {
    name: 'Nname',
    age: 30,
    work: 'IT',
    time: 12,
    technology: true
}
const aa = Object.values(people)                    
console.log('values,', aa);
const aa1 = Object.keys(people)                     
console.log('keys,', aa1);
const aa2 = Object.entries(people)                  
console.log('entries,', aa2);
const w = [[21, false], ['hello', 72], ['ai', '+', 'b']]         
const w1 = Object.fromEntries(w)                    
console.log('fromEntries,', w1);
console.log(Object.keys(w1));                      
const people2 = Object.freeze(
    {
    name: 'Nname',
    age: 30,
    work: 'IT',
    time: 12,
    technology: true
})
people.age = 25;
delete people.time
people.technology = true
console.log(people);

people2.age = 25;
delete people2.time
people2.technology = true
console.log('freeze,', people2);                 

const people3 = Object.seal(
    {
        name: 'Nname',
        age: 30,
        work: 'IT',
        time: 12,
        technology: true
    }
)
people3.age = 28;
delete people3.time
people3.technology = false
console.log('seal,', people3);                  
//create
console.log(people);
const people5 = Object.create({}, {           // обьект який получаємо і обект до якого застосовуємо
    name: {
        value: 'Nname'
    },
    time: {
        value: 18
    }
})
console.log('create', people5);
//assign
const ob1 = Object.assign(people, {voice: true});           // типу conctat, обьєднюює массиви, ще копіює 
console.log('assign', ob1);
const ob2 = Object.assign({}, people);                      // копія
console.log(ob2);
console.log(Object.isFrozen(people));                      // перевірка на замороження обьекту (freeze)
console.log(Object.isSealed(people));                                                        //(seal)
console.log(Object.getOwnPropertyDescriptors(people5));    // перевірка пропертидискриптор обьекта
console.log(people.hasOwnProperty('time'));                // перевірка по ключам


