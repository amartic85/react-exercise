import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DropdownList, {Dropdown} from '../src/components/Dropdown.js';
import DropdownItem from '../src/components/DropdownItem.js';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { withInfo } from '@storybook/addon-info';

storiesOf('Dropdown', module)
.add('Default style',
  withInfo({
    text: 'String or React Element with docs about my component', 
    propTables: [Dropdown],
    propTablesExclude: [DropdownList]
  })(() =>
    <div style={{width: "120px", margin: "20px auto"}}>
      <DropdownList defaultText="Filter">
         <DropdownItem title="Date">
           <span>
             <span style={{color: "#31B0F4"}}>From:</span>
             <span> <i>"year"</i></span>
             <span style={{color: "#31B0F4"}}> To: </span>
             <span><i>"year"</i></span>
            </span>
         </DropdownItem >
         <DropdownItem title="Genre">
          <span>
            <span style={{color: "#31B0F4"}}>Genre:</span>
            <span> <i>"genre"</i></span>
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
    <DropdownList defaultText="Filter" dropToLeft>
    <DropdownItem title="Date">
    <span>
      <span style={{color: "#31B0F4"}}>From:</span>
      <span> <i>"year"</i></span>
      <span style={{color: "#31B0F4"}}> To: </span>
      <span><i>"year"</i></span>
     </span>
  </DropdownItem >
  <DropdownItem title="Genre">
   <span>
     <span style={{color: "#31B0F4"}}>Genre:</span>
     <span> <i>"genre"</i></span>
   </span>
  </DropdownItem>
    </DropdownList>
    </div>
    )
)
// storiesOf('Dropdown', module)
//   .add('Default', () => (
//     <div style={{width: "200px", margin: "0 auto"}}>
//       <Dropdown defaultText="Filter">
//       <DropdownItem title="Date">
//         <span>From: "year" To: "year"</span>
//       </DropdownItem >
//       <DropdownItem title="Genre">
//         <span>Genre: "genre"</span>
//       </DropdownItem>
//     </Dropdown>
//     </div>
//   ))
//   .add('Left side dropdown', () => (
//     <div style={{width: "200px", margin: "0 auto"}}>
//       <Dropdown defaultText="Filter" dropToLeft="lala">
//       <DropdownItem title="Date">
//         <span>From: "year" To: "year"</span>
//       </DropdownItem >
//       <DropdownItem title="Genre">
//         <span>Genre: "genre"</span>
//       </DropdownItem>
//     </Dropdown>
//     </div>
//   ))
//   .add('with some emoji', () => (
//     <button onClick={action('clicked')}>😀 😎 👍 💯</button>
//   ));