let pages = document.querySelector(".slide-itms").children;
let inps = document.querySelectorAll("input");
let allNotifs = document.querySelectorAll(".notif p");
let names = [];
let empty = [];
let n = 0;
let m = 0;
let inp = pages[0].querySelectorAll("input");

function createInp() {
    return inp = pages[n + 1].querySelectorAll("input");
}


function namesInput() {
    for (let i = 0; i < inps.length; i++) {
        names.push(inps[i].name);
    }
    return names

}

function returnInputs() {
    empty = [];
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value === "") {
            empty.push(inp[i].name);
        }
    }

    if (empty.length > 0) {
        return empty;
    } else {
        return true;
    }
}


namesInput();
console.log(returnInputs());

let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");
let slide = document.querySelector(".slide-itms");
let slideChilds = slide.children;
let skip = document.querySelector(".skip");
let page0 = document.querySelector(".page0");
let stepColoring = document.querySelectorAll(".bg-purpule");
let stepNum = document.querySelectorAll(".step-number");
let submit = document.querySelector(".submit");
let notifs = pages[0].querySelectorAll(".notif");

function changeNotifs() {
    return inp = pages[n + 1].querySelectorAll(".notif");
}

// ==========================creation notif inner text====================

for (i=0; i<allNotifs.length; i++){
    allNotifs[i].innerHTML=allNotifs[i].innerHTML + names[i];
}


//====================skip/submit btns==================================
skip.onclick = function () {
    let st1 = document.querySelector(".step1");
    page0.style = "transform: translateY(-100%)";
    slide.style = "top:0";
    st1.querySelector(".bg-purpule").style.animation = "bgChanging 0.7s both";
    document.querySelector(".step2 .step-number .bg-purpule2").style.animation = "bgChanging 0.35s both 0.6s";
    document.querySelector(".step2 .step-number").style.color = "white";
};

submit.onclick = function () {

    if (returnInputs() !== true) {
        return notifications();
    }
    if (returnInputs() === true) {
        stepColoring[stepColoring.length - 1].style.animation = "bgChanging 0.4s both";
        stepNum[stepNum.length - 1].querySelector(".bg-purpule2").style.animation = "bgChanging 0.2s both 0.25s";
        stepNum[stepNum.length - 1].style.color = "white";
        setTimeout(function () {
            document.querySelector(".step-number5 svg").style.display = "block"
        }, 700);
        setTimeout(function () {
            document.querySelector(".forma").style.display="none"
        }, 1500);
        setTimeout(function () {
            document.querySelector(".registered").style.animation="regAnim 1s forwards"
        }, 1500);
        setTimeout(type, 2500);
    }
};

// ======================functions======================================
function toLeft() {
    notifs = changeNotifs(n);
    inp = createInp(n);
    n++;
    slide.style.transform = 'translateX(-' + (n) * parseInt(getComputedStyle(slideChilds[0]).width) + 'px)';
    stepColoring[n].style.animation = "bgChanging 0.7s both";
    stepNum[n + 1].querySelector(".bg-purpule2").style.animation = "bgChanging 0.35s both 0.6s";
    stepNum[n + 1].style.color = "white";
    m--;
    return n;
}

function toRight() {
    m++;
    slide.style.transform = 'translateX(' + (m) * parseInt(getComputedStyle(slideChilds[0]).width) + 'px)';
    stepColoring[n].style.animation = "bgChanging 0.7s both reverse";
    stepNum[n + 1].querySelector(".bg-purpule2").style.animation = "bgChanging 0.35s both 0.6s reverse";
    stepNum[n + 1].style.color = "black";
    n--;
}

function notifications() {
    for (let i = 0; i < inp.length; i++) {
        for (let j = 0; j < empty.length; j++) {
            if (inp[i].name === empty[j]) {
                notifs[i].style.transform = "translateX(0px)";
                inp[i].onfocus = function () {
                    notifs[i].style.transform = "translateX(150%)";
                }
            }
        }
    }
}

function checkFunction() {
    if (returnInputs() !== true) {
        return notifications;
    }
    if (returnInputs() === true) {
        return toLeft;
    }
}

function nextClick() {
    next[n].addEventListener('click', checkFunction());
}

function inpchangings(){inp.forEach(function (inps, index) {
    inps.onchange = function () {
        returnInputs();
        checkFunction();
        nextClick();
    }
})
}

function fncsOnChange() {
    returnInputs();
    checkFunction();
    nextClick();
    inpchangings();
}

// =========================onclicks===================================
prev.forEach(function (btn, index) {
    btn.onclick = toRight;
});

next.forEach(function (btn, index) {
    btn.onclick = fncsOnChange;
});

fncsOnChange();

// ==========================sevagir=====================================

// console.log(slide.getAttribute("style").onchange = fncsOnChange);
// next[n].onclick=fncsOnChange;

