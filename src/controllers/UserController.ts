import { User } from '@models/User'

export class UserController {
  teste () {
    const user = new User()

    user.name = 'Gustavo'
  }
}
