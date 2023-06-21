export const getUsers = async () => {
  try {
    const response = await fetch('/api/users')
    const data = await response.json()
    // console.log(data.users)
    console.table(data.users)
    // return users
  } catch (error) {
    throw Error(error)
  }
}