import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
function ContactCard(props) {
    const{dispatch}=useGlobalReducer()
    async function deleteContact() {
        try {
            let response = await fetch(`https://playground.4geeks.com/contact/agendas/Gus/contacts/${props.contactou.id}`, {
                method: "DELETE"
            })                                              //modo 2
            if(!response.ok){
                throw new Error("Error al eliminar contaco")
            }
            const data=await response.json()
            const action={type:"delete_contact", payload: props.contactou.id}
            dispatch(action)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div className="card mb-3 p-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src="https://avatar.iran.liara.run/public" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body text-start">
                        <h5 className="card-title">{props.contactou.name}</h5>
                        <p className="card-text mb-2"><i className="fa-solid fa-location-dot"></i> {props.contactou.address}</p>
                        <p className="card-text mb-2"><i className="fa-solid fa-phone-flip"></i> {props.contactou.phone}</p>
                        <p className="card-text mb-2"><i className="fa-solid fa-envelope"></i> {props.contactou.email}</p>
                    </div>
                </div>
                <div
                    className="col-md-2 d-flex flex-row align-items-start mt-2 gap-1">
                    <Link to={`/editar-contacto/${props.contactou.id}`} className="btn btn-outline-primary"><i className="fa-regular fa-pen-to-square"></i></Link>
                    <button className="btn btn-outline-danger" onClick={deleteContact}><i className="fa-solid fa-trash-can"></i></button>


            
                </div>
            </div>
        </div>
    )
}

export default ContactCard