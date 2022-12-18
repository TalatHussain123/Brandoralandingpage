import React from 'react';
import './problemstatement.css';
import Img from '../../../assets/images/problemstatement.png';

function Problemstatement() {
    return (
        <>
            <div className='problemstatement'>
                <div className='problemstatement__text'>
                    <div className='fristproblemstatement__text'>
                        <h2>But Why is desiging a product for yourself Challenging</h2>
                        <div className='secproblemstatement__text'>
                            <h2>Finding Your Target Audience And Understaning Their Pain-Points</h2>
                        </div>
                    </div>
                    <div className='problemstatement__img'>
                        <img src={Img} alt=''></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Problemstatement
