import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import classes from './UserProfile.module.css';
import Contributions from './Contributions/Contributions';
import MoreWork from './MoreWork/MoreWork';
import Works from './Works/Works';
import Audience from './Audience/Audience';

export class UserProfile extends Component {
  render() {
    return (
      <div className={classes.home}>
        <div className={classes.mainWrapper}>
          <div className={classes.mainData}>
            <div className={classes.topInfo}>
              <img
                alt="as"
                src="https://i.pravatar.cc/200"
                className={classes.avatar}
              />

              <div className={classes.desc}>
                <h2 className={classes.heading}>
                  <span className={classes.name}>Jackson Lipsky</span>
                  <span className={classes.line}></span>
                  <span className={classes.specialization}>
                    Activist and Filmmaker
                  </span>
                </h2>

                <p className={classes.fullText}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt.
                </p>

                <div className={classes.place}>New York, United states</div>
              </div>
            </div>
            <div className={classes.subSections}>
              <div className={classes.topRow}>
                <ul className={classes.sectionsSidebar}>
                  <li>
                    <NavLink
                      to="/user-profile"
                      exact
                      className={classes.item + ' ' + classes.sectionsSidebar}
                      activeClassName={classes.active}
                    >
                      Contributions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user-profile/works"
                      exact
                      className={classes.item + ' ' + classes.sectionsSidebar}
                      activeClassName={classes.active}
                    >
                      Works
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/user-profile/audience"
                      exact
                      className={classes.item + ' ' + classes.sectionsSidebar}
                      activeClassName={classes.active}
                    >
                      Audience
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <Switch>
                    <Route
                      path="/user-profile"
                      exact
                      render={_ => <Contributions />}
                    />
                    <Route
                      path="/user-profile/works"
                      exact
                      render={_ => <Works />}
                    />
                    <Route
                      path="/user-profile/audience"
                      exact
                      render={_ => <Audience />}
                    />
                  </Switch>
                </div>
              </div>
              <div className={classes.bottomRow}>
                <Switch>
                  <Route
                    path="/user-profile"
                    exact
                    render={_ => <MoreWork />}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
