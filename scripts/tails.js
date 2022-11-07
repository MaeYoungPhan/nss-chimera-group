import { getTails, setTail } from "./database.js";

const tails = getTails();

document.addEventListener(
    "change", (event) => { 
        if (event.target.name === "tail"){
            setTail(parseInt(event.target.value))
        }
    }
)

export const pickTails = () => {
    let html = "<ul>"

    const listTails = tails.map(
        (tail) => {
            return `
            <li>
                <input type="radio" name="tail" value="${tail.id}" /> ${tail.name}
            </li>`
        }
    )
    html += listTails.join("")
    html += "</ul>"

    return html
}
