/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function () {
        function Ocean(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            // Set Ocean move speed
			this.dx = 2;

            game.addChild(this.image);
        }
		// Set ocean move diretion to right to left
        Ocean.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x <= -720) {
                this.reset();
            }
        };

        Ocean.prototype.reset = function () {
            this.image.x = 0;
        };

        Ocean.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean;
    })();
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
