// import makeServer from '../server/mirage'
import { getUsers } from './utils/getUsers'

// makeServer()

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
//ADEMAS AL BUILDEAR, COMO ESTAR DENTRO DE import.meta.env.DEV , NO SE AGREGAR AL DIST
// console.error('varr 1')

if (import.meta.env.DEV) {

  // console.error('varr2')

  import('../mirage/server')
    .then(server => {
      // console.error('varr2.5')
      server.default()
    })
    .catch(err => console.log(err))
}

// console.error('varr 3')

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
