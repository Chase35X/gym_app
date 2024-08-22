function changeDotColor(dotId, color) {
    const dot = document.getElementById(dotId);
    if (dot) {
        dot.style.backgroundColor = color;
    }
}

// Example usage:
// changeDotColor('dot1', 'red');
// changeDotColor('dot2', 'green');
// changeDotColor('dot3', 'yellow');
