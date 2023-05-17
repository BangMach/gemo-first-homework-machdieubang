import React, { useState } from 'react';

import PricingComponent from './PricingComponent';

interface Pricing {
  [key: string]: number;
}

const AdminPage: React.FC = () => {
  const [pricing, setPricing] = useState<Pricing | null>(null);

  const handlePricingLoaded = (pricingData: Pricing) => {
    setPricing(pricingData);
  };

  // Example usage: accessing pricing values
  if (pricing) {
    console.log('Price for size M:', pricing['M']);
    console.log('Price for whipped cream:', pricing['WhippedCream']);
  }

  return (
    <div>
      <PricingComponent onPricingLoaded={handlePricingLoaded} />
      {/* Your app's JSX code here */}
    </div>
  );
};

export default AdminPage;