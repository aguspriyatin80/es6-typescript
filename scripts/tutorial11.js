"use strict";
var employee = {
    id: 1,
    greet: function () {
        setTimeout(function () { console.log(this.id); }, 1000);
    }
};
var employee2 = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
    }
};
var employee3 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
employee2.greet();
employee3.greet();
