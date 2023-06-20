// import makeServer from '../server/mirage'
import { getUsers } from './utils/getUsers'

// makeServer()
const buttonClasses = 'bg-cyan-500 hover:bg-blue-500 p-4 rounded-lg m-3 font-bold text-white duration-300'

// console.log(import.meta.env.MODE) //MODO DE TRABAJO
// console.log(import.meta.env.BASE_URL) //URL BASE
// console.log(import.meta.env.PROD)//SI ESTAMOS EN PRODUCCION
// console.log(import.meta.env.DEV)//SI ESTAMOS EN DESARROLLO
// console.log(import.meta.env.SSR)//SI ESTAMOS EN SERVER SIDE RENDERING
// console.log(import.meta.env.VITE_USERNAME) //VARIABLE DE ENTORNO CREADO

// 1RA. FORMA DE IMPORTACION DINAMICA
// import('./utils/prueba')
//   .then(obj => console.log(obj.AGE_EXAMPLE))
//   .catch(err => console.log(err))

//2DA. FORMA DE IMPORTACION DINAMICA
// const { AGE_EXAMPLE } = await import('./utils/prueba')
// console.log(AGE_EXAMPLE)

//PRUEBA REAL DE IMPORTACION DINAMICA DE MIRAGE
if (import.meta.env.DEV) {
  import('../mirage/server')
    .then(server => server.default())
    .catch(err => console.log(err))
}

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
