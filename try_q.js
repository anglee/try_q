var utils = {
    getPrettyTime: function () {
        var date = new Date();
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return date.getHours() + ":" + minutes + ":" + seconds;
    },
    log: function () {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 0, "" + this.getPrettyTime() + " - ");
        console.log.apply(console, args);
    }
};

var evaluate1 = function () {
    utils.log("ev1");
    var deferred = Q.defer();
    Q.delay(2000).then(function () {
        utils.log("async ev1");
        deferred.resolve("output from ev1");
    });
    utils.log("return ev1");
    return deferred.promise;
};

var evaluate2 = function (input) {
    utils.log("ev2, input =", input);
    Q.delay(2000).then(function () {
        utils.log("async ev2");
    });
    utils.log("return ev2");
    return "output from ev2";
};

Q.fcall(evaluate1)// Q.fcall returns a Promise obj, since evaluate1 returns promise, this line could be just evaluate1()
    .delay(2000)
    .then(evaluate2);


