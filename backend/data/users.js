import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Aryan',
    email: 'aryan.garg_cs18@gla.ac.in',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'priyanshu',
    email: 'Priyanshu.shukla_cs18@gla.ac.in',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ritik',
    email: 'Ritik.goyal_cs18@gla.ac.in',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
