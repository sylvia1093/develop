import React, {Component, createRef} from 'react';
import s from './Contribution.module.css';
import PromotePost from "../PromotePost/PromotePost";
import ReactPost from "../ReactPost/ReactPost";

const imgURL = "https://i.pravatar.cc/80";

class Contribution extends Component {
    state = {
        name: 'Jackson Lipski',
        ago: '2 hours',
        desc:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.',
        views: 63,
        shares: 3,
        comments: 10,
        visiblePromotePost: false,
        visibleReactPost: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.visiblePromotePost || this.state.visibleReactPost) {
            document.getElementById('root').style.filter = 'blur(3px)';
            document.getElementById('root').classList.add('cover-blur')

        } else {
            document.getElementById('root').style.filter = 'blur(0px)';
            document.getElementById('root').classList.remove('cover-blur')
        }

        if (document.getElementsByClassName('PromotePost')[0] && this.state.visiblePromotePost) {
            document.body.appendChild(document.getElementsByClassName('PromotePost')[0])
        }
        if (document.getElementsByClassName('ReactPost')[0] && this.state.visibleReactPost) {
            document.body.appendChild(document.getElementsByClassName('ReactPost')[0])
        }
    }

    showPromotePost = () => {
        if (!this.state.visiblePromotePost) {
            this.setState({visiblePromotePost: true})
        } else {
            document.querySelector('.' + s.contributions).appendChild(document.getElementsByClassName('PromotePost')[0])
            this.setState({visiblePromotePost: false})
        }
    };

    showReactPost = () => {
        if (!this.state.visibleReactPost) {
            this.setState({visibleReactPost: true})
        } else {
          document.querySelector('.' + s.contributions).appendChild(document.getElementsByClassName('ReactPost')[0])
          this.setState({visibleReactPost: false})
        }
    };


    render() {
        return (
            <div
                style={{width: '80%', margin: '15px auto'}}
                className={s.contributions}
            >
                <div className={s.contribution}>
                    <div className={s.header}>
                        <img alt="as" src={imgURL} className={s.avatar}/>

                        <div>
                            <h1 className={s.heading}>{this.state.name}</h1>
                            <p className={s.ago}>{this.state.ago} ago</p>
                        </div>
                    </div>

                    <div className={s.desc}>
                        <p className={s.fullDesc}>{this.state.desc}</p>

                        <div className={s.footer}>
                            <div className={s.stats}>
                                <span className={s.views}>{this.state.views}</span>
                                <span className={s.shares}>{this.state.shares}</span>
                            </div>

                            <div className={s.actions}>
                                <span className={s.action} onClick={this.showPromotePost}>Promote</span>
                                <span className={s.action} onClick={this.showReactPost}>React </span>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.visiblePromotePost &&
                <PromotePost cache={this.showPromotePost} modalPhoto={imgURL} modalUser={this.state.name}
                             modalHour={this.state.ago} modalContent={this.state.desc}/>}
                {this.state.visibleReactPost && <ReactPost cache={this.showReactPost}/>}
            </div>
        );
    }
}

export default Contribution;
