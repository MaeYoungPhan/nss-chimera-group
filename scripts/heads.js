import { getHeads, setHead } from "./database.js"


const heads = getHeads()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "head") {
            setHead(parseInt(event.target.value))
        }
    }
)


export const headStyles = () => {
    let html = "<ul>"


    const listHeads = heads.map(head => {
        return `<li>
            <input type="radio" name="head" value="${head.id}" /> ${head.name}
        </li>`
    }) 

    html += listHeads.join("")
    html += "</ul>"
    
    return html

}