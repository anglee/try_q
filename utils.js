window.utils = {
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