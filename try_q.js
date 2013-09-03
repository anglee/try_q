var evaluate1 = function () {
    setTimeout(function() {
        console.log("evaluate1");
    }, 1000);
};
var evaluate2 = function () {
    setTimeout(function() {
        console.log("evaluate2");
    }, 500);
};

evaluate1();
evaluate2();
