import React from "react";
import {BsPersonFillGear} from "react-icons/bs"
import {Animate, AnimateKeyframes} from "react-simple-animate";
import HeadContents from  '../../components/headContents';
import "./style.scss";
import skillSet from "./utills";
import { Line } from "rc-progress";


const Skills = () => {
    return(
        <section id="skills" className="skills">
            <HeadContents headTitle="my skills" headerIcon={<BsPersonFillGear size={45}/>} />
            <div className="skills__content">
                {
                    skillSet.map((item, id) => (
                        <div className="skills__content__set">
                            <Animate
                            play
                            duration={1}
                            delay={0.5}
                            start={{
                                transform: "translateX(-200px)"
                            }}
                            end={{
                                transform: "translateX(0px)"
                            }}
                            >
                                <h3 className="skills__content__label-name">{item.label}</h3>
                                <div className="skills__content__progress-container">
                                    {item.data.map((skill, skillID) => (
                                        <AnimateKeyframes
                                        play
                                        duration={2}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount="1"
                                        >
                                            <div className="skill_progress" key={skillID}>
                                                <p>{skill.name}</p>
                                                <Line 
                                                percent={skill.percentage}
                                                strokeColor="var(--yellow-theme-main-color)"
                                                strokeWidth="2"
                                                trailWidth="2"
                                                strokeLinecap="square"
                                                />
                                            </div>
                                        </AnimateKeyframes>
                                    ))}
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};
export default Skills;
