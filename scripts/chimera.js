import {pickArms} from "./arms.js"
import {headStyles} from "./heads.js"
import {pickLegs} from "./legs.js"
import {chimeraPowers} from "./powers.js"
import {pickTails} from "./tails.js"
import {pickTorso} from "./torsos.js"
import {Orders} from "./orders.js"
import {addCustomOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const chimera = () => {
    return `
    <h1>Chimera</h1>

    <article class="choices">
        <section class="choices__arms options">
            <h2>Arms</h2>
            ${pickArms()}
        </section>
        <section class="choices__heads options">
            <h2>Heads</h2>
            ${headStyles()}
        </section>
        <section class="choices__legs options">
            <h2>Legs</h2>
            ${pickLegs()}
        </section>
        <section class="choices__powers options">
            <h2>Powers</h2>
            ${chimeraPowers()}
        </section>
        <section class="choices__tails options">
            <h2>Tails</h2>
            ${pickTails()}
        </section>
        <section class="choices__torsos options">
            <h2>Torsos</h2>
            ${pickTorso()}
        </section>


    </article>

    <article>
        <button id="orderButton">Build Your Chimera!</button>
    </article>

    <article class="orders">
        <h2>Chimeras</h2>
        ${Orders()}
    </article>`

}