﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
	// Go to the introduction screen 
    function gameTipButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.GAME_TIP_STATE;
        changeState(currentState);
//		alert("Get the coin and avoid to touch the cloud");
    }
    states.gameTipButtonClicked = gameTipButtonClicked;

    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        ocean.update();
        plane.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "pointer";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "MAIL PILOT");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 240, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Introduction Again Button
        gameTipButton = new objects.Button(stage.canvas.width / 2, 360, "gameTipButton");
        game.addChild(gameTipButton);
        gameTipButton.addEventListener("click", gameTipButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
