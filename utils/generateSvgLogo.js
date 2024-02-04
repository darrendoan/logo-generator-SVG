function generateSvgLogo(data){
    console.log(data.text);
    console.log(data["text-colour"]);
    console.log(data.shape);
    console.log(data["shape-colour"]);
    if (data.shape === "Circle") {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill='${data["shape-colour"]}' />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data["text-colour"]}'>${data.text}</text>
</svg>
        `
    } else if (data.shape === "Square") {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill='${data["shape-colour"]}' />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data["text-colour"]}'>${data.text}</text>
</svg>
        `
    } else {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,190 50,190" fill="${data["shape-colour"]}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill='${data["text-colour"]}'>${data.text}</text>
</svg>
        `
    }
    
    
}





module.exports = generateSvgLogo;