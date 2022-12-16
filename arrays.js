var a= [2,4,5,6,3,2];
var b=[3,4,6,8,5,2];
// mardge the two arrays to single array

var c =[...a,...b];
var d = a.concat(b);


console.log(c);
console.log(d);

// sort the items in array

var sorta=[3,8,7,6,-4,3,-2,-1,0,5];
let sc=sorta.sort();
console.log(sc);
let artists = [
    'John White Abbott', 
    'Leonardo da Vinci', 
    'Charles Aubry', 
    'Anna Atkins', 
    'Barent Avercamp'
];

let sorted = artists.sort();

console.log('Sort the artist names', sorted);

let ad=artists.sort(function(a,b){
    if(a>b)
{
    return -1;
}})

console.log(ad);

// push is used to add the item in array

a.push(25);

a.forEach(function(item,index,array){
    console.log(item,index,array)
;})

// pop is used to remove the last item in array

a.pop();

console.log(a)

// shift is used to remove the first item in array

a.shift();

console.log(a);

//unshift is used to add the item in array

a.unshift("hello");

console.log(a)


