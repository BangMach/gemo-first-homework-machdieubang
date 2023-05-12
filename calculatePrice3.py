# Add function calculatePrice3 which allow customization options for chocolate sauce, which can only be added to hot drinks and has the following pricing:
# The first 2 pumps are free
# $0.5 for each extra pump
# Maximum of 6 pumps

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
        "WholeMilk": 0,
        "Chocolate Sauce":0.5  
    }
    
    # Initialize base price to 0
    basePrice = 0
    num_of_chocolate_pump =0
    
    #check based drink
    if "BasedMilktea" in order:
        basePrice = priceDict["BasedMilktea"]
    elif "BasedCoffee" in order:
        basePrice = priceDict["BasedCoffee"]


    # Check for drink type and adjust base price
    if "Hot" in order:
        basePrice = basePrice + priceDict["Hot"]
        if "Chocolate Sauce" in order:
            for item in order:
                if item == "Chocolate Sauce":
                    num_of_chocolate_pump+=1
                    if num_of_chocolate_pump <= 2:
                        continue
                    elif num_of_chocolate_pump <= 6:
                        basePrice += priceDict["Chocolate Sauce"]
                    else:
                        break 
    elif "Cold" in order:
        basePrice = basePrice + priceDict["Cold"]
    elif "Blended" in order:
        basePrice = basePrice + priceDict["Blended"]
        
    
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
        print("Size L only available for Cold and Hot Drink")
        return 0    
        
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
    
    
# print(calculatePrice2(["Hot", "M", "WhippedCream"])) # Output should be 2.5
# print(calculatePrice2(["Cold", "L", "WithoutWhippedCream"])) # Output should be 3.0
# print(calculatePrice2(["Blended", "XL", "AlmondMilk", "WithCreamTopping"])) # Output should be 6.0
# print(calculatePrice2(["BasedMilktea", "S", "WholeMilk"])) # Output should be 2.75
# print(calculatePrice2(["Hot", "S", "WithoutWhippedCream"])) # Output should be 2.0
# print(calculatePrice2(["Hot", "S", "WhippedCream"])) # Output should be 2.5
# print(calculatePrice2(["Hot", "M", "WithoutWhippedCream"])) # Output should be 2.0
# print(calculatePrice2(["Hot", "M", "WhippedCream"])) # Output should be 2.5

# from previous tests
# print(calculatePrice2(["BasedCoffee","Hot", "S", "WithoutWhippedCream"])) # Output should be 2.0
# print(calculatePrice2(["BasedCoffee","Hot", "S", "WhippedCream"])) # Output should be 2.5
# print(calculatePrice2(["BasedCoffee","Hot", "M", "WithoutWhippedCream"])) # Output should be 2.5
# print(calculatePrice2(["BasedCoffee","Hot", "M", "WhippedCream"])) # Output should be 3.0
# print(calculatePrice2(["BasedCoffee","L", "Blended", "WithoutWhippedCream"])) # Output should be 4.00
# print(calculatePrice2(["BasedCoffee","L", "Blended", "WhippedCream"])) # Output should be 4.50
# print(calculatePrice2(["BasedCoffee","L", "Cold", "WithoutWhippedCream"])) # Output should be 3.00
# print(calculatePrice2(["BasedCoffee","L", "Cold", "WhippedCream"])) # Output should be 3.50
# print(calculatePrice2(["BasedCoffee","L", "Hot", "WithoutWhippedCream"])) # Should be an error" Size L only available for Cold and Hot Drink"
# print(calculatePrice2(["BasedCoffee","M", "Blended", "WithoutWhippedCream"])) # Output should be 3.50


# new tests
print(calculatePrice2(["BasedMilktea","Hot", "S", "WithoutWhippedCream","Chocolate Sauce","Chocolate Sauce"])) # Output should be 2.25
print(calculatePrice2(["BasedMilktea","Hot", "S", "WithoutWhippedCream","Chocolate Sauce","Chocolate Sauce","Chocolate Sauce","Chocolate Sauce"])) # Output should be 3.25
print(calculatePrice2(["BasedMilktea","Hot", "M", "WithoutWhippedCream","AlmondMilk"])) # Output should be 3.25
print(calculatePrice2(["BasedMilktea","Hot", "M", "WithoutWhippedCream","WholeMilk"])) # Output should be 2.75
print(calculatePrice2(["BasedMilktea","XL", "Blended", "WithoutWhippedCream"])) # Output should be 4.75
print(calculatePrice2(["BasedMilktea","L", "Blended", "WhippedCream"])) # Output should be 4.75
print(calculatePrice2(["BasedMilktea","L", "Cold", "WithoutWhippedCream"])) # Output should be 3.25
print(calculatePrice2(["BasedMilktea","L", "Cold", "WhippedCream"])) # Output should be 3.75
print(calculatePrice2(["BasedMilktea","L", "Hot", "WithoutWhippedCream"])) # Should be an error" Size L only available for Cold and Hot Drink"
print(calculatePrice2(["BasedMilktea","M", "Blended", "WithoutWhippedCream"])) # Output should be 3.75