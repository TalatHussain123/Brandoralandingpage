import React from 'react';
import './contactus.css';
import { Icon } from '@iconify/react';
import { AiOutlineLeft } from 'react-icons/ai';

function Contactus() {
    return (
        <div>
            <div className='talkjs'>
                <div className='Talktext'>
                    <form>
                        <p className='Talktext_p'>Hello, Brandora Team!</p>
                        <label> My Name Is
                            <input type="text" id='inputwidth'
                                placeholder="Your Name" />
                            <label> From
                                <input id='Frominput' type="text"
                                    placeholder="Company" />
                            </label>
                        </label>
                        <div className='btnlineproperty'>
                            <label>I’d Like To Discuss
                            </label>
                            <div class="Btns-radio">
                                <div class="button">
                                    <input type="radio" id="a25" name="check-substitution-1" />
                                    <label class="btn btn-default">UI UX</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a50" name="check-substitution-1" />
                                    <label class="btn btn-default" >Web Development</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a75" name="check-substitution-1" />
                                    <label class="btn btn-default" >Consultancy</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a100" name="check-substitution-1" />
                                    <label class="btn btn-default" >Product Design</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a125" name="check-substitution-1" />
                                    <label class="btn btn-default" >Branding</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a150" name="check-substitution-1" />
                                    <label class="btn btn-default" >Marketing</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Project Idea & Brief
                                <input
                                    id='inputwidth'
                                    type="text"
                                    placeholder="Discription (Optional)"
                                />
                            </label>
                        </div>
                        <div className='btnlineproperty'>
                            <label>A Budget Of this project is</label>
                            <div class="Btns-radio">
                                <div class="button">
                                    <input type="radio" id="a225" name="check-substitution-2" />
                                    <label class="btn btn-default"><AiOutlineLeft />500$</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a250" name="check-substitution-2" />
                                    <label class="btn btn-default">500$ - 1000$</label>
                                </div>
                                <div class="button">
                                    <input type="radio" id="a275" name="check-substitution-2" />
                                    <label class="btn btn-default">1000$ - 1500$</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Contact me at
                                <input
                                    id='inputwidth'
                                    type="text"
                                    placeholder="Email Address" />
                            </label>
                        </div>
                        <div className='Butt'>
                            <button className='letbtn'>Submit<Icon icon='ant-design:arrow-right-outlined' id='btnicon' /></button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contactus
