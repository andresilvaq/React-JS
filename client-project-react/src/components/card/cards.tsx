import './card.css'

interface CardProps {
    id: number,
    name: string,
    cpf: string
    
}
export function Card({id, name, cpf} : CardProps) {
    return (
        <div className="card">
            <p>Id: {id}</p>
            <p>Nome:{name}</p>
            <p>CPF: {cpf}</p>
       
        </div>
    )
}