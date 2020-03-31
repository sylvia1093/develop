import React, { Component } from 'react';
import s from './Contribution.module.css';

class Contribution extends Component {
  state = {
    name: 'Jackson Lipski',
    ago: '2 hours',
    desc:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.',
    views: 63,
    shares: 3,
    comments: 10
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
            <p className={s.fullDesc}>{this.state.desc}</p>

            <div className={s.footer}>
              <div className={s.stats}>
                <span className={s.views}>{this.state.views}</span>
                <span className={s.shares}>{this.state.shares}</span>
              </div>

              <div className={s.actions}>
                <span className={s.action}>Promote</span>
                <span className={s.action}>React </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contribution;
