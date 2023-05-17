import React, { useEffect, useState } from 'react';

interface Pricing {
  [key: string]: number;
}

interface PricingProps {
  onPricingLoaded: (pricing: Pricing) => void;
}

const PricingComponent: React.FC<PricingProps> = ({ onPricingLoaded }) => {
  useEffect(() => {
    // Function to fetch the pricing data from pricing.json
    const fetchPricing = async () => {
      try {
        const response = await fetch('pricing.json');
        const pricingData = await response.json();
        onPricingLoaded(pricingData);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricing();
  }, [onPricingLoaded]);

  return null; // Since this component handles data fetching, it doesn't need to render anything
};

export default PricingComponent;