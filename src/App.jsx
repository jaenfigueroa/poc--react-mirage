import makeServer from './utils/server'
import { getUsers } from './utils/getUsers'

makeServer()
const buttonClasses = 'bg-cyan-500 hover:bg-blue-500 p-2 rounded-lg m-3 font-bold text-white duration-300'

function App() {
  return (
    <div className='app'>
      <button className={buttonClasses} onClick={getUsers}>
        Traer usuarios
      </button>
    </div>
  )
}

export default App
