import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 201px;
  background: #fff;
  z-index: 55;
  position: absolute;
  top: 50%;
  right: 8%;
  box-shadow: 0px 0px 2px #899eff;
  color: #111;

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto auto;
    padding: 15px;
  }

  li {
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 28px;

    a:hover {
      color: #899eff;
    }
  }
`;

class CreateDropDown extends Component {
  constructor() {
    super();
    this.state = { openContributionModal: false, openWorkModal: false };
  }
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <ul style={{ listStyleType: 'none' }}>
            <li onClick={() => this.setState({ openContributionModal: true })}>
              Publish a contribution
            </li>
            <li onClick={() => this.setState({ openWorkModal: true })}>
              Publish a work
            </li>
          </ul>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default CreateDropDown;
