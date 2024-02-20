let accordion = document.getElementsByClassName("accordion");
let answer = document.getElementsByClassName("answer")
let activeAccordion = document.getElementsByClassName("accordion active");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    let curAns = this.nextElementSibling;
    // if pannel is already open - minimize
    if (curAns.style.maxHeight) {
        //minifies current pannel if already open
        curAns.style.maxHeight = null;
        //removes the 'active' class as toggle didnt work on browsers apart of chrome
        this.classList.remove("active");
    } else { //pannel isn't open...
        //goes through the buttons and removes the 'active' CSS (+ and -)
        for (var j = 0; j < activeAccordion.length; j++) {
            activeAccordion[j].classList.remove("active");
        }
        //goes through and removes 'activ' from the CSS, also minifies any 'answers' that might be open
        for (var k = 0; k < answer.length; k++) {
            this.classList.remove("active");
            answer[k].style.maxHeight = null;
        }
        //opens the specified pannel
        curAns.style.maxHeight = curAns.scrollHeight + "px";
        //adds the 'active' addition to the CSS
        this.classList.add("active");
    }
  });
}