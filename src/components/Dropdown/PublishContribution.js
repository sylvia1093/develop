import React, {Component} from "react";
import styled from "styled-components";

import brian from "../../image/brian.png";
import defaultImageBackgroundUpload from './../../image/icone/imageBackground.svg'
import pauseIcon from './../../image/icone/play-button.svg'
import {connect} from "react-redux";

const Wrapper = styled.div`
  position: absolute;
  z-index: 213;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  .modal-react {
    width: 80%;
    max-width: 700px;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translateX(-50%)  translateY(-50%); 
    //margin: 500px auto auto auto;
    background: #fff;
    z-index: 13;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 20px;
    color: #000;
  }

  .modal-react-top {
    width: 95%;
    padding: 15px;
    border-bottom: 1px solid #00000026;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-react-title {
    font-size: 25px;
    font-weight: bold;
  }

 .btn-close {
    display: block;
    text-align: center;
    line-height: 20px;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    font-size: 15px;
    color: white;
    background-color: #707070;
    position: relative;
    cursor: pointer;
    .btn-close-left, .btn-close-right {
      width: 15px;
      height: 1px;
      background-color: white;
      position: absolute;
      top: 12px;
      left: 5px;
    }
    .btn-close-left {
      transform: rotate(-45deg);
    }
    .btn-close-right {
      transform: rotate(45deg);
    }
    &:hover {
      background-color: #59DEFF;
    }
  }

  img {
    display: block;
    width: 40px;
    height: 40px;
  }

  p {
    padding: 1px;
    height: 36px;
    line-height: 36px;
    margin: 0 5px;
    color: #8c8787;
    text-align: center;
  }

  .modal-react-people {
    padding: 15px;
  }

  .modal-group-img {
    display: flex;
  }

  .modal-react-form {
    width: 95%;
    height: 141px;
    margin: 15px auto;
    background: #f1f1f1;
    border-radius: 10px;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 10px;

    img {
      width: 70px;
      height: 70px;
    }
  }

  .input-form-item-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80%;
  }

  .input-form-item-2 {
    display: flex;
    align-items: center;
    padding: 2px;
    justify-content: space-between;
    border-top: 1px solid #00000026;
    height: 20%;
    font-size: 14px;
  }

  .input-react {
    border: none;
    width: 100%;
    height: 60%;
    background: #f1f1f1;
  }

  .input-tags {
    border: none;
    padding: 5px;
    border-right: 1px solid #00000026;
    width: 100%;
    height: 90%;
    background: #f1f1f1;
  }

  .attach {
    width: 22px;
    height: 22px;
  }
  .modal-promote-bottom {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
    padding-bottom: 20px;
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
  .item {
    margin-left:10px
  }
  .custom-file-upload {
    margin-top: 13px;
    margin-right: 5px;
  }
`;


class PublishContribution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: "",
            tag: "",
            description: "",
            userInfo: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePublishContribution = this.handlePublishContribution.bind(this);
    }

    componentDidMount() {

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log('aaaaa', nextProps);
        if (nextProps.publishContribution && nextProps.publishContribution.success) {
            nextProps.close();
            nextProps.publishContribution.success = false;
            return {success: true}
        } else {
            return null;
        }
    }

    handleChange(event) {

    }

    handlePublishContribution() {
        //handle publish action
    }

    render() {
        return (
            <Wrapper className="PublishContribution">
                <div className="modal-react">
                    <div className="modal-react-top">
                        <h1 className="modal-react-title">Publish a contribution</h1>
                        <div className="btn-close" onClick={this.props.close}>
                            <div className="btn-close-left"></div>
                            <div className="btn-close-right"></div>
                        </div>
                    </div>
                    <div className="modal-react-form">
                        <div className="input-form">
                            <div className="input-form-item-1">
                                <img src={brian} alt="profile"/>
                                <textarea
                                    className="input-react"
                                    name="description"
                                    placeholder="Feelings inspired ? share your thoughts...."
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input-form-item-2">
                                <input className="input-tags" placeholder="#Tags"
                                       name="tag"
                                       onChange={this.handleChange}/>
                                <div className="item">
                                    <img alt="pause" style={{width: '20px'}} src={pauseIcon}></img>
                                </div>
                                <div className="item">
                                    <input
                                        style={{display: "none"}}
                                        id="file-upload"
                                        type="file"
                                        name="photo"
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <img alt="bg" style={{width: '20px'}} src={defaultImageBackgroundUpload}/>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-promote-bottom">
                        <button onClick={() => this.handlePublishContribution()} className="btn-promote">Publish
                        </button>
                    </div>
                </div>
            </Wrapper>
        );
    }

}

const state = (state, ownProps = {}) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

export default connect(state, mapDispatchToProps)(PublishContribution);
