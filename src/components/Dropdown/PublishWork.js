import React, { Component }  from "react";
import styled from "styled-components";
import defaultImageBackgroundUpload from "./../../image/icone/imageBackground.svg";

import { connect } from "react-redux";
import { push } from "react-router-redux";
import { PublishWorkAction } from "../../store/actions/ContentAction/ContentAction";
const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 213;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-react {
    width: 60%;
    height: 600px;
    margin: 25px auto;
    background: #fff;
    z-index: 13;
    position: absolute;
    top: 1%;
    right: 25%;
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
    font-size: 17px;
  }

  .btn-close {
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    top: 5%;
    right: 2%;
    font-size: 15px;
    color: #899eff;
    border: 1px solid #899eff;
    cursor: pointer;
  }

  custom-file-upload img {
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

  .input-react {
    border: none;
    width: 250px;
    height: 27px;
    background: #f1f1f1;
    border-radius: 3px;
    margin-top: 10px;
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
  .item {
    margin-left: 10px;
  }
  .drop-box {
    display: flex;
    justify-content: center;
    border: 1px dashed grey;
    margin: 50px 50px 10px 50px;
    padding: 50px;
    background: #f2f2f2;

  }
  .input-fields label {
    display: inline-block;
    width: 140px;
    text-align: right;
  }​
`;

class PublishWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      title: "",
      description: "",
      author: "",
      userInfo: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePublishWork = this.handlePublishWork.bind(this);
  }

  componentDidMount() {
    if (this.props.loginUser && this.props.loginUser.success) {
      this.setState({userInfo: this.props.loginUser.data});
    } else {
      const data = localStorage.getItem('userInfo');
      this.setState({userInfo: JSON.parse(data)});
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('aaaaa', nextProps);
    if(nextProps.publishWork && nextProps.publishWork.success) {
      nextProps.close();
      nextProps.publishWork.success = false;
      return {success: true}
    } else {
      return null;
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type === "file") {
      
      var reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          photo: target.files[0],
          photoPreview: e.target.result
        });
      }
      reader.readAsDataURL(target.files[0]);
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handlePublishWork() {
    const { photo, title, description, author, userInfo } = this.state;
    if (!title) {
      alert("Please type 'Title'");
      return;
    }

    if (!description) {
      alert("Please type 'Description'");
      return;
    }
    if (!author) {
      alert("Please type 'Author'");
      return;
    }
    if (!photo) {
      alert("Please select 'File'");
      return;
    }

    const data = {
      userId: userInfo.userId,
      title: title,
      author: author,
      description: description,
      photo: photo,
    }
    this.props.onPublishWorkAction(data, userInfo.token);
  }

  render() {
    return (
      <Wrapper>
        <div className="modal-react">
          <div className="modal-react-top">
            <h1 className="modal-react-title">Publish a work</h1>
            <div className="btn-close" onClick={this.props.close}>
              X
            </div>
          </div>
          <div className="modal-react-form">
            <div className="drop-box">
              <input
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                name="photo"
                onChange={this.handleChange} 
              />
              <div>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <img
                    style={{ position: "relative", left: "45%" }}
                    src={defaultImageBackgroundUpload}
                    alt="upload-icon"
                  />
                  <p>Drag and Drop a header picture here.</p>
                  <p>Only JPG,PNG and GIF files are allowed.</p>
                </label>
              </div>
            </div>
            <div className='input-fields' style={{ display: "flex", flexDirection: "row", paddingLeft: 50, paddingRight: 50,}}>
              <div>
                <span style={{display: 'block'}}>
                  <label style={{fontWeight:'bold',marginRight:'15px'}}>Title</label>
                  <input name="title" onChange={this.handleChange} className='input-react' />
                </span>
                <span style={{ verticalAlign: 'middle'}}>
                  <label style={{fontWeight:'bold',marginRight:'15px'}}>Description</label>
                  <textarea name="description" onChange={this.handleChange}  style={{height:'100px',verticalAlign:'middle'}} className='input-react' />
                </span>
                <span>
                  <label style={{fontWeight:'bold',marginRight:'15px'}}>Author</label>
                  <input name="author" onChange={this.handleChange}  className='input-react' />
                </span>
                </div>
              <div style={{width: 190, height: 190}}>
                {this.state.photo && (
                  <img src={this.state.photoPreview} alt="Preview" style={{width: 190}} />
                )}
                {!this.state.photo && (
                  <p> </p>
                )}
              </div>
            </div>
          </div>
          <div className="modal-promote-bottom">
            <button onClick={()=>this.handlePublishWork()} className="btn-promote">Publish</button>
          </div>
        </div>
      </Wrapper>
    );
  }
  
}

const state = (state, ownProps = {}) => {
  return {
    publishWork: state.contentReducer.data,
    location: state.location,
    loginUser: state.loginUser.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
    onPublishWorkAction: (data, token) => dispatch(PublishWorkAction(data, token))
  }
};

export default connect(state, mapDispatchToProps)(PublishWork);
