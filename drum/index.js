let numOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            alert("I got clicked!")
        });
}
