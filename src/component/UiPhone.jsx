import React/*, { Component, useState }*/ from "react";
//import { Rating, Message } from "semantic-ui-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./../css/swp.css"

const MySwal = withReactContent(Swal);
var globHadTrig = false;
export class UiPhone extends React.Component {
  componentDidMount() {
    //console.log("AppMain.componentDidMount");
    var mainuiwindows = document.getElementsByClassName("Sw222")[0]; //you can only have one of this!!!
    console.log(mainuiwindows);
    if (!globHadTrig) {
      globHadTrig = true;
      mainuiwindows.click();
    }
  }

  render() {
    return (
      <div>
        <button
          className="Sw222"
          onClick={() => {
            MySwal.fire({
              position: 'bottom',
              allowOutsideClick: false,
              background: '#ffffff00',
              backdrop: 'none',
              //showDenyButton: true,//TODO no use default bton
              //showCancelButton: true,
              //confirmButtonText: '快門',
              //denyButtonText: `重置`,
              title: <p className='glow'>teststring</p>,
              html: `<h6 class="TimepickerusingSwiperjs glow">{"L0":4,"L0":8,"L0":7,"L0":10}</h6>
                <div class="picker arrows glow">
                  <div class="swiper-container hours">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">0</div>
                      <div class="swiper-slide">1</div>
                      <div class="swiper-slide">2</div>
                      <div class="swiper-slide">3</div>
                      <div class="swiper-slide">4</div>
                      <div class="swiper-slide">5</div>
                      <div class="swiper-slide">6</div>
                      <div class="swiper-slide">7</div>
                      <div class="swiper-slide">8</div>
                      <div class="swiper-slide">9</div>
                      <div class="swiper-slide">10</div>
                      <div class="swiper-slide">11</div>
                    </div>
                  </div>
                  <div class="swiper-container minutes">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">0</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">2</div>
                    <div class="swiper-slide">3</div>
                    <div class="swiper-slide">4</div>
                    <div class="swiper-slide">5</div>
                    <div class="swiper-slide">6</div>
                    <div class="swiper-slide">7</div>
                    <div class="swiper-slide">8</div>
                    <div class="swiper-slide">9</div>
                    <div class="swiper-slide">10</div>
                    <div class="swiper-slide">11</div>
                    </div>
                  </div>
                  <div class="swiper-container seconds">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide">0</div>
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">2</div>
                    <div class="swiper-slide">3</div>
                    <div class="swiper-slide">4</div>
                    <div class="swiper-slide">5</div>
                    <div class="swiper-slide">6</div>
                    <div class="swiper-slide">7</div>
                    <div class="swiper-slide">8</div>
                    <div class="swiper-slide">9</div>
                    <div class="swiper-slide">10</div>
                    <div class="swiper-slide">11</div>
                    </div>
                  </div><div class="swiper-container tolerance">
                  <div class="swiper-wrapper">
                  <div class="swiper-slide">0</div>
                  <div class="swiper-slide">1</div>
                  <div class="swiper-slide">2</div>
                  <div class="swiper-slide">3</div>
                  <div class="swiper-slide">4</div>
                  <div class="swiper-slide">5</div>
                  <div class="swiper-slide">6</div>
                  <div class="swiper-slide">7</div>
                  <div class="swiper-slide">8</div>
                  <div class="swiper-slide">9</div>
                  <div class="swiper-slide">10</div>
                  <div class="swiper-slide">11</div>
                  </div>
                </div>
                  <div class="vizor" ></div>
                <button id="not_react_comp_time_swipe_init" style="display:none;" onclick="swipeadd()"></button>
                <div class="fpu"></div>
                <button class="ui primary button">
  Save
</button>
<button class="ui button">
  Discard
</button>
                </div>
                `,
              showCloseButton: true,
              didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                var delayInMilliseconds = 10000; //10 second
                function back_to_top() {
                  setTimeout(function () {
                    //your code to be executed after 10 second
                    if (document.getElementsByClassName('back-to-top').length === 0) {
                      back_to_top();
                    }
                    else {
                      //var flowbubble=document.createElement('div');
                      //flowbubble.classList.add('rmsw2fb');
                      //flowbubble.innerHTML=document.getElementsByClassName('back-to-top')[0].outerHTML;
                      var mainFPU = document.getElementsByClassName('back-to-top')[0];
                      var fpu = document.getElementsByClassName('fpu');
                      //for (let index = 0; index < fpu.length; index++) {
                      //const elementfpu = fpu[index];
                      //elementfpu//...
                      //}
                      fpu[0].innerHTML = mainFPU.outerHTML;
                      fpu[0].getElementsByTagName('button')[0].addEventListener('click', () => {
                        mainFPU.click();
                        //TODO這裡感覺也不用切換了
                      });
                    }
                  }, delayInMilliseconds);
                }
                back_to_top();
                document
                  .getElementById("not_react_comp_time_swipe_init")
                  .click();
                //MySwal.showLoading();
              },
            }).then(() => {
              //return MySwal.fire(<p>Shorthand works too</p>);
              //if (result.isConfirmed) {
                //Swal.fire('Saved!', '', 'success')
              //} else if (result.isDenied) {
                //Swal.fire('Changes are not saved', '', 'info')
              //}else{
                document.getElementById("root").style.overflow = "scroll";
              //}
            });
          }}
        >
          SW222
        </button>
      </div>
    );
  }
}
