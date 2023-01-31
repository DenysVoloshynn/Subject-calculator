const selections = document.querySelectorAll(".selection")
for (let selection of selections) {
    selection.addEventListener("click", function (e) {
        if (e.target.closest(".radio")) {

            removeAttributes(e, selection)
            const currRadio = e.target.closest(".radio")
            currRadio.setAttribute("active", null)
            countMiddle(e)
        }
    })
}


function removeAttributes(e, currSelection) {
    const activeRadio = currSelection.querySelector("[active]")
    if (activeRadio) {
        activeRadio.removeAttribute("active")
    }
}



let middle = 0

function countMiddle(e) {
    const middleHTML = document.querySelector("#middle-number")
    const allActiveRadios = document.querySelectorAll("[active]")

    let overAll = 0

    for (let activeRadio of allActiveRadios) {

        overAll += +activeRadio.innerText
        middle = +overAll / +allActiveRadios.length

    }

    middleHTML.innerText = middle.toFixed(2)
}