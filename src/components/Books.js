import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

import CardNav from './CardNav.js';
import BookItem from './BookItem.js';
import { getDisplayData } from '../getDisplayData.js';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItemsInView: props.totalItemsInView || 3
    };
  }

  componentDidUpdate = () => {
    if (this.state.totalItemsInView > 3) {
      window.scrollTo(0, 0);
    }
  };

  componentDidMount() {
    getDisplayData(
      this.props.data,
      this.props.totalItemsInView,
      this.setDisplayData
    );
  }

  setDisplayData = data => {
    this.setState({ displayItems: data });
  };

  render() {
    if (!this.state.displayItems)
      return (
        <Container text>
          <h1>Loading...</h1>
        </Container>
      );

    return (
      <div>
        <Container>
          <Header
            as="h1"
            dividing
            style={{ marginBottom: '1em', marginTop: '1.25em' }}
            content="book feed"
            subheader="what I'm reading courtesy of goodreads"
          />
        </Container>

        <Grid columns={3} container stackable>
          <Grid.Row>
            {this.state.displayItems.map((item, index) => (
              <Grid.Column key={index}>
                <BookItem data={item} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>

        <CardNav
          totalItemsInView={this.state.totalItemsInView}
          totalItems={400}
          data={this.props.data}
          setItems={this.setDisplayData}
          dataSetter={this.props.dataSetter}
        />
      </div>
    );
  }
}

export default Books;
