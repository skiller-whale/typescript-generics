export default {}

type BaseIngredient = "Coffee Beans" | "Tea Leaves" | "Cocoa Powder"

type SecondaryIngredient = "Water" | "Milk"

type HotDrink = "Coffee" | "Tea" | "Hot Chocolate"

type Flavouring = "Sugar" | "Milk"

type FlavouredHotDrink = "Sweet Coffee" | "Sweet Tea" | "Sweet Hot Chocolate" | "Milky Coffee" | "Milky Tea"

function makeHotDrink(ingredient: "Coffee Beans", secondary: "Water"): "Coffee"
function makeHotDrink(ingredient: "Tea Leaves", secondary: "Water"): "Tea"
function makeHotDrink(ingredient: "Cocoa Powder", secondary: "Milk"): "Hot Chocolate"
function makeHotDrink(ingredient: BaseIngredient, secondary: SecondaryIngredient): HotDrink {
  if (ingredient === "Coffee Beans" && secondary === "Water") {
    return "Coffee"
  }
  if (ingredient === "Tea Leaves" && secondary === "Water") {
    return "Tea"
  }
  if (ingredient === "Cocoa Powder" && secondary === "Milk") {
    return "Hot Chocolate"
  }
  throw new Error("invalid ingredients")
}

// these assignments should all work
const coffee: "Coffee" = makeHotDrink("Coffee Beans", "Water")
const tea: "Tea" = makeHotDrink("Tea Leaves", "Water")
const hotChocolate: "Hot Chocolate" = makeHotDrink("Cocoa Powder", "Milk")

// these assignments should raise an error
const test1 = makeHotDrink("Tea Leaves", "Milk")
const test2 = makeHotDrink("Cocoa Powder", "Water")

function addFlavouring(hotDrink: "Coffee", flavouring: "Sugar"): "Sweet Coffee"
function addFlavouring(hotDrink: "Tea", flavouring: "Sugar"): "Sweet Tea"
function addFlavouring(hotDrink: "Hot Chocolate", flavouring: "Sugar"): "Sweet Hot Chocolate"
function addFlavouring(hotDrink: "Coffee", flavouring: "Milk"): "Milky Coffee"
function addFlavouring(hotDrink: "Tea", flavouring: "Milk"): "Milky Tea"
function addFlavouring(hotDrink: HotDrink, flavouring: Flavouring): FlavouredHotDrink {
  if (flavouring === "Sugar") {
    return `Sweet ${hotDrink}`
  }
  if (flavouring === "Milk" && hotDrink !== "Hot Chocolate") {
    return `Milky ${hotDrink}`
  }
  throw new Error("hot chocolate already contains milk")
}

// these assignments should all work
const milkyCoffee: "Milky Coffee" = addFlavouring("Coffee", "Milk")
const sweetCoffee: "Sweet Coffee" = addFlavouring("Coffee", "Sugar")
const milkyTea: "Milky Tea" = addFlavouring("Tea", "Milk")
const sweetTea: "Sweet Tea" = addFlavouring("Tea", "Sugar")
const sweetHotChocolate: "Sweet Hot Chocolate" = addFlavouring("Hot Chocolate", "Sugar")
const milkyHotChocolate: never = addFlavouring("Hot Chocolate", "Milk")
