"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require('dotenv').config();
var crypto = require('crypto');
var path = require('node:path');
var _a = require("fs"), readdirSync = _a.readdirSync, readFileSync = _a.readFileSync, writeFile = _a.writeFile, existsSync = _a.existsSync;
var F_DATA = /** @class */ (function (_super) {
    __extends(F_DATA, _super);
    function F_DATA(obj, name, hash) {
        if (name === void 0) { name = ''; }
        if (hash === void 0) { hash = ''; }
        var _this = _super.call(this) || this;
        if (obj.hasOwnProperty('data') && obj.hasOwnProperty('name')) {
            return obj;
        }
        else {
            throw new Error("Invalid object (missing Properties 'name' or 'data')");
        }
        return _this;
    }
    F_DATA.verifyData = function () { return true; };
    F_DATA.getUsers = function (base) {
        return new F_DATACollection(base + '/users/', 'users');
    };
    F_DATA.getGroups = function (base) {
        return new F_DATACollection(base, 'groups');
    };
    F_DATA.getContent = function (base, filename) {
        var content;
        if (filename.split('.')[1] === 'md') {
            content = readdirSync(base + 'content/md').find(function (item) { return String(item) === filename; });
            return new F_DATA({
                name: filename,
                data: readFileSync(base + 'content/md/' + filename).toString()
            });
        }
        if (filename.split('.')[1] === 'json') {
            content = readdirSync(base + 'content/md').find(function (item) { return String(item) === filename; });
            return JSON.parse(readFileSync(base + 'content/md/' + filename).toString());
        }
        return null;
    };
    F_DATA.publishDevToStage = function () {
        return false;
    };
    return F_DATA;
}(Object));
var F_DATACollection = /** @class */ (function (_super) {
    __extends(F_DATACollection, _super);
    function F_DATACollection(base, name) {
        if (base === void 0) { base = '/'; }
        if (name === void 0) { name = 'all'; }
        var _this = _super.call(this) || this;
        readdirSync(base).forEach(function (file) {
            if (file.slice(-5) == '.json') {
                var rawData = readFileSync("".concat(base, "/").concat(file));
                _this.push(JSON.parse(rawData));
            }
        });
        return _this;
    }
    return F_DATACollection;
}(Array));
exports.F_DATA = F_DATA;
