function ContactCard(props) {
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
                        <p className="card-text mb-2"><i class="fa-solid fa-phone-flip"></i> {props.contactou.phone}</p>
                        <p className="card-text mb-2"><i class="fa-solid fa-envelope"></i> {props.contactou.email}</p>
                    </div>
                </div>
                <div
                    className="col-md-2 d-flex flex-row align-items-start mt-2 gap-1">
                    <button className="btn btn-outline-primary"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button className="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard