
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/cards';
import { useClientData } from './hooks/useClientData';
import { CreateModal } from './create-modal/create-modal';

function App() {
    const { data } = useClientData ();
    const [ isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }

    return (
      <div className="container">
        <h1>Clientes</h1>
        <div className="card-grid">
            {data?.map(clientData => <Card 
                  key={clientData.id} 
                  id={clientData.id} 
                  name={clientData.name} 
                  cpf={clientData.cpf} 
                ></Card>)
            }
            {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
            <button onClick={handleOpenModal}>
              Novo
            </button>
        </div>
      </div>
     
  ) 
}

export default App
