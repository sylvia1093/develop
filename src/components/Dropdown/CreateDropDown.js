import React, { Component } from 'react';
import styled from 'styled-components';
import PublishContribution from "./PublishContribution";
import PublishWork from "./PublishWork";
import s from "../HomePage/Contribution/Contribution.module.css";

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
    this.state = {
      openContributionModal: false,
      openWorkModal: false };
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.openContributionModal || this.state.openWorkModal) {
      document.getElementById('root').style.filter = 'blur(3px)';
      document.getElementById('root').classList.add('cover-blur')

    } else {
      document.getElementById('root').style.filter = 'blur(0px)';
      document.getElementById('root').classList.remove('cover-blur')
    }
    if (document.getElementsByClassName('PublishContribution')[0] && this.state.openContributionModal) {
      document.body.appendChild(document.getElementsByClassName('PublishContribution')[0])
    }
    if (document.getElementsByClassName('PublishWork')[0] && this.state.openWorkModal) {
      document.body.appendChild(document.getElementsByClassName('PublishWork')[0])
    }
  }

  showContributionModal = () => {
    if (!this.state.openContributionModal) {
      this.setState({openContributionModal: true})
    } else {
      document.querySelector('.CreateDropDown').appendChild(document.getElementsByClassName('PublishContribution')[0])
      this.setState({openContributionModal: false})
    }
  };

  showWorkModal = () => {
    if (!this.state.openWorkModal) {
      this.setState({openWorkModal: true})
    } else {
      document.querySelector('.CreateDropDown').appendChild(document.getElementsByClassName('PublishWork')[0])
      this.setState({openWorkModal: false})
    }
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper className="CreateDropDown">
          <ul style={{ listStyleType: 'none' }}>
            <li onClick={() => this.setState({ openContributionModal: true })}>
              Publish a contribution
            </li>
            <li onClick={() => this.setState({ openWorkModal: true })}>
              Publish a work
            </li>
          </ul>
          {this.state.openContributionModal && <PublishContribution close={this.showContributionModal}/>}
          {this.state.openWorkModal && <PublishWork close={this.showWorkModal}/>}
        </Wrapper>

      </React.Fragment>
    );
  }
}

export default CreateDropDown;
