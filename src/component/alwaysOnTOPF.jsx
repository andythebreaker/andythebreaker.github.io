//copy form src/component/backtotop.jsx
import React, { PureComponent } from "react";
import styled from "styled-components";
import Speech from 'react-speech';
/*https://www.npmjs.com/package/react-back-to-top-button*/
const Button = styled.button({
  fontSize: "5px",
  position: "fixed",
  //top: "95vh",//bottom
  top: "0vh",//top
  //left: `${props => (props.lr)}`,
  left: "50vw",//right1/2
  margin: "0vh 0vh 0vw 0vw",
  borderRadius: "0%",
  border: "none",
  opacity: "0.88",
  visibility: "visible",
  cursor: "pointer",
  outline: "none",
  background: "#ffc0cb",
  height: "5vh",
  width: "50vw",
});

export class AlwaysOnTOPF extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      onclickFucn: props.ocf,
    }
  }

  state = {
    isAtRange: false,
  };

  render() {
    return (<div>
      <Button
        className="BTTNF"
        onClick={this.state.onclickFucn}
        style={this.props.style}
      >
        {this.props.children || "[]"}
      </Button><Speech text={this.props.children} voice="Google UK English Female" /></div>
    );
  }
}
