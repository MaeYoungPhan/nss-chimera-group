import { getLegs, setLeg } from "./database.js";

const legs = getLegs();

document.addEventListener(
    "change", (event) => { 
        if (event.target.name === "leg"){
            setLeg(parseInt(event.target.value))
        }
    }
)

export const pickLegs = () => {
    let html = "<ul>"

    const listLegs = legs.map(
        (leg) => {
            return `
            <li>
                <input type="radio" name="leg" value="${leg.id}" /> ${leg.name}
            </li>`
        }
    )
    html += listLegs.join("")
    html += "</ul>"

    return html
}