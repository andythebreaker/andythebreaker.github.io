import React/*, { Component, useState }*/ from "react";
import AppSubMain from './AppSubMain';
import { Tfmd } from "./Tfmd.js";
import { BackToTop } from "./component/backtotop.jsx"
import "./css/backtotop.css";
import Webcam from "react-webcam";
import "./css/appMain.css"
import "./css/webcam.css"

/*const videoConstraints = {
  width: 1280,
  height: 720,
};*/
//videoConstraints={videoConstraints}
export function AppMain(props) {

  const [deviceId, /*setDeviceId*/] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  //render() {
  return (<div className="fullpage">
    <AppSubMain />
    <>
      {devices.map((device, key) => (
        <div key={key}>
          {device.label || `Device ${key + 1}`}
          <Webcam
          className="webcamcss webcamMain"
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
            screenshotFormat="image/jpeg"
            width={window.innerWidth}
          >
            {({ getScreenshot }) => (
              <button
                onClick={() => {
                  const imageSrc = getScreenshot();
                  //console.log(imageSrc);
                  //TODO
                  //this.setState({ preview: imageSrc });
                  document.getElementById("cvstart0BTON").innerText = imageSrc;
                  document.getElementById("cvstart0BTON").click();
                }}
                onLoadedMetadata={() => {
                  console.log("load metadata");
                }}
                onPlay={() => {
                  console.log("on play~~");
                }}
              >
                Capture photo
              </button>
            )}
          </Webcam>
        </div>
      ))}
    </>
    <Tfmd ftmdg="ncb" />
    <Tfmd ftmdg="wcb" />
    <BackToTop ocf={()=>{console.log("pink button")}}/>
  </div>);
  //}
}