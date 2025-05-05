import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

function EditContact() {
    const [name, setName]=useState ("")
    const [address, setAddress]=useState ("")
    const [phone, setPhone]=useState ("")
    const [email, setEmail]=useState ("")
    const navigate=useNavigate()
    const {id}=useParams()
    console.log(id)
    const {store, dispatch}=useGlobalReducer()

useEffect(()=>{
    const contact=store.contacts.find((contact)=>contact.id===Number(id))
    if(contact){
        setName(contact.name)
        setAddress(contact.address)
        setPhone(contact.phone)
        setEmail(contact.email)
    }
},[])

    async function handleSubmit(event) { //Adaptar para este caso
        event.preventDefault()
        const contact={
            name:name,
            address:address,
            phone:phone,
            email:email,
        }

        const url=`https://playground.4geeks.com/contact/agendas/Gus/contacts/${id}` //modo 1 
        const options={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(contact)
        }
        try {
            const response=await fetch(url,options)
            if(!response.ok){
                throw new Error("Error al editar contacto")
            }
            const data=await response.json()
            console.log(data)
            navigate("/")
            
        } catch (error) {
            console.error(error)
        }
       
    }
        return (
        <div className = "container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" value= {name} onChange={(event)=>{setName(event.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address" value= {address} onChange={(event)=>{setAddress(event.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="phone" value= {phone} onChange={(event)=>{setPhone(event.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email" value= {email} onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
        
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>

    )
}
export default EditContact