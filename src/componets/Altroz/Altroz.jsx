import Altroz2 from "./altroz2.jpg"
import Altroz3 from "./altroz3.jpg"
import AltrozFullblue from "./altroz-fullblue.png"
import AltrozRed from "./altroz-red.png"
import AltrozBlue from "./altroz-blue.png"
import AltrozWhite from "./altroz-white.png"
import AltrozYellow from "./altroz-yellow.png"
import AltrozGrey from "./altroz-grey.png"
import { useState } from "react"

const Altroz = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-fullblue-bg');
    const [image, setImage] = useState(AltrozFullblue);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();
    const [icon5, setIcon5] = useState();
    const [icon6, setIcon6] = useState();

    const changefullblue = () => {
        setColor('col-5 p-4 position-relative car-fullblue-bg');
        setImage(AltrozFullblue);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon6();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(AltrozRed);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon6();
    }

    const changeblue = () => {
        setColor('col-5 p-4 position-relative car-blue-bg');
        setImage(AltrozBlue);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
        setIcon5();
        setIcon6();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(AltrozWhite);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon5();
        setIcon6();
    }

    const changeyellow = () => {
        setColor('col-5 p-4 position-relative car-yellow-bg');
        setImage(AltrozYellow);
        setIcon5(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon6();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(AltrozGrey);
        setIcon6(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
    }

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className='d-flex flex-wrap'>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Altroz</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>The Gold Standard</h6>
                                </div>
                                <div className='car-p'>
                                    <p>Looking for a hatchback that offers the best<br /> of everything? ALTROZ is the gold standard<br /> of hatchbacks. It has it all – Style, Safety,<br /> Performance and Technology. Whether you<br /> choose the petrol, diesel, i-Turbo or the<br /> iCNG, ALTROZ offers smooth and<br /> comfortable drives. Experience the thrill of<br /> driving an ALTROZ today.</p>
                                </div>
                                <div className='car-btn d-flex flex-wrap'>
                                    <button className='d-flex flex-wrap align-items-center'>
                                        Learn More<span className="material-symbols-outlined ps-1">arrow_forward</span>
                                    </button>
                                    <button className='d-flex flex-wrap align-items-center ps-4'>
                                        Book Now<span className="material-symbols-outlined ps-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={color}>
                            <div className='showicon text-end'>
                                <span class="material-symbols-outlined p-2">
                                    swipe_left
                                </span>
                            </div>
                            <div className='showimg2 py-4'>
                                <img src={image} alt="img" />
                            </div>
                            <div className='showbtn pt-3 d-flex flex-wrap justify-content-center'>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <button className='me-3 fullbluebtn' onClick={changefullblue}>{icon1}</button>
                                    <button className='me-3 redbtn' onClick={changered}>{icon2}</button>
                                    <button className='me-3 bluebtn' onClick={changeblue}>{icon3}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon4}</button>
                                    <button className='me-3 yellowbtn' onClick={changeyellow}>{icon5}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon6}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <img src={Altroz2} alt="altroz2" className='w-100 h-100' />
                        </div>
                        <div className="col-5">
                            <img src={Altroz3} alt="altroz3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Altroz