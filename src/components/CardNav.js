import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';

class CardNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      subloading: false,
      currentMasterPage: 1,
      totalMasterPages: Math.floor(
        this.props.totalItems / this.props.data.length
      ),
      currentPage: 1,
      nextButtonDisabled: false,
      prevButtonDisabled: true,
      totalItemsInView: props.totalItemsInView || 3
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {}

  nextPage = () => {
    let toDisplayItems = [];
    let data = this.props.data;
    let totalPages = Math.floor(data.length / this.state.totalItemsInView);
    let nextPage = this.state.currentPage + 1;
    let newSeed =
      nextPage * this.state.totalItemsInView - this.state.totalItemsInView;
    let newSeedOffset = this.state.totalItemsInView - 1 + newSeed;

    console.log(
      'next click nextPage===totalPages = ' + nextPage + '===' + totalPages
    );
    console.log(this.state.totalMasterPages);

    if (nextPage === totalPages && this.state.totalMasterPages === 1) {
      this.setState({ nextButtonDisabled: true });
    }

    if (nextPage === totalPages + 1) {
      nextPage = 1;
      newSeed =
        nextPage * this.state.totalItemsInView - this.state.totalItemsInView;
      newSeedOffset = this.state.totalItemsInView + newSeed;

      let newCurrentMasterPage = this.state.currentMasterPage + 1;
      this.setState({ currentMasterPage: newCurrentMasterPage });
      this.props.dataSetter(newCurrentMasterPage);
      this.setState({ subloading: true });

      // this needs to be in callback or promise
      setTimeout(() => {
        let newData = this.props.data;
        for (let i = newSeed; i < newSeedOffset; i++) {
          toDisplayItems.push(newData[i]);
        }

        this.props.setItems(toDisplayItems);
        this.setState({ subloading: false, currentPage: nextPage });
      }, 1000);
    } else {
      for (let i = newSeed; i <= newSeedOffset; i++) {
        toDisplayItems.push(data[i]);
      }
      this.props.setItems(toDisplayItems);
      this.setState({ currentPage: nextPage, prevButtonDisabled: false });
    }
  };
  // this one needs mad work
  prevPage = () => {
    let toDisplayItems = [];
    let data = this.props.data;
    let totalPages = Math.floor(data.length / this.state.totalItemsInView);
    let nextPage = this.state.currentPage - 1;
    let newSeed =
      nextPage * this.state.totalItemsInView - this.state.totalItemsInView;
    let newSeedOffset = this.state.totalItemsInView - 1 + newSeed;
    console.log(
      'prev click nextPage===totalPages = ' + nextPage + '===' + totalPages
    );

    if (nextPage === 1 && this.state.currentMasterPage === 1) {
      this.setState({ prevButtonDisabled: true });
    }

    if (nextPage === 0) {
      console.log('gotcha');
      nextPage = totalPages;
      newSeed =
        nextPage * this.state.totalItemsInView - this.state.totalItemsInView;
      newSeedOffset = this.state.totalItemsInView + newSeed;

      let newCurrentMasterPage = this.state.currentMasterPage - 1;
      this.setState({ currentMasterPage: newCurrentMasterPage });
      this.props.dataSetter(newCurrentMasterPage);
      this.setState({ subloading: true });

      // this needs to be in callback or promise
      setTimeout(() => {
        let newData = this.props.data;
        for (let i = newSeed; i < newSeedOffset; i++) {
          toDisplayItems.push(newData[i]);
        }

        this.setState({ currentPage: nextPage });
        this.props.setItems(toDisplayItems);
        this.setState({ subloading: false });
      }, 1000);
    } else {
      for (let i = newSeed; i <= newSeedOffset; i++) {
        toDisplayItems.push(data[i]);
      }
      this.props.setItems(toDisplayItems);
      this.setState({ currentPage: nextPage, nextButtonDisabled: false });
    }
  };

  render() {
    if (this.state.subloading)
      return (
        <Container text>
          <h1>Loading...</h1>
        </Container>
      );

    return (
      <Container>
        <Button.Group
          compact
          size="medium"
          style={{ float: 'right', paddingTop: '15px', marginBottom: '15px' }}>
          <Button
            onClick={this.prevPage}
            disabled={this.state.prevButtonDisabled}
            labelPosition="left"
            icon="left chevron"
            content="Prev"
          />
          <Button
            onClick={this.nextPage}
            disabled={this.state.nextButtonDisabled}
            labelPosition="right"
            icon="right chevron"
            content="Next"
          />
        </Button.Group>
      </Container>
    );
  }
}

export default CardNav;
