import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Button, Icon, Modal } from 'semantic-ui-react'

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      currentVideo: this.props.video,
    }
  }

  handleOpen = (whichOne) => this.setState({ modalOpen: true, currentVideo: whichOne });
  handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
             <Modal basic size='large'
               trigger={<Button size='mini' compact onClick={()=>{this.handleOpen(this.props.video);}}>watch video</Button>}
               open={this.state.modalOpen}
               onClose={this.handleClose}>

               <Modal.Content>
                 <Player src={this.state.currentVideo}>
                  <BigPlayButton position="center" />
                </Player>
               </Modal.Content>

               <Modal.Actions>
                 <Button color='grey' size='mini' onClick={this.handleClose} inverted>
                   <Icon name='close' /> close
                 </Button>
               </Modal.Actions>

             </Modal>
        );
    }
}

export default VideoModal;