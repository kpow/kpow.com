import React from 'react';
import Slider from 'react-slick';
import ProjectSliderText from '../components/ProjectSliderText';
import ProjectSliderMedia from '../components/ProjectSliderMedia';


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: false
};

const ProjectSlider = (props) => (

    <Slider {...settings} >

        {props.props.data.map((item, index) => (
            <div key={index} style={{ width: "600px" }}>

                <ProjectSliderMedia item={item} />

                <ProjectSliderText item={item} />

            </div>
        ))}
    </Slider>

)

export default ProjectSlider;