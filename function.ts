type TypeChannelReturn = {
  name:string
}

function getChannel(name:string) :TypeChannelReturn {
  return { name }
}

getChannel('123')


const getChannelName = (name:string): TypeChannelReturn =>{
  return {name}
}

type TypeChannelFunction = (name:string) =>TypeChannelReturn

const getChannelName2:TypeChannelFunction = (name) =>{
  return {name}
}

const getNumber = (...numbers:number[]) =>{
  return numbers
}

// Перегрузки
function  getCar(name:string):string
function  getCar(name:string, price:number):string

function  getCar(name:string, price?:number):string{
  return price ? `Name - ${name}, Price - ${price}` : `Name ${name}`
}

const carOne = getCar('bmw')
const carTwo = getCar('bmw', 100000)

