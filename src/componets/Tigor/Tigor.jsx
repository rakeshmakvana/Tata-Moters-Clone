import Tigor2 from "./tigor2.jpg"
import Tigor3 from "./tigor3.jpg"
import TigorFullYellow from "./tigor-fullyellow.png"
import TigorRed from "./tigor-red.png"
import TigorGrey from "./tigor-grey.png"
import TigorFullBlue from "./tigor-fullblue.png"
import TigorWhite from "./tigor-white.png"
import { useState } from 'react'

const Tigor = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-fullyellow-bg');
    const [image, setImage] = useState(TigorFullYellow);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();
    const [icon5, setIcon5] = useState();

    const changefullyellow = () => {
        setColor('col-5 p-4 position-relative car-fullyellow-bg');
        setImage(TigorFullYellow);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
        setIcon5();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(TigorRed);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
        setIcon5();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(TigorGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
        setIcon5();
    }

    const changefullblue = () => {
        setColor('col-5 p-4 position-relative car-fullblue-bg');
        setImage(TigorFullBlue);
        setIcon4(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon5();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(TigorWhite);
        setIcon5(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon3();
        setIcon4();
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
                                    <button className='me-3 redbtn' onClick={changered}>{icon2}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon3}</button>
                                    <button className='me-3 fullbluebtn' onClick={changefullblue}>{icon4}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon5}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Tigor</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>Sedan for the Stars</h6>
                                </div>
                                <div className='car-p'>
                                    <p>Stunning style, state-of-the-art features,<br /> comprehensive safety and seamlessly<br /> smooth drives of the New Tigor ensure you<br /> are in your element while exploring the city.</p>
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
                            <img src={Tigor2} alt="tigor2" className='w-100 h-100' />
                        </div>
                        <div className="col-7">
                            <img src={Tigor3} alt="tigor3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Tigor
