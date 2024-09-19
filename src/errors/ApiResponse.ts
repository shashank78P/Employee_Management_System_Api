class ApiResponse {
    private _statusCode: number;
    private _data: object | string;
    private _message: string;
    private _success: boolean;

    constructor(statusCode: number, data: object | string, message: string = "Success") {
        this._statusCode = statusCode;
        this._data = data;
        this._message = message;
        this._success = statusCode < 400;
    }

    // Getters
    get statusCode(): number {
        return this._statusCode;
    }

    get data(): object | string {
        return this._data;
    }

    get message(): string {
        return this._message;
    }

    get success(): boolean {
        return this._success;
    }

    // Setters
    set statusCode(statusCode: number) {
        this._statusCode = statusCode;
        this._success = statusCode < 400;
    }

    set data(data: string) {
        this._data = data;
    }

    set message(message: string) {
        this._message = message;
    }

    set success(success: boolean) {
        this._success = success;
    }
}

export default ApiResponse;
