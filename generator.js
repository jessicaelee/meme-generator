//SET VARIABLES
const picture = document.getElementById("url");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

// CLEAR BUTTON
document.getElementById("reset").onclick = clearFields;

//when you click it, the function is getting called

function clearFields() {
    picture.value = null;
    topText.value = "";
    bottomText.value = "";
    console.log("button works");
}

//SUBMIT INPUT

let history = document.getElementById("meme-library"); //typeof = object

document.getElementById("submit").addEventListener("click", addMeme);

function addMeme() {
    return history.appendChild(createMeme());
}

function createMeme() {
    let el = document.createElement("div"); //create the div
    el.setAttribute("position", "relative");
    el.setAttribute("class", "created-meme");
    el.appendChild(addImage());
    if (document.getElementById("top-text").value !== null) {
        el.appendChild(addTopText());
    }
    if (document.getElementById("bottom-text").value !== null) {
        el.appendChild(addBottomText());
    }
    el.addEventListener("click", function() {
        deleteMeme(el);
    });
    el.addEventListener("mouseenter", function() {
        askToDelete(el);
    });
    el.addEventListener("mouseleave", function() {
        removeAskToDelete();
    });
    clearInput();
    return el; // return the meme to add memex
}

function addImage() {
    let image = document.createElement("IMG");
    image.setAttribute("src", document.getElementById("url").value);
    return image;
}

function addTopText() {
    let topText = document.createElement("p");
    topText.setAttribute("id", "top-text-input");
    topText.innerHTML = document.getElementById("top-text").value;
    return topText;
}

function addBottomText() {
    let bottomText = document.createElement("p");
    bottomText.setAttribute("id", "bottom-text-input");
    bottomText.innerHTML = document.getElementById("bottom-text").value;
    bottomText.setAttribute("position", "absolute");
    return bottomText;
}

function clearInput() {
    document.getElementById("url").value = "";
    document.getElementById("top-text").value = "";
    document.getElementById("bottom-text").value = "";
}

// DELETE MEME

function deleteMeme(el) {
    el.remove();
}

const deleteMessage = "Click to delete meme.";

function askToDelete(el) {
    let deleteText = document.createElement("p");
    deleteText.setAttribute("id", "delete-text");
    deleteText.innerHTML = "Click to delete meme.";
    deleteText.setAttribute("position", "absolute");
    return el.appendChild(deleteText);
}

function removeAskToDelete(el) {
    document.getElementById("delete-text").remove();
}
