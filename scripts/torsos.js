import { getTorsos, setTorso } from "./database.js";

const arms = getTorsos();

document.addEventListener(
    "change", (event) => { 
        if (event.target.name === "torso"){
            setTorso(parseInt(event.target.value))
            
        }
    }
)

export const pickTorso = () => {
    let htmlTorso = "<ul>"

    const listTorso = torsos.map
        (torso) => {
            return `
            <li>
            <li> `
        }
}