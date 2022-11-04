import { getTorsos, setTorso } from "./database.js";

const torsos = getTorsos();

document.addEventListener(
    "change", (event) => { 
        if (event.target.name === "torso"){
            setTorso(parseInt(event.target.value))
            
        }
    }
)

export const pickTorso = () => {
    let html = "<ul>"

    const listTorsos = torsos.map(
        (torso) => {
            return `
            <li>
                <input type="radio" name="torso" value="${torso.id}" /> ${torso.name}
            <li> `
        }
    )
    html += listTorsos.join("")
    html += "</ul>"

    return html
}
