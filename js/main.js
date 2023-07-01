// Import PixiJS
import PIXI from 'pixi.js';

// Create the PixiJS application
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

// Create the background gradient
const gradient = new PIXI.Graphics();
gradient.beginFill(0xFF0000); // Start color: Red
gradient.lineStyle(0);
gradient.moveTo(0, 0);
gradient.lineTo(app.screen.width, 0);
gradient.lineTo(app.screen.width, app.screen.height);
gradient.lineTo(0, app.screen.height);
gradient.endFill();
app.stage.addChild(gradient);

// Create the information icon
const infoIcon = PIXI.Sprite.from('info_icon.png');
infoIcon.position.set(40, 40);
app.stage.addChild(infoIcon);

// Create the level number
const levelText = new PIXI.Text('Level 1', {
  fontFamily: 'Arial',
  fontSize: 24,
  fill: '#FFFFFF',
});
levelText.position.set(app.screen.width / 2, 40);
levelText.anchor.set(0.5, 0.5);
app.stage.addChild(levelText);

// Create the settings icon
const settingsIcon = PIXI.Sprite.from('settings_icon.png');
settingsIcon.position.set(app.screen.width - 40, 40);
app.stage.addChild(settingsIcon);

// Create the grid container
const gridContainer = new PIXI.Container();
gridContainer.position.set(app.screen.width / 2 - 200, app.screen.height / 2 - 200);
app.stage.addChild(gridContainer);

// Create the grid squares
const squareSize = 100;
const darkGray = 0x444444;
const lightGray = 0xCCCCCC;

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const square = new PIXI.Graphics();
    square.beginFill(lightGray);
    square.lineStyle(0);
    square.drawRect(i * squareSize, j * squareSize, squareSize, squareSize);
    square.endFill();

    const innerSquare = new PIXI.Graphics();
    innerSquare.beginFill(darkGray);
    innerSquare.lineStyle(0);
    innerSquare.drawRect(i * squareSize, j * squareSize, squareSize, squareSize);
    innerSquare.endFill();

    gridContainer.addChild(square, innerSquare);
  }
}

// Create the previous level icon
const prevIcon = PIXI.Sprite.from('prev_icon.png');
prevIcon.position.set(40, app.screen.height - 40);
app.stage.addChild(prevIcon);

// Create the submit button
const submitButton = new PIXI.Graphics();
submitButton.beginFill(0xFFFFFF);
submitButton.drawRect(app.screen.width / 2 - 20, app.screen.height - 60, 40, 40);
submitButton.endFill();
app.stage.addChild(submitButton);

// Create the next level icon
const nextIcon = PIXI.Sprite.from('next_icon.png');
nextIcon.position.set(app.screen.width - 40, app.screen.height - 40);
app.stage.addChild(nextIcon);
