import { useEffect, useState } from 'react';
import { useClientDataMutate } from '../hooks/useClientDataMutate';
import { ClientData } from '../interface/ClientData';

import './modal.css'
   
interface InputProps {
    label : string,
    value : string | number,
    updateValue(value: any ) : void
}

interface ModalProps {
    closeModal () : void
}

const Input = ({label, value, updateValue} : InputProps) => {
    return (
         <>
            <label>{label}</label>
            <input value={value} 
            onChange={event =>updateValue(event.target.value)}></input>
         </>
    )
}



export function CreateModal({closeModal} : ModalProps) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const { mutate, isSuccess, isLoading } = useClientDataMutate();

    const submit = () => {
        const clientData : ClientData = {
                id,
                name,
                cpf
        }
        mutate(clientData);
    }

    useEffect(() => {
        if(isSuccess) {
            closeModal();
        };
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastra Novo Cliente</h2>
                <form className="input-container" >
                    <Input label="id" value={id}        updateValue={setId}></Input>
                    <Input label="name" value={name}    updateValue={setName}></Input>
                    <Input label="cpf" value={cpf}      updateValue={setCPF}></Input>
              
                </form>
                <button onClick={submit}
                    className="btn-secondary">
                        {isLoading ? 'postando.....' : 'Postar'}
                    </button>
            </div>
        </div>
    )
}