/*
  - This HOC adds toggle (on/off) feature to any component.
  - It tracks toggle state (true/false).
  - On toggle, it sends +40 or -40 points to the parent using on_complete.
*/

import React from "react";

export default function ToggleBtn(WrappedComponent, initial = false) {
  
  return class ToggleBtn extends React.Component{
    state = { 
      value: initial 
    };

    toggle = () => {
      this.setState((prev) => {
        const next = !prev.value;
        // console.log("new value =", next);
        if (typeof this.props.on_complete === "function") {
          this.props.on_complete(next ? +40 : -40);
        }
        return { value: next };
      });
    };

    render(){

      return(
        
        <WrappedComponent
          {...this.props}
          value={this.state.value}
          toggle={this.toggle}
        />
      );
    }
  };
}
