import { getPowers, setPower } from "./database.js";

const powers = getPowers();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "power") {
            setPower(parseInt(event.target.value))
        }
    }
)

export const chimeraPowers = () => {
    let html = "<ul>"

    const powerArray = powers.map(
        (power) => {
            return `<li>
            <input type="radio" name="power" value="${power.id}" /> ${power.size}
        </li>`
        }
    )

    html += powerArray.join("")
    html += "</ul>"
    return html
}