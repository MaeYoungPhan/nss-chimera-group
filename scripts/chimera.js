import {pickArms} from "./arms.js"
import {headStyles} from "./heads.js"
import {pickLegs} from "./legs.js"
import {chimeraPowers} from "./arms.js"
import {pickTails} from "./tails.js"
import {pickTorso} from "./torsos.js"
import {orders} from "./orders.js"
import {addCustomOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target;
        if(itemClicked.id === "orderButton"){
            addCustomOrder()
        }

    }
)


export const chimera = () => {
    return `
    <h1>Chimera</h1>

    <article class="choices">
        <section class="choices__arms options">
            <h2>arms</h2>
            ${pickArms()}
        </section>
        <section class="choices__sizes options">
            <h2>Sizes</h2>
            ${s()}
        </section>
        <section class="choices__styles options">
            <h2>Styles</h2>
            ${JewelryStyles()}
        </section>
        <section class="choices__metals options">
            <h2></h2>
            ${()}
        </section>
        <section class="choices__sizes options">
            <h2>Sizes</h2>
            ${DiamondSizes()}
        </section>
        <section class="choices__styles options">
            <h2>Styles</h2>
            ${JewelryStyles()}
        </section>


    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        ${Orders()}
    </article>`

}