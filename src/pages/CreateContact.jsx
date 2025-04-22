import { useState } from "react"

function CreateContact() {
    const [name, setName]=useState ("")
    const [address, setAddress]=useState ("")
    const [phone, setPhone]=useState ("")
    const [email, setEmail]=useState ("")
    return (
        <div className = "container">
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address"/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="phone"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
        
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>

    )
}
export default CreateContact