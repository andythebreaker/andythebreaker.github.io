import React, { PureComponent } from "react";
import styled from "styled-components";
/*https://www.npmjs.com/package/react-back-to-top-button*/
const Button = styled.button({
  fontSize: "5px",
  position: "fixed",
  //top: "89vh",//bottom
  top: "0vh",
  left: "0vw",
  //left: "89vw",//right
  margin: "1vh 1vh 1vw 1vw",
  borderRadius: "90%",
  border: "none",
  opacity: "0.99",
  visibility: "visible",
  cursor: "pointer",
  outline: "none",
  background: "#ffc0cb",
  height: "8em",
  width: "8em",
});

export class BackToTop extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      onclickFucn: props.ocf
    }
  }

  state = {
    isAtRange: false,
  };

  render() {
    return (
      <Button
        className="back-to-top"
        onClick={this.state.onclickFucn}
        style={this.props.style}
      >
        {this.props.children || "翻轉鏡頭"}
      </Button>
    );
  }
}
