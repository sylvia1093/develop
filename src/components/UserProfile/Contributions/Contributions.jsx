import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getContributions from '../../../actions/getContributions';
import s from './Contributions.module.css';

const Contributions = ({ contributions, getContributions }) => {
  useEffect(
    _ => {
      getContributions();
    },
    [getContributions]
  );

  if (!contributions) return null;

  return (
    <div className={s.contributions}>
      {contributions.map(({ name, ago, desc, views, shares }, i) => (
        <div className={s.contribution} key={i}>
          <div className={s.header}>
            <img alt="as" src="https://i.pravatar.cc/80" className={s.avatar} />

            <div>
              <h1 className={s.heading}>{name}</h1>
              <p className={s.ago}>{ago} ago</p>
            </div>
          </div>

          <div className={s.desc}>
            <p className={s.fullDesc}>{desc}</p>

            <div className={s.footer}>
              <div className={s.stats}>
                <span className={s.views}>{views}</span>
                <span className={s.shares}>{shares}</span>
              </div>

              <div className={s.actions}>
                <span className={s.action}>Promote</span>
                <span className={s.action}>React </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = s => ({
  contributions: s.contributions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getContributions
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Contributions);
