import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import HeadContents from  '../../components/headContents';
import { Animate } from "react-simple-animate";
import "./style.scss";


const Contact = () => {
    return(
        <section id="contact" className="contact">
            <HeadContents headTitle="my Contact" headerIcon={<BsInfoCircleFill size={45}/>} />
            <div className="contact__content">
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateY(0px)"
                }}
                end={{
                    transform: "traslateX(200px)"
                }}
                >
                    <h3 className="contact__content__heading">Lets talk</h3>
                </Animate>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateX(200px)"
                }}
                end={{
                    transform: "translateX(0px)"
                }}
                >
                    <div className="contact__content__forms">
                        <div className="contact__content__forms__inputs">
                            <div>
                                <input name="name" required className="name-input" type={'text'} />
                                <label htmlFor="name" className="name-label">Name</label>
                            </div>
                            <div>
                                <input name="email" required className="email-input" type={'text'} />
                                <label htmlFor="email" className="email-label">Email</label>
                            </div>
                            <div>
                                <textarea name="description" required className="desc-input" type={'text'} rows={6} />
                                <label htmlFor="description" className="desc-label">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
};
export default Contact;
