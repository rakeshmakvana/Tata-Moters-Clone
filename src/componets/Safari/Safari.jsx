import Safari2 from "./safari2.jpg"
import Safari3 from "./safari3.jpg"
import SafariFullYellow from "./safari-fullyellow.png"
import SafariWhite from "./safari-white.png"
import SafariGrey from "./safari-grey.png"
import SafariBlue from "./safari-blue.png"
import { useState } from 'react'

const Safari = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-fullyellow-bg');
    const [image, setImage] = useState(SafariFullYellow);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();

    const changefullyellow = () => {
        setColor('col-5 p-4 position-relative car-fullyellow-bg');
        setImage(SafariFullYellow);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(SafariWhite);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(SafariGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
    }

    const changeblue = () => {
        setColor('col-5 p-4 position-relative car-blue-bg');
        setImage(SafariBlue);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
    }

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className='d-flex flex-wrap'>
                        <div className={color}>
                            <div className='showicon text-start'>
                                <span class="material-symbols-outlined p-2">
                                    swipe_left
                                </span>
                            </div>
                            <div className='showimg1 py-2'>
                                <img src={image} alt="img" />
                            </div>
                            <div className='showbtn pt-3 d-flex flex-wrap justify-content-center'>
                                <div className='d-flex flex-wrap align-items-center'>
                                    <button className='me-3 fullyellowbtn' onClick={changefullyellow}>{icon1}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon2}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon3}</button>
                                    <button className='me-3 bluebtn' onClick={changeblue}>{icon4}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>New Safari</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>Reclaim Your Life</h6>
                                </div>
                                <div className='car-p'>
                                    <p>The New Safari epitomizes premium luxury<br/> with its opulent interiors,Plush Upholstery &<br/> advanced infotainment system.  Get ready<br/> to Reclaim Your Life with the New – Safari.</p>
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
                        <div className="col-5">
                            <img src={Safari2} alt="safari2" className='w-100 h-100' />
                        </div>
                        <div className="col-7">
                            <img src={Safari3} alt="safari3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Safari
