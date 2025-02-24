import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
const SubscriptionCards = () => {
  const [selectedPricing, setSelectedPricing] = useState({
    Basic: "monthly",
    Standard: "monthly",
    Premium: "monthly",
  });

  const [selectedCard, setSelectedCard] = useState(null);

  const subscriptionPlans = [
    {
      name: "Basic",
      price: { monthly: "$10/month", yearly: "$100/year" },
      features: ["Feature 1", "Feature 2"],
      availableFeatures: ["Feature 1", "Feature 2"],
    },
    {
      name: "Standard",
      price: { monthly: "$20/month", yearly: "$200/year" },
      features: ["Feature 1", "Feature 2", "Feature 3"],
      availableFeatures: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Premium",
      price: { monthly: "$30/month", yearly: "$300/year" },
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      availableFeatures: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  const handlePricingToggle = (planName, pricingOption) => {
    setSelectedPricing((prevState) => ({
      ...prevState,
      [planName]: pricingOption,
    }));
  };

  const handleCardHover = (planName) => {
    setSelectedCard(planName);
  };

  const handleCardLeave = () => {
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            className={`w-80 p-6 rounded-2xl shadow-lg transform transition-all duration-300 
              ${selectedCard === plan.name ? "scale-105 bg-blue-100" : "bg-white"} 
              ${index === 0 ? "border-blue-500" : index === 1 ? "border-green-500" : "border-yellow-500"}`}
            key={index}
            onMouseEnter={() => handleCardHover(plan.name)}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-2xl font-semibold text-center text-navy">{plan.name}</h3>
            <ul className="my-4">
              {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center justify-center py-1 
                  ${plan.availableFeatures.includes(feature) ? "text-green-600" : "text-red-600"}`}
                >
                  {plan.availableFeatures.includes(feature) ? <FaCheck /> : <FaTimes />}
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mb-4">
              {["monthly", "yearly"].map((pricingOption) => (
                <div
                  key={pricingOption}
                  className={`px-4 py-2 mx-2 rounded-lg cursor-pointer transition-all 
                    ${selectedPricing[plan.name] === pricingOption ? "bg-green-200 border border-green-500" : "bg-white border border-gray-300"}`}
                  onClick={() => handlePricingToggle(plan.name, pricingOption)}
                >
                  <span className="text-sm font-semibold">
                    {pricingOption === "monthly" ? "Monthly" : "Yearly"}
                  </span>
                  {selectedPricing[plan.name] === pricingOption && (
                    <FaCheck className="ml-2 text-green-600" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center text-lg font-bold mb-4 text-gray-800">
              {selectedPricing[plan.name] === "monthly"
                ? plan.price.monthly
                : plan.price.yearly}
            </div>
            <button className={`w-full py-2 rounded-lg text-white font-semibold transition-colors ${index === 0 ? "bg-blue-500 hover:bg-blue-600" : index === 1 ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"}`}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCards;
