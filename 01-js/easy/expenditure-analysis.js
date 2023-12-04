/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
