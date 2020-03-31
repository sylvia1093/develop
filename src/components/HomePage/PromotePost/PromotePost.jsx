import './PromotePost.scss';
import React, {Component, createRef} from "react";
import {Link} from "react-router-dom";

import CardModal from "../CardModal/CardModal";
import brian from "../../../image/brian.png";

const refPromotePost = createRef();

class PromotePost extends Component {
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
            <div className="PromotePost" >
                <div className="modal-promote" ref={refPromotePost} style={{marginTop: window.pageYOffset + window.innerHeight / 2 - this.state.elemHeight / 2  + 'px'}}>
                    <div className="modal-promote-title">
                        <h1>Promote this work</h1>
                        <div className="btn-close" onClick={this.props.cache}>
                            <div className="btn-close-left"></div>
                            <div className="btn-close-right"></div>
                        </div>
                    </div>
                    <div className="modal-promote-content">
                        <img src={brian} alt="profile"/>
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
            </div>
        );
    }
}

export default PromotePost;
