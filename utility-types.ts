interface ICar{
  id: number
  name: string
  price?: number
  yearBuilt?: number
}

interface ICarCreate extends Omit<ICar, 'id'>{} // Взять все свойства кроме id
interface ICarId extends Pick<ICar, 'id' | 'name'>{} // Взять только id и name
interface IOptionalCar extends Partial<ICar>{} // Все свойства не обязательные
interface IRequiredCar extends Required<ICar>{} // Все свойства обязательные
interface IReadonlyCar extends Readonly<ICar>{} // Все свойства Readonly

type TypeCarRecord  = Record<'name' | 'price', string | number> // оба свойства string или number

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

type AnyExt = Extract<'max' | 'andrey', 'andrey' | 'misha'> // только одиноковые
type AnyExc = Exclude<'max' | 'andrey', 'andrey' | 'misha'> // исключает по первому параметру?
type NotNull = NonNullable<string | number| null | undefined> // удаляет все null и undefined

const car: TypeCarRecord = {
  name: "123",
  price: 123
}