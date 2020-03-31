import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import brian from "../../image/brian.png";
import CardModal from "../card/CardModal";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position:absolute;
  display: flex;

  .modal-promote {
    width: 600px;
    margin: auto auto;
    background: #fff;
    z-index: 13;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 20px;
    color: #000;
    height: 500px;
    padding: 10px;
  }

  .modal-promote-title {
    width: 95%;
    padding: 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #00000029;
  }

  .btn-close {
    display: block;
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    font-size: 15px;
    color: #899EFF;
    border: 1px solid  #899EFF;
  }

  .modal-promote-content {
    width: 100%;
    height: 65px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
      height: 80px;
    }
  }

  .modal-promote-input {
    width: 85%;
    height: 80%;
    padding: 10px;
    background: #f2f2f2;
    border: none;
    border-radius: 10px;
  }

  .modal-promote-bottom {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }

  .btn-promote {
    width: 100px;
    height: 31px;
    border: none;
    background: #000000;
    color: #fff;
    box-shadow: 0px 3px 2px #00000029;
    font-size: 13px;
    border-radius: 21px;
    cursor: pointer;
  }
`;

class PromotePost extends Component {
  render() {
    return (
      <Wrapper>
        <div className="modal-promote">
          <div className="modal-promote-title">
            <h1>Promote this work</h1>
            <Link className="btn-close" onClick={this.props.cache}>
              X
            </Link>
          </div>
          <div className="modal-promote-content">
            <img src={brian} alt="profile" />
            <textarea
              className="modal-promote-input"
              placeholder="Share your throughts about this..."
            />
          </div>
          <div className="modal-promote-article">
            <CardModal
              photo={this.props.modalPhoto}
              user={this.props.modalUser}
              hour={this.props.modalHour}
              content={this.props.modalContent}
            />
          </div>
          <div className="modal-promote-bottom">
            <button className="btn-promote">Promote</button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default PromotePost;
