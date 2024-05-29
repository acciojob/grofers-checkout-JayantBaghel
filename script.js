document.addEventListener('DOMContentLoaded', () => {
    // Function to calculate and display the total price
    function calculateTotal() {
        const prices = document.querySelectorAll('.price');
        let total = 0;

        prices.forEach(price => {
            total += parseFloat(price.textContent);
        });

        // Create a new row for the total price
        const totalRow = document.createElement('tr');
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; // Span across both columns
        totalCell.textContent = `Total Price: $${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        // Append the new row to the table
        document.getElementById('grocery-table').appendChild(totalRow);
    }

    // Call the function to calculate and display the total price
    calculateTotal();
});
