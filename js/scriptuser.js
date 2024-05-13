const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// Search functionality
search.addEventListener('input', searchTable);

function searchTable() {
    // Loop through each row in the table
    table_rows.forEach(row => {
        // Get the text content of the row and convert to lowercase
        let rowData = row.textContent.toLowerCase();
        // Get the search term and convert to lowercase
        let searchTerm = search.value.toLowerCase();

        // Toggle the 'hide' class based on whether the search term is found in the row data
        row.classList.toggle('hide', rowData.indexOf(searchTerm) === -1);
    });
}

// Sorting functionality
table_headings.forEach((head, columnIndex) => {
    // Add click event listener to each header
    head.addEventListener('click', () => {
        // Remove 'active' class from all headers
        table_headings.forEach(header => header.classList.remove('active'));
        // Add 'active' class to the clicked header
        head.classList.add('active');

        // Sort direction: ascending by default
        let sort_asc = true;

        // Toggle sort direction
        if (head.classList.contains('asc')) {
            head.classList.remove('asc');
            sort_asc = false;
        } else {
            head.classList.add('asc');
        }

        // Sort the table rows
        sortTable(columnIndex, sort_asc);
    });
});

// Function to sort the table rows
function sortTable(column, sort_asc) {
    // Convert the NodeList to an array to use array methods
    const rowsArray = Array.from(table_rows);
    // Sort the rows based on the specified column and sort direction
    rowsArray.sort((a, b) => {
        let rowDataA = a.querySelectorAll('td')[column].textContent.toLowerCase();
        let rowDataB = b.querySelectorAll('td')[column].textContent.toLowerCase();
        if (sort_asc) {
            return rowDataA.localeCompare(rowDataB);
        } else {
            return rowDataB.localeCompare(rowDataA);
        }
    });

    // Remove existing rows from the table body
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    // Append the sorted rows back to the table body
    rowsArray.forEach(row => {
        tbody.appendChild(row);
    });
}