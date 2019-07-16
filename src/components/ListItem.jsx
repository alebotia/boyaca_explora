import React, { Component } from 'react';
import { ListGroupItem } from "reactstrap";
class ListItem extends Component {
  render(){
    return(      
      <ListGroupItem >
      {this.props.displayTitle}{this.props.text}{this.props.notation}
      </ListGroupItem>
    );
  }
}
export default ListItem;
