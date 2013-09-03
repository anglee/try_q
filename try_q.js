var evaluate1 = function () {
    Q.fcall(function () { console.log("async call evaluate1 "); });
    console.log("evaluate 1");
    return "output from ev1";
};
var evaluate2 = function (input) {
    console.log("input = ", input);
    Q.fcall(function () { console.log("async call evaluate2 "); });
    console.log("evaluate 2");
    return "output from ev2";
};

Q.fcall(evaluate1)
    .delay(1000)
    .then(evaluate2);
