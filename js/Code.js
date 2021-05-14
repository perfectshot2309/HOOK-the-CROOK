const accessCode1 = "WRONG";
const accessCode2 = "SHORT";
const accessCode3 = "NAME";

function clues() {
    stroke("grey")
    fill("white")
    textSize(15)
    text("G O N R W", 100,120)
    fill("lightblue")
    text("Hint: There is only one word in the dictionary spelled wrong. What is it?", 100,140)
    fill("white")
    textSize(15)
    text("O R H T S",100,240)
    fill("lightblue")
    text("Hint: Which word becomes shorter when you add two letters to it?",100,260)
    fill("white")
    textSize(15)
    text("A M N E",100,360)
    fill("lightblue")
    text("Hint: What is yours but used by everyone else?",100,380)  
}