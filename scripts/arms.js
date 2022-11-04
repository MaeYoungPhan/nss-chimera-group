import { getArms, setArm } from "./database.js";

const arms = getArms();

document.addEventListener(
    "change", (event) => { 
        if (event.target.name === "arm"){
            setArm(parseInt(event.target.value))
        }
    }
)

export const pickArms = () => {
    let html = "<ul>"

    const listArms = arms.map(
        (arm) => {
            return `
            <li>
                <input type="radio" name="arm" value="${arm.id}" /> ${arm.name}
            </li>`
        }
    )
    html += listArms.join("")
    html += "</ul>"

    return html
}
