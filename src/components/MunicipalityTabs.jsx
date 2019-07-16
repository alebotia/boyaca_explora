import React, { Component } from 'react';
// nodejs library that concatenates classes
import classnames from "classnames";
import {
  NavItem,
  NavLink
} from "reactstrap";

class MunicipalityTabs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NavItem>
                  <NavLink
                    aria-selected={this.props.currentTab === this.props.navIndex}
                    className={classnames("shadow mb-sm-3 mb-md-0", {
                      active: this.props.currentTab === parseInt(this.props.navIndex, 10)
                    })}
                    onClick={this.props.onClick}
                    href="#"
                    role="tab"
                  >
                   {this.props.text}
                  </NavLink>
                </NavItem>
        );
    }
}
export default MunicipalityTabs;