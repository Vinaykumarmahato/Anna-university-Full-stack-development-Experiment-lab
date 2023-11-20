// Sample data for product listings
const productData = [
    { name: "Laptop", description: "Used laptop in good condition", price: 500 },
    { name: "Smartphone", description: "Unlocked smartphone with accessories", price: 200 },
    // Add more sample data as needed
];

// Function to display product listings
function displayProducts() {
    const productListings = document.getElementById("product-listings");
    productListings.innerHTML = "";

    productData.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productName);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);

        productListings.appendChild(productCard);
    });
}

// Function to post a new product
function postProduct() {
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productPrice = document.getElementById("productPrice").value;

    // Add the new product to the data
    productData.push({
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice),
    });

    // Clear the form fields
    document.getElementById("classified-form").reset();

    // Update the displayed product listings
    displayProducts();
}

// Initial display of products
displayProducts();
