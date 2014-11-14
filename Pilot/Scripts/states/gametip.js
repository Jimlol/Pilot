/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function gameTipState() {
        ocean.update();
    }
    states.gameTipState = gameTipState;

    // Restart Game when Try Again Button is clicked
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    // Game Over Scene
    function gameTip() {
        var gameTipLabel;
		var gameTipBox;
		var gameTipSend;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "pointer";

        // Display Game Introduction
        gameTipLabel = new objects.Label(stage.canvas.width / 2, 40, "Introduction");
        game.addChild(gameTipLabel);
		
		gameTipBox = new objects.Label(stage.canvas.width / 2, 160, "Get the coin and");
		game.addChild(gameTipBox);
		
		gameTipSend = new objects.Label(stage.canvas.width / 2, 200, "avoid to touch the cloud");
		game.addChild(gameTipSend);


        // Display Try Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 360, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.gameTip = gameTip;
})(states || (states = {}));
//# sourceMappingURL=gameTip.js.map
