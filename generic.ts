function entity<T>(args: T):T{
  return args
}

entity<number>(1)
entity<string>("123")

const entity2 = <T>(args:T):T => {
  return args
}

entity2<number>(1)
entity2<string>("123")

class Channel<T>{
  private name: T

  constructor(name:T) {
    this.name = name
  }

  getName(): T{
    return  this.name
  }
}

new Channel<string>("Trifon")
new Channel<number>(123)

interface IPair<K, V>{
  key: K,
  value: V
}

const pair1: IPair<string, number> = {
  key: '1',
  value: 2
}

const pair2: IPair<string, string> = {
  key: '1',
  value: '2'
}

type TypeLength = {
  length: number
}

function getNameLength<T extends TypeLength>(entity: T): number {
  return entity.length
}

getNameLength('asd')
getNameLength([123,2,2])