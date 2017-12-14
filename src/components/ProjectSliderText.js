import React from 'react';
import { Button, Container, Grid, } from 'semantic-ui-react';


const ProjectSliderText = (props) => (

    <Grid columns={2} container stackable >
        <Grid.Row>
            <Grid.Column width={13}>
                <Container className='project-caption'>
                    <h3>{props.item.content.title}</h3>
                    <p>{props.item.content.blurb.markdown}</p>
                </Container>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                {props.item.content.url ? (
                    <Button primary href={props.item.content.url} target='_new' className='project-button'>
                        view project
                </Button>
                ) : (<br />)}
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default ProjectSliderText;