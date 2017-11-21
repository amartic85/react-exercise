import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import jss from "jss";
import {dropdownStyleWithTheme} from "../jss-style/ThemedDropdownStyle.js"

function convertWidth(value)
{
    let intValue = parseInt(value) - 2;
    return intValue + 'px';
}

const styles = {
    toggle: {
      width: props => props.toggleWidth,
      background: props => props.toggleBckColor,
      color: props => props.toggleColor,
      borderRadius: '6px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: props => props.toggleBorderColor,
      padding: "7px 10px 7px 20px",
      fontSize: "large",
      textAlign: "center",
      '&:hover':{
            background: props => props.toggleActiveBckColor ? props.toggleActiveBckColor : props.toggleBckColor,
            borderColor: props => props.toggleActiveBorderColor ? props.toggleActiveBorderColor : props.toggleBorderColor,
            color: props => props.toggleActiveColor ? props.toggleActiveColor : props.toggleColor
      },
      '&:active':{
            background: props => props.toggleActiveBckColor ? props.toggleActiveBckColor : props.toggleBckColor,
            borderColor: props => props.toggleActiveBorderColor ? props.toggleActiveBorderColor : props.toggleBorderColor,
            color: props => props.toggleActiveColor ? props.toggleActiveColor : props.toggleColor,
            boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
      },
      '&:focus':{
          outline: 0
      },
      '&.open':{
        background: props => props.toggleActiveBckColor ? props.toggleActiveBckColor : props.toggleBckColor,
        borderColor: props => props.toggleActiveBorderColor ? props.toggleActiveBorderColor : props.toggleBorderColor,
        color: props => props.toggleActiveColor ? props.toggleActiveColor : props.toggleColor,
        borderRadius: "6px 6px 0px 0px"
      }
    },

    rightSideIcon: {
        marginLeft: "15px"
    },

    dropdownContainer:{
        position: "relative",
        display: "inline-block"
    },
    dropdownList: {
        transform: "scale(1,0)",
        transition: "transform ease 250ms",
        position: "relative",
        transformOrigin: "top",
        '&.show':{
            transform: "scale(1,1)"
        }

    },

    itemsContainer: {
        minWidth: props => convertWidth(props.toggleWidth),
        border: props => "1px solid " + props.dropdownBorderColor,
        background: props => props.dropdownBckColor,
        zIndex: "2",
        fontSize: "medium",
        marginTop: "-2px",
        overflow: "auto",
        position: "absolute",
        whiteSpace: "nowrap",
        "&.right":{
            borderRadius: props => props.noTopRadius ?"0px 0px 9px 9px":"9px 0px 9px 9px",
            right: "0"
        },
        "&.left": {
            borderRadius: props => props.noTopRadius ?"0px 0px 9px 9px":"0px 9px 9px 9px",
            left: "0"
        }
    },

    item: {
        borderBottom: props => "1px solid " + props.dropdownBorderColor,
        padding: "10px",
        fontSize: "small",
        color: props => props.dropdownColor,
        position: "relative",
        cursor: "pointer",
        '&:hover': {
           background: props => props.dropdownSelectColor
        },
        '&.last':{
            borderBottom: "none"
        }
    }
  }

  /**My Dropdown Component */
export class Dropdown extends Component {

   
    constructor(props)
    {
        super(props);
        this.state= {
            isOpen: false,
            text: props.defaultText
        };
        this.handleToggle = this.toggle.bind(this);
        this.handleBlur = this.focusLost.bind(this);
    }

    focusLost(){
        window.setTimeout( () => {
        
            this.setState( prevState => (
            {
                isOpen: false
            }));
        }, 400);
    }

    toggle(){
       
        this.setState( prevState => ({
            isOpen : !prevState.isOpen
        }));
    }

    itemClicked(child){
        this.setState( prevState => ({
            isOpen : false,
            text: child.props.title
        }));

    }

    render(){
        let classes = this.props.classes;
        var count = React.Children.count(this.props.children);
        var that = this;
        
        let dropdownItems = React.Children.map(this.props.children, (child, index)=>
                {
                    let cls;
                    if(index === (count - 1) )
                    {
                       cls = classNames(classes.item, 'last');
                    }
                    else{
                        cls = classes.item;

                    }

                    return (
                        <div className={cls} onClick={() => that.itemClicked(child)}>
                            {child}
                        </div>
                    );
                });

        return (
        <div className={classes.dropdownContainer} onBlur={this.handleBlur}>
            <div>
            <button className={classNames({[classes.toggle]: true, 'open': this.state.isOpen})} onClick={this.handleToggle}><span>{this.state.text}</span>
                <i className={classNames("fa", "fa-caret-down", classes.rightSideIcon)} aria-hidden="true"></i>
            </button>
            </div>
            <div className={classNames({[classes.dropdownList] : true, 'show': this.state.isOpen})}>
                <div className={classNames({[classes.itemsContainer]: true, 'right' : !this.props.dropToLeft, "left" : this.props.dropToLeft})}>
                    {dropdownItems}
                </div>
            </div>
        </div>
        ); 
    }
}


Dropdown.defaultProps = {
    toggleWidth: "120px",
    toggleColor: "white",
    toggleBckColor: "#61DAFB",
    toggleBorderColor: "#61DAFB",
    toggleActiveColor: "white",
    toggleActiveBckColor: "#48D4FA",
    toggleActiveBorderColor: "#2FCEFA",
    dropdownBorderColor: "#31B0F4",
    dropdownBckColor: "#282C34",
    dropdownSelectColor: "#53565D",
    dropdownColor: "#D3D3D3",
    noTopRadius: false
}

Dropdown.propTypes = {
    /** Set if dropdown list should be left aligned */
    dropToLeft: PropTypes.bool,
    /** Toggle button width*/
    toggleWidth: PropTypes.string.isRequired,
    /** Toggle button text color */
    toggleColor: PropTypes.string,
    /** Toggle button background color */
    toggleBckColor: PropTypes.string,
    /** Toggle button border color */
    toggleBorderColor: PropTypes.string,
    /** Toggle button :active and : hover color */
    toggleActiveColor: PropTypes.string,
    /** Toggle button :active and :hover background color */
    toggleActiveBckColor: PropTypes.string,
    /** Toggle button :active and :hover border color */
    toggleActiveBorderColor: PropTypes.string,
    /** Dropdown list text color */
    dropdownColor: PropTypes.string,
    /** Dropdown list background color */
    dropdownBckColor: PropTypes.string,
    /** Dropdown list border color */
    dropdownBorderColor: PropTypes.string,
    /** Dropdown item selection color */
    dropdownSelectColor: PropTypes.string,
    //** True if both top-left and top-right border radious should be 0 */
    noTopRadius: PropTypes.bool
}
export default injectSheet(styles)(Dropdown)
export const ThemedDropdown = injectSheet(dropdownStyleWithTheme)(Dropdown)
//console.log(jss.createStyleSheet(styles).toString());