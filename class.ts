class Car {
  name: string
  price: number

  constructor(name:string, price:number) {
    this.name = name
    this.price = price
  }

  public getInfo():string{
    return `${this.name} - ${this.price}`
  }

  protected protectionGetPrice():string{
    return `Commercial price = ${this.price * 2}`
  }
}


class Bus extends Car{
  constructor(name: string, price: number) {
    super(name, price);
  }

  getPrice():string{
    return this.protectionGetPrice()
  }
}

new Car('bmw', 100000).getInfo()
