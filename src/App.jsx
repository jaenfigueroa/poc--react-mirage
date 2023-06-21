import { getUsers } from './utils/getUsers'

//IMPORTACION DINAMICA DEL SERVIDOR DE MIRAGE
if (import.meta.env.DEV) {
  import('../mirage/server')
    .then(server => server.default())
    .catch(err => console.log(err))
}

function App() {
  return (
    <div className='app'>
      <button className='button' onClick={getUsers}>
        Traer usuarios
      </button>
    </div>
  )
}

export default App
