// Functional version of calculateChange
const calculateChange = (price, paid) => {
    if ([price, paid].some(val => isNaN(val) || val <= 0)) return "Enter valid amounts!";
    if (paid < price) return "Insufficient payment!";

    const denominations = [100, 50, 20, 10, 5, 1];
    let change = paid - price;

    return denominations
        .map(d => {
            const count = Math.floor(change / d);
            change %= d;
            return count > 0 ? `${count} x ₱${d}` : null;
        })
        .filter(Boolean)  // Remove null values
        .join("<br>") || "No change needed.";
};

// Pure function to handle UI update
const computeChange = () => {
    const price = parseFloat(document.getElementById("price").value);
    const paid = parseFloat(document.getElementById("paid").value);
    document.getElementById("result").innerHTML = calculateChange(price, paid);
};
