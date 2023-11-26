import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/contact');
    };
    
    return(
        <section id="home" className="home">
            <div className="home__text-wrap">
                <h1>
                    Hello!<br />
                    I'm Aravind Yedida
                    <br/>
                    Full Stack Developer
                </h1>
                <Animate
                play
                duration={2}
                delay={1}
                start={{
                    transform: "translateY(550px)",
                }}
                end={{
                    transform: "translateX(0px)",
                }}
                >
                    <button onClick={handleNavigation}>Hire me</button>
                </Animate>
            </div>
        </section>
    )
};
export default Home;
