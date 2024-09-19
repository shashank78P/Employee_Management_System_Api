"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this._statusCode = statusCode;
        this._data = data;
        this._message = message;
        this._success = statusCode < 400;
    }
    // Getters
    get statusCode() {
        return this._statusCode;
    }
    get data() {
        return this._data;
    }
    get message() {
        return this._message;
    }
    get success() {
        return this._success;
    }
    // Setters
    set statusCode(statusCode) {
        this._statusCode = statusCode;
        this._success = statusCode < 400;
    }
    set data(data) {
        this._data = data;
    }
    set message(message) {
        this._message = message;
    }
    set success(success) {
        this._success = success;
    }
}
exports.default = ApiResponse;
