import { User } from 'src/entities/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Gustavo'

  expect(user.name).toEqual('Gustavo')
})
