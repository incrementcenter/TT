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

