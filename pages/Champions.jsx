import {useState} from 'react'
import Modal from '../src/components/Modal'
function Champions() {
  const [VisibilidadModal, setVisibilidadModal] = useState(true)
  return (
    <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Champions</h1>
        <Modal
          VisibilidadModal={VisibilidadModal}
          setVisibilidadModal={setVisibilidadModal}
        >
          <h1>Este será el contenido</h1>
          <p>Aqui irán los botones</p>
        </Modal>
      </div>
  )
}

export default Champions