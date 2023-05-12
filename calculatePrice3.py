def calculatePrice2(order):
    # Define the price dictionary
    priceDict = {
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
        "WholeMilk": 0.5,
        "chocolatePump":0.5
    }
    
    # Initialize base price to 0
    basePrice = 0
    
    # Check for drink type and adjust base price
    if "Hot" in order:
        basePrice = priceDict["BasedCoffee"]
    elif "Cold" in order:
        basePrice = priceDict["BasedCoffee"]
        if "L" in order:
            basePrice += priceDict["L"]
    elif "Blended" in order:
        basePrice = priceDict["BasedCoffee"] + priceDict["Blended"]
        if "L" in order:
            basePrice += priceDict["L"]
    elif "BasedMilktea" in order:
        basePrice = priceDict["BasedMilktea"]
    
    # Check for size and price adjustment
    if "S" in order:
        sizePrice = priceDict["S"]
    elif "M" in order:
        sizePrice = priceDict["M"]
    elif "L" in order and ("Cold" in order or "Blended" in order):
        sizePrice = priceDict["L"]
    elif "XL" in order:
        sizePrice = priceDict["XL"]
    else:
        sizePrice = 0
    
    # Check for whipped cream topping
    if "WithoutWhippedCream" in order:
        creamPrice = priceDict["WithoutWhippedCream"]
    elif "WhippedCream" in order:
        creamPrice = priceDict["WhippedCream"]
    else:
        creamPrice = 0
    
    # Check for milk options
    milkPrice = 0
    if "AlmondMilk" in order:
        milkPrice += priceDict["AlmondMilk"]
    if "WholeMilk" in order:
        milkPrice += priceDict["WholeMilk"]
    
    # Calculate total price
    totalPrice = basePrice + sizePrice + creamPrice + milkPrice
    
    return totalPrice
    
    
print(calculatePrice2(["Hot", "M", "WhippedCream"])) # Output should be 2.5
print(calculatePrice2(["Cold", "L", "WithoutWhippedCream"])) # Output should be 3.0
print(calculatePrice2(["Blended", "XL", "AlmondMilk", "WithCreamTopping"])) # Output should be 6.0
print(calculatePrice2(["BasedMilktea", "S", "WholeMilk"])) # Output should be 2.75
