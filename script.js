document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-button');
    const ansDiv = document.getElementById('ans');

    // Function to calculate and display the total price
    function calculateTotal() {
        const prices = document.querySelectorAll('.price');
        let total = 0;

        prices.forEach(price => {
            total += parseFloat(price.textContent);
        });

        // Display the total price in the ans div
        ansDiv.textContent = `Total Price: $${total.toFixed(2)}`;
    }

    // Add event listener to the calculate button
    calculateButton.addEventListener('click', calculateTotal);
});
