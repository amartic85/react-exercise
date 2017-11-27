import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DropdownList, {Dropdown, ThemedDropdown} from '../src/components/Dropdown.js';
import DropdownItem from '../src/components/DropdownItem.js';
import injectSheet, {ThemeProvider} from 'react-jss';
import classNames from 'classnames';
import { withInfo } from '@storybook/addon-info';
import "../node_modules/twemoji-awesome/dist/twemoji-awesome.min.css";
import {blueDarkTheme} from "../src/jss-style/BlueTheme.js"
import {DropdownWithCss} from "../src/components/DropdownWithCss.js";

const animalsProps = {
  defaultText: "Twemoji",
  dropToLeft: true,
  toggleWidth: "150px",
  noTopRadius: true,
  toggleBorderColor: "rgba(0,0,0,.15)",
  toggleBckColor: "white",
  toggleColor: "#018f69",
  toggleActiveBorderColor: "#02B875",
  toggleActiveBckColor: "white",
  toggleActiveColor: "#018f69",
  dropdownBorderColor: "#02B875",
  dropdownBckColor: "white",
  dropdownSelectColor: "rgba(2, 184, 117, 0.5)",
  dropdownColor: "rgba(0, 0, 0, .54)"
}

storiesOf('Dropdown', module)
.add('Default style',
  withInfo({
    text: 'String or React Element with docs about my component', 
    propTables: [Dropdown],
    propTablesExclude: [DropdownList]
  })(() =>
    <div style={{width: "120px", margin: "20px auto"}}>
      <DropdownList defaultText="FILTER">
         <DropdownItem title="Date">
           <span>
             <span style={{color: "#31B0F4"}}>From:</span>
             <span>&nbsp;<i>'year'</i></span>
             <span style={{color: "#31B0F4"}}>&nbsp;&nbsp;&nbsp;To:&nbsp;</span>
             <span><i>'year'</i></span>
            </span>
         </DropdownItem >
         <DropdownItem title="Genre">
          <span>
            <span style={{color: "#31B0F4"}}>Genre:</span>
            <span>&nbsp;<i>'genre'</i></span>
          </span>
         </DropdownItem>
      </DropdownList>
      </div>
  )
)
.add('Left-side dropdown style',
withInfo({
  text: 'String or React Element with docs about my component', 
  propTables: [Dropdown],
  propTablesExclude: [DropdownList]
})(() =>
  <div style={{width: "120px", margin: "20px auto"}}>
    <DropdownList defaultText="FILTER" dropToLeft>
    <DropdownItem title="Date">
    <span>
      <span style={{color: "#31B0F4"}}>From:</span>
      <span>&nbsp;<i>'year'</i></span>
      <span style={{color: "#31B0F4"}}>&nbsp;&nbsp;&nbsp;To:&nbsp;</span>
      <span><i>'year'</i></span>
     </span>
  </DropdownItem >
  <DropdownItem title="Genre">
   <span>
     <span style={{color: "#31B0F4"}}>Genre:</span>
     <span>&nbsp;<i>'genre'</i></span>
   </span>
  </DropdownItem>
    </DropdownList>
    </div>
  )
)
.add('Style with props',
withInfo({
  text: 'String or React Element with docs about my component', 
  propTables: [Dropdown],
  propTablesExclude: [DropdownList]
})(() =>
  <div style={{width:"150px", margin: "20px auto"}}>
    <DropdownList {...animalsProps}>
    <DropdownItem title="Chick">
    <span>
      <span style={{width: "50%", display: "inline-block"}}>Chick</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f423"></i></span>
     </span>
  </DropdownItem >
  <DropdownItem title="Bird">
    <span>
      <span style={{width: "50%", display: "inline-block"}}>Bird</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f426"></i></span>
     </span>
  </DropdownItem >
  <DropdownItem title="Penguin">
    <span>
      <span style={{width: "50%", display: "inline-block"}}>Penguin</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f427"></i></span>
     </span>
  </DropdownItem >
    </DropdownList>
    </div>
  )
)

storiesOf('Themed Dropdown', module)
.add('Blue dark theme',
  withInfo({
    text: 'String or React Element with docs about my component', 
  })(() =>
    <div style={{width: "120px", margin: "20px auto"}}>
     <ThemeProvider theme={blueDarkTheme}>
      <ThemedDropdown defaultText="FILTER">
         <DropdownItem title="Date">
           <span>
             <span style={{color: blueDarkTheme.primaryBlueBorder}}>From:</span>
             <span>&nbsp;<i>'year'</i></span>
             <span style={{color: blueDarkTheme.primaryBlueBorder}}>&nbsp;&nbsp;&nbsp;To:&nbsp;</span>
             <span><i>'year'</i></span>
            </span>
         </DropdownItem >
         <DropdownItem title="Genre">
          <span>
            <span style={{color: blueDarkTheme.primaryBlueBorder}}>Genre:</span>
            <span>&nbsp;<i>'genre'</i></span>
          </span>
         </DropdownItem>
      </ThemedDropdown>
      </ThemeProvider>
      </div>
  )
)

storiesOf('CSS Modules Dropdown', module)
.add('Blue dark theme',
  withInfo({
    text: 'String or React Element with docs about my component', 
  })(() =>
    <div style={{width: "120px", margin: "20px auto"}}>
     <DropdownWithCss  defaultText= "Twemoji" dropToLeft="true" toggleWidth="150px" noTopRadius="true">
        <DropdownItem title="Chick">
          <span>
            <span style={{width: "50%", display: "inline-block"}}>Chick</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f423"></i></span>
          </span>
        </DropdownItem >
        <DropdownItem title="Bird">
          <span>
            <span style={{width: "50%", display: "inline-block"}}>Bird</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f426"></i></span>
          </span>
        </DropdownItem >
        <DropdownItem title="Penguin">
          <span>
            <span style={{width: "50%", display: "inline-block"}}>Penguin</span><span style={{width: "50%", display: "inline-block", textAlign:"right"}}><i class="twa twa-2x twa-1f427"></i></span>
          </span>
        </DropdownItem >
      </DropdownWithCss>
    </div>
  )
)
