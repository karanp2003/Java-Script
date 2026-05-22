let myDate=new Date()

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toISOString())

console.log(myDate.toLocaleString())

console.log(typeof myDate)

myCreatedDate=new Date(2000,3,30,15,40)

console.log(myCreatedDate.toLocaleString())

let myDate1=new Date("01-14-2023")

let myTimeStamp=Date.now()

console.log(myTimeStamp)

console.log(myDate1.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate= new Date()

console.log(newDate.getMonth())

console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate)