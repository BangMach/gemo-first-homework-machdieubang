interface PriceDict {
    [key: string]: number;
  }
  
  function calculatePrice5(order: string[]): number {
    // Define the price dictionary
    const priceDict: PriceDict = {
      "S": 0,
      "M": 0.5,
      "L": 1,
      "WithoutWhippedCream": 0,
      "WhippedCream": 0.5,
      "Hot": 0,
      "Cold": 0,
      "Blended": 1,
      "XL": 1.5,
      "BasedCoffee": 2,
      "BasedMilktea": 2.25,
      "AlmondMilk": 0.5,
      "WholeMilk": 0,
      "Chocolate Sauce": 0.5,
      "Sandwich": 3,
      "Bagel": 3,
      "Egg": 1,
      "Turkey": 1,
      "Butter": 0.5,
      "Cream Cheese": 0.5
    };
  
    // Initialize base price to 0
    let basePrice = 0;
    let num_of_chocolate_pump = 0;
    let foodPrice = 0;
    console.log("\n");
    console.log("Cost Breakdown:");
  
    if (order.includes("Hot") || order.includes("Cold") || order.includes("Blended")) {
      // check based drink
      if (order.includes("BasedMilktea")) {
        basePrice = priceDict["BasedMilktea"];
        console.log("Based Milktea: " + priceDict["BasedMilktea"]);
      } else if (order.includes("BasedCoffee")) {
        basePrice = priceDict["BasedCoffee"];
        console.log("BasedCoffee: " + priceDict["BasedCoffee"]);
      }
  
      // Check for drink type and adjust base price
      if (order.includes("Hot")) {
        basePrice += priceDict["Hot"];
  
        if (order.includes("Chocolate Sauce")) {
          for (const item of order) {
            if (item === "Chocolate Sauce") {
              num_of_chocolate_pump += 1;
              if (num_of_chocolate_pump <= 2) {
                continue;
              } else if (num_of_chocolate_pump <= 6) {
                basePrice += priceDict["Chocolate Sauce"];
                console.log("Chocolate Sauce: " + priceDict["Chocolate Sauce"]);
              } else {
                break;
              }
            }
          }
        }
      } else if (order.includes("Cold")) {
        basePrice += priceDict["Cold"];
        console.log("Cold: " + priceDict["Cold"]);
      } else if (order.includes("Blended")) {
        basePrice += priceDict["Blended"];
        console.log("Blended: " + priceDict["Blended"]);
      }
    }
  
    // Check for size and price adjustment
    let sizePrice = 0;
    if (order.includes("S")) {
      sizePrice = priceDict["S"];
      console.log("S: " + priceDict["S"]);
    } else if (order.includes("M")) {
      sizePrice = priceDict["M"];
      console.log("M: " + priceDict["M"]);
    } else if (order.includes("L") && (order.includes("Cold") || order.includes("Blended"))) {
      sizePrice = priceDict["L"];
      console.log("L: " + priceDict["L"]);
    } else if (order.includes("XL")) {
      sizePrice = priceDict["XL"];
      console.log("XL: "