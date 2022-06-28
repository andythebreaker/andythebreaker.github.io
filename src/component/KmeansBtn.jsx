import React from "react";
//import $ from 'jquery';
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { PieChart } from "react-minimal-pie-chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
//import TableContainer from "@mui/material/TableContainer";
//import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import Paper from "@mui/material/Paper";
import { MyBtnComp } from "./MyBtn.jsx";
//-import { DebugDownload } from './../functionalUnit/debugDownload.js'
//import { ImgStrip } from "./ImageStrip.jsx";
//import ReactJson from "react-json-view";
import {
  ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray,
  MatrixStatisticsOccurrences,
} from "../functionalUnit/ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray.js";
import { RateNct } from "./RateNct.jsx";
import HorizontalScroll from "react-horizontal-scrolling";
import * as tf from '@tensorflow/tfjs'
import * as sk from 'scikitjs'
//var randomstring = require("randomstring");
var pixels = require("image-pixels");

/*                                     .o8                                                .             o8o                         
                                    "888                                              .o8             `"'                         
oooo d8b  .oooo.   ooo. .oo.    .oooo888   .ooooo.  ooo. .oo.  .oo.         .oooo.o .o888oo oooo d8b oooo  ooo. .oo.    .oooooooo 
`888""8P `P  )88b  `888P"Y88b  d88' `888  d88' `88b `888P"Y88bP"Y88b       d88(  "8   888   `888""8P `888  `888P"Y88b  888' `88b  
 888      .oP"888   888   888  888   888  888   888  888   888   888       `"Y88b.    888    888      888   888   888  888   888  
 888     d8(  888   888   888  888   888  888   888  888   888   888       o.  )88b   888 .  888      888   888   888  `88bod8P'  
d888b    `Y888""8o o888o o888o `Y8bod88P" `Y8bod8P' o888o o888o o888o      8""888P'   "888" d888b    o888o o888o o888o `8oooooo.  
                                                                                                                       d"     YD  
                                                                                                                       "Y88888P'  
                                                                                                                                  */
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

sk.setBackend(tf)

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      canvasA: {
        canvasWidth: 10,
        canvasHeight: 10,
        canvasURL: "./logo512.png", //前端可視路徑
        pixW: -87,
        pixH: -87,
        nClustersT: props.nClustersT,
        pieDataNum: [],
      },
      ystrip: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      xstrip: new Array(45),
    };
  }

  cpcNtc(ntr, lb) {
    var tmp_stat = lb.state.canvasA;
    tmp_stat["nClustersT"] = ntr;
    lb.setState({
      canvasA: tmp_stat,
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      canvasA: {
        canvasWidth: 10,
        canvasHeight: 10,
        canvasURL: "./logo512.png", //前端可視路徑
        pixW: -87,
        pixH: -87,
        nClustersT: this.state.canvasA.nClustersT,
        pieDataNum: [],
      },
      ystrip: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      xstrip: new Array(45),
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    const context = this.canvasA.getContext("2d");

    const image = new Image();
    image.src = this.state.canvasA.canvasURL;
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasA.width, this.canvasA.height);
    };
  }

  onchangeW(aaa) {
    //console.log(aaa.target);
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasWidth"] = parseFloat(aaa.value);
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeH(aaa) {
    //console.log(aaa.target);
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasHeight"] = parseFloat(aaa.value);
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeURL(aaa) {
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasURL"] = aaa.value;
    this.setState({
      canvasA: tmp_stat,
    });
  }

  onchangeRefresh(et) {
    console.log("➰➰➰");
    /*function DebugDownload(url) {
      console.log("debug"+url)
      var a = document.createElement('a');
      a.href = url;
      a.download = randomstring.generate() + ".png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      a.remove();
    }
    DebugDownload(et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText);*/
    var tmp_stat = this.state.canvasA;
    tmp_stat["canvasWidth"] =
      et.parentNode.parentNode.getElementsByClassName("rtW")[0].innerText;
    tmp_stat["canvasHeight"] =
      et.parentNode.parentNode.getElementsByClassName("rtH")[0].innerText;
    tmp_stat["canvasURL"] =
      et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText;
    this.setState({
      canvasA: tmp_stat,
    });
    this.dKM(this.dKMR);
    console.log("🍴🍴");
  }

  dokmeans(et) {
    console.log("dokmeans");
    var imgurl =
      et.parentNode.parentNode.getElementsByClassName("rtU")[0].innerText;
    async function dokmeansAsync(t) {
      function howMuchIsRepeated_es6(arr, colorarray) {
        //do not reuse
        var count = MatrixStatisticsOccurrences(arr);

        for (let i = 0; i < count.length; i++) {
          console.log(`Value ${count[i][0]} is repeated ${count[i][1]} times`);

          /////////////////////////////
          var tmp_statz = t.state.canvasA;
          tmp_statz["pieDataNum"].push({
            title: count[i][0],
            value: count[i][1],
            color: RGB2HTML(
              colorarray[i][0],
              colorarray[i][1],
              colorarray[i][2]
            ),
          });
          t.setState({
            canvasA: tmp_statz,
          });
          /////////////////////////////////
        }
      }
      var { data, width, height } = await pixels(imgurl);
      /////////////////////////////
      var tmp_stat = t.state.canvasA;
      tmp_stat["pixW"] = width;
      tmp_stat["pixH"] = height;
      t.setState({
        canvasA: tmp_stat,
      });
      ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray(
        data,
        t.state.canvasA.nClustersT,
        (d, X) => {
          console.log(d);
          var stk = [];
          for (let qq = 0; qq < t.state.canvasA.nClustersT; qq++) {
            stk.push([0, 0, 0]); //init length
          }
          X.forEach((element, di) => {
            //TODO:需要優化!!!
            stk[d[di]][0] = (element[0] + stk[d[di]][0]) / 2.0;
            stk[d[di]][1] = (element[1] + stk[d[di]][1]) / 2.0;
            stk[d[di]][2] = (element[2] + stk[d[di]][2]) / 2.0;
          });
          console.log(stk);
          howMuchIsRepeated_es6(d.flat(), stk);
        }
      );
    }
    dokmeansAsync(this);
  }

  fucnImgStripDo() {
    console.log("fucnImgStripDo");
    var transThis = this;
    function vStrip(dd, cc) {
      var tmp_stat = transThis.state.ystrip;
      tmp_stat[dd] = cc;
      transThis.setState({
        ystrip: tmp_stat,
      });
    }
    for (let i = 0; i < 10; i++) {
      var clipConf = {
        x: 0,
        y: i * Math.round(this.state.canvasA.pixH / 10),
        width: this.state.canvasA.pixW,
        height: !(i + 1 < 10)
          ? this.state.canvasA.pixH -
          i * Math.round(this.state.canvasA.pixH / 10)
          : Math.round(this.state.canvasA.pixH / 10),
      };
      console.log(clipConf);

      pixels(
        this.state.canvasA.canvasURL,
        {
          clip: clipConf,
        },
        function (cbp0, cbp) {
          console.log("條狀", cbp0, cbp.data, cbp.width, cbp.height);
          ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray(
            cbp.data,
            5,
            (d, X) => {
              var countD = MatrixStatisticsOccurrences(d);
              var arr2 = newArrayWithValue(0, countD.length);
              countD.forEach((el2) => {
                arr2[el2[0]] = el2[1] || -1; //TODO:這裡因為他的分組有時候會發生分了一組但是這一個一組裡面並沒有任何的元件所以這裡我們在找尋最大的組別的時候會去省略那一些裡面並沒有任何元件的組別但是總的來說這一個分組會產生沒有任何一個人在組別裡面的問題需要被解決
              });
              console.log(countD, arr2);
              var max = Math.max(...arr2);
              //https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
              var indexMax = arr2.indexOf(max);
              console.log("這一個長條的顏色是", indexMax);
              //TODO演算法進步
              var avgC = [0, 0, 0];
              X.forEach((color33, ci) => {
                if (d[ci] === indexMax) {
                  avgC[0] = (avgC[0] + color33[0]) / 2;
                  avgC[1] = (avgC[1] + color33[1]) / 2;
                  avgC[2] = (avgC[2] + color33[2]) / 2;
                }
              });
              vStrip(i, avgC);
            }
          );
        }
      );
    }
  }

  fucnImgStripHZ() {
    var transThis = this;
    function vStrip(dd, cc) {
      var tmp_stat = transThis.state.xstrip;
      tmp_stat[dd] = cc;
      transThis.setState({
        xstrip: tmp_stat,
      });
    }
    for (let i = 0; i < 45; i++) {
      var clipConf = {
        x: i * Math.round(this.state.canvasA.pixW / 45),
        y: this.state.canvasA.pixH * (4.0 / 10.0),
        width: !(i + 1 < 45)
          ? this.state.canvasA.pixW -
          i * Math.round(this.state.canvasA.pixW / 45)
          : Math.round(this.state.canvasA.pixW / 45),
        height: this.state.canvasA.pixH * (2.0 / 10.0),
      };
      console.log(clipConf);

      pixels(
        this.state.canvasA.canvasURL,
        {
          clip: clipConf,
        },
        function (cbp0, cbp) {
          //console.log("條狀", cbp0, cbp.data, cbp.width, cbp.height);
          ConvertImageContainingTransparentPrimaryColorsToGroupedClassArray(
            cbp.data,
            14,
            (d, X) => {
              var countD = MatrixStatisticsOccurrences(d);
              var arr2 = newArrayWithValue(0, countD.length);
              countD.forEach((el2) => {
                arr2[el2[0]] = el2[1] || -1; //TODO:這裡因為他的分組有時候會發生分了一組但是這一個一組裡面並沒有任何的元件所以這裡我們在找尋最大的組別的時候會去省略那一些裡面並沒有任何元件的組別但是總的來說這一個分組會產生沒有任何一個人在組別裡面的問題需要被解決
              });
              console.log(countD, arr2);
              var max = Math.max(...arr2);
              //https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
              var indexMax = arr2.indexOf(max);
              console.log("這一個長條的顏色是", indexMax);
              //TODO演算法進步
              var avgC = [0, 0, 0];
              X.forEach((color33, ci) => {
                if (d[ci] === indexMax) {
                  avgC[0] = (avgC[0] + color33[0]) / 2;
                  avgC[1] = (avgC[1] + color33[1]) / 2;
                  avgC[2] = (avgC[2] + color33[2]) / 2;
                }
              });
              vStrip(i, avgC);
            }
          );
        }
      );
    }
  }

  dKM(et) {
    var tmp_stat = this.state.canvasA;
    tmp_stat["pieDataNum"] = [];
    this.setState({
      canvasA: tmp_stat,
    });
    this.dokmeans(et);
  }

  render() {
    let listsHZ = this.state.xstrip.map(function (l, i) {
      return (
        <td key={i} style={{ backgroundColor: RGB2HTML(l[0], l[1], l[2]) }}>
          <h6 style={{ transform: "rotate(-90deg)", width: "1vw" }}>{l}</h6>
        </td>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <canvas
                className="WCWC"
                ref={(canvasA) => (this.canvasA = canvasA)}
                width={this.state.canvasA.canvasWidth}
                height={this.state.canvasA.canvasHeight}
              />
              <button className="downloadTcanvas" onClick={(e) => {
                console.log(`
d ss      sSSSs   d  d  b d s  b d        sSSSs   d s.   d ss    
S   ~o   S     S  S  S  S S  S S S       S     S  S  ~O  S   ~o  
S     b S       S S  S  S S   SS S      S       S S   'b S     b 
S     S S       S S  S  S S    S S      S       S S sSSO S     S 
S     P S       S S  S  S S    S S      S       S S    O S     P 
S    S   S     S   S  S S S    S S       S     S  S    O S    S  
P ss"     "sss"     "ss"S P    P P sSSs   "sss"   P    P P ss"
                  `);
                /* console.log($(e.target).closest('.TLABLFD').text());
                 console.log($(e.target).closest('.TLABLFD'));
                 console.log($(e.target));*/
                //console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('TLABLFD'));
                var downloadcanvasTMP = document.createElement('a');
                downloadcanvasTMP.href = this.canvasA.toDataURL("image/png");
                //TODO:FIX HARD parentElement
                downloadcanvasTMP.download = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('TLABLFD')[0].innerText + "_downloadcanvasT_" + String(makeid(7)) + ".png";
                document.body.appendChild(downloadcanvasTMP);
                downloadcanvasTMP.click();
                // document.body.removeChild(downloadcanvasTMP);
                // downloadcanvasTMP.remove();

                //以上區間已棄用
              }}></button>
            </td>
            <td>
              <RateNct nctNrt={this.state.canvasA.nClustersT} cpc={this} />
              <div style={{ transform: "scale(0.1)" }}>
                <p>width</p>
                <input
                  type="number"
                  value={this.state.canvasA.canvasWidth}
                  onChange={(e) => {
                    this.onchangeW(e.target);
                  }}
                />
                <p>height</p>
                <input
                  type="number"
                  value={this.state.canvasA.canvasHeight}
                  onChange={(e) => {
                    this.onchangeH(e.target);
                  }}
                />
                <input
                  className="reactTransImagePath"
                  type="text"
                  value={this.state.canvasA.canvasURL}
                  onChange={(e) => {
                    this.onchangeURL(e.target);
                  }}
                />
              </div>
              <Stack spacing={2} direction="row">
                <Button
                  ref={(dKMR) => (this.dKMR = dKMR)}
                  color="secondary"
                  variant="text"
                  style={{
                    background: "#ddb98b",
                    height: "0.1vh",
                    padding: "10 0 0 0vh",
                  }}
                  onClick={(e) => {
                    this.dKM(e.target);
                    console.log("🍚🍚");
                  }}
                >
                  dokmeans
                </Button>
              </Stack>
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography className="rtW">
                    {this.state.canvasA.canvasWidth}
                  </Typography>
                  <Typography className="rtH">
                    {this.state.canvasA.canvasHeight}
                  </Typography>
                  <Typography className="rtU">
                    {this.state.canvasA.canvasURL}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="reactTransRefresh"
                    onClick={(e) => {
                      this.onchangeRefresh(e.target);
                    }}
                    size="small"
                  >
                    <Typography> 強制更新</Typography>
                  </Button>
                </CardActions>
              </Card>
            </td>
            <td>
              <MyBtnComp
                parrentThis={this}
                showText={<Typography>切割影像長條</Typography>}
                fucnSelect="vt"
              />
              <MyBtnComp
                parrentThis={this}
                showText={<Typography>切割水平影像</Typography>}
                fucnSelect="hz"
              />
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Chip label="寬" />
                        <Chip label={this.state.canvasA.pixW} />
                        <Chip label="高" />
                        <Chip label={this.state.canvasA.pixH} />
                        <Chip label="nClusters" />
                        <Chip label={this.state.canvasA.nClustersT} />
                      </Stack>{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <PieChart
                        style={{ height: "14vh" }}
                        data={this.state.canvasA.pieDataNum}
                      />
                    </TableCell>
                    <TableCell>
                      <h5>lab</h5><h5 className="step_through_the_iron_shoes_and_find_nowhere">
                        {JSON.stringify(findLargePie(this.state.canvasA.pieDataNum))}</h5>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </td>
            <td>
              <table>
                <thead>
                  <tr>
                    <td>垂直分色</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[0][0],
                          this.state.ystrip[0][1],
                          this.state.ystrip[0][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[0]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[1][0],
                          this.state.ystrip[1][1],
                          this.state.ystrip[1][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[1]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[2][0],
                          this.state.ystrip[2][1],
                          this.state.ystrip[2][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[2]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[3][0],
                          this.state.ystrip[3][1],
                          this.state.ystrip[3][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[3]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[4][0],
                          this.state.ystrip[4][1],
                          this.state.ystrip[4][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[4]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[5][0],
                          this.state.ystrip[5][1],
                          this.state.ystrip[5][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[5]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[6][0],
                          this.state.ystrip[6][1],
                          this.state.ystrip[6][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[6]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[7][0],
                          this.state.ystrip[7][1],
                          this.state.ystrip[7][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[7]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[8][0],
                          this.state.ystrip[8][1],
                          this.state.ystrip[8][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[8]}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: RGB2HTML(
                          this.state.ystrip[9][0],
                          this.state.ystrip[9][1],
                          this.state.ystrip[9][2]
                        ),
                      }}
                    >
                      {this.state.ystrip[9]}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <h6>水平切割</h6>
              <HorizontalScroll>
                <table>
                  <tbody>
                    <tr>{listsHZ}</tr>
                  </tbody>
                </table>
              </HorizontalScroll>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function RGB2HTML(red, green, blue) {
  var rr = Math.round(red);
  var gg = Math.round(green);
  var bb = Math.round(blue);
  var rs = rr.toString(16).length < 2 ? "0" + rr.toString(16) : rr.toString(16);
  var gs = gg.toString(16).length < 2 ? "0" + gg.toString(16) : gg.toString(16);
  var bs = bb.toString(16).length < 2 ? "0" + bb.toString(16) : bb.toString(16);
  /*console.log(rr, gg, bb);
  console.log(rr.toString(16), gg.toString(16), bb.toString(16));
  console.log("#" + rs + gs + bs);*/
  return "#" + rs + gs + bs;
}

function newArrayWithValue(valueTarget, arrayLength) {
  //https://stackoverflow.com/questions/2044760/default-array-values
  var tmp = [];
  while (arrayLength) tmp[--arrayLength] = valueTarget;
  return tmp;
}

function hexToRgb(hex) {//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function findLargePie(pieArray) {
  /*title: count[i][0],
            value: count[i][1],
            color: RGB2HTML(
              colorarray[i][0],
              colorarray[i][1],
              colorarray[i][2]*/
  var tmpL = 0;
  var tmpI = -1;
  if (pieArray && pieArray.length > 0) {
    pieArray.forEach((item_pa, index_pa) => {//TODO優化演算法
      if (tmpL < item_pa.value) { tmpL = item_pa.value; tmpI = index_pa }
    });
    console.log(tmpL, tmpI);
    return (rgb2lab([hexToRgb(pieArray[tmpI].color).r,
    hexToRgb(pieArray[tmpI].color).g,
    hexToRgb(pieArray[tmpI].color).b]));
  } else { return ([0, 0, 0]) }
}

/*https://cdn.jsdelivr.net/gh/antimatter15/rgb-lab@master/color.js*/

// the following functions are based off of the pseudocode
// found on www.easyrgb.com
/*
function lab2rgb(lab) {
  var y = (lab[0] + 16) / 116,
    x = lab[1] / 500 + y,
    z = y - lab[2] / 200,
    r, g, b;

  x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16 / 116) / 7.787);
  y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16 / 116) / 7.787);
  z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16 / 116) / 7.787);

  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.2040 + z * 1.0570;

  r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1 / 2.4) - 0.055) : 12.92 * r;
  g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1 / 2.4) - 0.055) : 12.92 * g;
  b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1 / 2.4) - 0.055) : 12.92 * b;

  return [Math.max(0, Math.min(1, r)) * 255,
  Math.max(0, Math.min(1, g)) * 255,
  Math.max(0, Math.min(1, b)) * 255]
}
*/

function rgb2lab(rgb) {
  var r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    x, y, z;

  r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = (x > 0.008856) ? Math.pow(x, 1 / 3) : (7.787 * x) + 16 / 116;
  y = (y > 0.008856) ? Math.pow(y, 1 / 3) : (7.787 * y) + 16 / 116;
  z = (z > 0.008856) ? Math.pow(z, 1 / 3) : (7.787 * z) + 16 / 116;

  return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
}
/*
// calculate the perceptual distance between colors in CIELAB
// https://github.com/THEjoezack/ColorMine/blob/master/ColorMine/ColorSpaces/Comparisons/Cie94Comparison.cs

function deltaE(labA, labB) {
  var deltaL = labA[0] - labB[0];
  var deltaA = labA[1] - labB[1];
  var deltaB = labA[2] - labB[2];
  var c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  var c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  var deltaC = c1 - c2;
  var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  var sc = 1.0 + 0.045 * c1;
  var sh = 1.0 + 0.015 * c1;
  var deltaLKlsl = deltaL / (1.0);
  var deltaCkcsc = deltaC / (sc);
  var deltaHkhsh = deltaH / (sh);
  var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}
*/
