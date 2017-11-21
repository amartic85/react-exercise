function convertWidth(value)
{
    let intValue = parseInt(value) - 2;
    return intValue + 'px';
}

export const dropdownStyleWithTheme = theme => ( {
    toggle: {
      width: props => props.toggleWidth,
      background: theme.primaryBlueBackground,
      color: props => theme.primaryLightText,
      borderRadius: '6px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: theme.primaryBlueBorder,
      padding: "7px 10px 7px 20px",
      fontSize: "large",
      textAlign: "center",
      '&:hover':{
            background: theme.primaryBlueBackgroundHighlight,
            borderColor: theme.primaryBlueBorderHightlight,
            color: theme.primaryLightActiveText
      },
      '&:active':{
            background: theme.primaryBlueBackgroundHighlight,
            borderColor: theme.primaryBlueBorderHightlight,
            color: theme.primaryLightActiveText,
            boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
      },
      '&:focus':{
          outline: 0
      },
      '&.open':{
        background: theme.primaryBlueBackgroundHighlight,
        borderColor: theme.primaryBlueBorderHightlight,
        color: theme.primaryLightActiveText,
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
        borderColor: theme.primaryBlueBorderHightlight,
        borderWidth: "1px",
        borderStyle: "solid",
        background: theme.secondaryDarkBackground,
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
        borderBottomColor: theme.primaryBlueBorderHightlight,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        padding: "10px",
        fontSize: "small",
        color: theme.secondaryLightText,
        position: "relative",
        cursor: "pointer",
        '&:hover': {
           background: theme.secondaryDarkBackgroundHighlight
        },
        '&.last':{
            borderBottom: "none"
        }
    }
  });