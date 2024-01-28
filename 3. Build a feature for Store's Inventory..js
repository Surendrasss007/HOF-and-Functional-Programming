// Sample store inventory object with prices in USD
const storeInventory = {
  item1: 20,   // USD
  item2: 35.5, // USD
  item3: 10,   // USD
  // Add more items as needed
};

// Function to convert prices to Indian Rupees
const convertToRupees = (usdPrice) => usdPrice * 80;

// Using the map higher-order function to create a new object with converted prices
const convertedInventory = Object.fromEntries(
  Object.entries(storeInventory).map(([item, priceUSD]) => [item, convertToRupees(priceUSD)])
);

// Displaying the original and converted inventory
console.log("Original Inventory (USD):", storeInventory);
console.log("Converted Inventory (INR):", convertedInventory);
