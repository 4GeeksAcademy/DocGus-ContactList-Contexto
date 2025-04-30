import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateContact() {
    const [name, setName]=useState ("")
    const [address, setAddress]=useState ("")
    const [phone, setPhone]=useState ("")
    const [email, setEmail]=useState ("")
    const navigate=useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        const newContact={
            name:name,
            address:address,
            phone:phone,
            email:email,
        }
        const url="https://playground.4geeks.com/contact/agendas/Gus/contacts"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newContact)
        }
        try {
            const response=await fetch(url,options)
            if(!response.ok){
                throw new Error("Error al crear contacto")
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
        
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>

    )
}
export default CreateContact