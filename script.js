document.getElementById('editableTable').addEventListener('input', (event) => {
    console.log('Data changed in row:', event.target.parentNode.rowIndex, 'Column:', event.target.cellIndex);
    // Here you can add code to handle data changes, e.g., save to local storage or send to server
});
