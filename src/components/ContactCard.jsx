import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
function ContactCard(props) {
    const { dispatch } = useGlobalReducer()
    async function deleteContact() {
        try {
            let response = await fetch(`https://playground.4geeks.com/contact/agendas/Gus/contacts/${props.contactou.id}`, {
                method: "DELETE"
            })                                              //modo 2
            if (!response.ok) {
                throw new Error("Error al eliminar contaco")
            }
            const action = { type: "delete_contact", payload: props.contactou.id }
            dispatch(action)
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
                    <button className="btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#modal"><i className="fa-solid fa-trash-can"></i></button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="modal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Alerta</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                   ¿ Seguro que desea Eliminar Contacto ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn btn-primary" onClick={deleteContact} data-bs-dismiss="modal">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactCard