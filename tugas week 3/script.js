let selectedTarget = null;
let selectedColor = null;

let bgColor = "#3f6aa1";
let textColor = "red";

const bgPreview = document.getElementById("bgPreview");
const textPreview = document.getElementById("textPreview");
const modal = document.getElementById("colorModal");
const colorGrid = document.getElementById("colorGrid");

const colors = [
"#ff2b2b","#ff9f1c","#ffe066","#70e000","#5e60ce",
"#b565a7","#e09f3e","#999999","#ffffff",
"#d00000","#ff8800","#ffd000","#38b000","#4361ee",
"#7b2cbf","#ca6702","#666666","#cccccc",
"#9d0208","#dc2f02","#ee9b00","#40916c","#1d3557",
"#6a4c93","#99582a","#343a40","#adb5bd",
"#000000","#2f3e46","#6c757d","#ced4da","#f8f9fa"
];

function generateColors() {
    colors.forEach(color => {
        const div = document.createElement("div");
        div.classList.add("color-item");
        div.style.backgroundColor = color;

        div.addEventListener("click", function() {
            document.querySelectorAll(".color-item")
                .forEach(el => el.classList.remove("active"));

            div.classList.add("active");
            selectedColor = color;
        });

        colorGrid.appendChild(div);
    });
}

generateColors();

bgPreview.addEventListener("click", function() {
    selectedTarget = "background";
    modal.style.display = "block";
});

textPreview.addEventListener("click", function() {
    selectedTarget = "text";
    modal.style.display = "block";
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    modal.style.display = "none";
});

document.getElementById("selectBtn").addEventListener("click", function() {

    if (!selectedColor) return;

    if (selectedTarget === "background") {
        bgColor = selectedColor;
        bgPreview.style.backgroundColor = bgColor;
    } else {
        textColor = selectedColor;
        textPreview.style.backgroundColor = textColor;
    }

    modal.style.display = "none";
});

document.getElementById("saveBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
});