import "./Testdrive.css"
import TestDrive from "./testdrive.jpeg"

const Testdrive = () => {

    return (
        <section>
            <div className="container">
                <div className="row flex-wrap">
                    <div className="d-flex flex-wrap">
                        <div className="col-6">
                            <img src={TestDrive} alt="img" className="w-100" />
                        </div>
                        <div className="col-6 testdrive-bg p-5">
                            <div className="testdrive-h5 mb-2">
                                <h5>Schedule a Test Drive</h5>
                            </div>
                            <div className="testdrive-p">
                                <p>We know you'll love our vehicles which is why you<br /> can try them now for an hour, a day, or a<br /> weekend. When you decide this is the car for you,<br /> you can buy it online and it's yours.</p>
                            </div>
                            <div className="testdrive-button d-flex flex-wrap align-items-end h-50">
                                <button className="d-flex flex-wrap align-items-center">Schedule Now<span className="material-symbols-outlined ps-1">arrow_forward</span></button>
                            </div>
                        </div>
                        <div className="col-12 py-5">
                            <div className="testdrive-p">
                                <p>* Prices indicated are Ex-showroom prices. Prices are subject to change without prior information at the discretion of Tata Motors. Contact your nearest Tata Motors dealer for exact prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Testdrive
