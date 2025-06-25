import './ContactsPage.css'

function ContactsPage() {


    return (
        <>
            <div className={"contact-page-container"}>
                <h1 className={"title text-center mb-5 display-4 fw-bold pt-3"} style={{ color: "#dddddd" }}>
                    Mes réseaux et contacts
                </h1>

                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                    <div className="row row-cols-1 row-cols-md-2 g-4 text-white">
                        {/* GitHub */}
                        <div className="col d-flex justify-content-center">
                            <div className="card text-center" style={{ width: '250px' }}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                    className="card-img-top mx-auto"
                                    style={{ width: "80px", height: "80px", marginTop: "20px" }}
                                    alt="Github Logo"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">GitHub</h5>
                                    <a href="https://github.com/Jokanami" target="_blank" rel="noreferrer" className="btn btn-dark">Voir le profil</a>
                                </div>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="col d-flex justify-content-center">
                            <div className="card text-center" style={{ width: '250px' }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
                                    className="card-img-top mx-auto"
                                    style={{ width: "60px", height: "60px", marginTop: "20px" }}
                                    alt="Téléphone"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Téléphone</h5>
                                    <p className="card-text">+33 7 69 72 59 50</p>
                                </div>
                            </div>
                        </div>

                        {/* Gmail */}
                        <div className="col d-flex justify-content-center">
                            <div className="card text-center" style={{ width: '250px' }}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                                    className="card-img-top mx-auto"
                                    style={{ width: "60px", height: "60px", marginTop: "20px" }}
                                    alt="Gmail"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">dylan.lopes51@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="col d-flex justify-content-center">
                            <div className="card text-center" style={{ width: '250px' }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    className="card-img-top mx-auto"
                                    style={{ width: "60px", height: "60px", marginTop: "20px" }}
                                    alt="LinkedIn"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">LinkedIn</h5>
                                    <a href="https://www.linkedin.com/in/dylan-araujo-lopes-89b052252/" target="_blank" rel="noreferrer" className="btn btn-primary">Voir le profil</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </>
    )

}

export default ContactsPage;