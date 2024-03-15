let img1, img2, img3, img4;
let imagePath = `https://static-assets.codecademy.com/Courses/Learn-p5/media/cutePuppySquare.jpg`;
let canvasWidth, canvasHeight;

function preload() {
  img1 = loadImage(imagePath);
  img2 = loadImage(imagePath);
  img3 = loadImage(imagePath);
  img4 = loadImage(imagePath);
}

function setup() {
  canvasWidth = windowWidth * 0.8; // 80% of the window width
  canvasHeight = windowHeight * 0.8; // 80% of the window height
  createCanvas(canvasWidth, canvasHeight);

  let imgSize = min(width, height) * 0.35; // 35% of the smaller dimension
  let imgMarginX = (width - imgSize * 2) / 3; // Calculate margin for images on X-axis
  let imgMarginY = (height - imgSize * 2) / 3; // Calculate margin for images on Y-axis

  textSize(32); // Set font size
  textStyle(BOLD); // Set font weight to bold
  textFont('Courier'); // Set font family to Courier
  fill('#3b3a30');
  text('Minimalistic Filter App', width / 2.35, 30);

  // Draw the original images to the canvas in the horizontal center
  image(img1, imgMarginX + imgSize, imgMarginY, imgSize, imgSize);
  image(img2, imgMarginX * 2 + imgSize * 1.25, imgMarginY, imgSize, imgSize);
  image(img3, imgMarginX + imgSize, imgMarginY * 2 + imgSize, imgSize, imgSize);
  image(
    img4,
    imgMarginX * 2 + imgSize * 1.25,
    imgMarginY * 2 + imgSize,
    imgSize,
    imgSize
  );

  // Create buttons for applying filters
  let buttonMarginTop = imgMarginY * 3 + imgSize * 2; // Margin from the bottom of the images
  let buttonWidth = 80; // Button width
  let buttonSpacing = 20; // Spacing between buttons
  //let buttonX = (width - (buttonWidth * 4 + buttonSpacing * 3)) / 2; // Horizontal centering for buttons
  let buttonX = imgMarginX + imgSize;

  createButton('GRAY')
    .mousePressed(() => applyFilter(img1, GRAY))
    .position(buttonX, buttonMarginTop)
    .style('background-color', '#563f46') // Set background color
    .style('color', 'white') // Set text color
    .style('font-family', 'Courier') // Set font family
    .style('font-weight', 'bold') // Set font weight
    .style('padding', '10px 20px'); // Add padding
  createButton('INVERT')
    .mousePressed(() => applyFilter(img2, INVERT))
    .position(buttonX + (buttonWidth + buttonSpacing) * 1.2, buttonMarginTop)
    .style('background-color', '#563f46') // Set background color
    .style('color', 'white') // Set text color
    .style('font-family', 'Courier') // Set font family
    .style('font-weight', 'bold') // Set font weight
    .style('padding', '10px 20px'); // Add padding
  createButton('POSTERIZE')
    .mousePressed(() => applyFilter(img3, POSTERIZE, 4))
    .position(buttonX + (buttonWidth + buttonSpacing) * 2.6, buttonMarginTop)
    .style('background-color', '#563f46') // Set background color
    .style('color', 'white') // Set text color
    .style('font-family', 'Courier') // Set font family
    .style('font-weight', 'bold') // Set font weight
    .style('padding', '10px 20px'); // Add padding
  createButton('THRESHOLD')
    .mousePressed(() => applyFilter(img4, THRESHOLD))
    .position(buttonX + (buttonWidth + buttonSpacing) * 4.16, buttonMarginTop)
    .style('background-color', '#563f46') // Set background color
    .style('color', 'white') // Set text color
    .style('font-family', 'Courier') // Set font family
    .style('font-weight', 'bold') // Set font weight
    .style('padding', '10px 20px'); // Add padding
}

function applyFilter(img, filterFunction, parameter) {
  img.filter(filterFunction, parameter);
  // Clear canvas
  clear();
  // Redraw the images with filters applied
  setup();
}

function windowResized() {
  // Resize canvas and redraw images and buttons when the window is resized
  canvasWidth = windowWidth * 0.8;
  canvasHeight = windowHeight * 0.8;
  resizeCanvas(canvasWidth, canvasHeight);
}
