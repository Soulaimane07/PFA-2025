import Navbar from '../../../../Components/Navbar/Navbar'
import Header from '../../../../Components/Header/Header'
import Main from './Main'

function Regions({pages}) {
  return (
    <div className='bg-gray-50 flex'>
        <Navbar pages={pages} />

        <main className='flex-1 px-10 py-4'>
          <Header />
          <Main />
        </main>
    </div>
  )
}

export default Regions