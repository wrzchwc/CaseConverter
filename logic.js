let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveText = document.getElementById("save-text-file");
let textarea = document.querySelector("textarea");

function getTextareaContent() {
    return textarea.value;
}

lowerCase.addEventListener("click", function () {
    textarea.value = getTextareaContent().toLowerCase();
});

upperCase.addEventListener("click", function () {
    textarea.value = getTextareaContent().toUpperCase();
});

properCase.addEventListener("click", function () {
    let content = getTextareaContent().split(" ");
    textarea.value = content.map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
});

sentenceCase.addEventListener("click", function () {
    let content = getTextareaContent().split(". ");
    textarea.value = content.map(function (word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }).join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

saveText.addEventListener("click", function () {
    download("text.txt",getTextareaContent());
});