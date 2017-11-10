import React, { Component } from 'react';
import {Embed, Segment,Responsive} from 'semantic-ui-react'

export default class Resume extends Component {

  componentDidMount = () => { window.scrollTo(0, 0); }

  render() {

    return (
      <div className="all-layout">

      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <Embed url='https://www.visualcv.com/kevin-power' defaultActive style={{height:'4000px'}}/>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
          <Embed url='https://www.visualcv.com/kevin-power' defaultActive style={{height:'3100px'}}/>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          <Embed url='https://www.visualcv.com/kevin-power' defaultActive style={{height:'2100px'}}/>
        </Responsive>
      </Segment.Group>



      </div>
    )
  }
}
