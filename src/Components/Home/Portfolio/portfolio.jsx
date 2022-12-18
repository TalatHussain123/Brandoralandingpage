import React from 'react';
import './portfolio.css';
import img from '../../../assets/images/portfolioheader.png';
import img1 from '../../../assets/images/BrandsBenchmark.png';
import img2 from '../../../assets/images/Foundationlogo.png';
import img4 from '../../../assets/images/Foundation.png';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio_header'>
                <h2>Our Work</h2>
                <span>Here Some of Our Recent Projects!</span>
            </div>

            <div className='portfolio_menu'>

                <div className='portfolio_leftside'>
                    <div className='portfolio_leftside_img'>
                        <img src={img} alt=''></img>
                    </div>
                    <div className='portfolio_leftside_heading'>
                        <div className='portfolio_leftside_fristheading'>
                            <h2>WEB APP + LANDING PAGE</h2>
                        </div>
                        <div className='portfolio_leftside_secheading'>
                            <h3>UX / UI DESIGN</h3>
                        </div>
                        <div className='portfolio_leftside_image'>
                            <img src={img1} alt=''></img>
                            <span>#UI UX DESIGN </span>
                        </div>
                        <hr className='fristline' />
                        <hr className='lastline' />
                    </div>

                </div>


                <div className='portfolio_rightside'>
                    <div className='portfolio_rightside_img'>
                        <img src={img2} alt=''></img>
                    </div>
                    <div className='portfolio_leftside_heading'>
                        <div className='portfolio_rightside_fristheading'>
                            <h2>LANDING PAGE</h2>
                        </div>
                        <div className='portfolio_righttside_secheading'>
                            <h3>UX / UI DESIGN</h3>
                        </div>
                        <div className='portfolio_leftside_image'>
                            <img src={img4} alt=''></img>
                            <span>#UI UX DESIGN </span>
                        </div>
                        <hr className='fristline' />
                        <hr className='lastline' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
