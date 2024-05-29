document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-button');

    // Function to calculate and display the total price
    function calculateTotal() {
        const prices = document.querySelectorAll('.price');
        let total = 0;

        prices.forEach(price => {
            total += parseFloat(price.textContent);
        });

        // Remove existing total row if present
        const existingTotalRow = document.getElementById('total-row');
        if (existingTotalRow) {
            existingTotalRow.remove();
        }

        // Create a new row for the total price
        const totalRow = document.createElement('tr');
        totalRow.id = 'total-row';
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; // Span across both columns
        totalCell.textContent = `Total Price: $${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        // Append the new row to the table
        document.getElementById('grocery-table').appendChild(totalRow);
    }

    // Add event listener to the calculate button
    calculateButton.addEventListener('click', calculateTotal);
});
