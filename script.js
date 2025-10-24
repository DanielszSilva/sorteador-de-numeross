function generateNumber() {

    const min = Math.ceil(document.querySelector(".between").value)
    const max = Math.floor(document.querySelector(".and").value)

    const numberToDraw = Math.floor(Math.random() * (max - min + 1)) + min

    const result = document.querySelector(".result")

        result.value=numberToDraw
}
