import "./App.css"

import React, { useState } from "react"

import PricingComponent from './PricingComponent';
// Import your translation files
import enTranslation from "../locales/en.json"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import viTranslation from "../locales/vi.json"

interface Pricing {
  [key: string]: number;
}
// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    vi: {
      translation: viTranslation,
    },
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Fallback to English if the translation is missing for a language
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
})

function App() {
  const [size, setSize] = useState("")
  const [beverageType, setBeverageType] = useState("")
  const [whipCream, setWhipCream] = useState(false)
  const [chocolateSauce, setChocolateSauce] = useState(0)
  const [price, setPrice] = useState(0)
  const [milk, setMilk] = useState("")
  const [drinkTemp, setDrinkTemp] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [pricing, setPricing] = useState<Pricing | null>(null);
  const updatePrice = () => {
    let price = 0

    if (size === "small" || size === "medium") {
      if (drinkTemp == "Cold" || drinkTemp == "Blended") {
        setErrorMessage("Cold only comes in size L or XL")
      }
      price += 0
    } else if (size === "large") {
      price += 1
    } else if (size === "xl") {
      price += 1.5
    }

    if (beverageType === "coffee") {
      price += 2
    } else if (beverageType === "milktea") {
      price += 2.25
    }

    if (drinkTemp === "Hot") {
    if(chocolateSauce<2){
      price +=0;
    } else if(chocolateSauce>2 && chocolateSauce<6)
    {
      price +=(chocolateSauce-2)*0.5;
    
    } else{
      setErrorMessage("Chocolate Sauce can't be more than 6. Has to be lower than 6")
    }
    
     
    }else if (drinkTemp == "Cold") {
      price += 1
    } 
    else if (drinkTemp == "Blended") {
      price += 1
    }

    if (whipCream) {
      price += 0.5
    }

    if (milk === "Whole Milk") {
      price += 0
    } else if (milk === "Almond Milk") {
      price += 0.5
    }

    if (chocolateSauce > 0) {
      price += 0.25 * chocolateSauce
    }

    setPrice(price)
  }

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value)
    updatePrice()
  }
  
  
  const handleDrinkTempChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDrinkTemp(event.target.value)
    updatePrice()
  }  

  const handleBeverageTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBeverageType(event.target.value)
    updatePrice()
  }

  const handleWhipCreamChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWhipCream(event.target.checked)
    updatePrice()
  }

  const handleMilkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMilk(event.target.value)
    updatePrice();
  }

  const handleChocolateSauceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChocolateSauce(parseInt(event.target.value))
    updatePrice()
  }

  return (
    <div className="App">
      <h1>Price Calculator</h1>

      <div className="form-container">
        <div className="form-row">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            name="size"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="drinkTemp">Drink Temperature Type:</label>
          <select
            id="drinkTemp"
            name="drinkTemp"
            value={drinkTemp}
            onChange={handleDrinkTempChange}
          >
            <option value="">Select a drink temperature type</option>
            <option value="Hot">Hot</option>
            <option value="Cold">Cold</option>
            <option value="Blended">Blended</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="beverageType">Beverage Type:</label>
          <select
            id="beverageType"
            name="beverageType"
            value={beverageType}
            onChange={handleBeverageTypeChange}
          >
            <option value="">Select a beverage type</option>
            <option value="coffee">Coffee</option>
            <option value="milktea">Milk Tea</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="whipCream">Add WhipCream:</label>
          <input
            type="checkbox"
            id="whipCream"
            name="whipCream"
            checked={whipCream}
            onChange={handleWhipCreamChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="milk">Beverage Type:</label>
          <select
            id="milk"
            name="milk"
            value={milk}
            onChange={handleMilkChange}
          >
            <option value="">Select a milk type</option>
            <option value="Whole Milk">Whole Milk</option>
            <option value="Almond Milk">Almond Milk</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="chocolateSauce">Add Chocolate Sauce:</label>
          <input
            type="number"
            id="chocolateSauce"
            name="chocolateSauce"
            min="0"
            max="6"
            value={chocolateSauce}
            onChange={handleChocolateSauceChange}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display the error message if it exists */}
        <div className="form-row">
          <h2>Price: {price.toFixed(2)} USD</h2>
        </div>
      </div>
    </div>
  )
}

export default App
