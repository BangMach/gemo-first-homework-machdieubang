import "./App.css"

import React, { useState } from "react"

// Import your translation files
import enTranslation from "../locales/en.json"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import viTranslation from "../locales/vi.json"

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

  const updatePrice = () => {
    let price = 0

    if (size === "small") {
      price += 0
    } else if (size === "medium") {
      price += 0.5
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

    if (drinkTemp === "Hot" && chocolateSauce <= 2) {
      // First two pumps are free for hot drinks
      price += 0
    } else if (
      drinkTemp === "Hot" &&
      chocolateSauce > 2 &&
      chocolateSauce <= 6
    ) {
      // Each additional pump after the second one costs 0.5
      price += (chocolateSauce - 2) * 0.5
    } else if (drinkTemp == "Blended") {
      price += 1
    } else if (drinkTemp != "Hot" && chocolateSauce >= 0) {
      // Display an error message when chocolate sauce is added to a cold drink
      setErrorMessage("Only hot drinks can have chocolate sauce")
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

  const handleMilkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMilk(event.target.value)
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
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display the error message if it exists */}

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

        <div className="form-row">
          <h2>Price: {price.toFixed(2)} USD</h2>
        </div>
      </div>
    </div>
  )
}

export default App
