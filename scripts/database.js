const database = {
    heads: [
      { id: 1, name: "Lion-Dragon-Ram", price: 5.0, isCarnivore: true },
      { id: 2, name: "Eagle-Shark-Racoon", price: 7.5, isCarnivore: true },
      { id: 3, name: "Snake-Pegasus-Tiger", price: 2.5, isCarnivore: true },
      { id: 4, name: "Goat-Bat-Llama", price: 1.49, isCarnivore: false }
    ],
    torsos: [
      { id: 1, name: "Camel", price: 0.45, hasWings: false },
      { id: 2, name: "Bear", price: 0.35, hasWings: false },
      { id: 3, name: "Lion", price: 0.29, hasWings: false },
      { id: 4, name: "Eagle", price: 0.62, hasWings: true }
    ],
    legs: [
      { id: 1, name: "Horse", price: 3.79, isBipedal: false },
      { id: 2, name: "Lizard", price: 2.5, isBipedal: false },
      { id: 3, name: "Ostrich", price: 1.99, isBipedal: true }
    ],
    tails: [
      { id: 1, name: "Scorpion", price: 0.8, isVenomous: true },
      { id: 2, name: "Peacock", price: 0.72, isVenomous: false },
      { id: 3, name: "Lion", price: 0.94, isVenomous: false },
      { id: 4, name: "Lemur", price: 0.61, isVenomous: false }
    ],
    arms: [
      { id: 1, name: "Scorpion", price: 0.05, hasFingers: false },
      { id: 2, name: "Gorilla", price: 0.07, hasFingers: true },
      { id: 3, name: "Sloth", price: 0.03, hasFingers: true },
      { id: 4, name: "Praying Mantis", price: 0.09, hasFingers: false }
    ],
    powers: [
      { id: 1, size: "Lightning Breath", price: 0.5 },
      { id: 2, size: "Ice Breath", price: 0.5 },
      { id: 3, size: "Fire Breath", price: 0.5 }
    ],
    chimeraOrders: [
        {
            id: 1,
            headId: 1,
            torsoId: 2,
            legId: 3,
            tailId: 4,
            armId: 1,
            powerId: 2,
            timestamp: Date.now()
        }
    ],
    orderBuilder: {},
}
  
  export const getHeads = () => {
    return database.heads.map(head => ({...head}))
}

export const getTorsos = () => {
    return database.torsos.map(torso => ({...torso}))
}

export const getLegs = () => {
    return database.legs.map(leg => ({...leg}))
}

export const getTails = () => {
    return database.tails.map(tail => ({...tail}))
}

export const getArms = () => {
    return database.arms.map(arm => ({...arm}))
}

export const getPowers = () => {
    return database.powers.map(power => ({...power}))
}

export const getOrders = () => {
    return database.chimeraOrders.map(order => ({...order}))
}

export const setHead = (id) => {
    database.orderBuilder.headId = id
}

export const setTorso = (id) => {
    database.orderBuilder.torsoId = id
}

export const setLeg = (id) => {
    database.orderBuilder.legId = id
}

export const setTail = (id) => {
    database.orderBuilder.tailId = id
}

export const setArm = (id) => {
    database.orderBuilder.armId = id
}

export const setPower = (id) => {
    database.orderBuilder.powerId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.chimeraOrders.length - 1
    newOrder.id = database.chimeraOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.chimeraOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))}