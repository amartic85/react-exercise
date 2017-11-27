import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from "../css-modules/dropdown.module.css";
  /**My Dropdown Component */
export class DropdownWithCss extends Component {

   
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
        var count = React.Children.count(this.props.children);
        var that = this;
        
        let dropdownItems = React.Children.map(this.props.children, (child, index)=>
                {
                    let cls;
                    if(index === (count - 1) )
                    {
                       cls = classNames(classes.item, classes.last);
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
            <button className={classNames({[classes.toggle]: !this.state.isOpen, [classes.toggleOpen]: this.state.isOpen})} onClick={this.handleToggle} style={{width: this.props.toggleWidth}}><span>{this.state.text}</span>
                <i className={classNames("fa", "fa-caret-down", classes.rightSideIcon)} aria-hidden="true"></i>
            </button>
            </div>
            <div className={classNames({[classes.dropdownList] : true, [classes.show]: this.state.isOpen})}>
                <div className={classNames({[classes.itemsContainer]: true, 'right' : !this.props.dropToLeft, "left" : this.props.dropToLeft})} style={{minWidth: convertWidth(this.props.toggleWidth)}}>
                    {dropdownItems}
                </div>
            </div>
        </div>
        ); 
    }
}


DropdownWithCss.defaultProps = {
    toggleWidth: "120px",
    noTopRadius: false
}

DropdownWithCss.propTypes = {
    /** Set if dropdown list should be left aligned */
    dropToLeft: PropTypes.bool,
    /** Toggle button width*/
    toggleWidth: PropTypes.string.isRequired,
    //** True if both top-left and top-right border radious should be 0 */
    noTopRadius: PropTypes.bool,
    //** Dropdown text when nothing is selected */
    defaultText: PropTypes.string.isRequired
};

function convertWidth(value)
{
    let intValue = parseInt(value) - 2;
    return intValue + 'px';
};
