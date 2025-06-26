let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

// Correct win patterns
const winPattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

// Function to check winner
const checkwinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
};

// Function to reset the game
const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

// Function to disable boxes after a win
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to enable boxes (reset state)
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Show winner message
const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            checkwinner();
        }
    });
});

// Button events
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
