import Guitar from "./components/Guitar"
import Header from "./components/Header"

const DESCRIPTION = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt'

function App() {

  return (
    <>
      <Header />
      
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            <Guitar name='Lukather' description={DESCRIPTION} price='299' img='01'/>
            <Guitar name='SRV' description={DESCRIPTION} price='299' img='02' />
            <Guitar name='Borland' description={DESCRIPTION} price='299' img='03' />
            <Guitar name='Vai' description={DESCRIPTION} price='299' img='04' />
            <Guitar name='Thompson' description={DESCRIPTION} price='299' img='05' />
            <Guitar name='White' description={DESCRIPTION} price='299' img='06' />
            <Guitar name='Cobain' description={DESCRIPTION} price='299' img='07' />
            <Guitar name='Dale' description={DESCRIPTION} price='299' img='08' />
            <Guitar name='Krieger' description={DESCRIPTION} price='299' img='09' />
            <Guitar name='Campbell' description={DESCRIPTION} price='299' img='10' />
            <Guitar name='Reed' description={DESCRIPTION} price='299' img='11' />
            <Guitar name='Hazel' description={DESCRIPTION} price='299' img='12' />
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

      
    </>
  )
}

export default App
