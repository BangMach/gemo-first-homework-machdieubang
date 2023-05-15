# gemo-first-homework-machdieubang-submission

# Project Name: Order Calculator
# Description
The Order Calculator is a Python program that allows users to input their order choices and calculates the total cost of their order. The program uses a dictionary to store a key-value pair of order items and their corresponding prices. It then takes in an array of order choices and adds the price of each choice to the total cost.

# Installation
To use the Order Calculator, you will need to have Python 3 installed on your computer. You can download Python 3 from the official website: https://www.python.org/downloads/

# Usage
To use the Order Calculator, open the terminal and navigate to the directory where the code is saved. Then run the following command:

```python calculatePrice.py```

for each of the solutions, there are 5 of them, just change the file you want to run when you want to run a different solutions
the test case are included within the file when run, this follow a test driven development, where I put on the test with the correct output first and then implement the solution to see if it give me the expected output.

## let's discuss my thinking proccess
For solution 1, the basic concept is to use a dictionary in Python to store a key-value pair of order and price increase and then take in an array of order choices. for each choice, we consider our solution and add on the price additionally.

For solution 2, I will add in an if condition to check the XL size, note here that I did not check for the cold and blended options for XL size unless precisely specified, I also add in another based drink type which is milk tea that can be added with the same rules as the coffee-based drink, meaning coffee can be hot, cold, blended and come in different sizes and come with or without whipped cream. add in another price adjustment for the milk type (almond milk, and whole milk) and another condition to check that.

Solution 3, is tricky, because I add the condition to check the chocolate sauce, inside the hot drink condition, and implement a counter to count how many time the chocolate sauce appear in the array order, if more than 2 times, than add in the additional cost for each pump up until 6. and add in the price adjustment for chocolate sauce in the dictionary

Solution 4, is another if condition entirely, where I initialize another variable food price to calculate the choices for the food, bagel, sandwich, and which sort of add on it can add in, noted here in the array, I can only count for only each add one per sandwich, meaning unlike the chocolate sauce, add in more toppings doesn't increase the price, it is a bug that can be fixed in later update. 

Solution 5, is the final and tricky one, because for each condition that it pass, I have to print the price adjustment that comes a long with it, for example in chocolate sauce, after two times, then I will start print out the cost and add in the final cost statement with the taxes inlcuded.

# Limitations
One limitation of the Order Calculator is that it can only collect one drink order and one food item at a time in the array. If you add more than 1 bagel, for example, it will not accept.

# Future Improvements
Possible improvements for the Order Calculator include:
Allowing users to enter multiple items of the same order type (e.g. 2 bagels)
Adding more order items to the dictionary
Adding support for different currencies
