/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};
  
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  });

  const result = Object.keys(categoryMap).map(category => ({ category: categoryMap[category] }));
  return result;
}

const transactions = [
  { itemName: "Milk", category: "Groceries", price: 2.5, timestamp: "2022-01-01T00:00:00Z" },
  { itemName: "Eggs", category: "Groceries", price: 1.5, timestamp: "2022-01-02T00:00:00Z" },
  { itemName: "T-Shirt", category: "Clothing", price: 20.0, timestamp: "2022-01-03T00:00:00Z" },
  { itemName: "Jeans", category: "Clothing", price: 50.0, timestamp: "2022-01-04T00:00:00Z" },
  { itemName: "Phone Case", category: "Accessories", price: 5.0, timestamp: "2022-01-05T00:00:00Z" },
  { itemName: "Headphones", category: "Accessories", price: 25.0, timestamp: "2022-01-06T00:00:00Z" }
];

calculateTotalSpentByCategory(transactions);


module.exports = calculateTotalSpentByCategory;
