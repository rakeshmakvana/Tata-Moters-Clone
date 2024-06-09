import Nexon2 from "./nexon2.jpg"
import Nexon3 from "./nexon3.jpg"
import NexonPurple from "./nexon-purple.png"
import NexonWhite from "./nexon-white.png"
import NexonGrey from "./nexon-grey.png"
import NexonRed from "./nexon-red.png"
import { useState } from 'react'

const Nexon = () => {

    const [color, setColor] = useState('col-5 p-4 position-relative car-purple-bg');
    const [image, setImage] = useState(NexonPurple);
    const [icon1, setIcon1] = useState(<span className="material-symbols-outlined">done</span>);
    const [icon2, setIcon2] = useState();
    const [icon3, setIcon3] = useState();
    const [icon4, setIcon4] = useState();

    const changepurple = () => {
        setColor('col-5 p-4 position-relative car-purple-bg');
        setImage(NexonPurple);
        setIcon1(<span className="material-symbols-outlined">done</span>);
        setIcon2();
        setIcon3();
        setIcon4();
    }

    const changewhite = () => {
        setColor('col-5 p-4 position-relative car-white-bg');
        setImage(NexonWhite);
        setIcon2(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon3();
        setIcon4();
    }

    const changegrey = () => {
        setColor('col-5 p-4 position-relative car-grey-bg');
        setImage(NexonGrey);
        setIcon3(<span className="material-symbols-outlined">done</span>);
        setIcon1();
        setIcon2();
        setIcon4();
    }

    const changered = () => {
        setColor('col-5 p-4 position-relative car-red-bg');
        setImage(NexonRed);
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
                                    <button className='me-3 purplebtn' onClick={changepurple}>{icon1}</button>
                                    <button className='me-3 whitebtn' onClick={changewhite}>{icon2}</button>
                                    <button className='me-3 greybtn' onClick={changegrey}>{icon3}</button>
                                    <button className='me-3 redbtn' onClick={changered}>{icon4}</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 car-ct-bg p-5 d-flex flex-wrap align-items-center justify-content-center">
                            <div>
                                <div className='car-h3 mb-3'>
                                    <h3>Nexon</h3>
                                </div>
                                <div className='car-h6 mb-2'>
                                    <h6>It's #WayAhead</h6>
                                </div>
                                <div className='car-p'>
                                    <p>Nexon in it's new avatar is now here with<br/> multiple combinations of design, powertrain<br/> and features with the philosophy of<br/> personalisation and 'A Nexon for Everyone' </p>
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
                            <img src={Nexon2} alt="nexon2" className='w-100 h-100' />
                        </div>
                        <div className="col-7">
                            <img src={Nexon3} alt="nexon3" className='w-100 h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Nexon
