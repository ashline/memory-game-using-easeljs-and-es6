function init() {
    console.log(1);
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 50, 100);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
}
