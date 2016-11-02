// A simple byte converter pipe which converts the size of a repository to the relevant units.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BytesPipe = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (value, precision) {
        if (isNaN(value) || !isFinite(value))
            return '-';
        if (typeof precision === 'undefined')
            precision[0] = 1;
        var units = ['kB', 'MB', 'GB', 'TB', 'PB'], number = Math.floor(Math.log(value) / Math.log(1024));
        return (value / Math.pow(1024, Math.floor(number))).toFixed(precision[0]) + ' ' + units[number];
    };
    BytesPipe = __decorate([
        core_1.Pipe({ name: 'bytes' }), 
        __metadata('design:paramtypes', [])
    ], BytesPipe);
    return BytesPipe;
}());
exports.BytesPipe = BytesPipe;
//# sourceMappingURL=bytes.pipe.js.map