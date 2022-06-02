import React from "react";
//import ReactDOM from "react-dom";
import MagicDropzone from "react-magic-dropzone";
//import { ci } from 'case-insensitive';
import { AlwaysOnBottomFooter } from "./component/alwaysOnBottomFooter.jsx"
import "./styles.css";
const tf = require('@tensorflow/tfjs');
const weights = '/web_model/model.json';

function downloadasimage(canvasdom) {
  var c = canvasdom;
  var link = document.getElementById('cropImageLink');
  link.setAttribute('download', 'MintyPaper.png');
  link.setAttribute('href', c.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}

const names = ["Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Grey",
  "White",
  "Gold",
  "Silver"
];

export class Tfmd extends React.Component {
  state = {
    model: null,
    preview: "",
    predictions: [],
    lf: "0vw",
    x1x2y1y2: [],//{x1:0.0,x2:0.0,y1:0.0,y2:0.0,},
  };

  componentDidMount() {

    tf.loadGraphModel("/ftmdg/" + this.props.ftmdg + weights).then(model => {
      this.setState({
        model: model,
        lf: this.props.lf,
      });
    });
  }

  onDrop = (accepted, rejected, links) => {
    //document.getElementsByClassName('rs-play')[0].click()
    console.log(accepted, links);
    this.setState({ preview: accepted[0].preview || links[0] });
  };

  cropToCanvas = (image, canvas, ctx) => {
    //document.getElementsByClassName('rs-play')[0].click()
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

    // canvas.width = image.width;
    // canvas.height = image.height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const ratio = Math.min(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
    const newWidth = Math.round(naturalWidth * ratio);
    const newHeight = Math.round(naturalHeight * ratio);
    ctx.drawImage(
      image,
      0,
      0,
      naturalWidth,
      naturalHeight,
      (canvas.width - newWidth) / 2,
      (canvas.height - newHeight) / 2,
      newWidth,
      newHeight,
    );

  };

  onImageChange = e => {
    //document.getElementsByClassName('rs-play')[0].click()
    var c = null;
    var ctx = null;
    //if (ci(e.target.tagName).equals('IMG')) {
    //c = document.getElementById("canvas");
    c = this.canvasB;//TODO:check this
    ctx = c.getContext("2d");
    this.cropToCanvas(e.target, c, ctx);
    //} else {
    //  c = document.getElementById("canvas");
    //   ctx = c.getContext("2d");
    //  console.log(e.target.tagName)
    // }
    let [modelWidth, modelHeight] = this.state.model.inputs[0].shape.slice(1, 3);
    const input = tf.tidy(() => {
      return tf.image.resizeBilinear(tf.browser.fromPixels(c), [modelWidth, modelHeight])
        .div(255.0).expandDims(0);
    });
    this.state.model.executeAsync(input).then(res => {
      //document.getElementsByClassName('rs-play')[0].click()
      // Font options.
      const font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      const [boxes, scores, classes, valid_detections] = res;
      const boxes_data = boxes.dataSync();
      const scores_data = scores.dataSync();
      const classes_data = classes.dataSync();
      const valid_detections_data = valid_detections.dataSync()[0];

      tf.dispose(res)

      var i;
      for (i = 0; i < valid_detections_data; ++i) {
        //document.getElementsByClassName('rs-play')[0].click()
        let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
        var tmpxxyy1122 = { org: { x1: x1, x2: x2, y1: y1, y2: y2, }, mut: {}, klass: "n/a", score: "n/a" }
        x1 *= c.width;
        x2 *= c.width;
        y1 *= c.height;
        y2 *= c.height;
        var tmpxxyy = this.state.x1x2y1y2;
        tmpxxyy1122["mut"] = { x1: x1, x2: x2, y1: y1, y2: y2, };

        const width = x2 - x1;
        const height = y2 - y1;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        tmpxxyy1122["klass"] = klass;
        tmpxxyy1122["score"] = score;

        // Draw the bounding box.
        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x1, y1, width, height);

        // Draw the label background.
        ctx.fillStyle = "#00FFFF";
        const textWidth = ctx.measureText(klass + ":" + score).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x1, y1, textWidth + 4, textHeight + 4);

        tmpxxyy.push(tmpxxyy1122);
        this.setState({
          x1x2y1y2: tmpxxyy,
        });
      }
      for (i = 0; i < valid_detections_data; ++i) {
        //document.getElementsByClassName('rs-play')[0].click()
        let [x1, y1, ,] = boxes_data.slice(i * 4, (i + 1) * 4);
        x1 *= c.width;
        y1 *= c.height;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(klass + ":" + score, x1, y1);

      }
      downloadasimage(c);
    });
  };

  render() {
    return (
      <div className="CamPlusTf">
        <h3>{this.props.ftmdg}</h3>
        <button
          className="wakuwaku"
          onClick={() => {
            var rii = document.getElementsByClassName('WCWC')[1];
            var riiurl = rii.toDataURL('image/jpeg');
            console.log(riiurl);
            this.setState({ preview: riiurl });
          }}>TTTF</button>
        <div className="Dropzone-page">
          {this.state.model ? (
            <MagicDropzone
              className="Dropzone"
              accept="image/jpeg, image/png, .jpg, .jpeg, .png"
              multiple={false}
              onDrop={this.onDrop}
            >
              {this.state.preview ? (
                <img
                  alt="upload preview"
                  onLoad={this.onImageChange}
                  className="Dropzone-img"
                  src={this.state.preview}
                />
              ) : (
                "Choose or drop a file."
              )}
              <canvas id="canvas" width="640" height="640"
                ref={(canvasB) => (this.canvasB = canvasB)} />
            </MagicDropzone>
          ) : (
            <div className="Dropzone">Loading model...</div>
          )}
        </div>
        <AlwaysOnBottomFooter lr={this.state.lf} children={JSON.stringify(this.state.x1x2y1y2)} />
      </div>
    );
  }
}

