import Punch2 from "./punch2.jpg"
import Punch3 from "./punch3.jpg"
import PunchBlue from "./punch-blue.png"
import PunchGrey from "./punch-grey.png"
import PunchFullGrey from "./punch-fullgrey.png"
import PunchWhite from "./punch-white.png"
import PunchOrange from "./punch-orange.png"
import PunchFullYellow from "./punch-fullyellow.png"
import PunchRed from "./punch-red.png"
import { useState } from 'react'

const Punch = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-blue-bg');
    const [image, setImage] = useState(PunchBlue);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();
    const [icon5, setIcon5] = useState();
    const [icon6, setIcon6] = useState();
    const [icon7, setIcon7] = useState();

    const changeblue = () => {
        setColor('col-5 p-4 position-relative car-blue-bg');
        setImage(PunchBlue);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon6();
        setIcon7();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(PunchGrey);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon6();
        setIcon7();
    }

    const changefullgrey = () => {
        setColor('col-5 p-4 position-relative car-fullgrey-bg');
        setImage(PunchFullGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
        setIcon5();
        setIcon6();
        setIcon7();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(PunchWhite);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon5();
        setIcon6();
        setIcon7();
    }

    const changeorange = () => {
        setColor('col-5 p-4 position-relative car-orange-bg');
        setImage(PunchOrange);
        setIcon5(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon6();
        setIcon7();
    }

    const changefullyellow = () => {
        setColor('col-5 p-4 position-relative car-fullyellow-bg');
        setImage(PunchFullYellow);
        setIcon6(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon7();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(PunchRed);
        setIcon7(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
        setIcon6();
    }

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row flex-wrap">
                    <div className='d-flex flex-wrap'>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Punch</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>The no-compromise SUV</h6>
                                </div>
                                <div className='car-p'>
                                    <p>Offering an exciting mix of tough utility with<br/> sporty dynamics that Optimizes what a<br/> characterful SUV should be. The world will<br/> take notice of two showstoppers. You and<br/> the Punch.</p>
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
                                    <button className='me-3 bluebtn' onClick={changeblue}>{icon1}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon2}</button>
                                    <button className='me-3 fullgreybtn' onClick={changefullgrey}>{icon3}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon4}</button>
                                    <button className='me-3 orangebtn' onClick={changeorange}>{icon5}</button>
                                    <button className='me-3 fullyellowbtn' onClick={changefullyellow}>{icon6}</button>
                                    <button className='me-3 redbtn' onClick={changered}>{icon7}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <img src={Punch2} alt="punch2" className='w-100 h-100' />
                        </div>
                        <div className="col-5">
                            <img src={Punch3} alt="punch3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Punch
