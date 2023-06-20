import { createServer, Factory, Model } from 'miragejs'
import { randomNumber } from './randomNumber'

export default function () {
  createServer({
    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          const names = ['Maria','Jose', 'Luis', 'Roberto', 'Rosa', 'Eliza']
          return names[randomNumber(0, 5)]
        },
        lastnames() {
          const lastnames = ['Perez', 'Gonzales', 'Garcia', 'Rodriguez', 'Gomez', 'Martinez']
          return lastnames[randomNumber(0, 5)]
        },
        dni(i) {
          return `${(i + 12) * 54855596}`
        },
        age() {
          return randomNumber(12,60)
        },
        country() {
          const countries = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Perú']
          return countries[randomNumber(0, 4)]
        },
        email() {
          return `${this.name}${this.lastnames}${randomNumber(0,200)}@gmail.com`
        },
        dateCreated() {
          const year = randomNumber(2010, 2023)
          const month = randomNumber(1, 12)
          const day = randomNumber(1, 28)
          return new Date(`${year}-${month}-${day}`)
        },
      }),
    },

    seeds(server) {
      server.createList('user', 50)
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      })
    },
  })
}