let month = document.querySelector("#month");
let day = document.querySelector("#day");
let year = document.querySelector("#year");

createMonth();
createYear();
createDays();

function createYear() {
    for (n = new Date().getFullYear(); n >= 1900; n--) {
        elemYear = document.createElement("option");
        textYear = document.createTextNode(n);
        elemYear.appendChild(textYear);
        elemYear.setAttribute("value", n);
        year.appendChild(elemYear);
    }
}

function createMonth() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (i = 0; i < months.length; i++) {
        elem = document.createElement("option");
        text = document.createTextNode(months[i]);
        elem.appendChild(text);
        elem.setAttribute("value", i);
        month.appendChild(elem);
    }
}

function createDays() {
    for (i=1; i<=31; i++){
        elemDay = document.createElement("option");
        textDay = document.createTextNode(i);
        elemDay.appendChild(textDay);
        elemDay.setAttribute("value", i);
        elemDay.classList.add("active");
        day.appendChild(elemDay);
    }
}

function monthchange() {

    n = new Date(year.value, Number(month.value) + 1, 0).getDate();
    m = day.children.length;

    for (i = 0; i < m; i++) {
        day.children[i].classList.remove("active");
    }

    for (i = 0; i < n; i++) {
        day.children[i].classList.add("active");
    }
}