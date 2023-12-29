// let rem = await(await fetch("/assets/projects.json")).json()
let rem = await(await fetch("./projects.json")).json()
contentCreate(rem)

await translationSetup(true)

document.querySelector(".last-updated").innerHTML = await lastUpdated({path: "index.html"})