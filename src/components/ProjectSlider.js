import React from 'react';
import { Button, Container, Grid, Image, } from 'semantic-ui-react';
import Slider from 'react-slick';
import { Player, BigPlayButton } from 'video-react';
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