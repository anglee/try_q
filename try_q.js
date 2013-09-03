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
    var ev1_step1 = function () {
        utils.log("ev1_step1 started");
        var deferred_step1 = Q.defer();
        Q.delay(1000).then(function () {
            utils.log("ev1_step1 finished");
            deferred_step1.resolve();
        });
        utils.log("return ev1_step1");
        return deferred_step1.promise;
    };
    var ev1_step2 = function () {
        utils.log("ev1_step2 started");
        var deferred_step2 = Q.defer();
        Q.delay(1000).then(function () {
            utils.log("ev1_step2 finished");
            deferred_step2.resolve();
        });
        utils.log("return ev1_step2");
        return deferred_step2.promise;
    };
    var deferred = Q.defer();
    Q.delay(1000)
        .then(ev1_step1)
        .delay(1000)
        .then(ev1_step2)
        .delay(1000)
        .done(function () {
        utils.log("done ev1");
        deferred.resolve("output from ev1");
    });
    utils.log("return ev1");
    return deferred.promise;
};

var evaluate2 = function (input) {
    utils.log("ev2, input of ev2 =", input);
    Q.delay(1000).then(function () {
        utils.log("async ev2");
    });
    utils.log("return ev2");
    return "output from ev2";
};

Q.fcall(evaluate1)// Q.fcall returns a Promise obj, since evaluate1 returns promise, this line could be just evaluate1()
    .delay(1000)
    .then(evaluate2);


