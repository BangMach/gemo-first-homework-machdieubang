def calculatePrice1(order):
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
    }

    # Initialize base price to 2.00 dollars
    basePrice = 0

    # Check for drink type and adjust base price
    if "Hot" in order:
        basePrice = priceDict["BasedCoffee"]
    elif "Cold" in order:
        basePrice = priceDict["BasedCoffee"]
    elif "Blended" in order:
        basePrice = priceDict["BasedCoffee"] + priceDict["Blended"]

    # Check for size and price adjustment
    if "S" in order:
        sizePrice = priceDict["S"]
    elif "M" in order:
        sizePrice = priceDict["M"]
    elif "L" in order and ("Cold" in order or "Blended" in order):
        sizePrice = priceDict["L"]
    else:
        print("Size L only available for Cold and blende Drink")
        raise Exception("Sorry, no numbers below zero")

    # Check for whipped cream topping
    if "WithoutWhippedCream" in order:
        creamPrice = priceDict["WithoutWhippedCream"]
    elif "WhippedCream" in order:
        creamPrice = priceDict["WhippedCream"]
    else:
        creamPrice = 0

    # Calculate total price
    totalPrice = basePrice + sizePrice + creamPrice

    return totalPrice


# print(calculatePrice1(["S","WithoutWhippedCream", "Hot"])) # Output should be 2.00
# print(calculatePrice1(["S","WhippedCream", "Hot"])) # Output should be 2.50
# print(calculatePrice1(["L", "Blended", "WithCreamTopping"])) # Output should be 4.50
# print(calculatePrice1(["L", "Blended", "WithCreamTopping"])) # Output should be 4.50


# Output should be 2.0
print(calculatePrice1(["Hot", "S", "WithoutWhippedCream"]))
print(calculatePrice1(["Hot", "S", "WhippedCream"]))  # Output should be 2.5
# Output should be 2.5
print(calculatePrice1(["Hot", "M", "WithoutWhippedCream"]))
print(calculatePrice1(["Hot", "M", "WhippedCream"]))  # Output should be 3.0
# Output should be 4.00
print(calculatePrice1(["L", "Blended", "WithoutWhippedCream"]))
# Output should be 4.50
print(calculatePrice1(["L", "Blended", "WhippedCream"]))
# Output should be 3.00
print(calculatePrice1(["L", "Cold", "WithoutWhippedCream"]))
print(calculatePrice1(["L", "Cold", "WhippedCream"]))  # Output should be 3.50
# Should be an error" Size L only available for Cold and Hot Drink"
print(calculatePrice1(["L", "Hot", "WithoutWhippedCream"]))
# Output should be 3.50
print(calculatePrice1(["M", "Blended", "WithoutWhippedCream"]))
