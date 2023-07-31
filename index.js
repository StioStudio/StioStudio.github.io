let content = document.querySelector(".content")

let div = document.createElement("div")
let contentBox = [div.cloneNode(true)]
contentBox[0].classList.add("bigBox", "box-shadow")
contentBox[0].style.display = "flex"
content.append(contentBox[0])
let box = div.cloneNode(true)
box.classList.add("box")

contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))
contentBox[0].append(box.cloneNode(true))