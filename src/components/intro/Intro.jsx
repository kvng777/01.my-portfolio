import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: ["Hitman", "Lover", "Body dicapitator"],
        });
    },[])

    return (
    <div className='intro' id="intro">
   
        <div className="left">
            <div className="imgContainer">
                <img src='images/deadpool.png' alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hey there!</h2>
                <h1>I'm Deadpool</h1>
                <h3>Freelance <span ref={textRef}></span></h3>
                <a href="">
                    <img src="images/down.png" alt="" />
                </a>
            </div>

        </div>
    </div>
    )
}
