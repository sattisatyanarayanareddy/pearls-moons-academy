// Disable right-click (context menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevent the right-click menu
    alert("Right-click is disabled on this site.");
});

// Disable inspect element using keyboard shortcuts (F12 and Ctrl+Shift+I)
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
        alert("Inspect element is disabled.");
        return false; // Disable F12 and Ctrl+Shift+I
    }
}