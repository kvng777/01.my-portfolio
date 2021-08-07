import './intro.scss';

export default function intro() {
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
                <h1>I'm dead</h1>
                <h3>...pool<span>!</span></h3>
                <a href="">
                <img src="images/down.png" alt="" />
            </a>
            </div>

        </div>
    </div>
    )
}
