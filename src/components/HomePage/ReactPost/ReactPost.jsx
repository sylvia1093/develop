import './ReactPost.scss';
import React, {Component, createRef} from "react";

import brian from "../../../image/brian.png";
import clara from "../../../image/clara.png";

import Attach from "../../../image/icone/attach.svg";

const refPromotePost = createRef();

class ReactPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elemHeight: 0
    }
  }

  componentDidMount(prevProps, prevState, snapshot) {
    if (refPromotePost.current) {
      this.setState({elemHeight: refPromotePost.current.clientHeight})
    }
  }

  render() {
    return (
      <div className="ReactPost">
        <div className="modal-react"  ref={refPromotePost} style={{marginTop: window.pageYOffset + window.innerHeight / 2 - this.state.elemHeight / 2  + 'px'}}>
          <div className="modal-react-top">
            <h1 className="modal-react-title">React to this work</h1>
            <div className="btn-close" onClick={this.props.cache}>
              <div className="btn-close-left"></div>
              <div className="btn-close-right"></div>
            </div>
          </div>
          <div className="modal-react-people">
            <div className="modal-group-img">
              <img src={brian} alt="profile" />
              <img src={clara} alt="profile" />
              <p>+42</p>
              <span>other people</span>
            </div>
          </div>
          <div className="modal-react-form">
            <div className="input-form">
              <div className="input-form-item-1">
                <img src={brian} alt="profile" />
                <textarea
                  className="input-react"
                  placeholder="Write your thoughts ..."
                />
              </div>
              <div className="input-form-item-2">
                <input className="input-tags" placeholder="#Tags" />
                <img style={{height:'20px'}} src={Attach} alt="attach" />
              </div>
            </div>
          </div>
          <div className="modal-promote-bottom">
            <button className="btn-promote">Publish</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactPost;
