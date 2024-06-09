import "./Searchline.css"

const Searchline = () => {

    return (

        <section className="searchline p-4">
            <div className="d-flex flex-wrap p-3">
                <div className="col-3 d-flex flex-wrap">
                    <span className="searchline-sp col-4 py-2">
                        Show me
                    </span>
                    <h6 className="searchline-h6 col-8 py-2 d-flex flex-wrap align-items-center">
                        Compact SUV <span className="material-symbols-outlined searchline-sp2 ps-5">expand_more</span>
                    </h6>
                </div>
                <div className="col-4 d-flex flex-wrap ps-1">
                    <span className="searchline-sp col-6 py-2 ps-3">
                        vehicles that have
                    </span>
                    <h6 className="searchline-h6 col-6 py-2 d-flex flex-wrap align-items-center ps-1">
                        Petrol, Automati... <span className="material-symbols-outlined searchline-sp2 ps-2">expand_more</span>
                    </h6>
                </div>
                <div className="col-3 d-flex flex-wrap">
                    <span className="searchline-sp col-6 py-2 ps-3">
                        of price range
                    </span>
                    <h6 className="searchline-h6 col-6 py-2 d-flex flex-wrap align-items-center">
                        10 to 15 Lakhs <span className="material-symbols-outlined searchline-sp2 ps-2">expand_more</span>
                    </h6>
                </div>
                <div className="col-2 d-flex flex-wrap justify-content-center">
                    <button className="searchline-btn p-2 searchline-h6 d-flex flex-wrap align-items-center px-3">
                        Search<span className="material-symbols-outlined ps-2">search</span>
                    </button>
                </div>
            </div>
        </section>

    )

}

export default Searchline
