import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Kev.in</a>
                        <div className="innerWrap">
                            <div className="itemContainer">
                                <Person />    
                                <span>John</span>
                            </div>
                            <div className="itemContainer">
                                <Mail />    
                                <span>john.doe@asderwq.con</span>
                            </div>
                        </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
