import React from 'react';
import PropTypes from 'prop-types'




const Tab = props => {
  // console.log(props)

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      if (props.tab === props.selectedTab) {
        return (
          <div
            className={'tab active-tab'}
            onClick={(tab) => {props.selectTabHandler(tab)}
              /* Replace this dummy click handler function with your selectTabHandler function from props 
               you'll need to pass the `tab` in as an argument to this handler. */
            }
          >
            {props.tab.toUpperCase()}
          </div>
        );
      }
      else {

      
  return (
      <div
        className={'tab'}
        onClick={(tab) => {props.selectTabHandler(tab)}
          /* Replace this dummy click handler function with your selectTabHandler function from props 
            you'll need to pass the `tab` in as an argument to this handler. */
        }
      >
        {props.tab.toUpperCase()}
      </div>
    );
    };
  }

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired

}

export default Tab;
