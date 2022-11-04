import { getOrders, getArms, getHeads, getLegs, getPowers, getTails, getTorsos } from "./database.js"

const buildOrderListItem = (order) => {

    const arms = getArms();
    const findArms = arms.find(
        (arm) => {
            return arm.id === order.armId;
        }
    )
    const heads = getHeads();
    const findHeads = heads.find(
        (head) => {
            return head.id === order.headId;
        }
    )
    const legs = getLegs();
    const findLegs = legs.find(
        (leg) => {
            return leg.id === order.legId;
        }
    )
    const tails = getTails();
    const findTails = tails.find(
        (tail) => {
            return tail.id === order.tailId;
        }
    )
    const power = getPowers();
    const findPowers = power.find(
        (power) => {
            return power.id === order.powerId;
        }
    )
    const torsos = getTorsos();
    const findTorsos = torsos.find(
        (torso) => {
            return torso.id === order.torsoId;
        }
    )


    const totalCost = findArms.price + findHeads.price + findLegs.price + findTails.price + findPowers.price + findTorsos.price;

    const costString = totalCost.toLocaleString("en-US",{
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others? */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}