import React from 'react'
import LogoImg from '../../../assets/images/brandoraLogo.svg'
import './Nav.css'
function Nav() {
    return (
        <>
            <nav>
                <div className="nav-Content">
                    <div className="logoSection">
                        <div className="logoImg">
                            <img src={LogoImg} alt="" srcSet="" />
                        </div>
                    </div>
                    <div className="navParent">
                        <div className="navToggle">
                            <div className="navBtn">
                                <span className="upper"></span>
                                <span className="lower"></span>
                            </div>
                        </div>
                        <div className="navDiv">
                            <div className="navLinkParent">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default React.memo(Nav)