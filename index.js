info.language = info.language.cookie
basicSetup()
// let rem = await(await fetch("/assets/projects.json")).json()
let rem = await(await fetch("./projects.json")).json()
contentCreate(rem)

await lastUpdated({path: "index.html"})