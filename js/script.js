function getLuminance(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16) / 255;
  const g = parseInt(hexColor.substring(3, 5), 16) / 255;
  const b = parseInt(hexColor.substring(5, 7), 16) / 255;

  const srgb = [r, g, b].map(c => (c <= 0.03928) ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function setTextColor(element, backgroundColor) {
  const luminance = getLuminance(backgroundColor);
  if (luminance > 0.5) { // Adjust threshold as needed
    element.style.color = '#000000'; // Dark text for light backgrounds
  } else {
    element.style.color = '#ffffff'; // Light text for dark backgrounds
  }
}

// Example usage:
const myElement = document.getElementById('myText');
const bgColor = '#ff0000'; // Example background color
setTextColor(myElement, bgColor);