interface IUserAge{
  age: number
}

interface IUser extends IUserAge{
  name: string
  email: string
}

type TypeAge = {
  age: number
}

type TypeUser = {
  name: string
  email: string
} & TypeAge

const userInterface: IUser = {
  name : 'Trifon',
  email : 'wer@or.ru',
  age: 123
}

const userType: TypeUser = {
  name : 'Trifon',
  email : 'wer@or.ru',
  age : 123
}

const users: IUser[] = [userInterface, userType]