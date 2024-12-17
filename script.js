document.getElementById('addRowButton').addEventListener('click', function() {
    const table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cellsToCreate = ['Index', 'Review', 'True Sentiment', 'Cbest', 'Condition', 'Predicted Sentiment', 'Correctness'];

    cellsToCreate.forEach((_, index) => {
        const newCell = newRow.insertCell(index);
        newCell.setAttribute('contenteditable', 'true');
        newCell.innerText = index === 0 ? String.fromCharCode(65 + table.rows.length - 1) : ''; // Automatically increment index
    });
});
