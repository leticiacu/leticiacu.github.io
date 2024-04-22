let legends = ["Ash", "Bangalore", "Bloodhound", "Caustic", "Crypto", "Fuse", "Gibraltar", "Horizon", "Lifeline", "Loba", "Mirage", "Octane", "Pathfinder", "Rampart", "Revenant", "Valkyrie", "Wattson", "Wraith"];

console.log(legends[0]);

console.log(Math.floor(Math.random() * legends.length));

let randomLegend = legends[Math.floor(Math.random() * legends.length)];
console.log(randomLegend);

// Example of setting image source based on the selected legend
if (randomLegend === "Ash") {
    let newImage = document.createElement('img');
    newImage.src = 'apex images/ash1.jpeg';
    
    // Replace 'ash1.jpeg' with the actual path to Ash's image
    document.body.appendChild(newImage); // Append the new image to the document body or another element
}
if (randomLegend === "Ash") {
    let newImage = document.createElement('img');
    newImage.src = 'apex images/Portrait_Ash_square.webp';

    document.body.appendChild(newImage);
}
