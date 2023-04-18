const businessContainer = document.querySelector(".business-container");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");

let businesses = [
  { name: "Reema's Grocery Shop", neighborhood: "downtown", review: 4.5, description: "Find whatever grocery you want" },
  { name: "Sam Medical Store", neighborhood: "uptown", review: 3.2, description: "Get medicine as per your docter's choice" },
  { name: "Raju Chaat Bhandaar", neighborhood: "east-side", review: 4.1, description: "The delicious Chaat maker in town" },
  { name: "RamHaldi Sweet", neighborhood: "west-side", review: 2.8, description: "Your Town's Sweetest Person" },
  { name: "Vishal Gym", neighborhood: "west-side", review: 2.8, description: "Your Town's Gym Trainer" },
  {name: "John's Pizza", neighborhood: "downtown", review: 4.5,  description: "The delicious pizza in town"},
  {name: "Bobby's Auto Repair",neighborhood: "Northside",review: 3.2,description: "We'll fix your car up right"},
  { name: "Rajesh's Tea Stall", neighborhood: "west-side", review: 2.8, description: "Ghar wali chai" },
  { name: "Henu Water Supply", neighborhood: "west-side", review: 2.8, description: "Get Mineral Water" },
  { name: "Foji Stationary", neighborhood: "east-side", review: 2.8, description: "Get The best Stationary Items" },
  {name: "Sue's Cleaning",neighborhood: "Southside",review: 4.8,description: "We'll clean your house ",},
];

// Render businesses
const renderBusinesses = (businesses) => {
  businessContainer.innerHTML = "";
  businesses.forEach(business => {
    const businessDiv = document.createElement("div");
    businessDiv.classList.add("business");
    businessDiv.setAttribute("data-neighborhood", business.neighborhood);
    businessDiv.setAttribute("data-review", business.review);
    businessDiv.innerHTML = `
      <h2>${business.name}</h2>
      <p>Neighborhood: ${business.neighborhood}</p>
      <p>Reviews: ${business.review}</p>
      <p>Description: ${business.description}</p>
    `;
    businessContainer.appendChild(businessDiv);
  });
}

// Filter businesses by neighborhood
const filterBusinesses = (businesses) => {
  const filterValue = filterSelect.value;
  if (filterValue === "All Neighbourhoods") {
    return businesses;
  } else {
    return businesses.filter(business => business.neighborhood === filterValue);
  }
}

// Sort businesses by reviews
const sortBusinesses = (businesses) => {
  const sortValue = sortSelect.value;
  if (sortValue === "default") {
    return businesses;
  } else if (sortValue === "high-to-low") {
    return businesses.sort((a, b) => b.review - a.review);
  } else if (sortValue === "low-to-high") {
    return businesses.sort((a, b) => a.review - b.review);
  }
}

// Event listeners
filterSelect.addEventListener("change", () => {
  const filteredBusinesses = filterBusinesses(businesses);
  const sortedBusinesses = sortBusinesses(filteredBusinesses);
  renderBusinesses(sortedBusinesses);
});

sortSelect.addEventListener("change", () => {
  const filteredBusinesses = filterBusinesses(businesses);
  const sortedBusinesses = sortBusinesses(filteredBusinesses);
  renderBusinesses(sortedBusinesses);
});

// Initial render
const sortedBusinesses = sortBusinesses(businesses);
renderBusinesses(sortedBusinesses);
