let inp = document.querySelectorAll(".page1 input");
let names = [];
let empty = [];


function namesInput() {
    for (let i = 0; i < inp.length; i++) {
        names.push(inp[i].name);
    }
    return names

}

function returnInputs() {

    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value === "") {
            empty.push(inp[i].name);
        }
    }

    if (empty.length === 0) {
        return true;
    }

    return empty;
}

namesInput();
console.log(returnInputs());

let next=document.querySelectorAll(".next");
let prev=document.querySelectorAll(".prev");
let slide=document.querySelector(".slide-itms");
let slideChilds=slide.children;
let skip=document.querySelector(".skip");
let page0=document.querySelector(".page0");
let stepColoring=document.querySelectorAll(".bg-purpule");
let stepNum=document.querySelectorAll(".step-number");
let submit=document.querySelector("input[type=submit]");
let n=0;
//======================================================
skip.onclick=function(){
    let st1=document.querySelector(".step1");
    page0.style="transform: translateY(-100%)";
    slide.style="top:0";
    st1.querySelector(".bg-purpule").style.animation="bgChanging 0.7s both";
    document.querySelector(".step2 .step-number .bg-purpule2").style.animation="bgChanging 0.35s both 0.6s";
    document.querySelector(".step2 .step-number").style.color="white";
};

// ======================================================
next.forEach(function (btn, index) {
btn.onclick= toLeft;
});

prev.forEach(function (btn, index) {
    btn.onclick= toRight;
});

function toLeft() {
    n++;
    if (slide.style.transform === "") {
        slide.style.transform = 'translateX(-' + getComputedStyle(slideChilds[0]).width + ')';
    } else {
       let space = parseFloat(slide.style.transform.slice(11));
       space -= parseFloat(getComputedStyle(slideChilds[0]).width);
        slide.style.transform = 'translateX(' + space + 'px)';
    }
    stepColoring[n].style.animation="bgChanging 0.7s both";
    stepNum[n+1].querySelector(".bg-purpule2").style.animation="bgChanging 0.35s both 0.6s";
    stepNum[n+1].style.color="white";
}

function toRight() {
    if (slide.style.transform === "") {
        slide.style.transform = 'translateX(' + getComputedStyle(slideChilds[0]).width + ')';
    } else {
        let space = parseFloat(slide.style.transform.slice(11));
        space += parseFloat(getComputedStyle(slideChilds[0]).width);
        slide.style.transform = 'translateX(' + space + 'px)';
    }
    stepColoring[n].style.animation="bgChanging 0.7s both reverse";
    stepNum[n+1].querySelector(".bg-purpule2").style.animation="bgChanging 0.35s both 0.6s reverse";
    stepNum[n+1].style.color="black";
    n--;
}

submit.onclick=function () {
    stepColoring[stepColoring.length-1].style.animation="bgChanging 0.4s both";
    stepNum[stepNum.length-1].querySelector(".bg-purpule2").style.animation="bgChanging 0.2s both 0.25s";
    stepNum[stepNum.length-1].style.color="white";
    setTimeout(document.querySelector(".step-number5 svg").style.display="block", 1500);
};