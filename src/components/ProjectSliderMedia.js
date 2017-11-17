import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import { Player, BigPlayButton } from 'video-react';

const ProjectSliderMedia = (props) => (
    <Container>
    {props.item.content.video ? (

        <Player src={props.item.content.video.fileUrl} poster={props.item.content.image.imageUrl} muted>
            <BigPlayButton position="center" />
        </Player>

    ) : ( <Image src={props.item.content.image.imageUrl} centered /> )}
    </Container>
)

export default ProjectSliderMedia;