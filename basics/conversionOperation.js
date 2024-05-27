let score =33
console.log(typeof score)//number

let score1 ='33'
console.log(typeof score1)//string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)//number

let score2 ='33abc'
console.log(typeof score2)//string

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)//number
console.log(valueInNumber2)//NaN

let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)//number
console.log(valueInNumber3)//0

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)//number
console.log(valueInNumber4)//NaN

let score5 = true
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)//number
console.log(valueInNumber5)//1

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true

let isLoggedIn1 =""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)//false


let isLoggedIn2 ="hi"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)//true

//1=>true;0=>false
//""=>false
//"ho"=>true


let someNumber =33
let strsomeNumber = String(someNumber)
console.log(strsomeNumber)//33

console.log(typeof strsomeNumber)//string


//*******************Operations*****************

let value =3
let negValue = -value
console.log(value)//3
console.log(negValue)//-3

let str1='hi'
let str2='eshani'
console.log(str1+str2)//hieshani
console.log(1+"2")//12
console.log("1"+2)//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32

console.log(true)//true
console.log(+true)//1

//console.log(true+)//errro
console.log(+"")//0

let a,b,c
a=b=c =2+2

let gameCounter =100
gameCounter++
console.log(gameCounter)//101
++gameCounter
console.log(gameCounter)//102

//link to study https://tc39.es/ecma262/