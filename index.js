document.addEventListener("keydown", function (e) {
    // console.log(e)
    makeSound(e.key)
    buttonAnimation(e.key)
})

for (var element in document.querySelectorAll(".drum")) {
    document.querySelectorAll(".drum")[element].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
};

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;

        default:
            console.log(buttonInnerHTML)
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}