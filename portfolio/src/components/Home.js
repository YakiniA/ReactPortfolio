import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from "../img/MyImage.jpg";

// import Wrapper from './Wrapper';
function Home() {

  // useEffect(() => {
  //     var words = document.getElementsByClassName('word');
  //     var wordArray = [];
  //     var currentWord = 0;

  //     words[currentWord].style.opacity = 1;
  //     for (var i = 0; i < words.length; i++) {
  //     splitLetters(words[i]);
  //     }

  //     function changeWord() {
  //     var cw = wordArray[currentWord];
  //     var nw = currentWord === words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  //     for (var i = 0; i < cw.length; i++) {
  //       animateLetterOut(cw, i);
  //     }

  //     for (var i = 0; i < nw.length; i++) {
  //       nw[i].className = 'letter behind';
  //       nw[0].parentElement.style.opacity = 1;
  //       animateLetterIn(nw, i);
  //     }

  //     currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
  //     }

  //     function animateLetterOut(cw, i) {
  //     setTimeout(function() {
  //       cw[i].className = 'letter out';
  //     }, i*80);
  //     }

  //     function animateLetterIn(nw, i) {
  //     setTimeout(function() {
  //       nw[i].className = 'letter in';
  //       // console.log(nw[i]);
  //     }, 340+(i*80));
  //     }

  //     function splitLetters(word) {
  //     var content = word.innerHTML;
  //     word.innerHTML = '';
  //     var letters = [];
  //     for (var i = 0; i < content.length; i++) {
  //       var letter = document.createElement('span');
  //       letter.className = 'letter';
  //       if (letter[i] === " ") {
  //         letter.push("&nbsp;");
  //       } else{
  //         letter.innerHTML = content.charAt(i);
  //       }
  //       word.appendChild(letter);
  //       letters.push(letter); 
  //     }
  //     wordArray.push(letters);
  //     }

  //     changeWord();
  //     setInterval(changeWord, 4000);

  //   }, [])

  return (
  
      <div id ="home">
        <div className="landing-text">
        <div className="container">
          <div className="row">
              <div className="col-sm-6 order-sm-12 mt-5 text-center">
              {/* 👋🏻 */}
                <div className="homePageHeading"> Hi, I'm </div>
              <p className="homePageHeading"> Yakini Arumuga Kani <br/>
              </p>

              <p>
                <span class="word wisteria">Front-end Developer</span>
                <span class="word belize">Back-end Developer</span>
                <span class="word pomegranate">Software Tester</span>
                {/* <span class="word green">beautiful.</span>
                <span class="word midnight">cheap.</span> */}
              </p>
              </div>

              <div className="col-sm-6 order-sm-1 text-center">
                <img src={myImg} alt="" className="imgResponsive img-circle"></img>
              </div>
          </div>
          </div>
        </div>  
      </div>
  );
  }

export default Home;