import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import HeadContents from  '../../components/headContents';
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpeg";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import "./style.scss";
import { useState } from "react";

const projectList = [
    {
        id: 2,
        name: "Ecommerce",
        image: image1,
        link: "www.goole.com"
    },
    {
        id: 3,
        name: "Doctor",
        image: image2,
        link: "www.goole.com"
    },
    {
        id: 3,
        name: "Search",
        image: image3,
        link: "www.goole.com"
    },
    {
        id: 2,
        name: "Parking",
        image: image4,
        link: "www.goole.com"
    },
    {
        id: 2,
        name: "Dentist",
        image: image5,
        link: "www.goole.com"
    },{
        id: 3,
        name: "Lab",
        image: image6,
        link: "www.goole.com"
    },
]

const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Front end"
    },
    {
        filterId: 3,
        label: "Django"
    }
]

const Portfolio = () => {
    const [activeId, changeId] = useState(1)
    const [hoverIndex, setHoverValue] = useState(null)

    function handleFilter(itemID) {
        changeId(itemID);
    };

    function handleImageHover(indexValue) {
        setHoverValue(indexValue)
    }

    const filteredValue = activeId === 1 ? projectList : projectList.filter(item => item.id === activeId);

    return(
        <section id="portfolio" className="portfolio">
            <HeadContents headTitle="my Portfolio" headerIcon={<BsInfoCircleFill size={45}/>} />
            <div className="portfolio__conent">
                <ul className="portfolio__conent__filter">
                    {
                        filterData.map((filters) => (
                            <li 
                            className={filters.filterId === activeId ? 'active' : ''}
                            key={filters.filterId} 
                            onClick={() => handleFilter(filters.filterId)}>
                                {filters.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__conent__card">
                    {
                        filteredValue.map((listItem, index) => (
                            <div 
                                className="portfolio__conent__card__item" 
                                key={`ItemID-${listItem.name.trim()}`}
                                onMouseOver={() => handleImageHover(index)}
                                onMouseLeave={() => handleImageHover(null)}>
                                <div className="portfolio__conent__card__item__images">
                                    <a>
                                        <img alt={listItem.name} src={listItem.image}/>
                                    </a>
                                </div>
                                <div className="overlayed-content">
                                    {index === hoverIndex && (
                                        <div>
                                            <p>{listItem.name}</p>
                                            <button>Visit Website</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};
export default Portfolio;
