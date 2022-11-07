import { getOrders, getArms, getHeads, getLegs, getPowers, getTails, getTorsos } from "./database.js"

const arms = getArms();
const heads = getHeads();
const legs = getLegs();
const tails = getTails();
const powers = getPowers();
const torsos = getTorsos();

const buildOrderListItem = (order) => {

    const findArms = arms.find(
        (arm) => {
            return arm.id === order.armId;})
            let totalCost = findArms.price

    const findHeads = heads.find(
        (head) => {
            return head.id === order.headId;
        }
    )
    totalCost += findHeads.price

    const findLegs = legs.find(
        (leg) => {
            return leg.id === order.legId;
        }
    )
    totalCost += findLegs.price

    const findTails = tails.find(
        (tail) => {
            return tail.id === order.tailId;
        }
    )
    totalCost += findTails.price

    const findPowers = powers.find(
        (power) => {
            return power.id === order.powerId;
        }
    )
    totalCost += findPowers.price

    const findTorsos = torsos.find(
        (torso) => {
            return torso.id === order.torsoId;
        }
    )
    totalCost += findTorsos.price


    // totalCost = findArms.price + findHeads.price + findLegs.price + findTails.price + findPowers.price + findTorsos.price;

    const costString = totalCost.toLocaleString("en-US",{
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} costs ${costString}
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