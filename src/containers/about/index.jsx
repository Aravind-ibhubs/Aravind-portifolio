import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import {DiCode, DiDatabase, DiDjango, DiReact,DiPython} from "react-icons/di";
import HeadContents from  '../../components/headContents';
import {Animate} from "react-simple-animate";
import './style.scss';

const personalDetails = [
    {label: "Name", value: "Yedida Uma Rama Lingeswara Narasimha Aravind"},
    {label: "Gender", value: "Male"},
    {label: "D.O.B", value: "Feb 1997"},
    {label: "Address", value: "1-21, Dhasullamma temple street, Cheyyoru, Andhra Pradesh, 533222"},
    {label: "Email", value: "aravindyedida402@gmail.com"},
    {label: "Phone Number", value: "+91 7997627817"}
]

const summary = "I am a Full Stack web developer.I worked for 1 year 8 months as Associate Software Engineer in Finalsite Private India Limited at Chennai.I worked with technologies of Python, Django, MySQL, Node JS, React JS, Express JS, HTML, CSS, JavaScript."

const About = () => {
    return(
        <section id="about" className="about">
            <HeadContents headTitle="About Me" headerIcon={<BsInfoCircleFill size={45}/>} />
            <div className="about__content">
                <div className="about__content__personal">
                    <Animate
                        play
                        duration={2}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translateY(0px)",
                        }}>
                            <h3>Full Stack web developer</h3>
                            <p>{summary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={2}
                        delay={1}
                        start={{
                            transform: "translateX(550px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}>
                        <h3 className="personalHeader">Personal Details</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label} :</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__services">
                    <Animate
                        play
                        duration={2}
                        delay={1}
                        start={{
                            transform: "translateX(600px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                        >
                        <div className="about__content__services__icons">
                            <div>
                                <DiCode size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <DiDjango size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <DiDatabase size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <DiReact size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <DiPython size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
};
export default About;
