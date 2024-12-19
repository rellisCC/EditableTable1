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
// Add event listener for the export button
document.getElementById('exportButton').addEventListener('click', function() {
    const table = document.getElementById('editableTable');
    html2canvas(table).then(canvas => {
        // Create an image from the canvas
        var image = canvas.toDataURL('image/png');

        // Create a link to download the image
        var downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = 'table.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
