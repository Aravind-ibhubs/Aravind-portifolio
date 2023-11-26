import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import HeadContents from  '../../components/headContents';
import "./style.scss";
import resumeData from "./utills";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MdWorkHistory, MdBookmark} from "react-icons/md";

const Resume = () => {
    return(
        <section id="resume" className="resume">
            <HeadContents headTitle="my resume" headerIcon={<BsInfoCircleFill size={45}/>} />
            <div className="timeLine">
                <div className="timeLine__experience">
                    <h3 className="timeLine__experience__heading">EXPERIENCE</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {resumeData.experience.map((item, i) => (
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline"
                            contentStyle={{
                                background: 'none',
                                color: 'var(--yellow-theme-sub-text-color)',
                                border: '1.5px solid var(--yellow-theme-main-color)'
                            }}
                            date={item.dateRange}
                            dateClassName="element-date"
                            icon={<MdWorkHistory />}
                            iconStyle={{
                                background: '#181818',
                                color: 'var(--yellow-theme-main-color)',
                            }}
                            >
                                <div className="timeline__experience__text-wrapper">
                                    <h3>{item.title} , </h3>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <p className="timeline__experience__description">{item.local}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className="timeLine__education">
                    <h3 className="timeLine__education__heading">EDUCATION</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {resumeData.education.map((item, i) => (
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline"
                            contentStyle={{
                                background: 'none',
                                color: 'var(--yellow-theme-sub-text-color)',
                                border: '1.5px solid var(--yellow-theme-main-color)'
                            }}
                            date={item.dateRange}
                            dateClassName="element-date"
                            icon={<MdBookmark />}
                            iconStyle={{
                                background: '#181818',
                                color: 'var(--yellow-theme-main-color)',
                            }}
                            >
                                <div className="timeline__experience__text-wrapper">
                                    <h3>{item.title} ,</h3>
                                    <h4>{item.subTitle}</h4>
                                </div>
                                <p className="timeline__experience__description">{item.local}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
};
export default Resume;
