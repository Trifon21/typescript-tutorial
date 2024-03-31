enum EnumRole{
  ADMIN,
  GUEST,
  USER
}

const enum EnumColors{
  black, green, pink
}

interface IUser{
  role: EnumRole,
  color: EnumColors
}

const user: IUser = {
  role: EnumRole.ADMIN,
  color: EnumColors.black
}

