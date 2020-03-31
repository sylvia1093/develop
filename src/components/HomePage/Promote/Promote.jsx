import React, {Component, createRef} from 'react';
import s from './Promote.module.css';
import PromotePost from "../PromotePost/PromotePost";
import ReactPost from "../ReactPost/ReactPost";

const imgURL = "https://i.pravatar.cc/80";

export class Promote extends Component {
  state = {
    name: 'Rubi Kaur',
    ago: '1 hours',
    desc:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.',
    views: 13,
    shares: 1,
    comments: 10
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
        style={{ width: '80%', margin: '15px auto' }}
        className={s.contributions}
      >
        <div className={s.contribution}>
          <div className={s.header}>
            <img alt="as" src="https://i.pravatar.cc/80" className={s.avatar} />

            <div>
              <h1 className={s.heading}>{this.state.name}</h1>
              <p className={s.ago}>{this.state.ago} ago</p>
            </div>
          </div>

          <div className={s.desc}>
            <p className={s.fullDesc}>
              {this.state.desc}
              <div style={{ marginTop: '10px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src="https://i.pravatar.cc/500"
                  alt="as"
                />
              </div>
              <div className={s.Promote}>
                <div className={s.header}>
                  <img
                    alt="as"
                    src="https://i.pravatar.cc/80"
                    className={s.avatar}
                  />
                  <div>
                    <h1 className={s.heading}>{this.state.name}</h1>
                    <p className={s.ago}>{this.state.ago} ago</p>
                  </div>
                </div>
                <hr />
                <p>
                  <strong>Indigenous People's March</strong>
                </p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  exercitationem repellendus alias sequi possimus. Rem,
                  similique quo praesentium deserunt dicta eius saepe ex tempore
                  beatae? Iusto nam culpa placeat voluptatibus.
                </p>
                <div style={{ textAlign: 'center' }}>
                  <button className={s.button}>See More</button>
                </div>
              </div>
            </p>
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
        {this.state.visiblePromotePost && <PromotePost cache={this.showPromotePost} modalPhoto={imgURL} modalUser={this.state.name} modalHour={this.state.ago} modalContent={this.state.desc}/> }
        {this.state.visibleReactPost && <ReactPost cache={this.showReactPost} />}
      </div>
    );
  }
}

export default Promote;
