
import React, { Component } from 'react';
import PropTypes from "prop-types"
class DropdownItem extends Component{

    render() {
        return (
            <span>
            {this.props.children}
            </span>
        )
      }
}

export default DropdownItem;
DropdownItem.propTypes = {
    /** The name of the item which will be displayed when the item is selected */
    title: PropTypes.number.isRequired
}