webpackJsonp([352],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return String; });
var String = /** @class */ (function () {
    function String() {
    }
    String.isNullOrWhiteSpace = function (value) {
        try {
            if (value == null || value === 'undefined')
                return false;
            return value.replace(/\s/g, '').length < 1;
        }
        catch (e) {
            return false;
        }
    };
    String.Format = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        try {
            return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
                var s = match.split(':');
                if (s.length > 1) {
                    i = i[0];
                    match = s[1].replace('}', '');
                }
                var arg = String.formatPattern(match, args[i]);
                return typeof arg != 'undefined' && arg != null ? arg : String.Empty;
            });
        }
        catch (e) {
            return String.Empty;
        }
    };
    String.formatPattern = function (match, arg) {
        switch (match) {
            case 'L':
                arg = arg.toLowerCase();
                break;
            case 'U':
                arg = arg.toUpperCase();
                break;
            default:
                break;
        }
        return arg;
    };
    String.Empty = "";
    return String;
}());

//# sourceMappingURL=String.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListModelResponse; });
/**
   * 回傳IQueryable物件內容及訊息
   *
   * @public
   * @class ListModelResponse
   * @implements  IListModelResponse
   * @param   {Function}    [name]
   */
var ListModelResponse = /** @class */ (function () {
    function ListModelResponse(obj) {
        this.Message = obj && obj.Message || null;
        this.DidError = obj && obj.DidError || null;
        this.ErrorMessage = obj && obj.ErrorMessage || null;
        this.PageNumber = obj && obj.PageNumber || null;
        this.PageRows = obj && obj.PageRows || null;
        this.TotalPages = obj && obj.TotalPages || null;
        this.Model = obj && obj.Model || null;
    }
    return ListModelResponse;
}());

// export interface ListModelResponseFunc extends Function {
//     <TModel>($TModel: Bridge.TypeRef<TModel>): {
//         prototype: ListModelResponse<TModel>;
//         new (): ListModelResponse<TModel>;
//     }
// }
// var ListModelResponse: ListModelResponseFunc;
// }
//# sourceMappingURL=ListModelResponse.js.map

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_MyAppSharedSettings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Response_ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(conf, storage, http) {
        this.conf = conf;
        this.storage = storage;
        this.http = http;
        this.forward_url = "";
        this.Replace = function (originalString, oldValue, newValue, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            //
            // if invalid data, return the original string
            //
            if (originalString == null ||
                oldValue == null ||
                newValue == null ||
                oldValue.length === 0)
                return originalString;
            //
            // do text replacement
            //
            var dest = "";
            var source = originalString;
            if (ignoreCase) {
                source = source.toLocaleLowerCase();
                oldValue = oldValue.toLowerCase();
            }
            //
            // find first match
            //
            var StartPos = 0;
            var EndPos = source.indexOf(oldValue, StartPos);
            var Skip = EndPos >= 0 ? EndPos - StartPos : source.length - StartPos;
            //
            // while we found a matched string
            //
            while (EndPos > -1) {
                //
                // copy original string skipped segment
                //
                if (Skip > 0)
                    dest += originalString.substr(StartPos, Skip);
                //
                // copy new value
                //
                dest += newValue;
                //
                // skip over old value
                //
                StartPos = EndPos + oldValue.length;
                //
                // find next match
                //
                EndPos = source.indexOf(oldValue, StartPos);
                Skip = EndPos >= 0 ? EndPos - StartPos : source.length - StartPos;
            }
            //
            // append the last skipped string segment from original string
            //
            if (Skip > 0)
                dest += originalString.substr(StartPos, Skip);
            return dest;
        };
        console.log("Hello ServiceProvider Provider");
    }
    ServicesProvider.prototype.GetAsync = function (sub_url, ctl, is_auth) {
        var _this = this;
        var url = "";
        var debug = "";
        if (new Date(this.conf.ExpireDate) <= new Date()) {
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_7__Model_Response_ListModelResponse__["a" /* ListModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            return this.http
                .get(url + this.forward_url + sub_url, options)
                .map(function (item) {
                if (item.Token != null) {
                    _this.conf.token = item.Token;
                    _this.conf.ExpireDate = item.ExpireDate;
                }
                return item;
            });
        }
        else {
            return this.http.get(url + sub_url);
        }
    };
    ServicesProvider.prototype.download = function (sub_url, ctl, is_auth) {
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}";
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward/download?url=";
            else
                this.forward_url = "Forward/download?url=";
        }
        else {
            format = "{1}";
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url);
        if (is_auth) {
            return this.http.get(this.conf.API_URL + this.forward_url + sub_url, {
                headers: this.get_http_headers_from_type("application/octet-stream"),
                responseType: "blob"
            });
        }
        else {
            return this.http.get(this.conf.API_URL + sub_url);
        }
    };
    ServicesProvider.prototype.Upload = function (sub_url, ctl, is_auth, body) {
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}";
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward/upload?url=";
            else
                this.forward_url = "Forward/upload?url=";
        }
        else {
            format = "{1}";
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url);
        if (is_auth) {
            return this.http.post(this.conf.API_URL + this.forward_url + sub_url, body, {
                headers: this.get_http_header(),
                responseType: "text"
            });
        }
        else {
            return this.http.post(this.conf.API_URL + this.forward_url + sub_url, body);
        }
    };
    ServicesProvider.prototype.DeleteAsync = function (sub_url, ctl, is_auth) {
        var _this = this;
        if (new Date(this.conf.ExpireDate) <= new Date()) {
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__["a" /* SingleModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        var url = "";
        var debug = "";
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            return this.http
                .delete(url + this.forward_url + sub_url, options)
                .map(function (item) {
                if (item.Token != null) {
                    _this.conf.token = item.Token;
                    _this.conf.ExpireDate = item.ExpireDate;
                }
                return item;
            });
        }
        else {
            return this.http.delete(url + sub_url);
        }
    };
    ServicesProvider.prototype.PostAsync = function (sub_url, ctl, is_auth, body) {
        var _this = this;
        if (ctl !== "UserRegister" && new Date(this.conf.ExpireDate) <= new Date()) {
            // var today = new Date();
            // this.conf.ExpireDate.setDate(today.getDate()+1);
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__["a" /* SingleModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        var url = "";
        var debug = "";
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            return this.http
                .post(url + this.forward_url + sub_url, body, options)
                .map(function (item) {
                if (item.Token != null)
                    _this.conf.token = item.Token;
                return item;
            });
        }
        else {
            return this.http.post(url + this.forward_url + sub_url, body);
        }
    };
    ServicesProvider.prototype.PutAsync = function (sub_url, ctl, is_auth, body) {
        var _this = this;
        if (new Date(this.conf.ExpireDate) <= new Date()) {
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__["a" /* SingleModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        var url = "";
        var debug = "";
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            return this.http
                .put(url + this.forward_url + sub_url, body, options)
                .map(function (item) {
                if (item.Token != null) {
                    _this.conf.token = item.Token;
                    _this.conf.ExpireDate = item.ExpireDate;
                }
                return item;
            });
        }
        else {
            return this.http.put(url + this.forward_url + sub_url, body);
        }
    };
    ServicesProvider.prototype.PatchAsync = function (sub_url, ctl, is_auth, body) {
        var _this = this;
        if (new Date(this.conf.ExpireDate) <= new Date()) {
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__["a" /* SingleModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        var url = "";
        var debug = "";
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            return this.http
                .patch(url + this.forward_url + sub_url, body, options)
                .map(function (item) {
                if (item.Token != null) {
                    _this.conf.token = item.Token;
                    _this.conf.ExpireDate = item.ExpireDate;
                }
                return item;
            });
        }
        else {
            return this.http.patch(url + this.forward_url + sub_url, body);
        }
    };
    ServicesProvider.prototype.PostPutAsync = function (sub_url, ctl, is_auth, body, mode) {
        var _this = this;
        if (new Date(this.conf.ExpireDate) <= new Date()) {
            ///登入逾時
            return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
                return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_SingleModelResponse__["a" /* SingleModelResponse */]({
                    Message: "TimeOut",
                    DidError: true,
                    ErrorMessage: "TimeOut",
                    Model: "",
                    Token: ""
                });
            }));
        }
        var url = "";
        var debug = "";
        if (this.conf.API_URL.indexOf(",debug=") > 0) {
            url = this.conf.API_URL.split(",debug=")[0];
            debug = "debug=" + this.conf.API_URL.split(",debug=")[1];
        }
        else
            url = this.conf.API_URL;
        var format;
        if (this.conf.is_url_forward) {
            format = "{1}&ctl={0}" + (debug > "" ? "&{2}" : "");
            sub_url = this.Replace(sub_url, "&", "@@", true);
            if (is_auth)
                this.forward_url = "AuthForward?url=";
            else
                this.forward_url = "Forward?url=";
        }
        else {
            if (sub_url.indexOf("?") > 0)
                format = "{1}" + (debug > "" ? "&{2}" : "");
            else
                format = "{1}" + (debug > "" ? "?{2}" : "");
            this.forward_url = "";
        }
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(format, ctl, sub_url, debug);
        if (is_auth) {
            var options = {
                headers: this.get_http_headers()
            };
            if (mode === "POST") {
                return this.http
                    .post(url + this.forward_url + sub_url, body, options)
                    .map(function (item) {
                    if (item.Token != null) {
                        _this.conf.token = item.Token;
                        _this.conf.ExpireDate = item.ExpireDate;
                    }
                    return item;
                });
            }
            else if (mode === "PUT") {
                return this.http
                    .put(url + this.forward_url + sub_url, body, options)
                    .map(function (item) {
                    if (item.Token != null) {
                        _this.conf.token = item.Token;
                        _this.conf.ExpireDate = item.ExpireDate;
                    }
                    return item;
                });
            }
            else {
                return this.http
                    .patch(url + this.forward_url + sub_url, body, options)
                    .map(function (item) {
                    if (item.Token != null)
                        _this.conf.token = item.Token;
                    return item;
                });
            }
        }
        else {
            if (mode === "POST") {
                return this.http.post(url + this.forward_url + sub_url, body);
            }
            else if (mode === "PUT")
                return this.http.put(url + this.forward_url + sub_url, body);
            else
                return this.http.patch(url + this.forward_url + sub_url, body);
        }
    };
    ServicesProvider.prototype.get_http_headers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Accept", "application/json");
        headers = headers.append("Content-Type", "application/json");
        //headers.append('apiKey', 'xxx');
        // console.log("get_http_header_RequestOptions currentUser.userName="+this.currentUser.Model.userName);
        //headers=headers.append("Authorization",this.conf.is_url_forward===true? "Basic " + btoa(this.conf.userName + ":" + this.conf.password) : "Token " + this.conf.userName + ":" + this.conf.token);
        headers = headers.append("Authorization", "Token " + this.conf.userName + ":" + this.conf.token);
        return headers;
    };
    ServicesProvider.prototype.get_http_headers_from_type = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("responseType", "arraybuffer");
        headers = headers.append("Accept", type);
        //headers=headers.append("Authorization",this.conf.is_url_forward===true? "Basic " + btoa(this.conf.userName + ":" + this.conf.password) : "Token " + this.conf.userName + ":" + this.conf.token);
        headers = headers.append("Authorization", "Token " + this.conf.userName + ":" + this.conf.token);
        return headers;
    };
    ServicesProvider.prototype.get_http_header = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        //headers=headers.append("Authorization",this.conf.is_url_forward===true? "Basic " + btoa(this.conf.userName + ":" + this.conf.password) : "Token " + this.conf.userName + ":" + this.conf.token);
        headers = headers.append("Authorization", "Token " + this.conf.userName + ":" + this.conf.token);
        return headers;
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleModelResponse; });
/**
   * 回傳IQueryable物件內容及訊息
   *
   * @public
   * @class ListModelResponse
   * @implements  IListModelResponse
   * @param   {Function}    [name]
   */
var SingleModelResponse = /** @class */ (function () {
    function SingleModelResponse(obj) {
        this.Message = obj && obj.Message || null;
        this.DidError = obj && obj.DidError || null;
        this.ErrorMessage = obj && obj.ErrorMessage || null;
        this.Model = obj && obj.Model || null;
    }
    return SingleModelResponse;
}());

//# sourceMappingURL=SingleModelResponse.js.map

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringResponse = /** @class */ (function (_super) {
    __extends(StringResponse, _super);
    function StringResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = obj.Model;
        }
        return _this;
    }
    return StringResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=StringResponse.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnViewModel; });
var ConnViewModel = /** @class */ (function () {
    function ConnViewModel() {
    }
    return ConnViewModel;
}());

//# sourceMappingURL=ConnViewModel.js.map

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppSharedSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__String__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyAppSharedSettings = /** @class */ (function () {
    function MyAppSharedSettings() {
        this.appName = "My Application Name";
        this.appTitle = "My Application Title";
        this.appVersion = "1.0.0.0 beta";
        this.welcomeMessage = "Welcome";
        this.userName = "";
        this.password = "";
        this.token = "";
        this.ip = "localhost";
        this.port = "80";
        this.API_URL = __WEBPACK_IMPORTED_MODULE_1__String__["a" /* String */].Format("http://{0}:{1}/sbpwebapi/api/", this.ip, this.port);
        this.is_url_forward = false;
        this.login_count = 0;
        this.is_register = true;
        this.mobile_mode = true;
    }
    MyAppSharedSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MyAppSharedSettings);
    return MyAppSharedSettings;
}());

//# sourceMappingURL=MyAppSharedSettings.js.map

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageViewModel; });
var ProgramPageViewModel = /** @class */ (function () {
    function ProgramPageViewModel() {
    }
    return ProgramPageViewModel;
}());

//# sourceMappingURL=ProgramPageViewModel.js.map

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramViewModel; });
var ProgramViewModel = /** @class */ (function () {
    function ProgramViewModel() {
    }
    return ProgramViewModel;
}());

//# sourceMappingURL=ProgramViewModel.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewModel; });
var UserViewModel = /** @class */ (function () {
    function UserViewModel() {
    }
    return UserViewModel;
}());

//# sourceMappingURL=UserViewModel.js.map

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_UserViewModel__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_MyAppSharedSettings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserMenuResponse__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_UserResponse__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServicesProvider = /** @class */ (function () {
    function AuthServicesProvider(conf, Services) {
        this.conf = conf;
        this.Services = Services;
        this.ctl = "UserRegister";
        console.log("Hello AuthServiceProvider Provider");
    }
    AuthServicesProvider.prototype.loginAsync = function (credentials) {
        var _this = this;
        var sub_url;
        sub_url = "Login";
        this.user = new __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_UserViewModel__["a" /* UserViewModel */]();
        this.user.userName = credentials.userName.trim();
        this.user.password = credentials.password.trim();
        return this.Services.PostAsync(sub_url, this.ctl, false, this.user).map(function (item) {
            _this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserMenuResponse__["a" /* UserMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            if (_this.currentUser.DidError === false) {
                _this.conf.userName = _this.user.userName;
                _this.conf.password = _this.user.password;
                _this.conf.token = item.Token;
                _this.conf.ExpireDate = item.ExpireDate;
                _this.userName = _this.currentUser.Model.UserViewModel.userName;
                _this.token = _this.currentUser.Model.UserViewModel.token;
                _this.currentUser.Model.MenuViewModel.forEach(function (m) {
                    m.menu_id = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format("{0}_{1}", m.menu_no, _this.conf.login_count);
                });
            }
            //   console.log(this.currentUser);
            return _this.currentUser;
        });
    };
    AuthServicesProvider.prototype.registerAsync = function (credentials) {
        var _this = this;
        var sub_url;
        sub_url = "UserRegister";
        this.user = new __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_UserViewModel__["a" /* UserViewModel */]();
        this.user.userName = credentials.userName.trim();
        this.user.password = credentials.password.trim();
        return this.Services.PostAsync(sub_url, this.ctl, false, this.user).map(function (item) {
            _this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserMenuResponse__["a" /* UserMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model || null
            });
            if (_this.currentUser.DidError === false) {
                _this.conf.userName = _this.user.userName;
                _this.conf.password = _this.user.password;
                _this.conf.token = _this.currentUser.Model.UserViewModel.token;
                _this.userName = _this.currentUser.Model.UserViewModel.userName;
                // this.token = this.currentUser.Model.UserViewModel.token;
                _this.conf.token = item.Token;
                _this.conf.ExpireDate = item.ExpireDate;
                _this.currentUser.Model.MenuViewModel.forEach(function (m) {
                    m.menu_id = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format("{0}_{1}", m.menu_no, _this.conf.login_count);
                });
            }
            return _this.currentUser;
        });
    };
    AuthServicesProvider.prototype.ChangePasswordAsync = function (credentials) {
        var _this = this;
        var sub_url;
        sub_url = "UserRegister/{0}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, credentials.userName);
        this.user = new __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_UserViewModel__["a" /* UserViewModel */]();
        this.user.userName = credentials.userName;
        this.user.password = credentials.password;
        return this.Services.PutAsync(sub_url, this.ctl, true, this.user).map(function (item) {
            _this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserMenuResponse__["a" /* UserMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model || null
            });
            _this.conf.token = item.Token;
            _this.conf.ExpireDate = item.ExpireDate;
            return _this.currentUser;
        });
    };
    AuthServicesProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServicesProvider.prototype.authenticated = function () {
        return this.currentUser != null && this.currentUser.DidError === false;
    };
    AuthServicesProvider.prototype.timeout = function () {
        this.currentUser = null;
    };
    AuthServicesProvider.prototype.logout = function () {
        var _this = this;
        var sub_url;
        sub_url = "Logout?id={0}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.currentUser.Model.UserViewModel.userName);
        return this.Services.PutAsync(sub_url, this.ctl, true, this.currentUser.Model.UserViewModel).map(function (item) {
            _this.res_user = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_UserResponse__["a" /* UserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model || null
            });
            if (_this.res_user.DidError == false)
                _this.currentUser = null;
            return _this.res_user;
        });
    };
    AuthServicesProvider.prototype.IsPermission = function (permission_no) {
        var result = false;
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.batch_edit_lic === false) {
            if (permission_no.indexOf("batch_edit_lic") > 0) {
                return false;
            }
        }
        this.currentUser.Model.UserViewModel.PermissionViewModel.forEach(function (p) {
            permission_no.forEach(function (element) {
                if (p.permission_no === element ||
                    p.permission_no === "Administration") {
                    result = true;
                }
            });
        });
        return result && new Date(this.conf.ExpireDate) > new Date();
    };
    AuthServicesProvider.prototype.CanJob = function () {
        var permission = [
            "batch_job_admin",
            "batch_job_execute",
            "batch_job_viewer",
            "batch_log_viewer",
            "sch_job_admin",
            "sch_job_viewer",
            "job_loop_admin",
            "viewer",
            "line",
            "line_owner",
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditJob = function () {
        var permission = ["batch_job_admin", "sch_job_admin", "line", "line_owner",];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditLoopJob = function () {
        var permission = ["batch_job_admin", "sch_job_admin", "job_loop_admin"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanJobExec = function () {
        var permission = ["batch_job_admin", "batch_job_execute", "sch_job_admin", "line"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanViewLog = function () {
        var permission = [
            "batch_job_admin",
            "batch_job_execute",
            "batch_log_viewer",
            "sch_job_admin",
            "sch_job_viewer",
            "viewer"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanAuth = function () {
        var permission = [
            "authorization_admin",
            "authorization_viewer",
            "permission_auth_admin",
            "permission_auth_viewer",
            "viewer"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditAuth = function () {
        var permission = ["authorization_admin", "permission_auth_admin"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanPermission = function () {
        var permission = [
            "permission_admin",
            "permission_viewer",
            "permission_auth_admin",
            "permission_auth_viewer",
            "viewer"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditPermission = function () {
        var permission = ["permission_admin", "permission_auth_admin"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanSch = function () {
        var permission = [
            "sch_admin",
            "sch_job_admin",
            "sch_job_viewer",
            "sch_viewer",
            "viewer",
            "line",
            "line_owner",
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.sch_lic === true ||
            this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditSch = function () {
        if (this.currentUser == null)
            return false;
        var permission = ["sch_admin", "sch_job_admin", "line", "line_owner",];
        if (this.currentUser.Model.sch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanExecSql = function () {
        if (this.currentUser == null)
            return false;
        var permission = ["database_admin"];
        if (this.currentUser.Model.table_lic === true ||
            this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanTable = function () {
        var permission = [
            "database_admin",
            "batch_job_admin",
            "batch_job_execute",
            "batch_job_viewer",
            "batch_log_viewer",
            "sch_job_admin",
            "sch_job_viewer",
            "viewer"
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.table_lic === true ||
            this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditTable = function () {
        if (this.currentUser == null)
            return false;
        var permission = ["database_admin", "batch_job_admin", "sch_job_admin"];
        if (this.currentUser.Model.table_lic === true ||
            this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanCode = function () {
        var permission = [
            "batch_job_admin",
            "sch_job_admin",
            "code_admin",
            "code_viewer",
            "batch_job_viewer",
            "viewer",
            "database_admin"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditCode = function () {
        var permission = [
            "batch_job_admin",
            "sch_job_admin",
            "code_admin",
            "database_admin"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanConn = function () {
        var permission = [
            "batch_job_admin",
            "sch_job_admin",
            "conn_admin",
            "conn_viewer",
            "batch_job_viewer",
            "file_browser_viewer",
            "file_browser_download",
            "file_browser_upload",
            "file_browser_admin",
            "ftp_file_browser_viewer",
            "ftp_file_browser_download",
            "ftp_file_browser_upload",
            "ftp_file_browser_admin",
            "viewer",
            "line",
            "line_owner",
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditConn = function () {
        var permission = ["batch_job_admin", "sch_job_admin", "conn_admin", "batch_edit_lic",];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanBatch = function () {
        var permission = [
            "batch_job_admin",
            "batch_viewer",
            "batch_job_viewer",
            "viewer"
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditBatch = function () {
        var permission = ["batch_job_admin", "batch_edit_lic",];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.batch_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanUploadFileBrowser = function () {
        var permission = ["file_browser_upload", "file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.file_browser_lic === true ||
            this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanDownloadFileBrowser = function () {
        var permission = ["file_browser_download", "file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.file_browser_lic === true ||
            this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanFileBrowser = function () {
        var permission = [
            "file_browser_viewer",
            "file_browser_download",
            "file_browser_upload",
            "file_browser_admin",
            "ftp_file_browser_viewer",
            "ftp_file_browser_download",
            "ftp_file_browser_upload",
            "ftp_file_browser_admin",
            "viewer"
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.file_browser_lic === true ||
            this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditFileBrowser = function () {
        var permission = ["file_browser_admin", "ftp_file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.file_browser_lic === true ||
            this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanUploadFtpFileBrowser = function () {
        var permission = ["ftp_file_browser_upload", "ftp_file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanDownloadFtpFileBrowser = function () {
        var permission = ["ftp_file_browser_download", "ftp_file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanFtpFileBrowser = function () {
        var permission = [
            "ftp_file_browser_viewer",
            "ftp_file_browser_download",
            "ftp_file_browser_upload",
            "ftp_file_browser_admin",
            "viewer"
        ];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEditFtpFileBrowser = function () {
        var permission = ["ftp_file_browser_admin"];
        if (this.currentUser == null)
            return false;
        if (this.currentUser.Model.ftp_file_browser_lic === true)
            return this.IsPermission(permission);
        else
            return false;
    };
    AuthServicesProvider.prototype.CanEmail = function () {
        var permission = [
            "batch_job_admin",
            "sch_job_admin",
            "batch_job_viewer",
            "email_admin",
            "email_viewer",
            "batch_viewer",
            "batch_log_viewer",
            "viewer"
        ];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanEditEmail = function () {
        var permission = ["batch_job_admin", "sch_job_admin", "email_admin"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider.prototype.CanLine = function () {
        var permission = ["line", "line_owner"];
        return this.IsPermission(permission);
    };
    AuthServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["a" /* ServicesProvider */]])
    ], AuthServicesProvider);
    return AuthServicesProvider;
}());

//# sourceMappingURL=auth-services.js.map

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionViewModel; });
var PermissionViewModel = /** @class */ (function () {
    function PermissionViewModel() {
    }
    return PermissionViewModel;
}());

//# sourceMappingURL=PermissionViewModel.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageMenuViewModel; });
var ProgramPageMenuViewModel = /** @class */ (function () {
    function ProgramPageMenuViewModel() {
    }
    return ProgramPageMenuViewModel;
}());

//# sourceMappingURL=ProgramPageMenuViewModel.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlViewModel; });
var ApiUrlViewModel = /** @class */ (function () {
    function ApiUrlViewModel() {
    }
    return ApiUrlViewModel;
}());

//# sourceMappingURL=ApiUrlViewModel.js.map

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GlobalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GlobalComponent = /** @class */ (function () {
    function GlobalComponent(loadingCtrl, alertCtrl, authServices, modalCtrl, toastCtrl, platform) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authServices = authServices;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.network = true;
        this.Replace = function (originalString, oldValue, newValue, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            //
            // if invalid data, return the original string
            //
            if (originalString == null ||
                oldValue == null ||
                newValue == null ||
                oldValue.length === 0)
                return originalString;
            //
            // do text replacement
            //
            var dest = "";
            var source = originalString;
            if (ignoreCase) {
                source = source.toLocaleLowerCase();
                oldValue = oldValue.toLowerCase();
            }
            //
            // find first match
            //
            var StartPos = 0;
            var EndPos = source.indexOf(oldValue, StartPos);
            var Skip = EndPos >= 0 ? EndPos - StartPos : source.length - StartPos;
            //
            // while we found a matched string
            //
            while (EndPos > -1) {
                //
                // copy original string skipped segment
                //
                if (Skip > 0)
                    dest += originalString.substr(StartPos, Skip);
                //
                // copy new value
                //
                dest += newValue;
                //
                // skip over old value
                //
                StartPos = EndPos + oldValue.length;
                //
                // find next match
                //
                EndPos = source.indexOf(oldValue, StartPos);
                Skip = EndPos >= 0 ? EndPos - StartPos : source.length - StartPos;
            }
            //
            // append the last skipped string segment from original string
            //
            if (Skip > 0)
                dest += originalString.substr(StartPos, Skip);
            return dest;
        };
        console.log("Hello GlobalComponent Component");
        // this.text = 'Hello World';
    }
    GlobalComponent.prototype.adjust = function (element) {
        var textArea = element.nativeElement.getElementsByTagName("textarea")[0];
        textArea.style.overflow = "hidden";
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
    };
    GlobalComponent.prototype.check_app = function () {
        return (document.URL.indexOf("http://") === -1 &&
            document.URL.indexOf("https://") === -1);
    };
    GlobalComponent.prototype.check_auth = function (navCtrl) {
        if (this.authServices.authenticated() === false) {
            navCtrl.setRoot("LoginPage");
            return false;
        }
        else {
            return true;
        }
    };
    GlobalComponent.prototype.getUserInfo = function () {
        return this.authServices.getUserInfo();
    };
    GlobalComponent.prototype.logout = function () {
        this.authServices.logout();
    };
    GlobalComponent.prototype.timeout = function () {
        this.authServices.timeout();
    };
    GlobalComponent.prototype.createLoader = function (message) {
        if (message === void 0) { message = "資料載入中..."; }
        // Optional Parameter
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: message
            });
        }
    };
    GlobalComponent.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    GlobalComponent.prototype.copyTextToClipboard = function (Text) {
        var textArea = document.createElement("textarea");
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = "0";
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        textArea.value = Text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.setSelectionRange(0, textArea.value.length);
        // textArea.select();
        try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            console.log("Copying text command was " + msg);
            var toast = this.toastCtrl.create({
                message: "已經複製到剪貼簿",
                duration: 1000,
                position: "middle"
            });
            toast.present();
        }
        catch (err) {
            console.log("Oops, unable to copy");
        }
        document.body.removeChild(textArea);
    };
    GlobalComponent.prototype.showError = function (text) {
        this.dismissLoading();
        var modal = this.modalCtrl.create("ShowMessagePage", {
            message: text,
            title: "異常",
            error: true
        });
        modal.present();
    };
    GlobalComponent.prototype.showMessage = function (title, text) {
        this.dismissLoading();
        var modal = this.modalCtrl.create("ShowMessagePage", {
            message: text,
            title: title,
            error: false
        });
        modal.present();
    };
    GlobalComponent.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text.substring(0, 512),
            buttons: [
                {
                    text: "確定"
                }
            ]
        });
        alert.present();
    };
    GlobalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "global",template:/*ion-inline-start:"C:\jones\ionic\prod\src\components\global\global.html"*/'\n'/*ion-inline-end:"C:\jones\ionic\prod\src\components\global\global.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], GlobalComponent);
    return GlobalComponent;
}());

//# sourceMappingURL=global.js.map

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileServicesProvider = /** @class */ (function () {
    function FileServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "File";
        console.log("Hello FileServicesProvider Provider");
    }
    FileServicesProvider.prototype.DeleteAsync = function (exec_file_seq) {
        var sub_url;
        sub_url = "File/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    FileServicesProvider.prototype.GetMaxExecFileSeqAsync = function (func_no, exec_group) {
        var sub_url;
        sub_url = "File/get_max_exec_file_seq?func_no={1}&exec_group={2}&min_exec_file_seq=&max_exec_file_seq=";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, func_no, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileServicesProvider.prototype.GetMaxRangeExecFileSeqAsync = function (func_no, exec_group, min_exec_file_seq, max_exec_file_seq) {
        var sub_url;
        sub_url = "File/get_max_exec_file_seq?func_no={1}&exec_group={2}&min_exec_file_seq={3}&max_exec_file_seq={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, func_no, exec_group, min_exec_file_seq, max_exec_file_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileServicesProvider.prototype.GetMaxExecSeqAsync = function (func_no, exec_group) {
        var sub_url;
        sub_url = "File/get_max_exec_seq?func_no={1}&exec_group={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, func_no, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileServicesProvider.prototype.GetSqlAsync = function (exec_file_seq, method) {
        var sub_url;
        sub_url = "File/get_{2}_sql?exec_file_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], FileServicesProvider);
    return FileServicesProvider;
}());

//# sourceMappingURL=file-services.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberResponse = /** @class */ (function (_super) {
    __extends(NumberResponse, _super);
    function NumberResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = obj.Model;
        }
        return _this;
    }
    return NumberResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=NumberResponse.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagementViewModel; });
var FileManagementViewModel = /** @class */ (function () {
    function FileManagementViewModel() {
    }
    return FileManagementViewModel;
}());

//# sourceMappingURL=FileManagementViewModel.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryBrowserViewModel; });
var DirectoryBrowserViewModel = /** @class */ (function () {
    function DirectoryBrowserViewModel() {
    }
    return DirectoryBrowserViewModel;
}());

//# sourceMappingURL=DirectoryBrowserViewModel.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSetServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TableSetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TableSetServicesProvider = /** @class */ (function () {
    function TableSetServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "exec_table_seq";
        console.log("Hello ServicesProvider Provider");
    }
    TableSetServicesProvider.prototype.GetMaxExecTableSeqAsync = function (exec_group, min_exec_table_seq, max_exec_table_seq) {
        var sub_url;
        sub_url = "TableSet/get_max_exec_table_seq?exec_group={1}&min_exec_table_seq={2}&max_exec_table_seq={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_group, min_exec_table_seq, max_exec_table_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    TableSetServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_group) {
        var sub_url;
        sub_url = "TableSet/get_max_exec_seq?exec_group={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    TableSetServicesProvider.prototype.GetSqlAsync = function (exec_table_seq, method) {
        var sub_url;
        sub_url = "TableSet/get_{2}_sql?exec_table_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    TableSetServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], TableSetServicesProvider);
    return TableSetServicesProvider;
}());

//# sourceMappingURL=table-set-services.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewModel; });
var TableViewModel = /** @class */ (function () {
    function TableViewModel() {
    }
    return TableViewModel;
}());

//# sourceMappingURL=TableViewModel.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailViewModel; });
var TableDetailViewModel = /** @class */ (function () {
    function TableDetailViewModel() {
    }
    return TableDetailViewModel;
}());

//# sourceMappingURL=TableDetailViewModel.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserViewModel; });
var FileBrowserViewModel = /** @class */ (function () {
    function FileBrowserViewModel() {
    }
    return FileBrowserViewModel;
}());

//# sourceMappingURL=FileBrowserViewModel.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryViewModel; });
var GlossaryViewModel = /** @class */ (function () {
    function GlossaryViewModel() {
    }
    return GlossaryViewModel;
}());

//# sourceMappingURL=GlossaryViewModel.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuViewModel; });
var MenuViewModel = /** @class */ (function () {
    function MenuViewModel() {
    }
    return MenuViewModel;
}());

//# sourceMappingURL=MenuViewModel.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoleViewModel; });
var UserRoleViewModel = /** @class */ (function () {
    function UserRoleViewModel() {
    }
    return UserRoleViewModel;
}());

//# sourceMappingURL=UserRoleViewModel.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCheckViewModel; });
var CodeCheckViewModel = /** @class */ (function () {
    function CodeCheckViewModel() {
    }
    return CodeCheckViewModel;
}());

//# sourceMappingURL=CodeCheckViewModel.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopEventViewModel; });
var JobLoopEventViewModel = /** @class */ (function () {
    function JobLoopEventViewModel() {
    }
    return JobLoopEventViewModel;
}());

//# sourceMappingURL=JobLoopEventViewModel.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProcessedSqlViewModel; });
var JobProcessedSqlViewModel = /** @class */ (function () {
    function JobProcessedSqlViewModel() {
    }
    return JobProcessedSqlViewModel;
}());

//# sourceMappingURL=JobProcessedSqlViewModel.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineMessageViewModel; });
var LineMessageViewModel = /** @class */ (function () {
    function LineMessageViewModel() {
    }
    return LineMessageViewModel;
}());

//# sourceMappingURL=LineMessageViewModel.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskColumnViewModel; });
var MaskColumnViewModel = /** @class */ (function () {
    function MaskColumnViewModel() {
    }
    return MaskColumnViewModel;
}());

//# sourceMappingURL=MaskColumnViewModel.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePermissionViewModel; });
var RolePermissionViewModel = /** @class */ (function () {
    function RolePermissionViewModel() {
    }
    return RolePermissionViewModel;
}());

//# sourceMappingURL=RolePermissionViewModel.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteColumnViewModel; });
var QuoteColumnViewModel = /** @class */ (function () {
    function QuoteColumnViewModel() {
    }
    return QuoteColumnViewModel;
}());

//# sourceMappingURL=QuoteColumnViewModel.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlViewModel; });
var SqlViewModel = /** @class */ (function () {
    function SqlViewModel() {
    }
    return SqlViewModel;
}());

//# sourceMappingURL=SqlViewModel.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchViewModel; });
var SchViewModel = /** @class */ (function () {
    function SchViewModel() {
    }
    return SchViewModel;
}());

//# sourceMappingURL=SchViewModel.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgViewModel; });
var ProgViewModel = /** @class */ (function () {
    function ProgViewModel() {
    }
    return ProgViewModel;
}());

//# sourceMappingURL=ProgViewModel.js.map

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/api-url-add-edit-modal/api-url-add-edit-modal.module": [
		430,
		351
	],
	"../pages/api-url/api-url.module": [
		431,
		112
	],
	"../pages/audit-logger-detail/audit-logger-detail.module": [
		432,
		233
	],
	"../pages/audit-logger/audit-logger.module": [
		433,
		146
	],
	"../pages/audit-table-add-edit-modal/audit-table-add-edit-modal.module": [
		434,
		318
	],
	"../pages/audit-table-detail-add-edit-modal/audit-table-detail-add-edit-modal.module": [
		435,
		319
	],
	"../pages/audit-table-detail/audit-table-detail.module": [
		436,
		111
	],
	"../pages/audit-table/audit-table.module": [
		437,
		110
	],
	"../pages/auth-management/auth-management.module": [
		438,
		232
	],
	"../pages/batch-bus-type/batch-bus-type.module": [
		439,
		23
	],
	"../pages/batch-exec-program-add-edit-modal/batch-exec-program-add-edit-modal.module": [
		440,
		310
	],
	"../pages/batch-exec-program-select-modal/batch-exec-program-select-modal.module": [
		441,
		5
	],
	"../pages/batch-exec-program/batch-exec-program.module": [
		453,
		4
	],
	"../pages/batch-management/batch-management.module": [
		442,
		231
	],
	"../pages/batch-program-add-edit-modal/batch-program-add-edit-modal.module": [
		454,
		350
	],
	"../pages/batch-program-check-add-edit-modal/batch-program-check-add-edit-modal.module": [
		443,
		292
	],
	"../pages/batch-program-check-pk-edit-modal/batch-program-check-pk-edit-modal.module": [
		444,
		293
	],
	"../pages/batch-program-check-pk/batch-program-check-pk.module": [
		445,
		55
	],
	"../pages/batch-program-check-select-modal/batch-program-check-select-modal.module": [
		446,
		10
	],
	"../pages/batch-program-check/batch-program-check.module": [
		447,
		9
	],
	"../pages/batch-program-management/batch-program-management.module": [
		449,
		230
	],
	"../pages/batch-program-select-modal/batch-program-select-modal.module": [
		448,
		159
	],
	"../pages/batch-program/batch-program.module": [
		450,
		158
	],
	"../pages/batch-variable/batch-variable.module": [
		451,
		22
	],
	"../pages/change-password/change-password.module": [
		452,
		229
	],
	"../pages/check-code-column-select-modal/check-code-column-select-modal.module": [
		455,
		228
	],
	"../pages/check-type-select-modal/check-type-select-modal.module": [
		456,
		227
	],
	"../pages/cmd-log/cmd-log.module": [
		457,
		226
	],
	"../pages/code-add-edit-modal/code-add-edit-modal.module": [
		458,
		281
	],
	"../pages/code-check-add-edit-modal/code-check-add-edit-modal.module": [
		459,
		349
	],
	"../pages/code-check-type-detail-modal/code-check-type-detail-modal.module": [
		460,
		157
	],
	"../pages/code-check-type-detail/code-check-type-detail.module": [
		461,
		156
	],
	"../pages/code-check/code-check.module": [
		462,
		155
	],
	"../pages/code-select-modal/code-select-modal.module": [
		463,
		21
	],
	"../pages/code/code.module": [
		464,
		20
	],
	"../pages/column-mapping-add-edit-modal/column-mapping-add-edit-modal.module": [
		465,
		317
	],
	"../pages/column-mapping-add-table-modal/column-mapping-add-table-modal.module": [
		466,
		316
	],
	"../pages/column-mapping/column-mapping.module": [
		467,
		43
	],
	"../pages/column-type-mapping-add-edit-modal/column-type-mapping-add-edit-modal.module": [
		468,
		315
	],
	"../pages/column-type-mapping/column-type-mapping.module": [
		469,
		109
	],
	"../pages/common-management/common-management.module": [
		470,
		225
	],
	"../pages/config-col-index-loop-add-edit-modal/config-col-index-loop-add-edit-modal.module": [
		471,
		278
	],
	"../pages/config-col-index-loop/config-col-index-loop.module": [
		487,
		108
	],
	"../pages/conn-db-add-edit-modal/conn-db-add-edit-modal.module": [
		472,
		348
	],
	"../pages/conn-db/conn-db.module": [
		473,
		154
	],
	"../pages/conn-ftp-add-edit-modal/conn-ftp-add-edit-modal.module": [
		474,
		347
	],
	"../pages/conn-ftp/conn-ftp.module": [
		476,
		153
	],
	"../pages/conn-http-add-edit-modal/conn-http-add-edit-modal.module": [
		475,
		346
	],
	"../pages/conn-http/conn-http.module": [
		477,
		152
	],
	"../pages/conn-management/conn-management.module": [
		489,
		224
	],
	"../pages/conn-sbp-add-edit-modal/conn-sbp-add-edit-modal.module": [
		478,
		345
	],
	"../pages/conn-sbp/conn-sbp.module": [
		479,
		151
	],
	"../pages/conn-select-modal/conn-select-modal.module": [
		480,
		150
	],
	"../pages/conn-smtp-add-edit-modal/conn-smtp-add-edit-modal.module": [
		481,
		344
	],
	"../pages/conn-smtp/conn-smtp.module": [
		482,
		149
	],
	"../pages/conn-ssis/conn-ssis.module": [
		495,
		148
	],
	"../pages/database-management/database-management.module": [
		483,
		223
	],
	"../pages/del-table-add-edit-modal/del-table-add-edit-modal.module": [
		484,
		277
	],
	"../pages/del-table/del-table.module": [
		485,
		107
	],
	"../pages/directory-browser-add-edit-modal/directory-browser-add-edit-modal.module": [
		486,
		343
	],
	"../pages/directory-browser-select-modal/directory-browser-select-modal.module": [
		488,
		8
	],
	"../pages/directory-browser/directory-browser.module": [
		490,
		7
	],
	"../pages/email-add-edit-modal/email-add-edit-modal.module": [
		491,
		311
	],
	"../pages/email-attach-add-edit-modal/email-attach-add-edit-modal.module": [
		492,
		313
	],
	"../pages/email-attach/email-attach.module": [
		493,
		106
	],
	"../pages/email-management/email-management.module": [
		496,
		222
	],
	"../pages/email-send-log/email-send-log.module": [
		494,
		145
	],
	"../pages/email-user-add-edit-modal/email-user-add-edit-modal.module": [
		497,
		312
	],
	"../pages/email-user-select-model/email-user-select-model.module": [
		498,
		16
	],
	"../pages/email-user/email-user.module": [
		499,
		15
	],
	"../pages/email/email.module": [
		508,
		105
	],
	"../pages/err-data-log-detail/err-data-log-detail.module": [
		500,
		221
	],
	"../pages/err-data-log/err-data-log.module": [
		501,
		144
	],
	"../pages/err-data-src/err-data-src.module": [
		502,
		143
	],
	"../pages/err-msg-log-detail/err-msg-log-detail.module": [
		503,
		220
	],
	"../pages/err-msg-log/err-msg-log.module": [
		504,
		142
	],
	"../pages/export-sql/export-sql.module": [
		505,
		219
	],
	"../pages/file-backup-management-add-edit-modal/file-backup-management-add-edit-modal.module": [
		506,
		342
	],
	"../pages/file-backup-management/file-backup-management.module": [
		507,
		218
	],
	"../pages/file-browser-copy-edit-modal/file-browser-copy-edit-modal.module": [
		510,
		341
	],
	"../pages/file-browser-management/file-browser-management.module": [
		509,
		217
	],
	"../pages/file-browser/file-browser.module": [
		511,
		6
	],
	"../pages/file-cmd-add-edit-modal/file-cmd-add-edit-modal.module": [
		512,
		276
	],
	"../pages/file-cmd/file-cmd.module": [
		513,
		104
	],
	"../pages/file-code-add-edit-modal/file-code-add-edit-modal.module": [
		514,
		275
	],
	"../pages/file-code/file-code.module": [
		515,
		103
	],
	"../pages/file-copy-add-edit-modal/file-copy-add-edit-modal.module": [
		516,
		274
	],
	"../pages/file-copy/file-copy.module": [
		517,
		102
	],
	"../pages/file-date-filter-add-edit/file-date-filter-add-edit.module": [
		518,
		141
	],
	"../pages/file-depend-add-edit-modal/file-depend-add-edit-modal.module": [
		519,
		309
	],
	"../pages/file-depend/file-depend.module": [
		520,
		101
	],
	"../pages/file-directory-add-edit-modal/file-directory-add-edit-modal.module": [
		523,
		340
	],
	"../pages/file-directory/file-directory.module": [
		521,
		216
	],
	"../pages/file-email-attach-add-edit-modal/file-email-attach-add-edit-modal.module": [
		522,
		273
	],
	"../pages/file-email-attach/file-email-attach.module": [
		524,
		100
	],
	"../pages/file-exec-log-detail/file-exec-log-detail.module": [
		526,
		215
	],
	"../pages/file-exec-log/file-exec-log.module": [
		525,
		140
	],
	"../pages/file-export-add-edit-modal/file-export-add-edit-modal.module": [
		527,
		268
	],
	"../pages/file-export-all/file-export-all.module": [
		528,
		99
	],
	"../pages/file-export-blob-add-edit-modal/file-export-blob-add-edit-modal.module": [
		530,
		272
	],
	"../pages/file-export-blob-table-add-edit-modal/file-export-blob-table-add-edit-modal.module": [
		529,
		271
	],
	"../pages/file-export-blob-table/file-export-blob-table.module": [
		531,
		97
	],
	"../pages/file-export-blob/file-export-blob.module": [
		532,
		98
	],
	"../pages/file-export-hk-add-edit-modal/file-export-hk-add-edit-modal.module": [
		533,
		270
	],
	"../pages/file-export-hk-table-add-edit-modal/file-export-hk-table-add-edit-modal.module": [
		534,
		269
	],
	"../pages/file-export-hk-table/file-export-hk-table.module": [
		535,
		95
	],
	"../pages/file-export-hk/file-export-hk.module": [
		536,
		96
	],
	"../pages/file-export-management/file-export-management.module": [
		537,
		214
	],
	"../pages/file-export-script-add-edit-modal/file-export-script-add-edit-modal.module": [
		538,
		267
	],
	"../pages/file-export-script-table-add-edit-modal/file-export-script-table-add-edit-modal.module": [
		539,
		266
	],
	"../pages/file-export-script-table/file-export-script-table.module": [
		540,
		92
	],
	"../pages/file-export-script/file-export-script.module": [
		541,
		93
	],
	"../pages/file-export-table-add-edit-modal/file-export-table-add-edit-modal.module": [
		542,
		265
	],
	"../pages/file-export-table/file-export-table.module": [
		543,
		91
	],
	"../pages/file-export-tsql-add-edit-modal/file-export-tsql-add-edit-modal.module": [
		544,
		264
	],
	"../pages/file-export-tsql-table-add-edit-modal/file-export-tsql-table-add-edit-modal.module": [
		546,
		263
	],
	"../pages/file-export-tsql-table/file-export-tsql-table.module": [
		545,
		89
	],
	"../pages/file-export-tsql/file-export-tsql.module": [
		547,
		90
	],
	"../pages/file-export/file-export.module": [
		549,
		94
	],
	"../pages/file-exported-header-add-edit/file-exported-header-add-edit.module": [
		548,
		139
	],
	"../pages/file-exported-sql-add-edit/file-exported-sql-add-edit.module": [
		564,
		138
	],
	"../pages/file-filter-add-edit-modal/file-filter-add-edit-modal.module": [
		550,
		262
	],
	"../pages/file-filter-item-add-edit-modal/file-filter-item-add-edit-modal.module": [
		551,
		308
	],
	"../pages/file-filter-item/file-filter-item.module": [
		552,
		88
	],
	"../pages/file-filter/file-filter.module": [
		553,
		87
	],
	"../pages/file-ftp-down-add-edit-modal/file-ftp-down-add-edit-modal.module": [
		554,
		235
	],
	"../pages/file-ftp-down/file-ftp-down.module": [
		555,
		41
	],
	"../pages/file-ftp-up-add-edit-modal/file-ftp-up-add-edit-modal.module": [
		556,
		234
	],
	"../pages/file-ftp-up/file-ftp-up.module": [
		569,
		40
	],
	"../pages/file-http-down-all/file-http-down-all.module": [
		557,
		86
	],
	"../pages/file-http-down-file-add-edit-modal/file-http-down-file-add-edit-modal.module": [
		558,
		261
	],
	"../pages/file-http-down-file/file-http-down-file.module": [
		560,
		85
	],
	"../pages/file-http-down-management/file-http-down-management.module": [
		559,
		213
	],
	"../pages/file-http-h2-c-add-edit-modal/file-http-h2-c-add-edit-modal.module": [
		561,
		260
	],
	"../pages/file-http-h2-c/file-http-h2-c.module": [
		562,
		84
	],
	"../pages/file-http-html-down-file-add-edit-modal/file-http-html-down-file-add-edit-modal.module": [
		563,
		258
	],
	"../pages/file-http-html-down-file/file-http-html-down-file.module": [
		565,
		82
	],
	"../pages/file-http-html2-csv-add-edit-modal/file-http-html2-csv-add-edit-modal.module": [
		566,
		259
	],
	"../pages/file-http-html2-csv/file-http-html2-csv.module": [
		567,
		83
	],
	"../pages/file-http-j2-c-add-edit-modal/file-http-j2-c-add-edit-modal.module": [
		568,
		257
	],
	"../pages/file-http-j2-c/file-http-j2-c.module": [
		570,
		81
	],
	"../pages/file-http-json2-csv-add-edit-modal/file-http-json2-csv-add-edit-modal.module": [
		572,
		256
	],
	"../pages/file-http-json2-csv/file-http-json2-csv.module": [
		571,
		80
	],
	"../pages/file-http-up-add-edit-modal/file-http-up-add-edit-modal.module": [
		573,
		255
	],
	"../pages/file-http-up/file-http-up.module": [
		574,
		79
	],
	"../pages/file-image-add-edit-modal/file-image-add-edit-modal.module": [
		575,
		254
	],
	"../pages/file-image/file-image.module": [
		577,
		78
	],
	"../pages/file-import-add-edit-modal/file-import-add-edit-modal.module": [
		579,
		253
	],
	"../pages/file-import-after-add-edit-modal/file-import-after-add-edit-modal.module": [
		576,
		307
	],
	"../pages/file-import-after/file-import-after.module": [
		578,
		2
	],
	"../pages/file-import-before-add-edit-modal/file-import-before-add-edit-modal.module": [
		581,
		306
	],
	"../pages/file-import-before-check-add-edit-modal/file-import-before-check-add-edit-modal.module": [
		582,
		236
	],
	"../pages/file-import-before-sql-add-edit/file-import-before-sql-add-edit.module": [
		580,
		137
	],
	"../pages/file-import-before/file-import-before.module": [
		584,
		1
	],
	"../pages/file-import-data-expression-add-edit/file-import-data-expression-add-edit.module": [
		583,
		136
	],
	"../pages/file-import-data-lookup-add-edit-modal/file-import-data-lookup-add-edit-modal.module": [
		587,
		305
	],
	"../pages/file-import-data-lookup/file-import-data-lookup.module": [
		585,
		77
	],
	"../pages/file-import-data-search-replace-add-edit-modal/file-import-data-search-replace-add-edit-modal.module": [
		590,
		304
	],
	"../pages/file-import-data-search-replace/file-import-data-search-replace.module": [
		586,
		76
	],
	"../pages/file-import-select-modal/file-import-select-modal.module": [
		591,
		14
	],
	"../pages/file-import-table-add-edit-modal/file-import-table-add-edit-modal.module": [
		588,
		252
	],
	"../pages/file-import-table/file-import-table.module": [
		589,
		75
	],
	"../pages/file-import/file-import.module": [
		592,
		13
	],
	"../pages/file-in-management/file-in-management.module": [
		593,
		212
	],
	"../pages/file-loop-add-edit-modal/file-loop-add-edit-modal.module": [
		606,
		251
	],
	"../pages/file-loop/file-loop.module": [
		594,
		74
	],
	"../pages/file-management-all/file-management-all.module": [
		595,
		73
	],
	"../pages/file-management/file-management.module": [
		596,
		211
	],
	"../pages/file-out-management/file-out-management.module": [
		597,
		210
	],
	"../pages/file-path/file-path.module": [
		598,
		19
	],
	"../pages/file-pdf2-image-add-edit-modal/file-pdf2-image-add-edit-modal.module": [
		599,
		250
	],
	"../pages/file-pdf2-image/file-pdf2-image.module": [
		600,
		72
	],
	"../pages/file-processed-exec-group-add-edit/file-processed-exec-group-add-edit.module": [
		602,
		135
	],
	"../pages/file-processed-sql-add-edit/file-processed-sql-add-edit.module": [
		601,
		134
	],
	"../pages/file-replace-data-add-edit-modal/file-replace-data-add-edit-modal.module": [
		603,
		249
	],
	"../pages/file-replace-data-item-add-edit-modal/file-replace-data-item-add-edit-modal.module": [
		604,
		303
	],
	"../pages/file-replace-data-item/file-replace-data-item.module": [
		605,
		71
	],
	"../pages/file-replace-data/file-replace-data.module": [
		607,
		70
	],
	"../pages/file-sql-add-edit-modal/file-sql-add-edit-modal.module": [
		609,
		248
	],
	"../pages/file-sql/file-sql.module": [
		608,
		69
	],
	"../pages/file-ssis-add-edit-modal/file-ssis-add-edit-modal.module": [
		610,
		237
	],
	"../pages/file-ssis-conn-parm-add-edit-modal/file-ssis-conn-parm-add-edit-modal.module": [
		611,
		302
	],
	"../pages/file-ssis-conn-parm/file-ssis-conn-parm.module": [
		612,
		68
	],
	"../pages/file-ssis-parm-add-edit-modal/file-ssis-parm-add-edit-modal.module": [
		613,
		301
	],
	"../pages/file-ssis-parm/file-ssis-parm.module": [
		614,
		67
	],
	"../pages/file-ssis/file-ssis.module": [
		624,
		39
	],
	"../pages/file-un-zip-add-edit-modal/file-un-zip-add-edit-modal.module": [
		615,
		247
	],
	"../pages/file-un-zip/file-un-zip.module": [
		616,
		66
	],
	"../pages/file-zip-list-add-edit-modal/file-zip-list-add-edit-modal.module": [
		617,
		246
	],
	"../pages/file-zip-list/file-zip-list.module": [
		618,
		65
	],
	"../pages/file-zip-management/file-zip-management.module": [
		619,
		209
	],
	"../pages/file-zip-set-add-edit-modal/file-zip-set-add-edit-modal.module": [
		620,
		300
	],
	"../pages/file-zip-set/file-zip-set.module": [
		621,
		64
	],
	"../pages/file-zip-src-add-edit-modal/file-zip-src-add-edit-modal.module": [
		623,
		245
	],
	"../pages/file-zip-src/file-zip-src.module": [
		622,
		63
	],
	"../pages/for-add-edit-modal/for-add-edit-modal.module": [
		626,
		244
	],
	"../pages/for/for.module": [
		625,
		62
	],
	"../pages/ford-add-edit-modal/ford-add-edit-modal.module": [
		627,
		243
	],
	"../pages/ford/ford.module": [
		635,
		61
	],
	"../pages/fors-add-edit-modal/fors-add-edit-modal.module": [
		637,
		242
	],
	"../pages/fors/fors.module": [
		628,
		60
	],
	"../pages/ftp-directory-browser-add-edit-modal/ftp-directory-browser-add-edit-modal.module": [
		629,
		299
	],
	"../pages/ftp-directory-browser-select-modal/ftp-directory-browser-select-modal.module": [
		636,
		33
	],
	"../pages/ftp-directory-browser/ftp-directory-browser.module": [
		630,
		32
	],
	"../pages/ftp-file-browser-download/ftp-file-browser-download.module": [
		631,
		163
	],
	"../pages/ftp-file-browser-edit-modal/ftp-file-browser-edit-modal.module": [
		632,
		298
	],
	"../pages/ftp-file-browser-upload/ftp-file-browser-upload.module": [
		633,
		160
	],
	"../pages/ftp-file-browser/ftp-file-browser.module": [
		634,
		31
	],
	"../pages/glossary-add-edit-modal/glossary-add-edit-modal.module": [
		638,
		339
	],
	"../pages/glossary-select-modal/glossary-select-modal.module": [
		639,
		30
	],
	"../pages/glossary/glossary.module": [
		640,
		29
	],
	"../pages/home/home.module": [
		641,
		208
	],
	"../pages/insert-value-sql/insert-value-sql.module": [
		642,
		207
	],
	"../pages/ionic-program-add-edit-modal/ionic-program-add-edit-modal.module": [
		643,
		338
	],
	"../pages/ionic-program-detail-add-edit-modal/ionic-program-detail-add-edit-modal.module": [
		644,
		337
	],
	"../pages/ionic-program-detail/ionic-program-detail.module": [
		645,
		206
	],
	"../pages/ionic-program-permission-select-modal/ionic-program-permission-select-modal.module": [
		646,
		126
	],
	"../pages/ionic-program-permission/ionic-program-permission.module": [
		647,
		54
	],
	"../pages/ionic-program/ionic-program.module": [
		648,
		205
	],
	"../pages/job-add-edit-modal/job-add-edit-modal.module": [
		649,
		336
	],
	"../pages/job-by-sch-select-modal/job-by-sch-select-modal.module": [
		650,
		59
	],
	"../pages/job-by-sch/job-by-sch.module": [
		651,
		204
	],
	"../pages/job-detail/job-detail.module": [
		652,
		203
	],
	"../pages/job-exec-log-detail/job-exec-log-detail.module": [
		653,
		202
	],
	"../pages/job-exec-log/job-exec-log.module": [
		654,
		133
	],
	"../pages/job-loop-add-edit-modal/job-loop-add-edit-modal.module": [
		655,
		241
	],
	"../pages/job-loop-add-pwd-modal/job-loop-add-pwd-modal.module": [
		656,
		297
	],
	"../pages/job-loop-detail/job-loop-detail.module": [
		657,
		201
	],
	"../pages/job-loop-event-add-edit-modal/job-loop-event-add-edit-modal.module": [
		659,
		335
	],
	"../pages/job-loop-event/job-loop-event.module": [
		658,
		200
	],
	"../pages/job-loop/job-loop.module": [
		664,
		58
	],
	"../pages/job-processed-sql-add-edit-modal/job-processed-sql-add-edit-modal.module": [
		662,
		334
	],
	"../pages/job-processed-sql/job-processed-sql.module": [
		660,
		199
	],
	"../pages/job-sch-exec-log/job-sch-exec-log.module": [
		661,
		131
	],
	"../pages/job-sch-management/job-sch-management.module": [
		663,
		198
	],
	"../pages/job-step-add-edit-modal/job-step-add-edit-modal.module": [
		665,
		295
	],
	"../pages/job-step-detail/job-step-detail.module": [
		666,
		197
	],
	"../pages/job-step-exec-log-detail/job-step-exec-log-detail.module": [
		668,
		196
	],
	"../pages/job-step-exec-log/job-step-exec-log.module": [
		667,
		130
	],
	"../pages/job-step-loop-add-edit-modal/job-step-loop-add-edit-modal.module": [
		669,
		296
	],
	"../pages/job-step-loop/job-step-loop.module": [
		670,
		56
	],
	"../pages/job-step/job-step.module": [
		671,
		57
	],
	"../pages/job/job.module": [
		672,
		132
	],
	"../pages/line-add-edit-modal/line-add-edit-modal.module": [
		673,
		283
	],
	"../pages/line-message-add-edit-modal/line-message-add-edit-modal.module": [
		674,
		333
	],
	"../pages/line-message-log/line-message-log.module": [
		680,
		195
	],
	"../pages/line-message/line-message.module": [
		678,
		194
	],
	"../pages/line/line.module": [
		675,
		147
	],
	"../pages/login-log/login-log.module": [
		676,
		129
	],
	"../pages/login/login.module": [
		677,
		332
	],
	"../pages/main-code-add-edit-modal/main-code-add-edit-modal.module": [
		679,
		280
	],
	"../pages/main-code-copy-modal/main-code-copy-modal.module": [
		681,
		279
	],
	"../pages/main-code/main-code.module": [
		689,
		18
	],
	"../pages/mask-column-add-edit-modal/mask-column-add-edit-modal.module": [
		695,
		331
	],
	"../pages/mask-column/mask-column.module": [
		682,
		193
	],
	"../pages/menu-add-edit-modal/menu-add-edit-modal.module": [
		683,
		330
	],
	"../pages/menu-by-program-detail-select-modal/menu-by-program-detail-select-modal.module": [
		684,
		128
	],
	"../pages/menu-by-program-detail/menu-by-program-detail.module": [
		685,
		192
	],
	"../pages/menu-detail-edit-modal/menu-detail-edit-modal.module": [
		686,
		329
	],
	"../pages/menu-detail-select-modal/menu-detail-select-modal.module": [
		687,
		191
	],
	"../pages/menu-detail/menu-detail.module": [
		688,
		190
	],
	"../pages/menu/menu.module": [
		699,
		127
	],
	"../pages/merge-sql/merge-sql.module": [
		690,
		189
	],
	"../pages/parameter-column-add-edit-modal/parameter-column-add-edit-modal.module": [
		691,
		294
	],
	"../pages/parameter-column/parameter-column.module": [
		692,
		0
	],
	"../pages/parameter-group-add-edit-modal/parameter-group-add-edit-modal.module": [
		693,
		240
	],
	"../pages/parameter-group-select-model/parameter-group-select-model.module": [
		694,
		12
	],
	"../pages/parameter-group/parameter-group.module": [
		696,
		11
	],
	"../pages/permission-add-edit-modal/permission-add-edit-modal.module": [
		697,
		328
	],
	"../pages/permission-management/permission-management.module": [
		698,
		188
	],
	"../pages/permission-program-select-modal/permission-program-select-modal.module": [
		700,
		187
	],
	"../pages/permission-program/permission-program.module": [
		701,
		53
	],
	"../pages/permission-role-select-modal/permission-role-select-modal.module": [
		702,
		52
	],
	"../pages/permission-role/permission-role.module": [
		703,
		186
	],
	"../pages/permission-user/permission-user.module": [
		704,
		125
	],
	"../pages/permission/permission.module": [
		705,
		124
	],
	"../pages/prog/prog.module": [
		706,
		185
	],
	"../pages/program-detail-add-edit-modal/program-detail-add-edit-modal.module": [
		707,
		327
	],
	"../pages/program-detail-by-ionic-program/program-detail-by-ionic-program.module": [
		708,
		184
	],
	"../pages/program-detail-select-modal/program-detail-select-modal.module": [
		709,
		183
	],
	"../pages/program-detail/program-detail.module": [
		714,
		182
	],
	"../pages/program-set-select-modal/program-set-select-modal.module": [
		710,
		3
	],
	"../pages/quote-column-add-edit-modal/quote-column-add-edit-modal.module": [
		711,
		326
	],
	"../pages/quote-column/quote-column.module": [
		712,
		181
	],
	"../pages/register/register.module": [
		713,
		282
	],
	"../pages/role-permission-select-modal/role-permission-select-modal.module": [
		715,
		123
	],
	"../pages/role-permission/role-permission.module": [
		716,
		180
	],
	"../pages/role-user-select-modal/role-user-select-modal.module": [
		717,
		179
	],
	"../pages/role-user/role-user.module": [
		718,
		178
	],
	"../pages/role/role.module": [
		719,
		51
	],
	"../pages/sch-by-job-select-modal/sch-by-job-select-modal.module": [
		720,
		162
	],
	"../pages/sch-by-job/sch-by-job.module": [
		730,
		177
	],
	"../pages/sch-day-time-add-edit-modal/sch-day-time-add-edit-modal.module": [
		721,
		291
	],
	"../pages/sch-day-time/sch-day-time.module": [
		722,
		38
	],
	"../pages/sch-management/sch-management.module": [
		723,
		176
	],
	"../pages/sch-month-lastday-time-add-edit-modal/sch-month-lastday-time-add-edit-modal.module": [
		724,
		290
	],
	"../pages/sch-month-lastday-time/sch-month-lastday-time.module": [
		726,
		37
	],
	"../pages/sch-month-time-add-edit-modal/sch-month-time-add-edit-modal.module": [
		725,
		289
	],
	"../pages/sch-month-time/sch-month-time.module": [
		727,
		36
	],
	"../pages/sch-one-day-time-add-edit-modal/sch-one-day-time-add-edit-modal.module": [
		728,
		288
	],
	"../pages/sch-one-day-time/sch-one-day-time.module": [
		729,
		35
	],
	"../pages/sch-week-time-add-edit-modal/sch-week-time-add-edit-modal.module": [
		731,
		287
	],
	"../pages/sch-week-time/sch-week-time.module": [
		732,
		34
	],
	"../pages/sch/sch.module": [
		733,
		325
	],
	"../pages/security-management/security-management.module": [
		735,
		175
	],
	"../pages/select-value-sql/select-value-sql.module": [
		734,
		42
	],
	"../pages/show-message/show-message.module": [
		741,
		174
	],
	"../pages/sp-add-edit-modal/sp-add-edit-modal.module": [
		737,
		239
	],
	"../pages/sp/sp.module": [
		736,
		49
	],
	"../pages/sql-all/sql-all.module": [
		739,
		48
	],
	"../pages/sql-management/sql-management.module": [
		738,
		173
	],
	"../pages/sql-set-add-edit-modal/sql-set-add-edit-modal.module": [
		740,
		324
	],
	"../pages/sql-set/sql-set.module": [
		742,
		172
	],
	"../pages/sql/sql.module": [
		747,
		161
	],
	"../pages/table-add-edit-modal/table-add-edit-modal.module": [
		743,
		323
	],
	"../pages/table-by-column/table-by-column.module": [
		745,
		28
	],
	"../pages/table-column-ext-select-modal/table-column-ext-select-modal.module": [
		744,
		171
	],
	"../pages/table-copy-modal/table-copy-modal.module": [
		746,
		314
	],
	"../pages/table-detail-add-edit-modal/table-detail-add-edit-modal.module": [
		751,
		322
	],
	"../pages/table-detail-detail/table-detail-detail.module": [
		748,
		170
	],
	"../pages/table-detail-edit-modal/table-detail-edit-modal.module": [
		749,
		321
	],
	"../pages/table-detail-ext-detail/table-detail-ext-detail.module": [
		750,
		119
	],
	"../pages/table-detail-ext-select-modal/table-detail-ext-select-modal.module": [
		772,
		118
	],
	"../pages/table-detail-ext/table-detail-ext.module": [
		752,
		117
	],
	"../pages/table-detail-fk/table-detail-fk.module": [
		753,
		116
	],
	"../pages/table-detail-select-modal/table-detail-select-modal.module": [
		754,
		27
	],
	"../pages/table-detail/table-detail.module": [
		755,
		26
	],
	"../pages/table-exec-log-detail/table-exec-log-detail.module": [
		756,
		169
	],
	"../pages/table-exec-log/table-exec-log.module": [
		757,
		122
	],
	"../pages/table-ext-select-modal/table-ext-select-modal.module": [
		758,
		115
	],
	"../pages/table-ext/table-ext.module": [
		759,
		114
	],
	"../pages/table-fk/table-fk.module": [
		760,
		113
	],
	"../pages/table-select-modal/table-select-modal.module": [
		761,
		25
	],
	"../pages/table/table.module": [
		762,
		24
	],
	"../pages/table2-table-add-edit-modal/table2-table-add-edit-modal.module": [
		763,
		238
	],
	"../pages/table2-table/table2-table.module": [
		764,
		47
	],
	"../pages/un-zip-file-loop-pwd-add-edit-modal/un-zip-file-loop-pwd-add-edit-modal.module": [
		765,
		286
	],
	"../pages/un-zip-file-loop-pwd/un-zip-file-loop-pwd.module": [
		766,
		46
	],
	"../pages/un-zip-file-pwd-add-edit/un-zip-file-pwd-add-edit.module": [
		778,
		121
	],
	"../pages/update-value-sql/update-value-sql.module": [
		767,
		168
	],
	"../pages/url-management/url-management.module": [
		768,
		167
	],
	"../pages/user-add-edit-modal/user-add-edit-modal.module": [
		769,
		320
	],
	"../pages/user-permission/user-permission.module": [
		770,
		166
	],
	"../pages/user-role-modal/user-role-modal.module": [
		771,
		50
	],
	"../pages/user-role/user-role.module": [
		773,
		165
	],
	"../pages/user/user.module": [
		774,
		164
	],
	"../pages/warning-check-add-edit-modal/warning-check-add-edit-modal.module": [
		775,
		285
	],
	"../pages/warning-check-select-modal/warning-check-select-modal.module": [
		776,
		17
	],
	"../pages/warning-check/warning-check.module": [
		777,
		45
	],
	"../pages/zip-file-loop-pwd-add-edit-modal/zip-file-loop-pwd-add-edit-modal.module": [
		779,
		284
	],
	"../pages/zip-file-loop-pwd/zip-file-loop-pwd.module": [
		780,
		44
	],
	"../pages/zip-file-pwd-add-edit/zip-file-pwd-add-edit.module": [
		781,
		120
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_UserViewModel__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_PermissionViewModel__ = __webpack_require__(66);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var UserResponse = /** @class */ (function (_super) {
    __extends(UserResponse, _super);
    function UserResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_UserViewModel__["a" /* UserViewModel */]();
            _this.Model.userName = obj.Model.userName;
            _this.Model.password = obj.Model.password;
            _this.Model.Email = obj.Model.Email;
            _this.Model.checked = false;
            _this.Model.login_log_seq = obj.Model.login_log_seq;
            _this.Model.roleName = [];
            _this.Model.PermissionViewModel = [];
            if (obj != null) {
                if (obj.Model.roleName != null) {
                    obj.Model.roleName.forEach(function (element) {
                        _this.Model.roleName.push(element);
                    });
                }
                if (obj.Model.permissionViewModel != null) {
                    obj.Model.permissionViewModel.forEach(function (element) {
                        var p = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_PermissionViewModel__["a" /* PermissionViewModel */]();
                        p.permission_no = element.permission_no;
                        p.permission_desc = element.permission_desc;
                        p.permission_func_desc = element.permission_func_desc;
                        p.creator = element.creator;
                        p.create_time = element.create_time;
                        p.modifier = element.modifier;
                        p.last_update_time = element.last_update_time;
                        _this.Model.PermissionViewModel.push(p);
                    });
                }
            }
        }
        return _this;
    }
    return UserResponse;
}(__WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=UserResponse.js.map

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryBrowserListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_DirectoryBrowserViewModel__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DirectoryBrowserListResponse = /** @class */ (function (_super) {
    __extends(DirectoryBrowserListResponse, _super);
    function DirectoryBrowserListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                obj.Model.forEach(function (data) {
                    var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_DirectoryBrowserViewModel__["a" /* DirectoryBrowserViewModel */]();
                    item.directory_name = data.directory_name;
                    item.filepath = data.filepath;
                    item.create_time = data.create_time;
                    item.file_cnt = data.file_cnt;
                    item.sub_directory_cnt = data.sub_directory_cnt;
                    if (item.file_cnt > 0)
                        item.has_file = true;
                    else
                        item.has_file = false;
                    switch (item.has_file) {
                        case true: {
                            item.has_file_color = "primary";
                            break;
                        }
                        default:
                            item.has_file_color = "primary";
                    }
                    _this.Model.push(item);
                }) || null;
            }
        }
        return _this;
    }
    return DirectoryBrowserListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=DirectoryBrowserListResponse.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryBrowserResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_DirectoryBrowserViewModel__ = __webpack_require__(130);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DirectoryBrowserResponse = /** @class */ (function (_super) {
    __extends(DirectoryBrowserResponse, _super);
    function DirectoryBrowserResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_DirectoryBrowserViewModel__["a" /* DirectoryBrowserViewModel */]();
                _this.Model.directory_name = obj.Model.directory_name;
                _this.Model.filepath = obj.Model.filepath;
                _this.Model.create_time = obj.Model.create_time;
                _this.Model.file_cnt = obj.Model.file_cnt;
                _this.Model.sub_directory_cnt = obj.Model.sub_directory_cnt;
                if (_this.Model.file_cnt > 0)
                    _this.Model.has_file = true;
                else
                    _this.Model.has_file = false;
                switch (_this.Model.has_file) {
                    case true: {
                        _this.Model.has_file_color = "primary";
                        break;
                    }
                    default:
                        _this.Model.has_file_color = "primary";
                }
            }
        }
        return _this;
    }
    return DirectoryBrowserResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=DirectoryBrowserResponse.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePathViewModel; });
var FilePathViewModel = /** @class */ (function () {
    function FilePathViewModel() {
    }
    return FilePathViewModel;
}());

//# sourceMappingURL=FilePathViewModel.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileBrowserViewModel__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileBrowserListResponse = /** @class */ (function (_super) {
    __extends(FileBrowserListResponse, _super);
    function FileBrowserListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                obj.Model.forEach(function (data) {
                    var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileBrowserViewModel__["a" /* FileBrowserViewModel */]();
                    item.filename = data.filename;
                    item.rename_filename = data.rename_filename;
                    item.ext = data.ext;
                    item.file_size = data.file_size;
                    item.file_size_desc = data.file_size_desc;
                    item.filefullname = data.filefullname;
                    item.filepath = data.filepath;
                    item.create_time = data.create_time;
                    _this.Model.push(item);
                }) || null;
            }
        }
        return _this;
    }
    return FileBrowserListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileBrowserListResponse.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileBrowserViewModel__ = __webpack_require__(134);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileBrowserResponse = /** @class */ (function (_super) {
    __extends(FileBrowserResponse, _super);
    function FileBrowserResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileBrowserViewModel__["a" /* FileBrowserViewModel */]();
                _this.Model.rename_filename = obj.Model.rename_filename;
                _this.Model.ext = obj.Model.ext;
                _this.Model.file_size = obj.Model.file_size;
                _this.Model.file_size_desc = obj.Model.file_size_desc;
                _this.Model.filefullname = obj.Model.filefullname;
                _this.Model.filepath = obj.Model.filepath;
                _this.Model.create_time = obj.Model.create_time;
            }
        }
        return _this;
    }
    return FileBrowserResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileBrowserResponse.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExtViewModel; });
var TableExtViewModel = /** @class */ (function () {
    function TableExtViewModel() {
    }
    return TableExtViewModel;
}());

//# sourceMappingURL=TableExtViewModel.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailExtViewModel; });
var TableDetailExtViewModel = /** @class */ (function () {
    function TableDetailExtViewModel() {
    }
    return TableDetailExtViewModel;
}());

//# sourceMappingURL=TableDetailExtViewModel.js.map

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_services_auth_services__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, keyboard, app, alertCtrl, global, authServices, network) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.keyboard = keyboard;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.authServices = authServices;
        this.network = network;
        this.rootPage = "LoginPage";
        this.width = 0;
        this.menu_list = [];
        this.initializeApp();
    }
    MyApp.prototype.showExit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "結束程式",
            message: "確認要離開應用程式嗎?",
            buttons: [
                {
                    text: "取消",
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "確認",
                    handler: function () {
                        if (_this.global.network === true && _this.authServices.getUserInfo() != null) {
                            _this.global.createLoader("儲存紀錄中...");
                            _this.global.loading.present().then(function () {
                                _this.authServices.logout().subscribe(function (data) {
                                    if (data.DidError === true) {
                                        _this.global.dismissLoading();
                                        _this.global.showError(data.ErrorMessage);
                                    }
                                    else {
                                        _this.global.dismissLoading();
                                    }
                                    _this.platform.exitApp();
                                }, function (err) {
                                    _this.global.dismissLoading();
                                    _this.global.showError("無法連上WebAPI伺服器，紀錄登出時間-" + err.message);
                                    _this.platform.exitApp();
                                });
                            });
                        }
                        else
                            _this.platform.exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            var overlay = _this.app._appRoot._overlayPortal.getActive();
            if (overlay && overlay.dismiss) {
                overlay.dismiss();
                return;
            }
            if (_this.nav.canGoBack()) {
                _this.nav.pop();
            }
            else {
                _this.showExit();
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.registerBackButtonAction();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.global.network = true;
            _this.network.onDisconnect().subscribe(function () {
                console.log("network was disconnected :-(");
                _this.global.network = false;
                _this.global.showError("網路斷線!");
            });
            _this.network.onConnect().subscribe(function () {
                console.log("network connected!");
                if (_this.global.network == false) {
                    _this.global.network = true;
                    _this.global.showMessage("網路連線", "網路已連線!");
                }
                // We just got a connection but we need to wait briefly
                // before we determine the connection type. Might need to wait.
                // prior to doing any api requests as well.
                // setTimeout(() => {
                //   if (this.network.type === 'wifi') {
                //     console.log('we got a wifi connection, woohoo!');
                //   }
                // }, 3000);
            });
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad app");
    };
    MyApp.prototype.ngAfterViewChecked = function () {
        this.menuCtrl.enable(true, this.menu_id);
    };
    MyApp.prototype.SetMenu = function (ms) {
        this.menu_list = ms;
    };
    MyApp.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            if (page.page_name.indexOf("Management") > -1 ||
                page.page_name.indexOf("Home") > -1) {
                _this.nav.setRoot(page.page_name);
            }
            else
                _this.nav.push(page.page_name);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\jones\ionic\prod\src\app\app.html"*/'<div (window:resize)="onResize($event)" *ngIf="menu_list">\n  <div *ngFor="let m of menu_list">\n    <ion-menu persistent=true id="{{m.menu_id}}" type="push" [content]="content">\n      <ion-header>\n        <ion-toolbar>\n\n          <ion-row *ngIf="width<=500">\n            <ion-col col-12>\n              <ion-title>{{api_name}}</ion-title>\n            </ion-col>\n            <ion-col col-12>\n              <ion-title>{{userName}}</ion-title>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-title>{{m.menu_desc}}</ion-title>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list>\n          <button menuClose ion-item *ngFor="let p of m.ProgramPageMenuViewModel" (click)="openPage(p)">\n            <div [ngClass]="[\'menu_text\']"> {{p.ProgramPageViewModel.page_desc}} </div>\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n  </div>\n</div>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableListResponse__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableResponse__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the TableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TableServicesProvider = /** @class */ (function () {
    function TableServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Table";
        console.log("Hello TableServiceProvider Provider");
    }
    TableServicesProvider.prototype.GetTableListsAsync = function (PageSize, PageNumber, category, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table/TableList?PageSize={1}&PageNumber={2}&keyword={3}&category={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, category, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Tables = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableListResponse__["a" /* TableListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Tables;
        });
    };
    TableServicesProvider.prototype.update_chtAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table/update_cht?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetCreateSqlAsync = function (schemaname, tablename, filegroup) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_create_table_sql?schemaname={1}&tablename={2}&filegroup={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, filegroup);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetReCreateSqlAsync = function (schemaname, tablename, filegroup) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_recreate_table_sql?schemaname={1}&tablename={2}&filegroup={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, filegroup);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetCreateTempSqlAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_create_temp_table_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetSelectSqlAsync = function (schemaname, tablename, lang_flag, table_alias) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_select_sql?schemaname={1}&tablename={2}&lang_flag={3}&table_alias={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, lang_flag, table_alias);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetMergeSqlAsync = function (schemaname, tablename, import_mode_key) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_merge_sql?schemaname={1}&tablename={2}&import_mode_key={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, import_mode_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetFileMergeSqlAsync = function (schemaname, tablename, import_mode_key, file_format_key) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_file_merge_sql?schemaname={1}&tablename={2}&import_mode_key={3}&file_format_key={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, import_mode_key, file_format_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetExportSqlAsync = function (schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_export_to_file_sql?schemaname={1}&tablename={2}&field_terminator={3}&file_format_key={4}&table_alias={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetHSExportSqlAsync = function (schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key, where_condition, last_data_type_key, last_data_column_name, exec_group, keep_days) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_hs_export_to_file_sql?schemaname={1}&tablename={2}&field_terminator={3}&file_format_key={4}&table_alias={5}&src_export_type_key={6}&where_condition={7}&last_data_type_key={8}&last_data_column_name={9}&exec_group={10}&keep_days={11}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key, where_condition, last_data_type_key, last_data_column_name, exec_group, keep_days);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetUpdateValueSqlAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_update_value_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, method) {
        var _this = this;
        var sub_url;
        sub_url = "Table/get_{3}_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableServicesProvider.prototype.PostPutAsync = function (TableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Table";
        else
            sub_url = "Table?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, TableViewModel.schemaname, TableViewModel.tablename);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, TableViewModel, mode).map(function (item) {
            _this.Table = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableResponse__["a" /* TableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Table;
        });
    };
    TableServicesProvider.prototype.DeleteAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Table = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableResponse__["a" /* TableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Table;
        });
    };
    TableServicesProvider.prototype.CopyAsync = function (src_schemaname, src_tablename, to_schemaname, to_tablename, to_tablecname, to_file_group) {
        var _this = this;
        var sub_url;
        sub_url = "Table/copy?src_schemaname={1}&src_tablename={2}&to_schemaname={3}&to_tablename={4}&to_tablecname={5}&to_file_group={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, src_schemaname, src_tablename, to_schemaname, to_tablename, to_tablecname, to_file_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Table = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableResponse__["a" /* TableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Table;
        });
    };
    TableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], TableServicesProvider);
    return TableServicesProvider;
}());

//# sourceMappingURL=table-services.js.map

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ConnListResponse__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_ConnResponse__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_ConnFtpListResponse__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Response_ConnSmtpListResponse__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Model_Response_ConnHttpListResponse__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the ConnServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnServicesProvider = /** @class */ (function () {
    function ConnServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Conn";
        console.log("Hello ConnServiceProvider Provider");
    }
    ConnServicesProvider.prototype.GetIDListsByAsync = function () {
        var _this = this;
        var sub_url;
        sub_url = "Conn?PageSize=0&PageNumber=0";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ConnListResponse__["a" /* ConnListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.GetListsHttpByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ConnHttp?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_8__Model_Response_ConnHttpListResponse__["a" /* ConnHttpListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.GetListsLineByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ConnLine?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_8__Model_Response_ConnHttpListResponse__["a" /* ConnHttpListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.GetListsFtpByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ConnFtp?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_ConnFtpListResponse__["a" /* ConnFtpListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.GetListsSmtpByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ConnSmtp?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_7__Model_Response_ConnSmtpListResponse__["a" /* ConnSmtpListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, conn_type_key, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Conn?PageSize={1}&PageNumber={2}&keyword={3}&conn_type_key={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, conn_type_key, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conns = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ConnListResponse__["a" /* ConnListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Conns;
        });
    };
    ConnServicesProvider.prototype.PostPutLineAsync = function (ConnViewModel, mode) {
        var _this = this;
        var sub_url;
        var func = "Line";
        if (mode === "POST") {
            sub_url = "Conn{2}";
        }
        else
            sub_url = "Conn{2}/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ConnViewModel.remote_conn_id, func);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ConnViewModel, mode).map(function (item) {
            _this.Conn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ConnResponse__["a" /* ConnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Conn;
        });
    };
    ConnServicesProvider.prototype.PostPutAsync = function (ConnViewModel, mode, conn_type_key) {
        var _this = this;
        var sub_url;
        var func;
        if (conn_type_key === "065|000")
            func = "";
        if (conn_type_key === "065|001" || conn_type_key === "065|006")
            func = "DB";
        if (conn_type_key === "065|002")
            func = "Ftp";
        if (conn_type_key === "065|003")
            func = "Smtp";
        if (conn_type_key === "065|004")
            func = "Http";
        if (conn_type_key === "065|005")
            func = "Sbp";
        if (mode === "POST") {
            sub_url = "Conn{2}";
        }
        else
            sub_url = "Conn{2}/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ConnViewModel.remote_conn_id, func);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ConnViewModel, mode).map(function (item) {
            _this.Conn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ConnResponse__["a" /* ConnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Conn;
        });
    };
    ConnServicesProvider.prototype.DeleteAsync = function (remote_conn_id) {
        var _this = this;
        var sub_url;
        sub_url = "Conn/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, remote_conn_id);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Conn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ConnResponse__["a" /* ConnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Conn;
        });
    };
    ConnServicesProvider.prototype.GetConnAsync = function (remote_conn_id) {
        var sub_url;
        sub_url = "Conn/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, remote_conn_id);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ConnResponse__["a" /* ConnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ConnServicesProvider.prototype.GetSqlAsync = function (remote_conn_id, method) {
        var sub_url;
        sub_url = "Conn/get_{2}_sql?remote_conn_id={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, remote_conn_id, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ConnServicesProvider.prototype.GetLineUrlAsync = function (data_action) {
        var sub_url;
        sub_url = "ConnLine/GetLineUrl?data_action={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, data_action);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ConnServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], ConnServicesProvider);
    return ConnServicesProvider;
}());

//# sourceMappingURL=conn-services.js.map

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePathServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FilePathListResponse__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_FilePathResponse__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the FilePathServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FilePathServicesProvider = /** @class */ (function () {
    function FilePathServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FilePath";
        console.log("Hello FilePathServiceProvider Provider");
    }
    FilePathServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FilePath?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FilePaths = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FilePathListResponse__["a" /* FilePathListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FilePaths;
        });
    };
    FilePathServicesProvider.prototype.GetDefaultListsByAsync = function (func_key) {
        var _this = this;
        var sub_url;
        sub_url = "FilePath/DefaultPath?func_key={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, func_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FilePaths = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FilePathListResponse__["a" /* FilePathListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FilePaths;
        });
    };
    FilePathServicesProvider.prototype.GetPathAsync = function (file_path_type_key) {
        var _this = this;
        var sub_url;
        sub_url = "FilePath?exec_file_seq=1&file_path_type_key={0}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, file_path_type_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FilePath = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_FilePathResponse__["a" /* FilePathResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FilePath;
        });
    };
    FilePathServicesProvider.prototype.PostPutAsync = function (FilePathViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FilePath";
        else
            sub_url = "FilePath?exec_file_seq={1}&file_path_type_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, FilePathViewModel.exec_file_seq, FilePathViewModel.file_path_type_key);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FilePathViewModel, mode).map(function (item) {
            _this.FilePath = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_FilePathResponse__["a" /* FilePathResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FilePath;
        });
    };
    FilePathServicesProvider.prototype.DeleteAsync = function (exec_file_seq, file_path_type_key) {
        var _this = this;
        var sub_url;
        sub_url = "FilePath?exec_file_seq={1}&file_path_type_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, file_path_type_key);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FilePath = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_FilePathResponse__["a" /* FilePathResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FilePath;
        });
    };
    FilePathServicesProvider.prototype.GetSqlAsync = function (exec_file_seq, file_path_type_key, method) {
        var sub_url;
        sub_url = "FilePath/get_{3}_sql?exec_file_seq={1}&file_path_type_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, file_path_type_key, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FilePathServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], FilePathServicesProvider);
    return FilePathServicesProvider;
}());

//# sourceMappingURL=file-path-services.js.map

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunJobServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_Response_RunJobResponse__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RunJobServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RunJobServicesProvider = /** @class */ (function () {
    function RunJobServicesProvider(Services) {
        this.Services = Services;
        console.log("Hello RunJobServicesProvider Provider");
        this.ctl = "RunJob";
    }
    RunJobServicesProvider.prototype.RunJobAsync = function (ssis_job_no) {
        var _this = this;
        var sub_url;
        sub_url = "RunJob/Get/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            console.log("item.DidError=" + item.DidError);
            _this.res = new __WEBPACK_IMPORTED_MODULE_2__Model_Response_RunJobResponse__["a" /* RunJobResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model,
            });
            return _this.res;
        });
    };
    RunJobServicesProvider.prototype.RunJobLoopAsync = function (ssis_job_no, job01, job02, job03) {
        var _this = this;
        var sub_url;
        sub_url = "RunJob/GetByJobParm/{1}?job01={2}&job02={3}&job03={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no, job01, job02, job03);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            console.log("item.DidError=" + item.DidError);
            _this.res = new __WEBPACK_IMPORTED_MODULE_2__Model_Response_RunJobResponse__["a" /* RunJobResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model,
            });
            return _this.res;
        });
    };
    RunJobServicesProvider.prototype.RunExecGroupAsync = function (id, exec_group) {
        var _this = this;
        var sub_url;
        sub_url = "RunJob/GetByExecGroupParm/{1}?exec_group={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format(sub_url, this.ctl, id, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            console.log("item.DidError=" + item.DidError);
            _this.res = new __WEBPACK_IMPORTED_MODULE_2__Model_Response_RunJobResponse__["a" /* RunJobResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model,
            });
            return _this.res;
        });
    };
    RunJobServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_services__["a" /* ServicesProvider */]])
    ], RunJobServicesProvider);
    return RunJobServicesProvider;
}());

//# sourceMappingURL=run-job-services.js.map

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailListResponse__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the TableDetailServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TableDetailServicesProvider = /** @class */ (function () {
    function TableDetailServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "TableDetail";
        console.log("Hello TableDetailServiceProvider Provider");
    }
    TableDetailServicesProvider.prototype.GetTableDetailListsAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "TableDetail?PageSize={1}&PageNumber={2}&schemaname={3}&tablename={4}&keyword={5}&order_type={6}&is_filter=true";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, schemaname, tablename, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetails = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailListResponse__["a" /* TableDetailListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetails;
        });
    };
    TableDetailServicesProvider.prototype.GetTableDetailByColumnListsAsync = function (PageSize, PageNumber, columnname, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "TableDetail?PageSize={1}&PageNumber={2}&columnname={3}&keyword={4}&order_type={5}&is_filter=true";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, columnname, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetails = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailListResponse__["a" /* TableDetailListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetails;
        });
    };
    TableDetailServicesProvider.prototype.GetTableDetailExtListsAsync = function (PageSize, PageNumber, schemaname, tablename, columnname, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "TableDetail/TableDetailExtList?PageSize={1}&PageNumber={2}&schemaname={3}&tablename={4}&columnname={5}&keyword={6}&order_type={7}&is_filter=true";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, schemaname, tablename, columnname, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetails = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailListResponse__["a" /* TableDetailListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetails;
        });
    };
    TableDetailServicesProvider.prototype.GetCodecheckSelectListsAsync = function (PageSize, PageNumber, schemaname, tablename, columnname, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "TableDetail/TableDetailList?PageSize={1}&PageNumber={2}&schemaname={3}&tablename={4}&keyword={5}&columname={6}&order_type={7}&is_filter=false";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, schemaname, tablename, keyword, columnname, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetails = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailListResponse__["a" /* TableDetailListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetails;
        });
    };
    TableDetailServicesProvider.prototype.PostPutAsync = function (item, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "TableDetail";
        else
            sub_url = "TableDetail?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, item.schemaname, item.tablename, item.columnname);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, item, mode).map(function (item) {
            _this.TableDetail = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__["a" /* TableDetailResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetail;
        });
    };
    TableDetailServicesProvider.prototype.PostListAsync = function (item) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/AddList";
        return this.Services.PostAsync(sub_url, this.ctl, true, item).map(function (item) {
            _this.TableDetail = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__["a" /* TableDetailResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetail;
        });
    };
    TableDetailServicesProvider.prototype.IncColumnIDAsync = function (item) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/IncColumnID?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, item.schemaname, item.tablename, item.columnname);
        return this.Services.PutAsync(sub_url, this.ctl, true, item).map(function (item) {
            _this.TableDetail = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__["a" /* TableDetailResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetail;
        });
    };
    TableDetailServicesProvider.prototype.IncColIndexAsync = function (item) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/IncColIndex?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, item.schemaname, item.tablename, item.columnname);
        return this.Services.PutAsync(sub_url, this.ctl, true, item).map(function (item) {
            _this.TableDetail = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__["a" /* TableDetailResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetail;
        });
    };
    TableDetailServicesProvider.prototype.DeleteAsync = function (schemaname, tablename, columnname) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetail = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailResponse__["a" /* TableDetailResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetail;
        });
    };
    TableDetailServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, columnname, method) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/get_{4}_sql?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableDetailServicesProvider.prototype.GetChangeColumnSqlAsync = function (schemaname, tablename, columnname, data_type, is_nullable, default_value) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/get_change_column_sql?schemaname={1}&tablename={2}&columnname={3}&data_type={4}&is_nullable={5}&default_value={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, data_type, is_nullable, default_value);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableDetailServicesProvider.prototype.GetAddColumnSqlAsync = function (schemaname, tablename, columnname, data_type, is_nullable, default_value, columncname, memo) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/get_add_column_sql?schemaname={1}&tablename={2}&columnname={3}&data_type={4}&is_nullable={5}&default_value={6}&columncname={7}&memo={8}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, data_type, is_nullable, default_value, columncname, memo);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableDetailServicesProvider.prototype.GetTableSqlAsync = function (schemaname, tablename, method) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/get_{3}_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableDetailServicesProvider.prototype.InsertColumnAsync = function (schemaname, tablename, code_type) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/InsertColumn?schemaname={1}&tablename={2}&code_type={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, code_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableDetailServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], TableDetailServicesProvider);
    return TableDetailServicesProvider;
}());

//# sourceMappingURL=table-detail-services.js.map

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_SchListResponse__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SchServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SchServicesProvider = /** @class */ (function () {
    function SchServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Sch";
        console.log("Hello SchServicesProvider Provider");
    }
    // GetListsAsync(PageSize: number, PageNumber: number, keyword: string,order_type:boolean) {
    //   var sub_url: string;
    //    sub_url = "Sch?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
    //   sub_url = String.Format(sub_url, this.ctl, PageSize, PageNumber, keyword,order_type);
    //   return this.Services.GetAsync(sub_url,this.ctl,true)
    //     .map(item => {
    //       this.Sch = new SchListResponse({
    //         Message: item.Message,
    //         DidError: item.DidError,
    //         ErrorMessage: item.ErrorMessage,
    //         PageSize: item.PageSize,
    //         PageNumber: item.PageNumber,
    //         TotalRows: item.TotalRows,
    //         PageRows: item.PageRows,
    //         TotalPages: item.TotalPages,
    //         Model: item.Model
    //       });
    //       return this.Sch;
    //     });
    // }
    SchServicesProvider.prototype.GetSelectListsAsync = function (PageSize, PageNumber, keyword, ssis_job_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Sch?PageSize={1}&PageNumber={2}&keyword={3}&ssis_job_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, ssis_job_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            _this.Sch = new __WEBPACK_IMPORTED_MODULE_0__Model_Response_SchListResponse__["a" /* SchListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Sch;
        });
    };
    SchServicesProvider.prototype.GetSqlAsync = function (sch_no, method) {
        var sub_url;
        sub_url = "Sch/get_{2}_sql?sch_no={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, sch_no, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_4__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    SchServicesProvider.prototype.DeleteAsync = function (sch_no) {
        var sub_url;
        sub_url = "Sch/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, sch_no);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_4__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: "刪除"
            });
        });
    };
    SchServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], SchServicesProvider);
    return SchServicesProvider;
}());

//# sourceMappingURL=sch-services.js.map

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailExtServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailExtListResponse__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailExtResponse__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TableDetailExtServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TableDetailExtServicesProvider = /** @class */ (function () {
    function TableDetailExtServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "TableDetailExt";
        console.log("Hello TableDetailExtServiceProvider Provider");
    }
    TableDetailExtServicesProvider.prototype.GetTableDetailByColumnListsAsync = function (PageSize, PageNumber, columnname, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "TableDetail/TableDetailExtList?PageSize={1}&PageNumber={2}&columnname={3}&keyword={4}&order_type={5}&is_filter=true";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, columnname, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetailExts = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailExtListResponse__["a" /* TableDetailExtListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetailExts;
        });
    };
    TableDetailExtServicesProvider.prototype.GetTableDetailExtListsAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "TableDetail/TableDetailExtList?PageSize={1}&PageNumber={2}&schemaname={3}&tablename={4}&keyword={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, schemaname, tablename, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetailExts = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableDetailExtListResponse__["a" /* TableDetailExtListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetailExts;
        });
    };
    TableDetailExtServicesProvider.prototype.PostPutAsync = function (TableDetailExtViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "TableDetailExt";
        else
            sub_url = "TableDetailExt/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, TableDetailExtViewModel.tablename);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, TableDetailExtViewModel, mode).map(function (item) {
            _this.TableDetailExt = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableDetailExtResponse__["a" /* TableDetailExtResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableDetailExt;
        });
    };
    TableDetailExtServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], TableDetailExtServicesProvider);
    return TableDetailExtServicesProvider;
}());

//# sourceMappingURL=table-detail-ext-services.js.map

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExtServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableExtListResponse__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableExtResponse__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_TableCreateExtResponse__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Response_TableFKListResponse__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Model_Response_TableDetailFKListResponse__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the TableExtServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TableExtServicesProvider = /** @class */ (function () {
    function TableExtServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "TableExt";
        console.log("Hello TableExtServiceProvider Provider");
    }
    TableExtServicesProvider.prototype.GetTableExtListsAsync = function (PageSize, PageNumber, category, ttype, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table/TableExtList?PageSize={1}&PageNumber={2}&keyword={3}&category={4}&ttype={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, category, ttype, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableExts = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_TableExtListResponse__["a" /* TableExtListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableExts;
        });
    };
    TableExtServicesProvider.prototype.GetTableFKListsAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table/TableListFK?PageSize={1}&PageNumber={2}&keyword={3}&schemaname={4}&tablename={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, schemaname, tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableFKs = new __WEBPACK_IMPORTED_MODULE_7__Model_Response_TableFKListResponse__["a" /* TableFKListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableFKs;
        });
    };
    TableExtServicesProvider.prototype.GetTableFKedListsAsync = function (PageSize, PageNumber, fk_schemaname, fk_tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table/TableListFKed?PageSize={1}&PageNumber={2}&keyword={3}&fk_schemaname={4}&fk_tablename={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, fk_schemaname, fk_tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableFKs = new __WEBPACK_IMPORTED_MODULE_7__Model_Response_TableFKListResponse__["a" /* TableFKListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableFKs;
        });
    };
    TableExtServicesProvider.prototype.GetTableDetailFKListsAsync = function (PageSize, PageNumber, schemaname, tablename, fk_schemaname, fk_tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table/TableDetailFK?PageSize={1}&PageNumber={2}&keyword={3}&schemaname={4}&tablename={5}&fk_schemaname={6}&fk_tablename={7}&order_type={8}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, schemaname, tablename, fk_schemaname, fk_tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableDetailFKs = new __WEBPACK_IMPORTED_MODULE_8__Model_Response_TableDetailFKListResponse__["a" /* TableDetailFKListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.TableDetailFKs;
        });
    };
    TableExtServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, method) {
        var _this = this;
        var sub_url;
        sub_url = "Table/get_{3}_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.GetInsertValueSqlAsync = function (schemaname, tablename, show_identity) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_insert_value_sql?schemaname={1}&tablename={2}&show_identity={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, show_identity);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.GetSelectSqlAsync = function (schemaname, tablename, lang_flag, table_alias) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_select_sql?schemaname={1}&tablename={2}&lang_flag={3}&table_alias={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, lang_flag, table_alias);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.GetMergeSqlAsync = function (schemaname, tablename, import_mode_key) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_merge_sql?schemaname={1}&tablename={2}&import_mode_key={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, import_mode_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.GetExportSqlAsync = function (schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_export_to_file_sql?schemaname={1}&tablename={2}&field_terminator={3}&file_format_key={4}&table_alias={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, field_terminator, file_format_key, table_alias, src_export_type_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.GetUpdateValueSqlAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table/gen_update_value_sql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    TableExtServicesProvider.prototype.PostPutAsync = function (TableExtViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "TableExt";
        else
            sub_url = "TableExt/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, TableExtViewModel.tablename);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, TableExtViewModel, mode).map(function (item) {
            _this.TableExt = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_TableExtResponse__["a" /* TableExtResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableExt;
        });
    };
    TableExtServicesProvider.prototype.GetTableCreateExtSqlAsync = function (schemaname, tablename) {
        var _this = this;
        var sub_url;
        sub_url = "Table/CreateTableExtSql?schemaname={1}&tablename={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.TableCreateExt = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_TableCreateExtResponse__["a" /* TableCreateExtResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.TableCreateExt;
        });
    };
    TableExtServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], TableExtServicesProvider);
    return TableExtServicesProvider;
}());

//# sourceMappingURL=table-ext-services.js.map

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserListResponse__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserResponse__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServicesProvider = /** @class */ (function () {
    function UserServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "User";
        console.log("Hello UserServiceProvider Provider");
    }
    UserServicesProvider.prototype.GetAddSelectListsAsync = function (PageSize, PageNumber, userName, roleName, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "User?PageSize={1}&PageNumber={2}&userName={3}&roleName={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, userName, roleName, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Users = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserListResponse__["a" /* UserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Users;
        });
    };
    UserServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, userName, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "User?PageSize={1}&PageNumber={2}&userName={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, userName, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Users = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserListResponse__["a" /* UserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Users;
        });
    };
    UserServicesProvider.prototype.GetAsync = function (userName) {
        var _this = this;
        var sub_url;
        sub_url = "User?id={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, userName);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.User = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserResponse__["a" /* UserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.User;
        });
    };
    UserServicesProvider.prototype.PostPutAsync = function (UserViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "User";
        else
            sub_url = "User/" + UserViewModel.userName;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, UserViewModel, mode).map(function (item) {
            _this.User = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserResponse__["a" /* UserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.User;
        });
    };
    UserServicesProvider.prototype.PostAsync = function (User) {
        var _this = this;
        var sub_url;
        sub_url = "User";
        return this.Services.PostAsync(sub_url, this.ctl, true, User).map(function (item) {
            _this.User = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserResponse__["a" /* UserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.User;
        });
    };
    UserServicesProvider.prototype.DeleteAsync = function (userName) {
        var _this = this;
        var sub_url;
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format("User?id={0}", userName);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.User = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserResponse__["a" /* UserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.User;
        });
    };
    UserServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], UserServicesProvider);
    return UserServicesProvider;
}());

//# sourceMappingURL=user-services.js.map

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnHttpViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnViewModel__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ConnHttpViewModel = /** @class */ (function (_super) {
    __extends(ConnHttpViewModel, _super);
    function ConnHttpViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConnHttpViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__ConnViewModel__["a" /* ConnViewModel */]));

//# sourceMappingURL=ConnHttpViewModel.js.map

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnFtpViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnViewModel__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnFtpViewModel = /** @class */ (function (_super) {
    __extends(ConnFtpViewModel, _super);
    function ConnFtpViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnFtpViewModel.prototype.get_conn_string = function () {
        var conn_string = "ServerName={0};ServerUserName={1};ServerPort={2}";
        conn_string = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(conn_string, this.server_name, this.user_name, this.port);
        if (this.passive_mode === true)
            conn_string += ";UsePassive=1";
        if (this.primary_key > "") {
            conn_string += ";Privatekey=" + this.primary_key;
            if (this.primary_key_passphrase > "")
                conn_string += ";primary_key_passphrase=" + this.primary_key_passphrase;
        }
        return conn_string;
    };
    return ConnFtpViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__ConnViewModel__["a" /* ConnViewModel */]));

//# sourceMappingURL=ConnFtpViewModel.js.map

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnSmtpViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnViewModel__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnSmtpViewModel = /** @class */ (function (_super) {
    __extends(ConnSmtpViewModel, _super);
    function ConnSmtpViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnSmtpViewModel.prototype.get_conn_string = function () {
        var conn_string = "ServerName={0};ServerUserName={1};ServerPort={2}";
        conn_string = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(conn_string, this.server_name, this.user_name, this.port);
        if (this.ssl === true)
            conn_string += ";EnableSsl=true";
        if (this.display_name > '')
            conn_string += ";DisplayName=" + this.display_name;
        return conn_string;
    };
    return ConnSmtpViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__ConnViewModel__["a" /* ConnViewModel */]));

//# sourceMappingURL=ConnSmtpViewModel.js.map

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgListResponse__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_ProgResponse__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgServicesProvider = /** @class */ (function () {
    function ProgServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Prog";
        console.log("Hello ProgServiceProvider Provider");
    }
    ProgServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, schemaname, name, type, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Prog?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}&pschemaname={5}&pname={6}&type={7}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type, schemaname, name, type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Progs = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgListResponse__["a" /* ProgListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Progs;
        });
    };
    ProgServicesProvider.prototype.PostPutAsync = function (ProgViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Prog";
        else
            sub_url = "Prog?schemaname={1}&name={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ProgViewModel.schemaname, ProgViewModel.name);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ProgViewModel, mode).map(function (item) {
            _this.Prog = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ProgResponse__["a" /* ProgResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Prog;
        });
    };
    ProgServicesProvider.prototype.DeleteAsync = function (schemaname, name) {
        var _this = this;
        var sub_url;
        sub_url = "Prog?schemaname={1}&name={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, name);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Prog = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ProgResponse__["a" /* ProgResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Prog;
        });
    };
    ProgServicesProvider.prototype.GetSqlAsync = function (schemaname, name) {
        var sub_url;
        sub_url = "Prog/get?schemaname={1}&name={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, name);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ProgServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], ProgServicesProvider);
    return ProgServicesProvider;
}());

//# sourceMappingURL=prog-services.js.map

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_GlossaryListResponse__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_GlossaryResponse__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the GlossaryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlossaryServicesProvider = /** @class */ (function () {
    function GlossaryServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Glossary";
        console.log("Hello GlossaryServiceProvider Provider");
    }
    GlossaryServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Glossary?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Glossarys = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_GlossaryListResponse__["a" /* GlossaryListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Glossarys;
        });
    };
    GlossaryServicesProvider.prototype.PostPutAsync = function (GlossaryViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Glossary";
        else
            sub_url = "Glossary/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, GlossaryViewModel.eng_name);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, GlossaryViewModel, mode).map(function (item) {
            _this.Glossary = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_GlossaryResponse__["a" /* GlossaryResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Glossary;
        });
    };
    GlossaryServicesProvider.prototype.DeleteAsync = function (eng_name) {
        var _this = this;
        var sub_url;
        sub_url = "Glossary/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, eng_name);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Glossary = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_GlossaryResponse__["a" /* GlossaryResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Glossary;
        });
    };
    GlossaryServicesProvider.prototype.GetSqlAsync = function (eng_name, method) {
        var sub_url;
        sub_url = "Glossary/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, eng_name, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    GlossaryServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], GlossaryServicesProvider);
    return GlossaryServicesProvider;
}());

//# sourceMappingURL=glossary-services.js.map

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobViewModel; });
/**
 * 作業ViewModel
 *
 * @public
 * @class jobViewModel
 */
var JobViewModel = /** @class */ (function () {
    function JobViewModel() {
    }
    return JobViewModel;
}());

//# sourceMappingURL=JobViewModel.js.map

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCheckServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_CodeCheckListResponse__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_CodeCheckResponse__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_VwCodeTypeCheckListResponse__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Model_Response_VwCodeCheckListResponse__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the CodeCheckServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CodeCheckServicesProvider = /** @class */ (function () {
    function CodeCheckServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "CodeCheck";
        console.log("Hello CodeCheckServiceProvider Provider");
    }
    CodeCheckServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "CodeCheck?PageSize={1}&PageNumber={2}&keyword={3}&schemaname={4}&tablename={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, schemaname, tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.CodeChecks = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_CodeCheckListResponse__["a" /* CodeCheckListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.CodeChecks;
        });
    };
    CodeCheckServicesProvider.prototype.GetListsViewCodeTypeCheckByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "CodeCheck/ViewCodeTypeCheck?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.VwCodeTypeChecks = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_VwCodeTypeCheckListResponse__["a" /* VwCodeTypeCheckListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.VwCodeTypeChecks;
        });
    };
    CodeCheckServicesProvider.prototype.GetListsViewCodeCheckByAsync = function (PageSize, PageNumber, keyword, check_type, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "CodeCheck/ViewCodeCheck?PageSize={1}&PageNumber={2}&keyword={3}&check_type={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, check_type, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.VwCodeChecks = new __WEBPACK_IMPORTED_MODULE_7__Model_Response_VwCodeCheckListResponse__["a" /* VwCodeCheckListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.VwCodeChecks;
        });
    };
    CodeCheckServicesProvider.prototype.PostPutAsync = function (CodeCheckViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "CodeCheck";
        else
            sub_url = "CodeCheck?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, CodeCheckViewModel.schemaname, CodeCheckViewModel.tablename, CodeCheckViewModel.columnname);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, CodeCheckViewModel, mode).map(function (item) {
            _this.CodeCheck = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_CodeCheckResponse__["a" /* CodeCheckResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.CodeCheck;
        });
    };
    CodeCheckServicesProvider.prototype.DeleteAsync = function (schemaname, tablename, columnname) {
        var _this = this;
        var sub_url;
        sub_url = "CodeCheck?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.CodeCheck = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_CodeCheckResponse__["a" /* CodeCheckResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.CodeCheck;
        });
    };
    CodeCheckServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, columnname, method) {
        var sub_url;
        sub_url = "CodeCheck/get_{4}_sql?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    CodeCheckServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], CodeCheckServicesProvider);
    return CodeCheckServicesProvider;
}());

//# sourceMappingURL=code-check-services.js.map

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramResponse__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProgramServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgramServicesProvider = /** @class */ (function () {
    function ProgramServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "Program";
        console.log("Hello ProgramServiceProvider Provider");
    }
    ProgramServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Program?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Programs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__["a" /* ProgramListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Programs;
        });
    };
    ProgramServicesProvider.prototype.GetIonicListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Program?PageSize={1}&PageNumber={2}&keyword={3}&program_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, "ION", order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Programs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__["a" /* ProgramListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Programs;
        });
    };
    ProgramServicesProvider.prototype.GetSqlListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Program?PageSize={1}&PageNumber={2}&keyword={3}&program_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, "SQL", order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Programs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__["a" /* ProgramListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Programs;
        });
    };
    ProgramServicesProvider.prototype.GetAsync = function (Program_no) {
        var _this = this;
        var sub_url;
        sub_url = "Program/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, Program_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Program = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramResponse__["a" /* ProgramResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Program;
        });
    };
    ProgramServicesProvider.prototype.GetAddSelectListsByPermissionAsync = function (PageSize, PageNumber, keyword, permission_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Program?PageSize={1}&PageNumber={2}&keyword={3}&permission_no={4}&order_type={5}&bus_type_key=022|010&program_type_key=013|ION";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, permission_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Programs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__["a" /* ProgramListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Programs;
        });
    };
    ProgramServicesProvider.prototype.GetAddSelectListsByPageAsync = function (PageSize, PageNumber, keyword, page_name, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Program?PageSize={1}&PageNumber={2}&keyword={3}&page_name={4}&order_type={5}&bus_type_key=022|010&program_type_key=013|ION";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, page_name, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Programs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramListResponse__["a" /* ProgramListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Programs;
        });
    };
    ProgramServicesProvider.prototype.PostPutAsync = function (ProgramViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Program";
        else
            sub_url = "Program/" + ProgramViewModel.program_no;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ProgramViewModel, mode).map(function (item) {
            _this.Program = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramResponse__["a" /* ProgramResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Program;
        });
    };
    ProgramServicesProvider.prototype.DeleteAsync = function (program_no) {
        var _this = this;
        var sub_url;
        sub_url = "Program/" + program_no;
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Program = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramResponse__["a" /* ProgramResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Program;
        });
    };
    ProgramServicesProvider.prototype.GetSqlAsync = function (program_no, method) {
        var sub_url;
        sub_url = "Program/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, program_no, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ProgramServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], ProgramServicesProvider);
    return ProgramServicesProvider;
}());

//# sourceMappingURL=program-services.js.map

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpFileBrowserServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileBrowserListResponse__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FileBrowserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FtpFileBrowserServicesProvider = /** @class */ (function () {
    function FtpFileBrowserServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileBrowser";
        console.log("Hello FileBrowserServiceProvider Provider");
    }
    FtpFileBrowserServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, path, order_type, remote_conn_id, conn_type_key, encrypt_method_key) {
        var _this = this;
        var sub_url;
        sub_url = "FtpFileBrowser?PageSize={1}&PageNumber={2}&keyword={3}&path={4}&order_type={5}&remote_conn_id={6}&conn_type_key={7}&encrypt_method_key={8}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, path, order_type, remote_conn_id, conn_type_key, encrypt_method_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileBrowsers = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileBrowserListResponse__["a" /* FileBrowserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FileBrowsers;
        });
    };
    FtpFileBrowserServicesProvider.prototype.Download = function (path, local_filepath, filename, remote_conn_id, conn_type_key, encrypt_method_key) {
        var _this = this;
        var sub_url;
        sub_url = "FtpFileBrowser/Download?path={1}&remote_conn_id={2}&conn_type_key={3}&encrypt_method_key={4}&local_filepath={5}&filename={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path, remote_conn_id, conn_type_key, encrypt_method_key, local_filepath, filename);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileBrowser;
        });
    };
    FtpFileBrowserServicesProvider.prototype.Upload = function (FtpFileBrowserViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "FtpFileBrowser";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl);
        return this.Services.PostAsync(sub_url, this.ctl, true, FtpFileBrowserViewModel).map(function (item) {
            _this.FileBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileBrowser;
        });
    };
    FtpFileBrowserServicesProvider.prototype.PutAsync = function (filefullname, FtpFileBrowserViewModel) {
        var sub_url;
        //mode:Rename或Copy
        sub_url = "FtpFileBrowser?filefullname={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, filefullname);
        return this.Services.PutAsync(sub_url, this.ctl, true, FtpFileBrowserViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FtpFileBrowserServicesProvider.prototype.DeleteAsync = function (path, filename, remote_conn_id, conn_type_key, encrypt_method_key) {
        var _this = this;
        var sub_url;
        sub_url = "FtpFileBrowser?path={1}&remote_conn_id={2}&conn_type_key={3}&encrypt_method_key={4}&filename={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path, remote_conn_id, conn_type_key, encrypt_method_key, filename);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileBrowser;
        });
    };
    FtpFileBrowserServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FtpFileBrowserServicesProvider);
    return FtpFileBrowserServicesProvider;
}());

//# sourceMappingURL=ftp-file-browser-services.js.map

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagementServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileManagementListResponse__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileManagementResponse__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_services_file_services__ = __webpack_require__(127);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the FileManagementServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileManagementServicesProvider = /** @class */ (function (_super) {
    __extends(FileManagementServicesProvider, _super);
    function FileManagementServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileManagement";
        console.log("Hello FileManagementServiceProvider Provider");
        return _this;
    }
    FileManagementServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, is_directory, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileManagement?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&is_directory={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, is_directory, order_type);
        }
        else {
            sub_url = "FileManagement/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&is_directory={6}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, is_directory, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileManagements = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileManagementListResponse__["a" /* FileManagementListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FileManagements;
        });
    };
    FileManagementServicesProvider.prototype.PostPutAsync = function (FileManagementViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileManagement";
        else
            sub_url = "FileManagement/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileManagementViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileManagementViewModel, mode).map(function (item) {
            _this.FileManagement = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileManagementResponse__["a" /* FileManagementResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileManagement;
        });
    };
    FileManagementServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileManagementServicesProvider);
    return FileManagementServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-management-services.js.map

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageListResponse__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProgramPageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgramPageServicesProvider = /** @class */ (function () {
    function ProgramPageServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "ProgramPage";
        console.log("Hello ProgramPageServiceProvider Provider");
    }
    ProgramPageServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPages = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageListResponse__["a" /* ProgramPageListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPages;
        });
    };
    ProgramPageServicesProvider.prototype.GetPageListsAsync = function (PageSize, PageNumber, keyword, program_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage?PageSize={1}&PageNumber={2}&keyword={3}&program_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, program_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPages = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageListResponse__["a" /* ProgramPageListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPages;
        });
    };
    ProgramPageServicesProvider.prototype.GetSelectPageListsAsync = function (PageSize, PageNumber, keyword, menu_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage?PageSize={1}&PageNumber={2}&keyword={3}&menu_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, menu_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPages = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageListResponse__["a" /* ProgramPageListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPages;
        });
    };
    ProgramPageServicesProvider.prototype.GetAsync = function (ProgramPage_no) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, ProgramPage_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__["a" /* ProgramPageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPage;
        });
    };
    ProgramPageServicesProvider.prototype.PostPutAsync = function (ProgramPageViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "ProgramPage";
        else
            sub_url = "ProgramPage/" + ProgramPageViewModel.page_name;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ProgramPageViewModel, mode).map(function (item) {
            _this.ProgramPage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__["a" /* ProgramPageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPage;
        });
    };
    ProgramPageServicesProvider.prototype.PostAsync = function (ProgramPageViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage";
        return this.Services.PostAsync(sub_url, this.ctl, true, ProgramPageViewModel).map(function (item) {
            _this.ProgramPage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__["a" /* ProgramPageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPage;
        });
    };
    ProgramPageServicesProvider.prototype.PutAsync = function (ProgramPageViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage/" + ProgramPageViewModel.page_name;
        return this.Services.PutAsync(sub_url, this.ctl, true, ProgramPageViewModel).map(function (item) {
            _this.ProgramPage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__["a" /* ProgramPageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPage;
        });
    };
    ProgramPageServicesProvider.prototype.DeleteAsync = function (page_name) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPage/" + page_name;
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageResponse__["a" /* ProgramPageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPage;
        });
    };
    ProgramPageServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], ProgramPageServicesProvider);
    return ProgramPageServicesProvider;
}());

//# sourceMappingURL=program-page-services.js.map

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_Response_ApiUrlListResponse__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_Response_ApiUrlResponse__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ApiUrlViewModel__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_MyAppSharedSettings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Model_Repository_ApiUrlRepository__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the ApiUrlServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiUrlServicesProvider = /** @class */ (function () {
    function ApiUrlServicesProvider(conf, storage) {
        this.conf = conf;
        this.storage = storage;
        this.ApiUrlRep = new __WEBPACK_IMPORTED_MODULE_9__Model_Repository_ApiUrlRepository__["a" /* ApiUrlRepository */]();
        // this.storage.set("API_URL_LISTS", null);
        console.log("Hello ApiUrlServiceProvider Provider");
    }
    ApiUrlServicesProvider.prototype.save_api_list = function () {
        var ApiUrlView = this.ApiUrlRep.List("", true);
        this.storage.set("API_URL_LISTS", JSON.stringify(ApiUrlView));
    };
    ApiUrlServicesProvider.prototype.Set_api_list = function (api_url_list) {
        this.storage.set("API_URL_LISTS", api_url_list);
    };
    ApiUrlServicesProvider.prototype.GetListsAsync = function (keyword, order_type) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.storage.get("API_URL_LISTS").then(function (val) {
            if (val != null) {
                var ApiUrlView = void 0;
                ApiUrlView = JSON.parse(val);
                _this.ApiUrlRep = new __WEBPACK_IMPORTED_MODULE_9__Model_Repository_ApiUrlRepository__["a" /* ApiUrlRepository */]();
                _this.ApiUrlRep.AddList(ApiUrlView);
                _this.ApiUrls = new __WEBPACK_IMPORTED_MODULE_1__Model_Response_ApiUrlListResponse__["a" /* ApiUrlListResponse */]({
                    Message: "查詢成功",
                    DidError: false,
                    ErrorMessage: "",
                    PageSize: 24,
                    PageNumber: 1,
                    TotalRows: 1,
                    PageRows: 1,
                    TotalPages: 1,
                    Token: "",
                    Model: _this.ApiUrlRep.List(keyword, order_type)
                });
                return _this.ApiUrls;
            }
            else {
                var item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ApiUrlViewModel__["a" /* ApiUrlViewModel */]();
                item.id = "sys";
                item.disp_name = "系統建立";
                item.url = _this.conf.API_URL;
                item.is_default = true;
                item.is_url_forward = _this.conf.is_url_forward;
                _this.ApiUrlRep.Add(item);
                _this.save_api_list();
                _this.ApiUrls = new __WEBPACK_IMPORTED_MODULE_1__Model_Response_ApiUrlListResponse__["a" /* ApiUrlListResponse */]({
                    Message: "查詢成功",
                    DidError: false,
                    ErrorMessage: "",
                    PageSize: 24,
                    PageNumber: 1,
                    TotalRows: 1,
                    PageRows: 1,
                    TotalPages: 1,
                    Token: "",
                    Model: _this.ApiUrlRep.List(keyword, order_type)
                });
                return _this.ApiUrls;
            }
        }));
    };
    ApiUrlServicesProvider.prototype.PostPutAsync = function (item, mode) {
        var _this = this;
        if (mode === "POST") {
            this.ApiUrlRep.Add(item);
        }
        else {
            this.ApiUrlRep.Update(item);
        }
        this.save_api_list();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
            _this.ApiUrl = new __WEBPACK_IMPORTED_MODULE_2__Model_Response_ApiUrlResponse__["a" /* ApiUrlResponse */]({
                Message: "查詢成功",
                DidError: false,
                ErrorMessage: "",
                Model: item,
                Token: "",
            });
            return _this.ApiUrl;
        }));
    };
    ApiUrlServicesProvider.prototype.DeleteAsync = function (id) {
        var _this = this;
        this.ApiUrlRep.Del(id);
        this.save_api_list();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.storage.get("").then(function (val) {
            _this.ApiUrl = new __WEBPACK_IMPORTED_MODULE_2__Model_Response_ApiUrlResponse__["a" /* ApiUrlResponse */]({
                Message: "刪除成功",
                DidError: false,
                ErrorMessage: "",
                Model: "",
                Token: "",
            });
            return _this.ApiUrl;
        }));
    };
    ApiUrlServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], ApiUrlServicesProvider);
    return ApiUrlServicesProvider;
}());

//# sourceMappingURL=api-url-services.js.map

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryBrowserServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_DirectoryBrowserListResponse__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the DirectoryBrowserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DirectoryBrowserServicesProvider = /** @class */ (function () {
    function DirectoryBrowserServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "DirectoryBrowser";
        console.log("Hello DirectoryBrowserServiceProvider Provider");
    }
    DirectoryBrowserServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, path, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "DirectoryBrowser?PageSize={1}&PageNumber={2}&keyword={3}&path={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, path, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DirectoryBrowsers = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_DirectoryBrowserListResponse__["a" /* DirectoryBrowserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.DirectoryBrowsers;
        });
    };
    DirectoryBrowserServicesProvider.prototype.PostPutAsync = function (path, DirectoryBrowserViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "DirectoryBrowser";
        else
            sub_url = "DirectoryBrowser?path={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, DirectoryBrowserViewModel, mode).map(function (item) {
            _this.DirectoryBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__["a" /* DirectoryBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DirectoryBrowser;
        });
    };
    DirectoryBrowserServicesProvider.prototype.DeleteAsync = function (path) {
        var _this = this;
        var sub_url;
        sub_url = "DirectoryBrowser?path={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DirectoryBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__["a" /* DirectoryBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DirectoryBrowser;
        });
    };
    DirectoryBrowserServicesProvider.prototype.GetAsync = function (path) {
        var _this = this;
        var sub_url;
        sub_url = "DirectoryBrowser/Get?path={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DirectoryBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__["a" /* DirectoryBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DirectoryBrowser;
        });
    };
    DirectoryBrowserServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], DirectoryBrowserServicesProvider);
    return DirectoryBrowserServicesProvider;
}());

//# sourceMappingURL=directory-browser-services.js.map

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileBrowserListResponse__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the FileBrowserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileBrowserServicesProvider = /** @class */ (function () {
    function FileBrowserServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileBrowser";
        console.log("Hello FileBrowserServiceProvider Provider");
    }
    FileBrowserServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, path, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileBrowser?PageSize={1}&PageNumber={2}&keyword={3}&path={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, path, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileBrowsers = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileBrowserListResponse__["a" /* FileBrowserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FileBrowsers;
        });
    };
    FileBrowserServicesProvider.prototype.download = function (filefullname) {
        var sub_url;
        sub_url = "FileBrowser/Download?filefullname={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, filefullname);
        return this.Services.download(sub_url, this.ctl, true)
            .map(function (res) { return new Blob([res], { type: 'application/octet-stream' }); });
    };
    FileBrowserServicesProvider.prototype.upload = function (data) {
        var sub_url;
        sub_url = "FileBrowser/FormUpload";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl);
        return this.Services.Upload(sub_url, this.ctl, true, data);
    };
    FileBrowserServicesProvider.prototype.PutAsync = function (filefullname, FileBrowserViewModel, mode) {
        var sub_url;
        //mode:Rename或Copy
        sub_url = "FileBrowser/{2}?filefullname={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, filefullname, mode);
        return this.Services.PutAsync(sub_url, this.ctl, true, FileBrowserViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileBrowserServicesProvider.prototype.DeleteAsync = function (filefullname) {
        var _this = this;
        var sub_url;
        sub_url = "FileBrowser?filefullname={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, filefullname);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileBrowserResponse__["a" /* FileBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileBrowser;
        });
    };
    FileBrowserServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileBrowserServicesProvider);
    return FileBrowserServicesProvider;
}());

//# sourceMappingURL=file-browser-services.js.map

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpDirectoryBrowserServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_DirectoryBrowserListResponse__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DirectoryBrowserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FtpDirectoryBrowserServicesProvider = /** @class */ (function () {
    function FtpDirectoryBrowserServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FtpDirectoryBrowser";
        console.log("Hello FtpDirectoryBrowserServiceProvider Provider");
    }
    FtpDirectoryBrowserServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, path, order_type, remote_conn_id, conn_type_key, encrypt_method_key) {
        var _this = this;
        var sub_url;
        sub_url = "FtpDirectoryBrowser?PageSize={1}&PageNumber={2}&keyword={3}&path={4}&order_type={5}&remote_conn_id={6}&conn_type_key={7}&encrypt_method_key={8}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, path, order_type, remote_conn_id, conn_type_key, encrypt_method_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DirectoryBrowsers = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_DirectoryBrowserListResponse__["a" /* DirectoryBrowserListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.DirectoryBrowsers;
        });
    };
    FtpDirectoryBrowserServicesProvider.prototype.PostPutAsync = function (path, FtpDirectoryBrowserViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FtpDirectoryBrowser";
        else
            sub_url = "FtpDirectoryBrowser?path={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FtpDirectoryBrowserViewModel, mode).map(function (item) {
            _this.DirectoryBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__["a" /* DirectoryBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DirectoryBrowser;
        });
    };
    FtpDirectoryBrowserServicesProvider.prototype.DeleteAsync = function (path, remote_conn_id, conn_type_key, encrypt_method_key) {
        var _this = this;
        var sub_url;
        sub_url = "FtpDirectoryBrowser?path={1}&remote_conn_id={2}&conn_type_key={3}&encrypt_method_key={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path, remote_conn_id, conn_type_key, encrypt_method_key);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DirectoryBrowser = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_DirectoryBrowserResponse__["a" /* DirectoryBrowserResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DirectoryBrowser;
        });
    };
    FtpDirectoryBrowserServicesProvider.prototype.HasFile = function (path, remote_conn_id, conn_type_key, encrypt_method_key) {
        var sub_url;
        sub_url = "FtpDirectoryBrowser/HasFile?path={1}&remote_conn_id={2}&conn_type_key={3}&encrypt_method_key={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, path, remote_conn_id, conn_type_key, encrypt_method_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FtpDirectoryBrowserServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FtpDirectoryBrowserServicesProvider);
    return FtpDirectoryBrowserServicesProvider;
}());

//# sourceMappingURL=ftp-directory-browser-services.js.map

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineMessageServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_LineMessageListResponse__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_LineMessageResponse__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LineMessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LineMessageServicesProvider = /** @class */ (function () {
    function LineMessageServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "LineMessage";
        console.log("Hello LineMessageServiceProvider Provider");
    }
    LineMessageServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, tokenname, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "LineMessage?PageSize={1}&PageNumber={2}&keyword={3}&tokenname={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, tokenname, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.LineMessages = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_LineMessageListResponse__["a" /* LineMessageListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.LineMessages;
        });
    };
    LineMessageServicesProvider.prototype.GetLogListsByAsync = function (PageSize, PageNumber, keyword, subject_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "LineMessage/Log?PageSize={1}&PageNumber={2}&keyword={3}&subject_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, subject_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.LineMessages = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_LineMessageListResponse__["a" /* LineMessageListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.LineMessages;
        });
    };
    LineMessageServicesProvider.prototype.PostPutAsync = function (LineMessageViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "LineMessage";
        else
            sub_url = "LineMessage?subject_no={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, LineMessageViewModel.subject_no);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, LineMessageViewModel, mode).map(function (item) {
            _this.LineMessage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_LineMessageResponse__["a" /* LineMessageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.LineMessage;
        });
    };
    LineMessageServicesProvider.prototype.DeleteAsync = function (subject_no) {
        var _this = this;
        var sub_url;
        sub_url = "LineMessage?subject_no={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, subject_no);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.LineMessage = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_LineMessageResponse__["a" /* LineMessageResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.LineMessage;
        });
    };
    LineMessageServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], LineMessageServicesProvider);
    return LineMessageServicesProvider;
}());

//# sourceMappingURL=line-message-services.js.map

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_SqlListResponse__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_SqlResponse__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_set_services_table_set_services__ = __webpack_require__(131);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the SqlServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SqlServicesProvider = /** @class */ (function (_super) {
    __extends(SqlServicesProvider, _super);
    function SqlServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "Sql";
        console.log("Hello SqlServiceProvider Provider");
        return _this;
    }
    SqlServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Sql?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sqls = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_SqlListResponse__["a" /* SqlListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.Sqls;
        });
    };
    SqlServicesProvider.prototype.PostPutAsync = function (SqlViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Sql";
        else
            sub_url = "Sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, SqlViewModel.exec_table_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, SqlViewModel, mode).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_SqlResponse__["a" /* SqlResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    SqlServicesProvider.prototype.ExecuteAsync = function (StringViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "Sql/Execute";
        return this.Services.PostAsync(sub_url, this.ctl, true, StringViewModel).map(function (item) {
            _this.Str = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Str;
        });
    };
    SqlServicesProvider.prototype.FormatAsync = function (StringViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "Sql/Format";
        return this.Services.PostAsync(sub_url, this.ctl, true, StringViewModel).map(function (item) {
            _this.Str = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Str;
        });
    };
    SqlServicesProvider.prototype.DeleteAsync = function (exec_table_seq) {
        var _this = this;
        var sub_url;
        sub_url = "Sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sql = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_SqlResponse__["a" /* SqlResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sql;
        });
    };
    SqlServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], SqlServicesProvider);
    return SqlServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_6__table_set_services_table_set_services__["a" /* TableSetServicesProvider */]));

//# sourceMappingURL=sql-services.js.map

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSchServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobSchListResponse__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the JobSchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobSchServicesProvider = /** @class */ (function () {
    function JobSchServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "JobSch";
        console.log("Hello JobSchServiceProvider Provider");
    }
    JobSchServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobSchs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobSchListResponse__["a" /* JobSchListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.JobSchs;
        });
    };
    JobSchServicesProvider.prototype.GetSchListsAsync = function (PageSize, PageNumber, keyword, ssis_job_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch?PageSize={1}&PageNumber={2}&keyword={3}&ssis_job_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, ssis_job_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobSchs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobSchListResponse__["a" /* JobSchListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.JobSchs;
        });
    };
    JobSchServicesProvider.prototype.GetJobListsAsync = function (PageSize, PageNumber, keyword, sch_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch?PageSize={1}&PageNumber={2}&keyword={3}&sch_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, sch_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobSchs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobSchListResponse__["a" /* JobSchListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.JobSchs;
        });
    };
    JobSchServicesProvider.prototype.GetAsync = function (Job_no, sch_no) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch/job_no={1}&sch_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, Job_no, sch_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobSch = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__["a" /* JobSchResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobSch;
        });
    };
    JobSchServicesProvider.prototype.PostAsync = function (JobSchViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch";
        return this.Services.PostAsync(sub_url, this.ctl, true, JobSchViewModel).map(function (item) {
            _this.JobSch = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__["a" /* JobSchResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobSch;
        });
    };
    JobSchServicesProvider.prototype.PostListAsync = function (JobSchViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch/AddList";
        return this.Services.PostAsync(sub_url, this.ctl, true, JobSchViewModel).map(function (item) {
            _this.JobSch = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__["a" /* JobSchResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobSch;
        });
    };
    JobSchServicesProvider.prototype.PutAsync = function (JobSchViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch?ssis_job_no={1}&sch_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobSchViewModel.ssis_job_no, JobSchViewModel.sch_no);
        return this.Services.PutAsync(sub_url, this.ctl, true, JobSchViewModel).map(function (item) {
            _this.JobSch = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__["a" /* JobSchResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobSch;
        });
    };
    JobSchServicesProvider.prototype.DeleteAsync = function (ssis_job_no, sch_no) {
        var _this = this;
        var sub_url;
        sub_url = "JobSch?ssis_job_no={1}&sch_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no, sch_no);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobSch = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_JobSchResponse__["a" /* JobSchResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobSch;
        });
    };
    JobSchServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], JobSchServicesProvider);
    return JobSchServicesProvider;
}());

//# sourceMappingURL=job-sch-services.js.map

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSchViewModel; });
var JobSchViewModel = /** @class */ (function () {
    function JobSchViewModel() {
    }
    return JobSchViewModel;
}());

//# sourceMappingURL=JobSchViewModel.js.map

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageMenuServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageMenuListResponse__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProgramPageMenuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgramPageMenuServicesProvider = /** @class */ (function () {
    function ProgramPageMenuServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "ProgramPageMenu";
        console.log("Hello ProgramPageMenuServiceProvider Provider");
    }
    ProgramPageMenuServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPageMenus = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageMenuListResponse__["a" /* ProgramPageMenuListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPageMenus;
        });
    };
    ProgramPageMenuServicesProvider.prototype.GetPageListsAsync = function (PageSize, PageNumber, keyword, menu_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "ProgramPageMenu?PageSize={1}&PageNumber={2}&keyword={3}&menu_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, menu_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPageMenus = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageMenuListResponse__["a" /* ProgramPageMenuListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPageMenus;
        });
    };
    ProgramPageMenuServicesProvider.prototype.GetMenuListsAsync = function (PageSize, PageNumber, keyword, page_name, order_type) {
        var _this = this;
        var sub_url;
        sub_url =
            "ProgramPageMenu?PageSize={1}&PageNumber={2}&keyword={3}&page_name={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, page_name, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPageMenus = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramPageMenuListResponse__["a" /* ProgramPageMenuListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramPageMenus;
        });
    };
    ProgramPageMenuServicesProvider.prototype.GetAsync = function (page_name, menu_no) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu?page_name={1}&menu_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, page_name, menu_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider.prototype.PostPutAsync = function (ProgramPageMenuViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "ProgramPageMenu";
        else
            sub_url = "ProgramPageMenu?page_name={1}&menu_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, ProgramPageMenuViewModel.page_name, ProgramPageMenuViewModel.menu_no);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ProgramPageMenuViewModel, mode).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider.prototype.PostAsync = function (ProgramPageMenuViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu";
        return this.Services.PostAsync(sub_url, this.ctl, true, ProgramPageMenuViewModel).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider.prototype.PostListAsync = function (ProgramPageMenuViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu/AddList";
        return this.Services.PostAsync(sub_url, this.ctl, true, ProgramPageMenuViewModel).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider.prototype.PutAsync = function (ProgramPageMenuViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu?page_name={1}&menu_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, ProgramPageMenuViewModel.page_name, ProgramPageMenuViewModel.menu_no);
        return this.Services.PutAsync(sub_url, this.ctl, true, ProgramPageMenuViewModel).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider.prototype.DeleteAsync = function (page_name, menu_no) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramPageMenu?page_name={1}&menu_no={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, page_name, menu_no);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramPageMenu = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramPageMenuResponse__["a" /* ProgramPageMenuResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramPageMenu;
        });
    };
    ProgramPageMenuServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], ProgramPageMenuServicesProvider);
    return ProgramPageMenuServicesProvider;
}());

//# sourceMappingURL=program-page-menu-services.js.map

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePermissionServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_RolePermissionListResponse__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_RolePermissionResponse__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RolePermissionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RolePermissionServicesProvider = /** @class */ (function () {
    function RolePermissionServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "RolePermission";
        console.log("Hello RolePermissionServiceProvider Provider");
    }
    RolePermissionServicesProvider.prototype.GetPermissionListsAsync = function (PageSize, PageNumber, keyword, RoleName, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "RolePermission?PageSize={1}&PageNumber={2}&keyword={3}&RoleName={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, RoleName, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.RolePermissions = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_RolePermissionListResponse__["a" /* RolePermissionListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.RolePermissions;
        });
    };
    RolePermissionServicesProvider.prototype.GetRoleListsAsync = function (PageSize, PageNumber, keyword, permission_no, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "RolePermission?PageSize={1}&PageNumber={2}&keyword={3}&permission_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, permission_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.RolePermissions = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_RolePermissionListResponse__["a" /* RolePermissionListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.RolePermissions;
        });
    };
    RolePermissionServicesProvider.prototype.PostAsync = function (RolePermission) {
        var _this = this;
        var sub_url;
        sub_url = "RolePermission";
        console.log(RolePermission);
        return this.Services.PostAsync(sub_url, this.ctl, true, RolePermission).map(function (item) {
            _this.RolePermission = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_RolePermissionResponse__["a" /* RolePermissionResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.RolePermission;
        });
    };
    RolePermissionServicesProvider.prototype.PutAsync = function (RoleName, permission_no, RolePermission) {
        var _this = this;
        var sub_url;
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format("RolePermission?RoleName={0}&permission_no={1}", RoleName, permission_no);
        return this.Services.PutAsync(sub_url, this.ctl, true, RolePermission).map(function (item) {
            _this.RolePermission = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_RolePermissionResponse__["a" /* RolePermissionResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.RolePermission;
        });
    };
    RolePermissionServicesProvider.prototype.PostListAsync = function (RolePermission) {
        var _this = this;
        var sub_url;
        sub_url = "RolePermission/AddList";
        return this.Services.PostAsync(sub_url, this.ctl, true, RolePermission).map(function (item) {
            _this.RolePermission = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_RolePermissionResponse__["a" /* RolePermissionResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.RolePermission;
        });
    };
    RolePermissionServicesProvider.prototype.DeleteAsync = function (RoleName, permission_no) {
        var _this = this;
        var sub_url;
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format("RolePermission?RoleName={0}&permission_no={1}", RoleName, permission_no);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.RolePermission = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_RolePermissionResponse__["a" /* RolePermissionResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.RolePermission;
        });
    };
    RolePermissionServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], RolePermissionServicesProvider);
    return RolePermissionServicesProvider;
}());

//# sourceMappingURL=role-permission-services.js.map

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoleServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserRoleListResponse__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserRoleResponse__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserRoleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserRoleServicesProvider = /** @class */ (function () {
    function UserRoleServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "UserRole";
        console.log("Hello UserRoleServiceProvider Provider");
    }
    UserRoleServicesProvider.prototype.GetUserListsAsync = function (PageSize, PageNumber, keyword, roleName, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "UserRole?PageSize={1}&PageNumber={2}&keyword={3}&roleName={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, roleName, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.UserRoles = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserRoleListResponse__["a" /* UserRoleListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.UserRoles;
        });
    };
    UserRoleServicesProvider.prototype.GetRoleListsAsync = function (PageSize, PageNumber, keyword, userName, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "UserRole?PageSize={1}&PageNumber={2}&keyword={3}&userName={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, userName, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.UserRoles = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_UserRoleListResponse__["a" /* UserRoleListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.UserRoles;
        });
    };
    UserRoleServicesProvider.prototype.PostAsync = function (UserRole) {
        var _this = this;
        var sub_url;
        sub_url = "UserRole";
        return this.Services.PostAsync(sub_url, this.ctl, true, UserRole).map(function (item) {
            _this.UserRole = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserRoleResponse__["a" /* UserRoleResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.UserRole;
        });
    };
    UserRoleServicesProvider.prototype.PostListAsync = function (UserRole) {
        var _this = this;
        var sub_url;
        sub_url = "UserRole/AddList";
        return this.Services.PostAsync(sub_url, this.ctl, true, UserRole).map(function (item) {
            _this.UserRole = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserRoleResponse__["a" /* UserRoleResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.UserRole;
        });
    };
    UserRoleServicesProvider.prototype.DeleteAsync = function (userName, roleName) {
        var _this = this;
        var sub_url;
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format("UserRole?userName={0}&roleName={1}", userName, roleName);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.UserRole = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_UserRoleResponse__["a" /* UserRoleResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.UserRole;
        });
    };
    UserRoleServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], UserRoleServicesProvider);
    return UserRoleServicesProvider;
}());

//# sourceMappingURL=user-role-services.js.map

/***/ }),
/* 297 */,
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmdLogServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_CmdLogResponse__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CmdLogServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CmdLogServicesProvider = /** @class */ (function () {
    function CmdLogServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "CmdLog";
        console.log("Hello CmdLogServicesProvider Provider");
    }
    CmdLogServicesProvider.prototype.GetAsync = function (exec_log_seq) {
        var _this = this;
        var sub_url;
        sub_url = "CmdLog/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_log_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            _this.res = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_CmdLogResponse__["a" /* CmdLogResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model,
            });
            return _this.res;
        });
    };
    CmdLogServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], CmdLogServicesProvider);
    return CmdLogServicesProvider;
}());

//# sourceMappingURL=cmd-log-services.js.map

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopEventServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobLoopEventListResponse__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopEventResponse__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the JobLoopEventServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobLoopEventServicesProvider = /** @class */ (function () {
    function JobLoopEventServicesProvider(Services) {
        this.Services = Services;
        // this.originUrl =apiUrl;
        this.ctl = "JobLoopEvent";
        console.log("Hello JobLoopEventServicesProvider Provider");
    }
    JobLoopEventServicesProvider.prototype.GetListsAsync = function (ssis_job_no, job01, job02, job03, PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "JobLoopEvent?PageSize={1}&PageNumber={2}&keyword={3}&ssis_job_no={4}&job01={5}&job02={6}&job03={7}&order_type={8}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, ssis_job_no, job01, job02, job03, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            _this.JobLoopEvents = new __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobLoopEventListResponse__["a" /* JobLoopEventListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.JobLoopEvents;
        });
    };
    JobLoopEventServicesProvider.prototype.PostPutAsync = function (JobLoopEventViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "JobLoopEvent";
        else
            sub_url = "JobLoopEvent/" + JobLoopEventViewModel.loop_seq;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, JobLoopEventViewModel, mode).map(function (item) {
            _this.JobLoopEvent = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopEventResponse__["a" /* JobLoopEventResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobLoopEvent;
        });
    };
    JobLoopEventServicesProvider.prototype.DeleteAsync = function (loop_seq) {
        var _this = this;
        var sub_url;
        sub_url = "JobLoopEvent/" + loop_seq;
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.JobLoopEvent = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopEventResponse__["a" /* JobLoopEventResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.JobLoopEvent;
        });
    };
    JobLoopEventServicesProvider.prototype.GetSqlAsync = function (loop_seq, method) {
        var sub_url;
        sub_url = "JobLoopEvent/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, loop_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopEventServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], JobLoopEventServicesProvider);
    return JobLoopEventServicesProvider;
}());

//# sourceMappingURL=job-loop-event-services.js.map

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProcessedSqlServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobProcessedSqlListResponse__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobProcessedSqlResponse__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the jobProcessedSqlServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobProcessedSqlServicesProvider = /** @class */ (function () {
    function JobProcessedSqlServicesProvider(Services) {
        this.Services = Services;
        // this.originUrl =apiUrl;
        this.ctl = "jobProcessedSql";
        console.log("Hello jobProcessedSqlServicesProvider Provider");
    }
    JobProcessedSqlServicesProvider.prototype.GetListsAsync = function (ssis_job_no, PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "jobProcessedSql?PageSize={1}&PageNumber={2}&keyword={3}&ssis_job_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, ssis_job_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            _this.jobProcessedSqls = new __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobProcessedSqlListResponse__["a" /* JobProcessedSqlListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.jobProcessedSqls;
        });
    };
    JobProcessedSqlServicesProvider.prototype.PostPutAsync = function (JobProcessedSqlViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "JobProcessedSql";
        else
            sub_url = "JobProcessedSql?ssis_job_no={1}&exec_status_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobProcessedSqlViewModel.ssis_job_no, JobProcessedSqlViewModel.exec_status_key);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, JobProcessedSqlViewModel, mode).map(function (item) {
            _this.jobProcessedSql = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobProcessedSqlResponse__["a" /* JobProcessedSqlResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.jobProcessedSql;
        });
    };
    JobProcessedSqlServicesProvider.prototype.DeleteAsync = function (ssis_job_no, exec_status_key) {
        var _this = this;
        var sub_url;
        sub_url = "JobProcessedSql?ssis_job_no={1}&exec_status_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no, exec_status_key);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.jobProcessedSql = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobProcessedSqlResponse__["a" /* JobProcessedSqlResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.jobProcessedSql;
        });
    };
    JobProcessedSqlServicesProvider.prototype.GetSqlAsync = function (ssis_job_no, exec_status_key, method) {
        var sub_url;
        sub_url = "JobProcessedSql/get_{3}_sql?ssis_job_no={1}&exec_status_key={2}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no, exec_status_key, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobProcessedSqlServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], JobProcessedSqlServicesProvider);
    return JobProcessedSqlServicesProvider;
}());

//# sourceMappingURL=job-processed-sql-services.js.map

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskColumnServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_MaskColumnListResponse__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_MaskColumnResponse__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the MaskColumnServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MaskColumnServicesProvider = /** @class */ (function () {
    function MaskColumnServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "MaskColumn";
        console.log("Hello MaskColumnServiceProvider Provider");
    }
    MaskColumnServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "MaskColumn?PageSize={1}&PageNumber={2}&keyword={3}&schemaname={4}&tablename={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, schemaname, tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.MaskColumns = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_MaskColumnListResponse__["a" /* MaskColumnListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.MaskColumns;
        });
    };
    MaskColumnServicesProvider.prototype.PostPutAsync = function (MaskColumnViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "MaskColumn";
        else
            sub_url = "MaskColumn?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, MaskColumnViewModel.schemaname, MaskColumnViewModel.tablename, MaskColumnViewModel.columnname);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, MaskColumnViewModel, mode).map(function (item) {
            _this.MaskColumn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_MaskColumnResponse__["a" /* MaskColumnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.MaskColumn;
        });
    };
    MaskColumnServicesProvider.prototype.DeleteAsync = function (schemaname, tablename, columnname) {
        var _this = this;
        var sub_url;
        sub_url = "MaskColumn?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.MaskColumn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_MaskColumnResponse__["a" /* MaskColumnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.MaskColumn;
        });
    };
    MaskColumnServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, columnname, method) {
        var sub_url;
        sub_url = "MaskColumn/get_{4}_sql?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    MaskColumnServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], MaskColumnServicesProvider);
    return MaskColumnServicesProvider;
}());

//# sourceMappingURL=mask-column-services.js.map

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteColumnServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_QuoteColumnListResponse__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_QuoteColumnResponse__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the QuoteColumnServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuoteColumnServicesProvider = /** @class */ (function () {
    function QuoteColumnServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "QuoteColumn";
        console.log("Hello QuoteColumnServiceProvider Provider");
    }
    QuoteColumnServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, schemaname, tablename, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "QuoteColumn?PageSize={1}&PageNumber={2}&keyword={3}&schemaname={4}&tablename={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, schemaname, tablename, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.QuoteColumns = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_QuoteColumnListResponse__["a" /* QuoteColumnListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.QuoteColumns;
        });
    };
    QuoteColumnServicesProvider.prototype.PostPutAsync = function (QuoteColumnViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "QuoteColumn";
        else
            sub_url = "QuoteColumn?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, QuoteColumnViewModel.schemaname, QuoteColumnViewModel.tablename, QuoteColumnViewModel.columnname);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, QuoteColumnViewModel, mode).map(function (item) {
            _this.QuoteColumn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_QuoteColumnResponse__["a" /* QuoteColumnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.QuoteColumn;
        });
    };
    QuoteColumnServicesProvider.prototype.DeleteAsync = function (schemaname, tablename, columnname) {
        var _this = this;
        var sub_url;
        sub_url = "QuoteColumn?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.QuoteColumn = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_QuoteColumnResponse__["a" /* QuoteColumnResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.QuoteColumn;
        });
    };
    QuoteColumnServicesProvider.prototype.GetSqlAsync = function (schemaname, tablename, columnname, method) {
        var sub_url;
        sub_url = "QuoteColumn/get_{4}_sql?schemaname={1}&tablename={2}&columnname={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, schemaname, tablename, columnname, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    QuoteColumnServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], QuoteColumnServicesProvider);
    return QuoteColumnServicesProvider;
}());

//# sourceMappingURL=quote-column-services.js.map

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_code_check_services_code_check_services__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_services_auth_services__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Model_MyAppSharedSettings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_run_job_services_run_job_services__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_role_services_user_role_services__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_services_user_services__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_role_permission_services_role_permission_services__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_program_services_program_services__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_program_page_services_program_page_services__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_program_page_menu_services_program_page_menu_services__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_job_sch_services_job_sch_services__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_sch_services_sch_services__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_table_services_table_services__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_table_detail_services_table_detail_services__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_sql_services_sql_services__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_table_ext_services_table_ext_services__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_table_detail_ext_services_table_detail_ext_services__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_glossary_services_glossary_services__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_file_services_file_services__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_file_path_services_file_path_services__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_file_management_services_file_management_services__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_table_set_services_table_set_services__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_api_url_services_api_url_services__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_chooser__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_directory_browser_services_directory_browser_services__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_file_browser_services_file_browser_services__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_ftp_directory_browser_services_ftp_directory_browser_services__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_ftp_file_browser_services_ftp_file_browser_services__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_prog_services_prog_services__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_conn_services_conn_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_job_loop_event_services_job_loop_event_services__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_network__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_job_processed_sql_services_job_processed_sql_services__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_quote_column_services_quote_column_services__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_line_message_services_line_message_services__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_cmd_log_services_cmd_log_services__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_mask_column_services_mask_column_services__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/api-url-add-edit-modal/api-url-add-edit-modal.module#ApiUrlAddEditModalPageModule', name: 'ApiUrlAddEditModalPage', segment: 'api-url-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/api-url/api-url.module#ApiUrlPageModule', name: 'ApiUrlPage', segment: 'api-url', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-logger-detail/audit-logger-detail.module#AuditLoggerDetailPageModule', name: 'AuditLoggerDetailPage', segment: 'audit-logger-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-logger/audit-logger.module#AuditLoggerPageModule', name: 'AuditLoggerPage', segment: 'audit-logger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-table-add-edit-modal/audit-table-add-edit-modal.module#AuditTableAddEditModalPageModule', name: 'AuditTableAddEditModalPage', segment: 'audit-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-table-detail-add-edit-modal/audit-table-detail-add-edit-modal.module#AuditTableDetailAddEditModalPageModule', name: 'AuditTableDetailAddEditModalPage', segment: 'audit-table-detail-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-table-detail/audit-table-detail.module#AuditTableDetailPageModule', name: 'AuditTableDetailPage', segment: 'audit-table-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit-table/audit-table.module#AuditTablePageModule', name: 'AuditTablePage', segment: 'audit-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth-management/auth-management.module#AuthManagementPageModule', name: 'AuthManagementPage', segment: 'auth-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-bus-type/batch-bus-type.module#BatchBusTypePageModule', name: 'BatchBusTypePage', segment: 'batch-bus-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-exec-program-add-edit-modal/batch-exec-program-add-edit-modal.module#BatchExecProgramAddEditModalPageModule', name: 'BatchExecProgramAddEditModalPage', segment: 'batch-exec-program-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-exec-program-select-modal/batch-exec-program-select-modal.module#BatchExecProgramSelectModalPageModule', name: 'BatchExecProgramSelectModalPage', segment: 'batch-exec-program-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-management/batch-management.module#BatchManagementPageModule', name: 'BatchManagementPage', segment: 'batch-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-check-add-edit-modal/batch-program-check-add-edit-modal.module#BatchProgramCheckAddEditModalPageModule', name: 'BatchProgramCheckAddEditModalPage', segment: 'batch-program-check-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-check-pk-edit-modal/batch-program-check-pk-edit-modal.module#BatchProgramCheckPkEditModalPageModule', name: 'BatchProgramCheckPkEditModalPage', segment: 'batch-program-check-pk-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-check-pk/batch-program-check-pk.module#BatchProgramCheckPkPageModule', name: 'BatchProgramCheckPkPage', segment: 'batch-program-check-pk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-check-select-modal/batch-program-check-select-modal.module#BatchProgramCheckSelectModalPageModule', name: 'BatchProgramCheckSelectModalPage', segment: 'batch-program-check-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-check/batch-program-check.module#BatchProgramCheckPageModule', name: 'BatchProgramCheckPage', segment: 'batch-program-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-select-modal/batch-program-select-modal.module#BatchProgramSelectModalPageModule', name: 'BatchProgramSelectModalPage', segment: 'batch-program-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-management/batch-program-management.module#BatchProgramManagementPageModule', name: 'BatchProgramManagementPage', segment: 'batch-program-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program/batch-program.module#BatchProgramPageModule', name: 'BatchProgramPage', segment: 'batch-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-variable/batch-variable.module#BatchVariablePageModule', name: 'BatchVariablePage', segment: 'batch-variable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-exec-program/batch-exec-program.module#BatchExecProgramPageModule', name: 'BatchExecProgramPage', segment: 'batch-exec-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/batch-program-add-edit-modal/batch-program-add-edit-modal.module#BatchProgramAddEditModalPageModule', name: 'BatchProgramAddEditModalPage', segment: 'batch-program-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-code-column-select-modal/check-code-column-select-modal.module#CheckCodeColumnSelectModalPageModule', name: 'CheckCodeColumnSelectModalPage', segment: 'check-code-column-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-type-select-modal/check-type-select-modal.module#CheckTypeSelectModalPageModule', name: 'CheckTypeSelectModalPage', segment: 'check-type-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cmd-log/cmd-log.module#CmdLogPageModule', name: 'CmdLogPage', segment: 'cmd-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-add-edit-modal/code-add-edit-modal.module#CodeAddEditModalPageModule', name: 'CodeAddEditModalPage', segment: 'code-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-check-add-edit-modal/code-check-add-edit-modal.module#CodeCheckAddEditModalPageModule', name: 'CodeCheckAddEditModalPage', segment: 'code-check-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-check-type-detail-modal/code-check-type-detail-modal.module#CodeCheckTypeDetailModalPageModule', name: 'CodeCheckTypeDetailModalPage', segment: 'code-check-type-detail-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-check-type-detail/code-check-type-detail.module#CodeCheckTypeDetailPageModule', name: 'CodeCheckTypeDetailPage', segment: 'code-check-type-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-check/code-check.module#CodeCheckPageModule', name: 'CodeCheckPage', segment: 'code-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code-select-modal/code-select-modal.module#CodeSelectModalPageModule', name: 'CodeSelectModalPage', segment: 'code-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/code/code.module#CodePageModule', name: 'CodePage', segment: 'code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/column-mapping-add-edit-modal/column-mapping-add-edit-modal.module#ColumnMappingAddEditModalPageModule', name: 'ColumnMappingAddEditModalPage', segment: 'column-mapping-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/column-mapping-add-table-modal/column-mapping-add-table-modal.module#ColumnMappingAddTableModalPageModule', name: 'ColumnMappingAddTableModalPage', segment: 'column-mapping-add-table-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/column-mapping/column-mapping.module#ColumnMappingPageModule', name: 'ColumnMappingPage', segment: 'column-mapping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/column-type-mapping-add-edit-modal/column-type-mapping-add-edit-modal.module#ColumnTypeMappingAddEditModalPageModule', name: 'ColumnTypeMappingAddEditModalPage', segment: 'column-type-mapping-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/column-type-mapping/column-type-mapping.module#ColumnTypeMappingPageModule', name: 'ColumnTypeMappingPage', segment: 'column-type-mapping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common-management/common-management.module#CommonManagementPageModule', name: 'CommonManagementPage', segment: 'common-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-col-index-loop-add-edit-modal/config-col-index-loop-add-edit-modal.module#ConfigColIndexLoopAddEditModalPageModule', name: 'ConfigColIndexLoopAddEditModalPage', segment: 'config-col-index-loop-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-db-add-edit-modal/conn-db-add-edit-modal.module#ConnDbAddEditModalPageModule', name: 'ConnDbAddEditModalPage', segment: 'conn-db-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-db/conn-db.module#ConnDbPageModule', name: 'ConnDbPage', segment: 'conn-db', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-ftp-add-edit-modal/conn-ftp-add-edit-modal.module#ConnFtpAddEditModalPageModule', name: 'ConnFtpAddEditModalPage', segment: 'conn-ftp-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-http-add-edit-modal/conn-http-add-edit-modal.module#ConnHttpAddEditModalPageModule', name: 'ConnHttpAddEditModalPage', segment: 'conn-http-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-ftp/conn-ftp.module#ConnFtpPageModule', name: 'ConnFtpPage', segment: 'conn-ftp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-http/conn-http.module#ConnHttpPageModule', name: 'ConnHttpPage', segment: 'conn-http', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-sbp-add-edit-modal/conn-sbp-add-edit-modal.module#ConnSbpAddEditModalPageModule', name: 'ConnSbpAddEditModalPage', segment: 'conn-sbp-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-sbp/conn-sbp.module#ConnSbpPageModule', name: 'ConnSbpPage', segment: 'conn-sbp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-select-modal/conn-select-modal.module#ConnSelectModalPageModule', name: 'ConnSelectModalPage', segment: 'conn-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-smtp-add-edit-modal/conn-smtp-add-edit-modal.module#ConnSmtpAddEditModalPageModule', name: 'ConnSmtpAddEditModalPage', segment: 'conn-smtp-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-smtp/conn-smtp.module#ConnSmtpPageModule', name: 'ConnSmtpPage', segment: 'conn-smtp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/database-management/database-management.module#DatabaseManagementPageModule', name: 'DatabaseManagementPage', segment: 'database-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/del-table-add-edit-modal/del-table-add-edit-modal.module#DelTableAddEditModalPageModule', name: 'DelTableAddEditModalPage', segment: 'del-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/del-table/del-table.module#DelTablePageModule', name: 'DelTablePage', segment: 'del-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directory-browser-add-edit-modal/directory-browser-add-edit-modal.module#DirectoryBrowserAddEditModalPageModule', name: 'DirectoryBrowserAddEditModalPage', segment: 'directory-browser-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-col-index-loop/config-col-index-loop.module#ConfigColIndexLoopPageModule', name: 'ConfigColIndexLoopPage', segment: 'config-col-index-loop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directory-browser-select-modal/directory-browser-select-modal.module#DirectoryBrowserSelectModalPageModule', name: 'DirectoryBrowserSelectModalPage', segment: 'directory-browser-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-management/conn-management.module#ConnManagementPageModule', name: 'ConnManagementPage', segment: 'conn-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directory-browser/directory-browser.module#DirectoryBrowserPageModule', name: 'DirectoryBrowserPage', segment: 'directory-browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-add-edit-modal/email-add-edit-modal.module#EmailAddEditModalPageModule', name: 'EmailAddEditModalPage', segment: 'email-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-attach-add-edit-modal/email-attach-add-edit-modal.module#EmailAttachAddEditModalPageModule', name: 'EmailAttachAddEditModalPage', segment: 'email-attach-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-attach/email-attach.module#EmailAttachPageModule', name: 'EmailAttachPage', segment: 'email-attach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-send-log/email-send-log.module#EmailSendLogPageModule', name: 'EmailSendLogPage', segment: 'email-send-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conn-ssis/conn-ssis.module#ConnSsisPageModule', name: 'ConnSsisPage', segment: 'conn-ssis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-management/email-management.module#EmailManagementPageModule', name: 'EmailManagementPage', segment: 'email-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-user-add-edit-modal/email-user-add-edit-modal.module#EmailUserAddEditModalPageModule', name: 'EmailUserAddEditModalPage', segment: 'email-user-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-user-select-model/email-user-select-model.module#EmailUserSelectModelPageModule', name: 'EmailUserSelectModelPage', segment: 'email-user-select-model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-user/email-user.module#EmailUserPageModule', name: 'EmailUserPage', segment: 'email-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/err-data-log-detail/err-data-log-detail.module#ErrDataLogDetailPageModule', name: 'ErrDataLogDetailPage', segment: 'err-data-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/err-data-log/err-data-log.module#ErrDataLogPageModule', name: 'ErrDataLogPage', segment: 'err-data-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/err-data-src/err-data-src.module#ErrDataSrcPageModule', name: 'ErrDataSrcPage', segment: 'err-data-src', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/err-msg-log-detail/err-msg-log-detail.module#ErrMsgLogDetailPageModule', name: 'ErrMsgLogDetailPage', segment: 'err-msg-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/err-msg-log/err-msg-log.module#ErrMsgLogPageModule', name: 'ErrMsgLogPage', segment: 'err-msg-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/export-sql/export-sql.module#ExportSqlPageModule', name: 'ExportSqlPage', segment: 'export-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-backup-management-add-edit-modal/file-backup-management-add-edit-modal.module#FileBackupManagementAddEditModalPageModule', name: 'FileBackupManagementAddEditModalPage', segment: 'file-backup-management-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-backup-management/file-backup-management.module#FileBackupManagementPageModule', name: 'FileBackupManagementPage', segment: 'file-backup-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-browser-management/file-browser-management.module#FileBrowserManagementPageModule', name: 'FileBrowserManagementPage', segment: 'file-browser-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-browser-copy-edit-modal/file-browser-copy-edit-modal.module#FileBrowserCopyEditModalPageModule', name: 'FileBrowserCopyEditModalPage', segment: 'file-browser-copy-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-browser/file-browser.module#FileBrowserPageModule', name: 'FileBrowserPage', segment: 'file-browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-cmd-add-edit-modal/file-cmd-add-edit-modal.module#FileCmdAddEditModalPageModule', name: 'FileCmdAddEditModalPage', segment: 'file-cmd-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-cmd/file-cmd.module#FileCmdPageModule', name: 'FileCmdPage', segment: 'file-cmd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-code-add-edit-modal/file-code-add-edit-modal.module#FileCodeAddEditModalPageModule', name: 'FileCodeAddEditModalPage', segment: 'file-code-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-code/file-code.module#FileCodePageModule', name: 'FileCodePage', segment: 'file-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-copy-add-edit-modal/file-copy-add-edit-modal.module#FileCopyAddEditModalPageModule', name: 'FileCopyAddEditModalPage', segment: 'file-copy-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-copy/file-copy.module#FileCopyPageModule', name: 'FileCopyPage', segment: 'file-copy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-date-filter-add-edit/file-date-filter-add-edit.module#FileDateFilterAddEditPageModule', name: 'FileDateFilterAddEditPage', segment: 'file-date-filter-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-depend-add-edit-modal/file-depend-add-edit-modal.module#FileDependAddEditModalPageModule', name: 'FileDependAddEditModalPage', segment: 'file-depend-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-depend/file-depend.module#FileDependPageModule', name: 'FileDependPage', segment: 'file-depend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-directory/file-directory.module#FileDirectoryPageModule', name: 'FileDirectoryPage', segment: 'file-directory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-email-attach-add-edit-modal/file-email-attach-add-edit-modal.module#FileEmailAttachAddEditModalPageModule', name: 'FileEmailAttachAddEditModalPage', segment: 'file-email-attach-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-directory-add-edit-modal/file-directory-add-edit-modal.module#FileDirectoryAddEditModalPageModule', name: 'FileDirectoryAddEditModalPage', segment: 'file-directory-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-email-attach/file-email-attach.module#FileEmailAttachPageModule', name: 'FileEmailAttachPage', segment: 'file-email-attach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-exec-log/file-exec-log.module#FileExecLogPageModule', name: 'FileExecLogPage', segment: 'file-exec-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-exec-log-detail/file-exec-log-detail.module#FileExecLogDetailPageModule', name: 'FileExecLogDetailPage', segment: 'file-exec-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-add-edit-modal/file-export-add-edit-modal.module#FileExportAddEditModalPageModule', name: 'FileExportAddEditModalPage', segment: 'file-export-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-all/file-export-all.module#FileExportAllPageModule', name: 'FileExportAllPage', segment: 'file-export-all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-blob-table-add-edit-modal/file-export-blob-table-add-edit-modal.module#FileExportBlobTableAddEditModalPageModule', name: 'FileExportBlobTableAddEditModalPage', segment: 'file-export-blob-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-blob-add-edit-modal/file-export-blob-add-edit-modal.module#FileExportBlobAddEditModalPageModule', name: 'FileExportBlobAddEditModalPage', segment: 'file-export-blob-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-blob-table/file-export-blob-table.module#FileExportBlobTablePageModule', name: 'FileExportBlobTablePage', segment: 'file-export-blob-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-blob/file-export-blob.module#FileExportBlobPageModule', name: 'FileExportBlobPage', segment: 'file-export-blob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-hk-add-edit-modal/file-export-hk-add-edit-modal.module#FileExportHkAddEditModalPageModule', name: 'FileExportHkAddEditModalPage', segment: 'file-export-hk-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-hk-table-add-edit-modal/file-export-hk-table-add-edit-modal.module#FileExportHkTableAddEditModalPageModule', name: 'FileExportHkTableAddEditModalPage', segment: 'file-export-hk-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-hk-table/file-export-hk-table.module#FileExportHkTablePageModule', name: 'FileExportHkTablePage', segment: 'file-export-hk-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-hk/file-export-hk.module#FileExportHkPageModule', name: 'FileExportHkPage', segment: 'file-export-hk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-management/file-export-management.module#FileExportManagementPageModule', name: 'FileExportManagementPage', segment: 'file-export-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-script-add-edit-modal/file-export-script-add-edit-modal.module#FileExportScriptAddEditModalPageModule', name: 'FileExportScriptAddEditModalPage', segment: 'file-export-script-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-script-table-add-edit-modal/file-export-script-table-add-edit-modal.module#FileExportScriptTableAddEditModalPageModule', name: 'FileExportScriptTableAddEditModalPage', segment: 'file-export-script-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-script-table/file-export-script-table.module#FileExportScriptTablePageModule', name: 'FileExportScriptTablePage', segment: 'file-export-script-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-script/file-export-script.module#FileExportScriptPageModule', name: 'FileExportScriptPage', segment: 'file-export-script', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-table-add-edit-modal/file-export-table-add-edit-modal.module#FileExportTableAddEditModalPageModule', name: 'FileExportTableAddEditModalPage', segment: 'file-export-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-table/file-export-table.module#FileExportTablePageModule', name: 'FileExportTablePage', segment: 'file-export-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-tsql-add-edit-modal/file-export-tsql-add-edit-modal.module#FileExportTsqlAddEditModalPageModule', name: 'FileExportTsqlAddEditModalPage', segment: 'file-export-tsql-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-tsql-table/file-export-tsql-table.module#FileExportTsqlTablePageModule', name: 'FileExportTsqlTablePage', segment: 'file-export-tsql-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-tsql-table-add-edit-modal/file-export-tsql-table-add-edit-modal.module#FileExportTsqlTableAddEditModalPageModule', name: 'FileExportTsqlTableAddEditModalPage', segment: 'file-export-tsql-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export-tsql/file-export-tsql.module#FileExportTsqlPageModule', name: 'FileExportTsqlPage', segment: 'file-export-tsql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-exported-header-add-edit/file-exported-header-add-edit.module#FileExportedHeaderAddEditPageModule', name: 'FileExportedHeaderAddEditPage', segment: 'file-exported-header-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-export/file-export.module#FileExportPageModule', name: 'FileExportPage', segment: 'file-export', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-filter-add-edit-modal/file-filter-add-edit-modal.module#FileFilterAddEditModalPageModule', name: 'FileFilterAddEditModalPage', segment: 'file-filter-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-filter-item-add-edit-modal/file-filter-item-add-edit-modal.module#FileFilterItemAddEditModalPageModule', name: 'FileFilterItemAddEditModalPage', segment: 'file-filter-item-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-filter-item/file-filter-item.module#FileFilterItemPageModule', name: 'FileFilterItemPage', segment: 'file-filter-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-filter/file-filter.module#FileFilterPageModule', name: 'FileFilterPage', segment: 'file-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ftp-down-add-edit-modal/file-ftp-down-add-edit-modal.module#FileFtpDownAddEditModalPageModule', name: 'FileFtpDownAddEditModalPage', segment: 'file-ftp-down-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ftp-down/file-ftp-down.module#FileFtpDownPageModule', name: 'FileFtpDownPage', segment: 'file-ftp-down', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ftp-up-add-edit-modal/file-ftp-up-add-edit-modal.module#FileFtpUpAddEditModalPageModule', name: 'FileFtpUpAddEditModalPage', segment: 'file-ftp-up-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-down-all/file-http-down-all.module#FileHttpDownAllPageModule', name: 'FileHttpDownAllPage', segment: 'file-http-down-all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-down-file-add-edit-modal/file-http-down-file-add-edit-modal.module#FileHttpDownFileAddEditModalPageModule', name: 'FileHttpDownFileAddEditModalPage', segment: 'file-http-down-file-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-down-management/file-http-down-management.module#FileHttpDownManagementPageModule', name: 'FileHttpDownManagementPage', segment: 'file-http-down-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-down-file/file-http-down-file.module#FileHttpDownFilePageModule', name: 'FileHttpDownFilePage', segment: 'file-http-down-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-h2-c-add-edit-modal/file-http-h2-c-add-edit-modal.module#FileHttpH2CAddEditModalPageModule', name: 'FileHttpH2CAddEditModalPage', segment: 'file-http-h2-c-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-h2-c/file-http-h2-c.module#FileHttpH2CPageModule', name: 'FileHttpH2CPage', segment: 'file-http-h2-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-html-down-file-add-edit-modal/file-http-html-down-file-add-edit-modal.module#FileHttpHtmlDownFileAddEditModalPageModule', name: 'FileHttpHtmlDownFileAddEditModalPage', segment: 'file-http-html-down-file-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-exported-sql-add-edit/file-exported-sql-add-edit.module#FileExportedSqlAddEditPageModule', name: 'FileExportedSqlAddEditPage', segment: 'file-exported-sql-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-html-down-file/file-http-html-down-file.module#FileHttpHtmlDownFilePageModule', name: 'FileHttpHtmlDownFilePage', segment: 'file-http-html-down-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-html2-csv-add-edit-modal/file-http-html2-csv-add-edit-modal.module#FileHttpHtml2CsvAddEditModalPageModule', name: 'FileHttpHtml2CsvAddEditModalPage', segment: 'file-http-html2-csv-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-html2-csv/file-http-html2-csv.module#FileHttpHtml2CsvPageModule', name: 'FileHttpHtml2CsvPage', segment: 'file-http-html2-csv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-j2-c-add-edit-modal/file-http-j2-c-add-edit-modal.module#FileHttpJ2CAddEditModalPageModule', name: 'FileHttpJ2CAddEditModalPage', segment: 'file-http-j2-c-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ftp-up/file-ftp-up.module#FileFtpUpPageModule', name: 'FileFtpUpPage', segment: 'file-ftp-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-j2-c/file-http-j2-c.module#FileHttpJ2CPageModule', name: 'FileHttpJ2CPage', segment: 'file-http-j2-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-json2-csv/file-http-json2-csv.module#FileHttpJson2CsvPageModule', name: 'FileHttpJson2CsvPage', segment: 'file-http-json2-csv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-json2-csv-add-edit-modal/file-http-json2-csv-add-edit-modal.module#FileHttpJson2CsvAddEditModalPageModule', name: 'FileHttpJson2CsvAddEditModalPage', segment: 'file-http-json2-csv-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-up-add-edit-modal/file-http-up-add-edit-modal.module#FileHttpUpAddEditModalPageModule', name: 'FileHttpUpAddEditModalPage', segment: 'file-http-up-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-http-up/file-http-up.module#FileHttpUpPageModule', name: 'FileHttpUpPage', segment: 'file-http-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-image-add-edit-modal/file-image-add-edit-modal.module#FileImageAddEditModalPageModule', name: 'FileImageAddEditModalPage', segment: 'file-image-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-after-add-edit-modal/file-import-after-add-edit-modal.module#FileImportAfterAddEditModalPageModule', name: 'FileImportAfterAddEditModalPage', segment: 'file-import-after-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-image/file-image.module#FileImagePageModule', name: 'FileImagePage', segment: 'file-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-after/file-import-after.module#FileImportAfterPageModule', name: 'FileImportAfterPage', segment: 'file-import-after', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-add-edit-modal/file-import-add-edit-modal.module#FileImportAddEditModalPageModule', name: 'FileImportAddEditModalPage', segment: 'file-import-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-before-sql-add-edit/file-import-before-sql-add-edit.module#FileImportBeforeSqlAddEditPageModule', name: 'FileImportBeforeSqlAddEditPage', segment: 'file-import-before-sql-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-before-add-edit-modal/file-import-before-add-edit-modal.module#FileImportBeforeAddEditModalPageModule', name: 'FileImportBeforeAddEditModalPage', segment: 'file-import-before-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-before-check-add-edit-modal/file-import-before-check-add-edit-modal.module#FileImportBeforeCheckAddEditModalPageModule', name: 'FileImportBeforeCheckAddEditModalPage', segment: 'file-import-before-check-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-data-expression-add-edit/file-import-data-expression-add-edit.module#FileImportDataExpressionAddEditPageModule', name: 'FileImportDataExpressionAddEditPage', segment: 'file-import-data-expression-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-before/file-import-before.module#FileImportBeforePageModule', name: 'FileImportBeforePage', segment: 'file-import-before', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-data-lookup/file-import-data-lookup.module#FileImportDataLookupPageModule', name: 'FileImportDataLookupPage', segment: 'file-import-data-lookup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-data-search-replace/file-import-data-search-replace.module#FileImportDataSearchReplacePageModule', name: 'FileImportDataSearchReplacePage', segment: 'file-import-data-search-replace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-data-lookup-add-edit-modal/file-import-data-lookup-add-edit-modal.module#FileImportDataLookupAddEditModalPageModule', name: 'FileImportDataLookupAddEditModalPage', segment: 'file-import-data-lookup-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-table-add-edit-modal/file-import-table-add-edit-modal.module#FileImportTableAddEditModalPageModule', name: 'FileImportTableAddEditModalPage', segment: 'file-import-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-table/file-import-table.module#FileImportTablePageModule', name: 'FileImportTablePage', segment: 'file-import-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-data-search-replace-add-edit-modal/file-import-data-search-replace-add-edit-modal.module#FileImportDataSearchReplaceAddEditModalPageModule', name: 'FileImportDataSearchReplaceAddEditModalPage', segment: 'file-import-data-search-replace-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import-select-modal/file-import-select-modal.module#FileImportSelectModalPageModule', name: 'FileImportSelectModalPage', segment: 'file-import-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-import/file-import.module#FileImportPageModule', name: 'FileImportPage', segment: 'file-import', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-in-management/file-in-management.module#FileInManagementPageModule', name: 'FileInManagementPage', segment: 'file-in-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-loop/file-loop.module#FileLoopPageModule', name: 'FileLoopPage', segment: 'file-loop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-management-all/file-management-all.module#FileManagementAllPageModule', name: 'FileManagementAllPage', segment: 'file-management-all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-management/file-management.module#FileManagementPageModule', name: 'FileManagementPage', segment: 'file-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-out-management/file-out-management.module#FileOutManagementPageModule', name: 'FileOutManagementPage', segment: 'file-out-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-path/file-path.module#FilePathPageModule', name: 'FilePathPage', segment: 'file-path', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-pdf2-image-add-edit-modal/file-pdf2-image-add-edit-modal.module#FilePdf2ImageAddEditModalPageModule', name: 'FilePdf2ImageAddEditModalPage', segment: 'file-pdf2-image-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-pdf2-image/file-pdf2-image.module#FilePdf2ImagePageModule', name: 'FilePdf2ImagePage', segment: 'file-pdf2-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-processed-sql-add-edit/file-processed-sql-add-edit.module#FileProcessedSqlAddEditPageModule', name: 'FileProcessedSqlAddEditPage', segment: 'file-processed-sql-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-processed-exec-group-add-edit/file-processed-exec-group-add-edit.module#FileProcessedExecGroupAddEditPageModule', name: 'FileProcessedExecGroupAddEditPage', segment: 'file-processed-exec-group-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-replace-data-add-edit-modal/file-replace-data-add-edit-modal.module#FileReplaceDataAddEditModalPageModule', name: 'FileReplaceDataAddEditModalPage', segment: 'file-replace-data-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-replace-data-item-add-edit-modal/file-replace-data-item-add-edit-modal.module#FileReplaceDataItemAddEditModalPageModule', name: 'FileReplaceDataItemAddEditModalPage', segment: 'file-replace-data-item-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-replace-data-item/file-replace-data-item.module#FileReplaceDataItemPageModule', name: 'FileReplaceDataItemPage', segment: 'file-replace-data-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-loop-add-edit-modal/file-loop-add-edit-modal.module#FileLoopAddEditModalPageModule', name: 'FileLoopAddEditModalPage', segment: 'file-loop-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-replace-data/file-replace-data.module#FileReplaceDataPageModule', name: 'FileReplaceDataPage', segment: 'file-replace-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-sql/file-sql.module#FileSqlPageModule', name: 'FileSqlPage', segment: 'file-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-sql-add-edit-modal/file-sql-add-edit-modal.module#FileSqlAddEditModalPageModule', name: 'FileSqlAddEditModalPage', segment: 'file-sql-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis-add-edit-modal/file-ssis-add-edit-modal.module#FileSsisAddEditModalPageModule', name: 'FileSsisAddEditModalPage', segment: 'file-ssis-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis-conn-parm-add-edit-modal/file-ssis-conn-parm-add-edit-modal.module#FileSsisConnParmAddEditModalPageModule', name: 'FileSsisConnParmAddEditModalPage', segment: 'file-ssis-conn-parm-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis-conn-parm/file-ssis-conn-parm.module#FileSsisConnParmPageModule', name: 'FileSsisConnParmPage', segment: 'file-ssis-conn-parm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis-parm-add-edit-modal/file-ssis-parm-add-edit-modal.module#FileSsisParmAddEditModalPageModule', name: 'FileSsisParmAddEditModalPage', segment: 'file-ssis-parm-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis-parm/file-ssis-parm.module#FileSsisParmPageModule', name: 'FileSsisParmPage', segment: 'file-ssis-parm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-un-zip-add-edit-modal/file-un-zip-add-edit-modal.module#FileUnZipAddEditModalPageModule', name: 'FileUnZipAddEditModalPage', segment: 'file-un-zip-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-un-zip/file-un-zip.module#FileUnZipPageModule', name: 'FileUnZipPage', segment: 'file-un-zip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-list-add-edit-modal/file-zip-list-add-edit-modal.module#FileZipListAddEditModalPageModule', name: 'FileZipListAddEditModalPage', segment: 'file-zip-list-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-list/file-zip-list.module#FileZipListPageModule', name: 'FileZipListPage', segment: 'file-zip-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-management/file-zip-management.module#FileZipManagementPageModule', name: 'FileZipManagementPage', segment: 'file-zip-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-set-add-edit-modal/file-zip-set-add-edit-modal.module#FileZipSetAddEditModalPageModule', name: 'FileZipSetAddEditModalPage', segment: 'file-zip-set-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-set/file-zip-set.module#FileZipSetPageModule', name: 'FileZipSetPage', segment: 'file-zip-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-src/file-zip-src.module#FileZipSrcPageModule', name: 'FileZipSrcPage', segment: 'file-zip-src', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-zip-src-add-edit-modal/file-zip-src-add-edit-modal.module#FileZipSrcAddEditModalPageModule', name: 'FileZipSrcAddEditModalPage', segment: 'file-zip-src-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/file-ssis/file-ssis.module#FileSsisPageModule', name: 'FileSsisPage', segment: 'file-ssis', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/for/for.module#ForPageModule', name: 'ForPage', segment: 'for', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/for-add-edit-modal/for-add-edit-modal.module#ForAddEditModalPageModule', name: 'ForAddEditModalPage', segment: 'for-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ford-add-edit-modal/ford-add-edit-modal.module#FordAddEditModalPageModule', name: 'FordAddEditModalPage', segment: 'ford-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fors/fors.module#ForsPageModule', name: 'ForsPage', segment: 'fors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-directory-browser-add-edit-modal/ftp-directory-browser-add-edit-modal.module#FtpDirectoryBrowserAddEditModelPageModule', name: 'FtpDirectoryBrowserAddEditModalPage', segment: 'ftp-directory-browser-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-directory-browser/ftp-directory-browser.module#FtpDirectoryBrowserPageModule', name: 'FtpDirectoryBrowserPage', segment: 'ftp-directory-browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-file-browser-download/ftp-file-browser-download.module#FtpFileBrowserDownloadPageModule', name: 'FtpFileBrowserDownloadPage', segment: 'ftp-file-browser-download', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-file-browser-edit-modal/ftp-file-browser-edit-modal.module#FtpFileBrowserEditModalPageModule', name: 'FtpFileBrowserEditModalPage', segment: 'ftp-file-browser-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-file-browser-upload/ftp-file-browser-upload.module#FtpFileBrowserUploadPageModule', name: 'FtpFileBrowserUploadPage', segment: 'ftp-file-browser-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-file-browser/ftp-file-browser.module#FtpFileBrowserPageModule', name: 'FtpFileBrowserPage', segment: 'ftp-file-browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ford/ford.module#FordPageModule', name: 'FordPage', segment: 'ford', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ftp-directory-browser-select-modal/ftp-directory-browser-select-modal.module#FtpDirectoryBrowserSelectModalPageModule', name: 'FtpDirectoryBrowserSelectModalPage', segment: 'ftp-directory-browser-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fors-add-edit-modal/fors-add-edit-modal.module#ForsAddEditModalPageModule', name: 'ForsAddEditModalPage', segment: 'fors-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/glossary-add-edit-modal/glossary-add-edit-modal.module#GlossaryAddEditModalPageModule', name: 'GlossaryAddEditModalPage', segment: 'glossary-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/glossary-select-modal/glossary-select-modal.module#GlossarySelectModalPageModule', name: 'GlossarySelectModalPage', segment: 'glossary-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/glossary/glossary.module#GlossaryPageModule', name: 'GlossaryPage', segment: 'glossary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insert-value-sql/insert-value-sql.module#InsertValueSqlPageModule', name: 'InsertValueSqlPage', segment: 'insert-value-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program-add-edit-modal/ionic-program-add-edit-modal.module#IonicProgramAddEditModalPageModule', name: 'IonicProgramAddEditModalPage', segment: 'ionic-program-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program-detail-add-edit-modal/ionic-program-detail-add-edit-modal.module#IonicProgramDetailAddEditModalPageModule', name: 'IonicProgramDetailAddEditModalPage', segment: 'ionic-program-detail-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program-detail/ionic-program-detail.module#IonicProgramDetailPageModule', name: 'IonicProgramDetailPage', segment: 'ionic-program-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program-permission-select-modal/ionic-program-permission-select-modal.module#IonicProgramPermissionSelectModalPageModule', name: 'IonicProgramPermissionSelectModalPage', segment: 'ionic-program-permission-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program-permission/ionic-program-permission.module#IonicProgramPermissionPageModule', name: 'IonicProgramPermissionPage', segment: 'ionic-program-permission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-program/ionic-program.module#IonicProgramPageModule', name: 'IonicProgramPage', segment: 'ionic-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-add-edit-modal/job-add-edit-modal.module#JobAddEditModalPageModule', name: 'JobAddEditModalPage', segment: 'job-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-by-sch-select-modal/job-by-sch-select-modal.module#JobBySchSelectModalPageModule', name: 'JobBySchSelectModalPage', segment: 'job-by-sch-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-by-sch/job-by-sch.module#JobBySchPageModule', name: 'JobBySchPage', segment: 'job-by-sch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-detail/job-detail.module#JobDetailPageModule', name: 'JobDetailPage', segment: 'job-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-exec-log-detail/job-exec-log-detail.module#JobExecLogDetailPageModule', name: 'JobExecLogDetailPage', segment: 'job-exec-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-exec-log/job-exec-log.module#JobExecLogPageModule', name: 'JobExecLogPage', segment: 'job-exec-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop-add-edit-modal/job-loop-add-edit-modal.module#JobLoopAddEditModalPageModule', name: 'JobLoopAddEditModalPage', segment: 'job-loop-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop-add-pwd-modal/job-loop-add-pwd-modal.module#JobLoopAddPwdModalPageModule', name: 'JobLoopAddPwdModalPage', segment: 'job-loop-add-pwd-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop-detail/job-loop-detail.module#JobLoopDetailPageModule', name: 'JobLoopDetailPage', segment: 'job-loop-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop-event/job-loop-event.module#JobLoopEventPageModule', name: 'JobLoopEventPage', segment: 'job-loop-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop-event-add-edit-modal/job-loop-event-add-edit-modal.module#JobLoopEventAddEditModalPageModule', name: 'JobLoopEventAddEditModalPage', segment: 'job-loop-event-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-processed-sql/job-processed-sql.module#JobProcessedSqlPageModule', name: 'JobProcessedSqlPage', segment: 'job-processed-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-sch-exec-log/job-sch-exec-log.module#JobSchExecLogPageModule', name: 'JobSchExecLogPage', segment: 'job-sch-exec-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-processed-sql-add-edit-modal/job-processed-sql-add-edit-modal.module#JobProcessedSqlAddEditModalPageModule', name: 'JobProcessedSqlAddEditModalPage', segment: 'job-processed-sql-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-sch-management/job-sch-management.module#JobSchManagementPageModule', name: 'JobSchManagementPage', segment: 'job-sch-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-loop/job-loop.module#JobLoopPageModule', name: 'JobLoopPage', segment: 'job-loop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-add-edit-modal/job-step-add-edit-modal.module#JobStepAddEditModalPageModule', name: 'JobStepAddEditModalPage', segment: 'job-step-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-detail/job-step-detail.module#JobStepDetailPageModule', name: 'JobStepDetailPage', segment: 'job-step-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-exec-log/job-step-exec-log.module#JobStepExecLogPageModule', name: 'JobStepExecLogPage', segment: 'job-step-exec-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-exec-log-detail/job-step-exec-log-detail.module#JobStepExecLogDetailPageModule', name: 'JobStepExecLogDetailPage', segment: 'job-step-exec-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-loop-add-edit-modal/job-step-loop-add-edit-modal.module#JobStepLoopAddEditModalPageModule', name: 'JobStepLoopAddEditModalPage', segment: 'job-step-loop-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step-loop/job-step-loop.module#JobStepLoopPageModule', name: 'JobStepLoopPage', segment: 'job-step-loop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-step/job-step.module#JobStepPageModule', name: 'JobStepPage', segment: 'job-step', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job/job.module#JobPageModule', name: 'JobPage', segment: 'job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/line-add-edit-modal/line-add-edit-modal.module#LineAddEditModalPageModule', name: 'LineAddEditModalPage', segment: 'line-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/line-message-add-edit-modal/line-message-add-edit-modal.module#LineMessageAddEditModalPageModule', name: 'LineMessageAddEditModalPage', segment: 'line-message-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/line/line.module#LinePageModule', name: 'LinePage', segment: 'line', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-log/login-log.module#LoginLogPageModule', name: 'LoginLogPage', segment: 'login-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/line-message/line-message.module#LineMessagePageModule', name: 'LineMessagePage', segment: 'line-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-code-add-edit-modal/main-code-add-edit-modal.module#MainCodeAddEditModalPageModule', name: 'MainCodeAddEditModalPage', segment: 'main-code-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/line-message-log/line-message-log.module#LineMessageLogPageModule', name: 'LineMessageLogPage', segment: 'line-message-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-code-copy-modal/main-code-copy-modal.module#MainCodeCopyModalPageModule', name: 'MainCodeCopyModalPage', segment: 'main-code-copy-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mask-column/mask-column.module#MaskColumnPageModule', name: 'MaskColumnPage', segment: 'mask-column', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-add-edit-modal/menu-add-edit-modal.module#MenuAddEditModalPageModule', name: 'MenuAddEditModalPage', segment: 'menu-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-by-program-detail-select-modal/menu-by-program-detail-select-modal.module#MenuByProgramDetailSelectModalPageModule', name: 'MenuByProgramDetailSelectModalPage', segment: 'menu-by-program-detail-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-by-program-detail/menu-by-program-detail.module#MenuByProgramDetailPageModule', name: 'MenuByProgramDetailPage', segment: 'menu-by-program-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-detail-edit-modal/menu-detail-edit-modal.module#MenuDetailEditModalPageModule', name: 'MenuDetailEditModalPage', segment: 'menu-detail-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-detail-select-modal/menu-detail-select-modal.module#MenuDetailSelectModalPageModule', name: 'MenuDetailSelectModalPage', segment: 'menu-detail-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-detail/menu-detail.module#MenuDetailPageModule', name: 'MenuDetailPage', segment: 'menu-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-code/main-code.module#MainCodePageModule', name: 'MainCodePage', segment: 'main-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/merge-sql/merge-sql.module#MergeSqlPageModule', name: 'MergeSqlPage', segment: 'merge-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-column-add-edit-modal/parameter-column-add-edit-modal.module#ParameterColumnAddEditModalPageModule', name: 'ParameterColumnAddEditModalPage', segment: 'parameter-column-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-column/parameter-column.module#ParameterColumnPageModule', name: 'ParameterColumnPage', segment: 'parameter-column', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-group-add-edit-modal/parameter-group-add-edit-modal.module#ParameterGroupAddEditModalPageModule', name: 'ParameterGroupAddEditModalPage', segment: 'parameter-group-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-group-select-model/parameter-group-select-model.module#ParameterGroupSelectModelPageModule', name: 'ParameterGroupSelectModelPage', segment: 'parameter-group-select-model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mask-column-add-edit-modal/mask-column-add-edit-modal.module#MaskColumnAddEditModalPageModule', name: 'MaskColumnAddEditModalPage', segment: 'mask-column-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-group/parameter-group.module#ParameterGroupPageModule', name: 'ParameterGroupPage', segment: 'parameter-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-add-edit-modal/permission-add-edit-modal.module#PermissionAddEditModalPageModule', name: 'PermissionAddEditModalPage', segment: 'permission-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-management/permission-management.module#PermissionManagementPageModule', name: 'PermissionManagementPage', segment: 'permission-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-program-select-modal/permission-program-select-modal.module#PermissionProgramSelectModalPageModule', name: 'PermissionProgramSelectModalPage', segment: 'permission-program-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-program/permission-program.module#PermissionProgramPageModule', name: 'PermissionProgramPage', segment: 'permission-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-role-select-modal/permission-role-select-modal.module#PermissionRoleSelectModalPageModule', name: 'PermissionRoleSelectModalPage', segment: 'permission-role-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-role/permission-role.module#PermissionRolePageModule', name: 'PermissionRolePage', segment: 'permission-role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission-user/permission-user.module#PermissionUserPageModule', name: 'PermissionUserPage', segment: 'permission-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permission/permission.module#PermissionPageModule', name: 'PermissionPage', segment: 'permission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prog/prog.module#ProgPageModule', name: 'ProgPage', segment: 'prog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-detail-add-edit-modal/program-detail-add-edit-modal.module#ProgramDetailAddEditModalPageModule', name: 'ProgramDetailAddEditModalPage', segment: 'program-detail-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-detail-by-ionic-program/program-detail-by-ionic-program.module#ProgramDetailByIonicProgramPageModule', name: 'ProgramDetailByIonicProgramPage', segment: 'program-detail-by-ionic-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-detail-select-modal/program-detail-select-modal.module#ProgramDetailSelectModalPageModule', name: 'ProgramDetailSelectModalPage', segment: 'program-detail-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-set-select-modal/program-set-select-modal.module#ProgramSetSelectModalPageModule', name: 'ProgramSetSelectModalPage', segment: 'program-set-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quote-column-add-edit-modal/quote-column-add-edit-modal.module#QuoteColumnAddEditModalPageModule', name: 'QuoteColumnAddEditModalPage', segment: 'quote-column-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quote-column/quote-column.module#QuoteColumnPageModule', name: 'QuoteColumnPage', segment: 'quote-column', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-detail/program-detail.module#ProgramDetailPageModule', name: 'ProgramDetailPage', segment: 'program-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role-permission-select-modal/role-permission-select-modal.module#RolePermissionSelectModalPageModule', name: 'RolePermissionSelectModalPage', segment: 'role-permission-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role-permission/role-permission.module#RolePermissionPageModule', name: 'RolePermissionPage', segment: 'role-permission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role-user-select-modal/role-user-select-modal.module#RoleUserSelectModalPageModule', name: 'RoleUserSelectModalPage', segment: 'role-user-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role-user/role-user.module#RoleUserPageModule', name: 'RoleUserPage', segment: 'role-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role/role.module#RolePageModule', name: 'RolePage', segment: 'role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-by-job-select-modal/sch-by-job-select-modal.module#SchByJobSelectModalPageModule', name: 'SchByJobSelectModalPage', segment: 'sch-by-job-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-day-time-add-edit-modal/sch-day-time-add-edit-modal.module#SchDayTimeAddEditModalPageModule', name: 'SchDayTimeAddEditModalPage', segment: 'sch-day-time-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-day-time/sch-day-time.module#SchDayTimePageModule', name: 'SchDayTimePage', segment: 'sch-day-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-management/sch-management.module#SchManagementPageModule', name: 'SchManagementPage', segment: 'sch-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-month-lastday-time-add-edit-modal/sch-month-lastday-time-add-edit-modal.module#SchMonthLastdayTimeAddEditModalPageModule', name: 'SchMonthLastdayTimeAddEditModalPage', segment: 'sch-month-lastday-time-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-month-time-add-edit-modal/sch-month-time-add-edit-modal.module#SchMonthTimeAddEditModalPageModule', name: 'SchMonthTimeAddEditModalPage', segment: 'sch-month-time-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-month-lastday-time/sch-month-lastday-time.module#SchMonthLastdayTimePageModule', name: 'SchMonthLastdayTimePage', segment: 'sch-month-lastday-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-month-time/sch-month-time.module#SchMonthTimePageModule', name: 'SchMonthTimePage', segment: 'sch-month-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-one-day-time-add-edit-modal/sch-one-day-time-add-edit-modal.module#SchOneDayTimeAddEditModalPageModule', name: 'SchOneDayTimeAddEditModalPage', segment: 'sch-one-day-time-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-one-day-time/sch-one-day-time.module#SchOneDayTimePageModule', name: 'SchOneDayTimePage', segment: 'sch-one-day-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-by-job/sch-by-job.module#SchByJobPageModule', name: 'SchByJobPage', segment: 'sch-by-job', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-week-time-add-edit-modal/sch-week-time-add-edit-modal.module#SchWeekTimeAddEditModalPageModule', name: 'SchWeekTimeAddEditModalPage', segment: 'sch-week-time-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch-week-time/sch-week-time.module#SchWeekTimePageModule', name: 'SchWeekTimePage', segment: 'sch-week-time', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sch/sch.module#SchPageModule', name: 'SchPage', segment: 'sch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-value-sql/select-value-sql.module#SelectValueSqlPageModule', name: 'SelectValueSqlPage', segment: 'select-value-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/security-management/security-management.module#SecurityManagementPageModule', name: 'SecurityManagementPage', segment: 'security-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sp/sp.module#SpPageModule', name: 'SpPage', segment: 'sp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sp-add-edit-modal/sp-add-edit-modal.module#SpAddEditModalPageModule', name: 'SpAddEditModalPage', segment: 'sp-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sql-management/sql-management.module#SqlManagementPageModule', name: 'SqlManagementPage', segment: 'sql-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sql-all/sql-all.module#SqlAllPageModule', name: 'SqlAllPage', segment: 'sql-all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sql-set-add-edit-modal/sql-set-add-edit-modal.module#SqlSetAddEditModalPageModule', name: 'SqlSetAddEditModalPage', segment: 'sql-set-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-message/show-message.module#ShowMessagePageModule', name: 'ShowMessagePage', segment: 'show-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sql-set/sql-set.module#SqlSetPageModule', name: 'SqlSetPage', segment: 'sql-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-add-edit-modal/table-add-edit-modal.module#TableAddEditModalPageModule', name: 'TableAddEditModalPage', segment: 'table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-column-ext-select-modal/table-column-ext-select-modal.module#TableColumnExtSelectModalPageModule', name: 'TableColumnExtSelectModalPage', segment: 'table-column-ext-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-by-column/table-by-column.module#TableByColumnPageModule', name: 'TableByColumnPage', segment: 'table-by-column', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-copy-modal/table-copy-modal.module#TableCopyModalPageModule', name: 'TableCopyModalPage', segment: 'table-copy-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sql/sql.module#SqlPageModule', name: 'SqlPage', segment: 'sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-detail/table-detail-detail.module#TableDetailDetailPageModule', name: 'TableDetailDetailPage', segment: 'table-detail-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-edit-modal/table-detail-edit-modal.module#TableDetailEditModalPageModule', name: 'TableDetailEditModalPage', segment: 'table-detail-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-ext-detail/table-detail-ext-detail.module#TableDetailExtDetailPageModule', name: 'TableDetailExtDetailPage', segment: 'table-detail-ext-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-add-edit-modal/table-detail-add-edit-modal.module#TableDetailAddEditModalPageModule', name: 'TableDetailAddEditModalPage', segment: 'table-detail-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-ext/table-detail-ext.module#TableDetailExtPageModule', name: 'TableDetailExtPage', segment: 'table-detail-ext', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-fk/table-detail-fk.module#TableDetailFkPageModule', name: 'TableDetailFkPage', segment: 'table-detail-fk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-select-modal/table-detail-select-modal.module#TableDetailSelectModalPageModule', name: 'TableDetailSelectModalPage', segment: 'table-detail-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail/table-detail.module#TableDetailPageModule', name: 'TableDetailPage', segment: 'table-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-exec-log-detail/table-exec-log-detail.module#TableExecLogDetailPageModule', name: 'TableExecLogDetailPage', segment: 'table-exec-log-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-exec-log/table-exec-log.module#TableExecLogPageModule', name: 'TableExecLogPage', segment: 'table-exec-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-ext-select-modal/table-ext-select-modal.module#TableExtSelectModalPageModule', name: 'TableExtSelectModalPage', segment: 'table-ext-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-ext/table-ext.module#TableExtPageModule', name: 'TableExtPage', segment: 'table-ext', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-fk/table-fk.module#TableFkPageModule', name: 'TableFkPage', segment: 'table-fk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-select-modal/table-select-modal.module#TableSelectModalPageModule', name: 'TableSelectModalPage', segment: 'table-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table/table.module#TablePageModule', name: 'TablePage', segment: 'table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table2-table-add-edit-modal/table2-table-add-edit-modal.module#Table2TableAddEditModalPageModule', name: 'Table2TableAddEditModalPage', segment: 'table2-table-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table2-table/table2-table.module#Table2TablePageModule', name: 'Table2TablePage', segment: 'table2-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/un-zip-file-loop-pwd-add-edit-modal/un-zip-file-loop-pwd-add-edit-modal.module#UnZipFileLoopPwdAddEditModalPageModule', name: 'UnZipFileLoopPwdAddEditModalPage', segment: 'un-zip-file-loop-pwd-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/un-zip-file-loop-pwd/un-zip-file-loop-pwd.module#UnZipFileLoopPwdPageModule', name: 'UnZipFileLoopPwdPage', segment: 'un-zip-file-loop-pwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-value-sql/update-value-sql.module#UpdateValueSqlPageModule', name: 'UpdateValueSqlPage', segment: 'update-value-sql', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/url-management/url-management.module#UrlManagementPageModule', name: 'UrlManagementPage', segment: 'url-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-add-edit-modal/user-add-edit-modal.module#UserAddEditModalPageModule', name: 'UserAddEditModalPage', segment: 'user-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-permission/user-permission.module#UserPermissionPageModule', name: 'UserPermissionPage', segment: 'user-permission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-role-modal/user-role-modal.module#UserRoleModalPageModule', name: 'UserRoleModalPage', segment: 'user-role-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/table-detail-ext-select-modal/table-detail-ext-select-modal.module#TableDetailExtSelectModalPageModule', name: 'TableDetailExtSelectModalPage', segment: 'table-detail-ext-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-role/user-role.module#UserRolePageModule', name: 'UserRolePage', segment: 'user-role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/warning-check-add-edit-modal/warning-check-add-edit-modal.module#WarningCheckAddEditModalPageModule', name: 'WarningCheckAddEditModalPage', segment: 'warning-check-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/warning-check-select-modal/warning-check-select-modal.module#WarningCheckSelectModalPageModule', name: 'WarningCheckSelectModalPage', segment: 'warning-check-select-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/warning-check/warning-check.module#WarningCheckPageModule', name: 'WarningCheckPage', segment: 'warning-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/un-zip-file-pwd-add-edit/un-zip-file-pwd-add-edit.module#UnZipFilePwdAddEditPageModule', name: 'UnZipFilePwdAddEditPage', segment: 'un-zip-file-pwd-add-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zip-file-loop-pwd-add-edit-modal/zip-file-loop-pwd-add-edit-modal.module#ZipFileLoopPwdAddEditModalPageModule', name: 'ZipFileLoopPwdAddEditModalPage', segment: 'zip-file-loop-pwd-add-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zip-file-loop-pwd/zip-file-loop-pwd.module#ZipFileLoopPwdPageModule', name: 'ZipFileLoopPwdPage', segment: 'zip-file-loop-pwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zip-file-pwd-add-edit/zip-file-pwd-add-edit.module#ZipFilePwdAddEditPageModule', name: 'ZipFilePwdAddEditPage', segment: 'zip-file-pwd-add-edit', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */], useClass: __WEBPACK_IMPORTED_MODULE_8__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__components_global_global__["a" /* GlobalComponent */], useClass: __WEBPACK_IMPORTED_MODULE_9__components_global_global__["a" /* GlobalComponent */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_code_check_services_code_check_services__["a" /* CodeCheckServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_run_job_services_run_job_services__["a" /* RunJobServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_user_role_services_user_role_services__["a" /* UserRoleServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_user_services_user_services__["a" /* UserServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_role_permission_services_role_permission_services__["a" /* RolePermissionServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_program_services_program_services__["a" /* ProgramServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_program_page_menu_services_program_page_menu_services__["a" /* ProgramPageMenuServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_sch_services_sch_services__["a" /* SchServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_table_services_table_services__["a" /* TableServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_table_ext_services_table_ext_services__["a" /* TableExtServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_table_detail_services_table_detail_services__["a" /* TableDetailServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_table_detail_ext_services_table_detail_ext_services__["a" /* TableDetailExtServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_glossary_services_glossary_services__["a" /* GlossaryServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_file_services_file_services__["a" /* FileServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_program_services_program_services__["a" /* ProgramServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_file_management_services_file_management_services__["a" /* FileManagementServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_conn_services_conn_services__["a" /* ConnServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_program_page_services_program_page_services__["a" /* ProgramPageServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_job_sch_services_job_sch_services__["a" /* JobSchServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_sql_services_sql_services__["a" /* SqlServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_table_set_services_table_set_services__["a" /* TableSetServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_api_url_services_api_url_services__["a" /* ApiUrlServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_directory_browser_services_directory_browser_services__["a" /* DirectoryBrowserServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_file_browser_services_file_browser_services__["a" /* FileBrowserServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_ftp_directory_browser_services_ftp_directory_browser_services__["a" /* FtpDirectoryBrowserServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_ftp_file_browser_services_ftp_file_browser_services__["a" /* FtpFileBrowserServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_prog_services_prog_services__["a" /* ProgServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_job_loop_event_services_job_loop_event_services__["a" /* JobLoopEventServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_44__providers_job_processed_sql_services_job_processed_sql_services__["a" /* JobProcessedSqlServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_quote_column_services_quote_column_services__["a" /* QuoteColumnServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_line_message_services_line_message_services__["a" /* LineMessageServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_cmd_log_services_cmd_log_services__["a" /* CmdLogServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_mask_column_services_mask_column_services__["a" /* MaskColumnServicesProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCheckListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_CodeCheckViewModel__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CodeCheckListResponse = /** @class */ (function (_super) {
    __extends(CodeCheckListResponse, _super);
    function CodeCheckListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_CodeCheckViewModel__["a" /* CodeCheckViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.columnname = data.columnname;
                item.check_type = data.check_type;
                item.is_active = data.is_active;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        break;
                    }
                    default:
                        item.is_active_color = "active";
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return CodeCheckListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=CodeCheckListResponse.js.map

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCheckResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_CodeCheckViewModel__ = __webpack_require__(138);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CodeCheckResponse = /** @class */ (function (_super) {
    __extends(CodeCheckResponse, _super);
    function CodeCheckResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_CodeCheckViewModel__["a" /* CodeCheckViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.columnname = obj.Model.columnname;
            _this.Model.check_type = obj.Model.check_type;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
        }
        return _this;
    }
    return CodeCheckResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=CodeCheckResponse.js.map

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VwCodeTypeCheckListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_VwCodeTypeCheckViewModel__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VwCodeTypeCheckListResponse = /** @class */ (function (_super) {
    __extends(VwCodeTypeCheckListResponse, _super);
    function VwCodeTypeCheckListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_VwCodeTypeCheckViewModel__["a" /* VwCodeTypeCheckViewModel */]();
                item.code_type = data.code_type;
                item.cnt = (data && data.cnt) || null;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return VwCodeTypeCheckListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=VwCodeTypeCheckListResponse.js.map

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VwCodeTypeCheckViewModel; });
var VwCodeTypeCheckViewModel = /** @class */ (function () {
    function VwCodeTypeCheckViewModel() {
    }
    return VwCodeTypeCheckViewModel;
}());

//# sourceMappingURL=VwCodeTypeCheckViewModel.js.map

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VwCodeCheckListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_VwCodeCheckViewModel__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VwCodeCheckListResponse = /** @class */ (function (_super) {
    __extends(VwCodeCheckListResponse, _super);
    function VwCodeCheckListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_VwCodeCheckViewModel__["a" /* VwCodeCheckViewModel */]();
                item.code_key = data.code_key;
                item.code_type = data.code_type;
                item.code_no = data.code_no;
                item.code_desc = data.code_desc;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return VwCodeCheckListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=VwCodeCheckListResponse.js.map

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VwCodeCheckViewModel; });
var VwCodeCheckViewModel = /** @class */ (function () {
    function VwCodeCheckViewModel() {
    }
    return VwCodeCheckViewModel;
}());

//# sourceMappingURL=VwCodeCheckViewModel.js.map

/***/ }),
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ApiUrlViewModel__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ApiUrlListResponse = /** @class */ (function (_super) {
    __extends(ApiUrlListResponse, _super);
    function ApiUrlListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                obj.Model.forEach(function (data) {
                    var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ApiUrlViewModel__["a" /* ApiUrlViewModel */]();
                    item.id = data.id;
                    item.url = data.url;
                    item.disp_name = data.disp_name;
                    item.is_default = data.is_default;
                    item.is_url_forward = data.is_url_forward;
                    if (data.is_url_forward === true)
                        item.url_forward = "轉址";
                    else
                        item.url_forward = "";
                    _this.Model.push(item);
                }) || null;
            }
        }
        return _this;
    }
    return ApiUrlListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ApiUrlListResponse.js.map

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ApiUrlViewModel__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ApiUrlResponse = /** @class */ (function (_super) {
    __extends(ApiUrlResponse, _super);
    function ApiUrlResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            if (obj.Model != null) {
                _this.Model = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ApiUrlViewModel__["a" /* ApiUrlViewModel */]();
                _this.Model.id = obj.Model.id;
                _this.Model.url = obj.Model.url;
                _this.Model.disp_name = obj.Model.disp_name;
                _this.Model.is_default = obj.Model.codeis_default_desc;
                _this.Model.is_url_forward = obj.Model.is_url_forward;
                if (obj.Model.is_url_forward === true)
                    _this.Model.url_forward = "轉址";
                else
                    _this.Model.url_forward = "";
            }
        }
        return _this;
    }
    return ApiUrlResponse;
}(__WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ApiUrlResponse.js.map

/***/ }),
/* 345 */,
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlRepository; });
var ApiUrlRepository = /** @class */ (function () {
    function ApiUrlRepository() {
        this.data_list = [];
        this.data_list_query = [];
    }
    ApiUrlRepository.prototype.Add = function (item) {
        this.data_list.push(item);
    };
    ApiUrlRepository.prototype.AddList = function (items) {
        var _this = this;
        this.data_list = [];
        items.forEach(function (item) {
            _this.data_list.push(item);
        });
    };
    ApiUrlRepository.prototype.Del = function (id) {
        var index = this.data_list.findIndex(function (d) { return d.id === id; });
        this.data_list.splice(index, 1); //remove element from array
    };
    ApiUrlRepository.prototype.List = function (keyword, order_type) {
        if (keyword > "") {
            this.data_list_query = this.data_list.filter(function (item) {
                return (item.id.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
                    item.disp_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
                    item.url.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            });
        }
        else
            this.data_list_query = this.data_list.slice();
        if (order_type)
            return this.data_list_query.sort();
        else
            return this.data_list_query.sort(function (itema, itemb) { return (itema.id > itemb.id ? -1 : 1); });
    };
    ApiUrlRepository.prototype.Update = function (item) {
        if (item.is_default === true) {
            this.data_list.forEach(function (p) {
                p.is_default = false;
            });
        }
        var index = this.data_list.findIndex(function (d) { return d.id === item.id; });
        this.data_list[index] = item;
    };
    return ApiUrlRepository;
}());

//# sourceMappingURL=ApiUrlRepository.js.map

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_user_menuViewModel__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_UserViewModel__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewModel_MenuViewModel__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ViewModel_ProgramPageMenuViewModel__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ViewModel_PermissionViewModel__ = __webpack_require__(66);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var UserMenuResponse = /** @class */ (function (_super) {
    __extends(UserMenuResponse, _super);
    function UserMenuResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_user_menuViewModel__["a" /* user_menuViewModel */]();
            _this.Model.lic = obj.Model.lic;
            _this.Model.table_lic = obj.Model.table_lic;
            _this.Model.batch_lic = obj.Model.batch_lic;
            _this.Model.batch_edit_lic = obj.Model.batch_edit_lic;
            _this.Model.sch_lic = obj.Model.sch_lic;
            _this.Model.file_browser_lic = obj.Model.file_browser_lic;
            _this.Model.ftp_file_browser_lic = obj.Model.ftp_file_browser_lic;
            _this.Model.remote_conn_id = obj.Model.remote_conn_id;
            _this.Model.conn_type_key = obj.Model.conn_type_key;
            _this.Model.conn_type = obj.Model.conn_type;
            _this.Model.encrypt_method_key = obj.Model.encrypt_method_key;
            _this.Model.encrypt_method = obj.Model.encrypt_method;
            var user_1 = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_UserViewModel__["a" /* UserViewModel */]();
            user_1.userName = obj.Model.userViewModel.userName;
            user_1.password = obj.Model.userViewModel.password;
            user_1.Email = obj.Model.userViewModel.Email || null;
            user_1.token = obj.Model.userViewModel.token;
            user_1.login_log_seq = obj.Model.userViewModel.login_log_seq;
            user_1.roleName = [];
            user_1.PermissionViewModel = [];
            if (obj != null && obj.Model.userViewModel != null) {
                obj.Model.userViewModel.roleName.forEach(function (element) {
                    user_1.roleName.push(element);
                });
                if (obj.Model.userViewModel.permissionViewModel != null) {
                    obj.Model.userViewModel.permissionViewModel.forEach(function (element) {
                        var p = new __WEBPACK_IMPORTED_MODULE_6__ViewModel_PermissionViewModel__["a" /* PermissionViewModel */]();
                        p.permission_no = element.permission_no;
                        p.permission_desc = element.permission_desc;
                        p.permission_func_desc = element.permission_func_desc;
                        p.creator = element.creator;
                        p.create_time = element.create_time;
                        p.modifier = element.modifier;
                        p.last_update_time = element.last_update_time;
                        user_1.PermissionViewModel.push(p);
                    });
                }
            }
            _this.Model.UserViewModel = user_1;
            _this.Model.MenuViewModel = [];
            obj.Model.menuViewModel.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_3__ViewModel_MenuViewModel__["a" /* MenuViewModel */]();
                item.menu_id = data.menu_no;
                item.menu_no = data.menu_no;
                item.menu_desc = data.menu_desc;
                item.ProgramPageMenuViewModel = [];
                data.program_page_menuViewModel.forEach(function (pm) {
                    var pm_item = new __WEBPACK_IMPORTED_MODULE_4__ViewModel_ProgramPageMenuViewModel__["a" /* ProgramPageMenuViewModel */]();
                    pm_item.menu_no = pm.menu_no;
                    pm_item.page_name = pm.page_name;
                    var pmp_item = new __WEBPACK_IMPORTED_MODULE_5__ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
                    pmp_item.page_name = pm.program_pageViewModel.page_name;
                    pmp_item.page_desc = pm.program_pageViewModel.page_desc;
                    pmp_item.program_no = pm.program_pageViewModel.program_no;
                    pm_item.ProgramPageViewModel = pmp_item;
                    item.ProgramPageMenuViewModel.push(pm_item);
                });
                _this.Model.MenuViewModel.push(item);
            }) || null;
        }
        return _this;
    }
    return UserMenuResponse;
}(__WEBPACK_IMPORTED_MODULE_1__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=UserMenuResponse.js.map

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user_menuViewModel; });
var user_menuViewModel = /** @class */ (function () {
    function user_menuViewModel() {
    }
    return user_menuViewModel;
}());

//# sourceMappingURL=user_menuViewModel.js.map

/***/ }),
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableViewModel__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableListResponse = /** @class */ (function (_super) {
    __extends(TableListResponse, _super);
    function TableListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableViewModel__["a" /* TableViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.tablefullname = data.schemaname + "." + data.tablename;
                item.tablecname = (data && data.tablecname) || null;
                item.table_cat_key = data.table_cat_key;
                item.table_cat_desc = data.table_cat_desc;
                item.file_group = data.file_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.err_columnname = data.err_columnname || null;
                item.code_check_cnt = data.code_check_cnt;
                if (item.code_check_cnt > 0)
                    item.code_check_color = "danger";
                else
                    item.code_check_color = "light";
                item.quote_column_cnt = data.quote_column_cnt;
                if (item.quote_column_cnt > 0)
                    item.quote_column_color = "danger";
                else
                    item.quote_column_color = "light";
                item.mask_column_cnt = data.mask_column_cnt;
                if (item.mask_column_cnt > 0)
                    item.mask_column_color = "danger";
                else
                    item.mask_column_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableListResponse.js.map

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableViewModel__ = __webpack_require__(132);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableResponse = /** @class */ (function (_super) {
    __extends(TableResponse, _super);
    function TableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableViewModel__["a" /* TableViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.file_group = obj.Model.file_group;
            _this.Model.tablefullname = obj.Model.schemaname + '.' + obj.Model.tablename;
            _this.Model.tablecname = obj && obj.Model.tablecname || null;
            _this.Model.table_cat_key = obj.Model.table_cat_key;
            _this.Model.table_cat_desc = obj.Model.table_cat_desc;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.err_columnname = obj.Model.err_columnnamne || null;
            _this.Model.code_check_cnt = obj.Model.code_check_cnt;
            if (_this.Model.code_check_cnt > 0)
                _this.Model.code_check_color = "danger-left";
            else
                _this.Model.code_check_color = "light";
        }
        return _this;
    }
    return TableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=TableResponse.js.map

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramViewModel__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var ProgramListResponse = /** @class */ (function (_super) {
    __extends(ProgramListResponse, _super);
    function ProgramListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
                item.program_no = data.program_no;
                item.program_desc = data.program_desc;
                item.program_name = data.program_name;
                item.bus_type_key = data.bus_type_key;
                item.program_type_key = data.program_type_key;
                item.program_type_seq = data.program_type_seq;
                item.program_path_key = data && data.program_path_key || null;
                item.master_program_no = data && data.master_program_no || null;
                item.parent_program_no = data && data.parent_program_no || null;
                item.menu_key = data && data.menu_key || null;
                item.audit_flag = data && data.audit_flag || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.sql_statement = data.sql_statement;
                item.is_active = data.is_active;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        break;
                    }
                    default:
                        item.is_active_color = "active";
                }
                item.bus_type = data.bus_type;
                item.checked = false;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ProgramListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ProgramListResponse.js.map

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramViewModel__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgramResponse = /** @class */ (function (_super) {
    __extends(ProgramResponse, _super);
    function ProgramResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
            _this.Model.program_no = obj.Model.program_no;
            _this.Model.program_desc = obj.Model.program_desc;
            _this.Model.program_name = obj.Model.program_name;
            _this.Model.bus_type_key = obj.Model.bus_type_key;
            _this.Model.program_type_key = obj.Model.program_type_key;
            _this.Model.program_type_seq = obj.Model.program_type_seq;
            _this.Model.program_path_key = obj && obj.Model.program_path_key || null;
            _this.Model.master_program_no = obj && obj.Model.master_program_no || null;
            _this.Model.parent_program_no = obj && obj.Model.parent_program_no || null;
            _this.Model.menu_key = obj && obj.Model.menu_key || null;
            _this.Model.audit_flag = obj && obj.Model.audit_flag || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.sql_statement = obj.Model.sql_statement;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            _this.Model.bus_type = obj.Model.bus_type;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
        }
        return _this;
    }
    return ProgramResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ProgramResponse.js.map

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailViewModel__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableDetailListResponse = /** @class */ (function (_super) {
    __extends(TableDetailListResponse, _super);
    function TableDetailListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailViewModel__["a" /* TableDetailViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.tablecname = data.tablecname;
                item.columncname = data.columncname;
                item.column_id = data.column_id;
                item.col_index = data.col_index;
                item.columnname = data.columnname;
                item.data_type = data.data_type;
                item.is_pk = data.is_pk;
                item.is_uni_cluster = data.is_uni_cluster;
                item.is_cluster = data.is_cluster;
                item.is_nullable = data.is_nullable;
                item.is_nullable_str = data.is_nullable ? "Y" : "N";
                item.default_value = data.default_value;
                item.computecolumn = data.computecolumn;
                item.is_identity = data.is_identity;
                item.is_identity_str = data.is_identity ? "Y" : "N";
                item.memo = data.memo;
                item.tablefullname = data.schemaname + "." + data.tablename;
                item.id_check = data.id_check;
                item.del_flag = data.del_flag;
                item.col_start_loc = data.col_start_loc;
                item.col_length = data.col_length;
                item.column_type_key = data.column_type_key;
                item.column_type = data.column_type;
                item.history_column_flag = data.history_column_flag;
                item.date_convert_format = data.date_convert_format;
                item.is_sign = data.is_sign;
                item.check_type = data.check_type;
                if (item.check_type != null)
                    item.code_check_color = "danger";
                else
                    item.code_check_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableDetailListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableDetailListResponse.js.map

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableDetailViewModel__ = __webpack_require__(133);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableDetailResponse = /** @class */ (function (_super) {
    __extends(TableDetailResponse, _super);
    function TableDetailResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableDetailViewModel__["a" /* TableDetailViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.tablecname = obj.Model.tablecname;
            _this.Model.columncname = obj.Model.columncname;
            _this.Model.column_id = obj.Model.column_id;
            _this.Model.col_index = obj.Model.col_index;
            _this.Model.columnname = obj.Model.columnname;
            _this.Model.data_type = obj.Model.data_type;
            _this.Model.is_pk = obj.Model.is_pk;
            _this.Model.is_uni_cluster = obj.Model.is_uni_cluster;
            _this.Model.is_cluster = obj.Model.is_cluster;
            _this.Model.is_nullable = obj.Model.is_nullable;
            _this.Model.is_nullable_str = obj.Model.is_nullable ? "Y" : "N";
            _this.Model.default_value = obj.Model.default_value;
            _this.Model.computecolumn = obj.Model.computecolumn;
            _this.Model.is_identity = obj.Model.is_identity;
            _this.Model.is_identity_str = obj.Model.is_identity ? "Y" : "N";
            _this.Model.memo = obj.Model.memo;
            _this.Model.id_check = obj.Model.id_check;
            _this.Model.del_flag = obj.Model.del_flag;
            _this.Model.col_start_loc = obj.Model.col_start_loc;
            _this.Model.col_length = obj.Model.col_length;
            _this.Model.column_type_key = obj.Model.column_type_key;
            _this.Model.column_type = obj.Model.column_type;
            _this.Model.history_column_flag = obj.Model.history_column_flag;
            _this.Model.date_convert_format = obj.Model.date_convert_format;
            _this.Model.is_sign = obj.Model.is_sign;
            _this.Model.tablefullname = obj.Model.schemaname + '.' + obj.Model.tablename;
            _this.Model.check_type = obj.Model.check_type;
            if (_this.Model.check_type != null)
                _this.Model.code_check_color = "danger-left";
            else
                _this.Model.code_check_color = "light";
        }
        return _this;
    }
    return TableDetailResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=TableDetailResponse.js.map

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmdLogResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_CmdLogViewModel__ = __webpack_require__(362);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CmdLogResponse = /** @class */ (function (_super) {
    __extends(CmdLogResponse, _super);
    function CmdLogResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_CmdLogViewModel__["a" /* CmdLogViewModel */]();
            _this.Model.exec_log_seq = obj.Model.exec_log_seq; //轉檔記錄序號
            _this.Model.msg = obj.Model.msg; //訊息
            _this.Model.create_time = obj.Model.create_time; //建立時間
        }
        return _this;
    }
    return CmdLogResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=CmdLogResponse.js.map

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmdLogViewModel; });
var CmdLogViewModel = /** @class */ (function () {
    function CmdLogViewModel() {
    }
    return CmdLogViewModel;
}());

//# sourceMappingURL=CmdLogViewModel.js.map

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnViewModel__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnListResponse = /** @class */ (function (_super) {
    __extends(ConnListResponse, _super);
    function ConnListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnViewModel__["a" /* ConnViewModel */]();
                item.remote_conn_id = data.remote_conn_id;
                item.db_provider = (data && data.db_provider) || null;
                item.conn_string = data.conn_string;
                item.pwd = (data && data.pwd) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.conn_type_key = data.conn_type_key;
                item.conn_type = data.conn_type;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ConnListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ConnListResponse.js.map

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ConnViewModel__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnResponse = /** @class */ (function (_super) {
    __extends(ConnResponse, _super);
    function ConnResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ConnViewModel__["a" /* ConnViewModel */]();
            _this.Model.remote_conn_id = obj.Model.remote_conn_id;
            _this.Model.db_provider = (obj && obj.Model.db_provider) || null;
            _this.Model.conn_string = obj.Model.conn_string;
            _this.Model.pwd = (obj && obj.Model.pwd) || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.conn_type_key = obj.Model.conn_type_key;
            _this.Model.conn_type = obj.Model.conn_type;
        }
        return _this;
    }
    return ConnResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ConnResponse.js.map

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnFtpListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnFtpViewModel__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnFtpListResponse = /** @class */ (function (_super) {
    __extends(ConnFtpListResponse, _super);
    function ConnFtpListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnFtpViewModel__["a" /* ConnFtpViewModel */]();
                item.remote_conn_id = data.remote_conn_id;
                item.db_provider = (data && data.db_provider) || null;
                item.conn_string = data.conn_string;
                item.pwd = (data && data.pwd) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.conn_type_key = data.conn_type_key;
                item.conn_type = data.conn_type;
                item.server_name = data.server_name;
                item.user_name = data.user_name;
                item.port = data.port;
                item.passive_mode = data.passive_mode;
                item.primary_key = data.primary_key;
                item.primary_key_passphrase = data.primary_key_passphrase;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ConnFtpListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ConnFtpListResponse.js.map

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnSmtpListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnSmtpViewModel__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnSmtpListResponse = /** @class */ (function (_super) {
    __extends(ConnSmtpListResponse, _super);
    function ConnSmtpListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnSmtpViewModel__["a" /* ConnSmtpViewModel */]();
                item.remote_conn_id = data.remote_conn_id;
                item.db_provider = (data && data.db_provider) || null;
                item.conn_string = data.conn_string;
                item.pwd = (data && data.pwd) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.conn_type_key = data.conn_type_key;
                item.conn_type = data.conn_type;
                item.server_name = data.server_name;
                item.user_name = data.user_name;
                item.port = data.port;
                item.ssl = data.ssl;
                item.display_name = data.display_name;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ConnSmtpListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ConnSmtpListResponse.js.map

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnHttpListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnHttpViewModel__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnHttpListResponse = /** @class */ (function (_super) {
    __extends(ConnHttpListResponse, _super);
    function ConnHttpListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ConnHttpViewModel__["a" /* ConnHttpViewModel */]();
                item.remote_conn_id = data.remote_conn_id;
                item.user_name = (data && data.user_name) || null;
                item.conn_string = data.conn_string;
                item.pwd = (data && data.pwd) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.conn_type_key = data.conn_type_key;
                item.conn_type = data.conn_type;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ConnHttpListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ConnHttpListResponse.js.map

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunJobResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RunJobResponse = /** @class */ (function (_super) {
    __extends(RunJobResponse, _super);
    function RunJobResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        console.log(_this.DidError);
        _this.Model = obj.Model;
        return _this;
    }
    return RunJobResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=RunJobResponse.js.map

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePathListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FilePathViewModel__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FilePathListResponse = /** @class */ (function (_super) {
    __extends(FilePathListResponse, _super);
    function FilePathListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FilePathViewModel__["a" /* FilePathViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.file_path_type_key = data.file_path_type_key;
                item.file_path_type = data.file_path_type;
                item.file_path_key = data.file_path_key;
                item.file_path = data.file_path;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FilePathListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FilePathListResponse.js.map

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePathResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FilePathViewModel__ = __webpack_require__(202);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FilePathResponse = /** @class */ (function (_super) {
    __extends(FilePathResponse, _super);
    function FilePathResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FilePathViewModel__["a" /* FilePathViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.file_path_type_key = obj.Model.file_path_type_key;
            _this.Model.file_path_type = obj.Model.file_path_type;
            _this.Model.file_path_key = obj.Model.file_path_key;
            _this.Model.file_path = obj.Model.file_path;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return FilePathResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FilePathResponse.js.map

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExtListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableExtViewModel__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableExtListResponse = /** @class */ (function (_super) {
    __extends(TableExtListResponse, _super);
    function TableExtListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableExtViewModel__["a" /* TableExtViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.tablefullname = data.schemaname + '.' + data.tablename;
                item.tablecname = (data && data.tablecname) || null;
                item.category = (data && data.category) || null;
                item.tablecname_flag = (data && data.tablecname_flag) || null;
                item.category_flag = (data && data.category_flag) || null;
                item.tablecname_glossary = (data && data.tablecname_glossary) || null;
                item.ttype = data.ttype;
                item.tablecname_sql = (data && data.tablecname_sql) || null;
                item.category_sql = (data && data.category_sql) || null;
                item.table_set_sql = (data && data.table_set_sql) || null;
                item.copy_table_set_sql = (data && data.copy_table_set_sql) || null;
                item.quote_column_cnt = data.quote_column_cnt;
                if (item.quote_column_cnt > 0)
                    item.quote_column_color = "danger";
                else
                    item.quote_column_color = "light";
                item.mask_column_cnt = data.mask_column_cnt;
                if (item.mask_column_cnt > 0)
                    item.mask_column_color = "danger";
                else
                    item.mask_column_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableExtListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableExtListResponse.js.map

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExtResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableExtViewModel__ = __webpack_require__(205);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableExtResponse = /** @class */ (function (_super) {
    __extends(TableExtResponse, _super);
    function TableExtResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableExtViewModel__["a" /* TableExtViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.tablefullname = obj.Model.schemaname + '.' + obj.Model.tablename;
            _this.Model.tablecname = obj && obj.Model.tablecname || null;
            _this.Model.category = obj && obj.Model.category || null;
            _this.Model.tablecname_flag = obj && obj.Model.tablecname_flag || null;
            _this.Model.category_flag = obj && obj.Model.category_flag || null;
            _this.Model.tablecname_glossary = obj && obj.Model.tablecname_glossary || null;
            _this.Model.ttype = obj.Model.ttype;
            _this.Model.tablecname_sql = obj && obj.Model.tablecname_sql || null;
            _this.Model.category_sql = obj && obj.Model.category_sql || null;
            _this.Model.table_set_sql = obj && obj.Model.table_set_sql || null;
            _this.Model.copy_table_set_sql = obj && obj.Model.copy_table_set_sql || null;
        }
        return _this;
    }
    return TableExtResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=TableExtResponse.js.map

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCreateExtResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableCreateExtViewModel__ = __webpack_require__(374);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableCreateExtResponse = /** @class */ (function (_super) {
    __extends(TableCreateExtResponse, _super);
    function TableCreateExtResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableCreateExtViewModel__["a" /* TableCreateExtViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname; //結構描述
            _this.Model.tablename = obj.Model.tablename; //資料表
            _this.Model.create_sql = (obj && obj.Model.create_sql) || null; //create_sql
            _this.Model.create_fk_sql = (obj && obj.Model.create_fk_sql) || null; //create_fk_sql
            _this.Model.create_depend_fk_sql =
                (obj && obj.Model.create_depend_fk_sql) || null; //create_depend_fk_sql
            _this.Model.drop_depend_fk_sql =
                (obj && obj.Model.drop_depend_fk_sql) || null; //drop_depend_fk_sql
            _this.Model.create_index_sql =
                (obj && obj.Model.create_index_sql) || null; //drop_depend_fk_sql
            _this.Model.create_date = (obj && obj.Model.create_date) || null; //建立日期
            _this.Model.modify_date = (obj && obj.Model.modify_date) || null; //modify_date
        }
        return _this;
    }
    return TableCreateExtResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=TableCreateExtResponse.js.map

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCreateExtViewModel; });
var TableCreateExtViewModel = /** @class */ (function () {
    function TableCreateExtViewModel() {
    }
    return TableCreateExtViewModel;
}());

//# sourceMappingURL=TableCreateExtViewModel.js.map

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFKListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableFKViewModel__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableFKListResponse = /** @class */ (function (_super) {
    __extends(TableFKListResponse, _super);
    function TableFKListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableFKViewModel__["a" /* TableFKViewModel */]();
                item.fk_cons = data.fk_cons; //相依關聯限制
                item.schemaname = data.schemaname; //結構描述
                item.tablename = data && data.tablename || null; //資料表
                item.fk_schemaname = data.fk_schemaname; //相依結構描述
                item.fk_tablename = data.fk_tablename; //相依資料表
                item.delete_action = data && data.delete_action || null; //刪除動作
                item.update_action = data && data.update_action || null; //更新動作
                item.relation = data && data.relation || null; //資料表相依關係
                item.tablefullname = data && data.schemaname + "." + data.tablename; //資料表全名
                item.fk_tablefullname = data && data.fk_schemaname + "." + data.fk_tablename; //相依資料表全名
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableFKListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableFKListResponse.js.map

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFKViewModel; });
var TableFKViewModel = /** @class */ (function () {
    function TableFKViewModel() {
    }
    return TableFKViewModel;
}());

//# sourceMappingURL=TableFKViewModel.js.map

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailFKListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailFKViewModel__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableDetailFKListResponse = /** @class */ (function (_super) {
    __extends(TableDetailFKListResponse, _super);
    function TableDetailFKListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailFKViewModel__["a" /* TableDetailFKViewModel */]();
                item.fk_cons = data.fk_cons; //相依關聯限制
                item.constraint_column_id = data.constraint_column_id; //相依欄位編號
                item.schemaname = data.schemaname; //結構描述
                item.tablename = data.tablename; //資料表
                item.columnname = (data && data.columnname) || null; //欄位名稱
                item.fk_schemaname = data.fk_schemaname; //相依結構描述
                item.fk_tablename = data.fk_tablename; //相依資料表
                item.fk_columnname = (data && data.fk_columnname) || null; //相依欄位
                item.relation = (data && data.relation) || null; //資料表相依關係
                item.tablefullname = data && data.schemaname + "." + data.tablename; //資料表全名
                item.fk_tablefullname =
                    data && data.fk_schemaname + "." + data.fk_tablename; //相依資料表全名
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableDetailFKListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableDetailFKListResponse.js.map

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailFKViewModel; });
var TableDetailFKViewModel = /** @class */ (function () {
    function TableDetailFKViewModel() {
    }
    return TableDetailFKViewModel;
}());

//# sourceMappingURL=TableDetailFKViewModel.js.map

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagementListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileManagementViewModel__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileManagementListResponse = /** @class */ (function (_super) {
    __extends(FileManagementListResponse, _super);
    function FileManagementListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileManagementViewModel__["a" /* FileManagementViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.file_keyword = data.file_keyword;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.recursive = data.recursive;
                item.file_proc_key = data.file_proc_key;
                item.exec_seq = data.exec_seq;
                item.can_rerun = data.can_rerun;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = (data && data.note) || null;
                item.file_proc = data.file_proc;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        item.is_active_color_right = "danger-right";
                        break;
                    }
                    default: {
                        item.is_active_color = "active";
                        item.is_active_color_right = "active-right";
                    }
                }
                item.empty_file_check_flag = data.empty_file_check_flag;
                item.is_fail_stop = data.is_fail_stop;
                item.src_file_path = data.src_file_path;
                item.bk_file_path = data.bk_file_path;
                item.target_file_path = data.target_file_path;
                item.src_file_path_key = data.src_file_path_key;
                item.bk_file_path_key = data.bk_file_path_key;
                item.target_file_path_key = data.target_file_path_key;
                item.is_processed_sql = data.is_processed_sql;
                if (item.is_processed_sql === true) {
                    item.processed_sql_color = "danger";
                }
                else
                    item.processed_sql_color = "light";
                item.is_processed_exec_group = data.is_processed_exec_group;
                if (item.is_processed_exec_group === true) {
                    item.processed_exec_group_color = "danger";
                }
                else
                    item.processed_exec_group_color = "light";
                item.is_date_filter = data.is_date_filter;
                if (item.is_date_filter === true) {
                    item.date_filter_color = "danger";
                }
                else
                    item.date_filter_color = "light";
                item.is_pwd = data.is_pwd;
                if (item.is_pwd === true) {
                    item.pwd_color = "danger";
                }
                else
                    item.pwd_color = "light";
                item.loop_pwd_cnt = data.loop_pwd_cnt;
                if (item.loop_pwd_cnt > 0) {
                    item.loop_pwd_color = "danger";
                }
                else
                    item.loop_pwd_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileManagementListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileManagementListResponse.js.map

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagementResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileManagementViewModel__ = __webpack_require__(129);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileManagementResponse = /** @class */ (function (_super) {
    __extends(FileManagementResponse, _super);
    function FileManagementResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileManagementViewModel__["a" /* FileManagementViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.file_keyword = obj.Model.file_keyword;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.recursive = obj.Model.recursive;
            _this.Model.file_proc_key = obj.Model.file_proc_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.can_rerun = obj.Model.can_rerun;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = (obj && obj.Model.note) || null;
            _this.Model.file_proc = obj.Model.file_proc;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.empty_file_check_flag = obj.Model.empty_file_check_flag;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.src_file_path_key = obj.Model.src_file_path_key;
            _this.Model.bk_file_path_key = obj.Model.bk_file_path_key;
            _this.Model.target_file_path_key = obj.Model.target_file_path_key;
            _this.Model.src_file_path = obj.Model.src_file_path;
            _this.Model.bk_file_path = obj.Model.bk_file_path;
            _this.Model.target_file_path = obj.Model.target_file_path;
            _this.Model.is_processed_sql = obj.Model.is_processed_sql;
            if (_this.Model.is_processed_sql === true) {
                _this.Model.processed_sql_color = "danger";
            }
            else
                _this.Model.processed_sql_color = "light";
            _this.Model.is_processed_exec_group = obj.Model.is_processed_exec_group;
            if (_this.Model.is_processed_exec_group === true) {
                _this.Model.processed_exec_group_color = "danger";
            }
            else
                _this.Model.processed_exec_group_color = "light";
            _this.Model.is_date_filter = obj.Model.is_date_filter;
            if (_this.Model.is_date_filter === true) {
                _this.Model.date_filter_color = "danger";
            }
            else
                _this.Model.date_filter_color = "light";
            _this.Model.is_pwd = obj.Model.is_pwd;
            if (_this.Model.is_pwd === true) {
                _this.Model.pwd_color = "danger";
            }
            else
                _this.Model.pwd_color = "light";
            _this.Model.loop_pwd_cnt = obj.Model.loop_pwd_cnt;
            if (_this.Model.loop_pwd_cnt > 0) {
                _this.Model.loop_pwd_color = "danger";
            }
            else
                _this.Model.loop_pwd_color = "light";
        }
        return _this;
    }
    return FileManagementResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileManagementResponse.js.map

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_GlossaryViewModel__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GlossaryListResponse = /** @class */ (function (_super) {
    __extends(GlossaryListResponse, _super);
    function GlossaryListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_GlossaryViewModel__["a" /* GlossaryViewModel */]();
                item.cht_name = data.cht_name;
                item.eng_name = data.eng_name;
                item.eng_name_length = data.eng_name_length;
                item.data_type = data.data_type;
                item.glossary_type = data.glossary_type;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.glossary_type_desc = data.glossary_type === 'T' ? "資料表" : "欄位";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return GlossaryListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=GlossaryListResponse.js.map

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_GlossaryViewModel__ = __webpack_require__(135);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GlossaryResponse = /** @class */ (function (_super) {
    __extends(GlossaryResponse, _super);
    function GlossaryResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_GlossaryViewModel__["a" /* GlossaryViewModel */]();
            _this.Model.cht_name = obj.Model.cht_name;
            _this.Model.eng_name = obj.Model.eng_name;
            _this.Model.eng_name_length = obj.Model.eng_name_length;
            _this.Model.data_type = obj.Model.data_type;
            _this.Model.glossary_type = obj.Model.glossary_type;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.glossary_type_desc = obj.Model.glossary_type === 'T' ? "資料表" : "欄位";
        }
        return _this;
    }
    return GlossaryResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=GlossaryResponse.js.map

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailExtListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailExtViewModel__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableDetailExtListResponse = /** @class */ (function (_super) {
    __extends(TableDetailExtListResponse, _super);
    function TableDetailExtListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_TableDetailExtViewModel__["a" /* TableDetailExtViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.tablecname = (data && data.tablecname) || null;
                item.columncname = (data && data.columncname) || null;
                item.column_id = data.column_id;
                item.columnname = data.columnname;
                item.data_type = (data && data.data_type) || null;
                item.max_length = data.max_length;
                item.precision = data.precision;
                item.scale = data.scale;
                item.is_pk = (data && data.is_pk) || null;
                item.is_uni_cluster = (data && data.is_uni_cluster) || null;
                item.is_cluster = (data && data.is_cluster) || null;
                item.is_nullable = data.is_nullable;
                item.default_value = (data && data.default_value) || null;
                item.fktable = data.fktable;
                item.fkcolumnname = data.fkcolumnname;
                item.fkseq = (data && data.fkseq) || null;
                item.fkgroup = data.fkgroup;
                item.computecolumn = (data && data.computecolumn) || null;
                item.is_identity = data.is_identity;
                item.memo = (data && data.memo) || null;
                item.ttype = data.ttype;
                item.columncname_flag = data.columncname_flag;
                item.columncname_glossary = (data && data.columncname_glossary) || null;
                item.columncname_sql = (data && data.columncname_sql) || null;
                item.memo_sql = (data && data.memo_sql) || null;
                item.tablefullname = data.schemaname + "." + data.tablename;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return TableDetailExtListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=TableDetailExtListResponse.js.map

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailExtResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableDetailExtViewModel__ = __webpack_require__(206);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableDetailExtResponse = /** @class */ (function (_super) {
    __extends(TableDetailExtResponse, _super);
    function TableDetailExtResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_TableDetailExtViewModel__["a" /* TableDetailExtViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.tablecname = (obj && obj.Model.tablecname) || null;
            _this.Model.columncname = (obj && obj.Model.columncname) || null;
            _this.Model.column_id = obj.Model.column_id;
            _this.Model.columnname = obj.Model.columnname;
            _this.Model.data_type = (obj && obj.Model.data_type) || null;
            _this.Model.max_length = obj.Model.max_length;
            _this.Model.precision = obj.Model.precision;
            _this.Model.scale = obj.Model.scale;
            _this.Model.is_pk = (obj && obj.Model.is_pk) || null;
            _this.Model.is_uni_cluster = (obj && obj.Model.is_uni_cluster) || null;
            _this.Model.is_cluster = (obj && obj.Model.is_cluster) || null;
            _this.Model.is_nullable = obj.Model.is_nullable;
            _this.Model.default_value = (obj && obj.Model.default_value) || null;
            _this.Model.fktable = obj.Model.fktable;
            _this.Model.fkcolumnname = obj.Model.fkcolumnname;
            _this.Model.fkseq = (obj && obj.Model.fkseq) || null;
            _this.Model.fkgroup = obj.Model.fkgroup;
            _this.Model.computecolumn = (obj && obj.Model.computecolumn) || null;
            _this.Model.is_identity = obj.Model.is_identity;
            _this.Model.memo = (obj && obj.Model.memo) || null;
            _this.Model.ttype = obj.Model.ttype;
            _this.Model.columncname_flag = obj.Model.columncname_flag;
            _this.Model.columncname_glossary =
                (obj && obj.Model.columncname_glossary) || null;
            _this.Model.columncname_sql = (obj && obj.Model.columncname_sql) || null;
            _this.Model.memo_sql = (obj && obj.Model.memo_sql) || null;
        }
        return _this;
    }
    return TableDetailExtResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=TableDetailExtResponse.js.map

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramViewModel__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var ProgramPageListResponse = /** @class */ (function (_super) {
    __extends(ProgramPageListResponse, _super);
    function ProgramPageListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
                item.page_name = data.page_name;
                item.page_desc = data.page_desc;
                item.program_no = data.program_no;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                var p = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
                p.program_no = data.ProgramViewModel.program_no;
                p.program_desc = data.ProgramViewModel.program_desc;
                p.program_name = data.ProgramViewModel.program_name;
                p.bus_type_key = data.ProgramViewModel.bus_type_key;
                p.program_type_key = data.ProgramViewModel.program_type_key;
                p.program_type_seq = data.ProgramViewModel.program_type_seq;
                p.program_path_key = obj && data.ProgramViewModel.program_path_key || null;
                p.master_program_no = obj && data.ProgramViewModel.master_program_no || null;
                p.parent_program_no = obj && data.ProgramViewModel.parent_program_no || null;
                p.menu_key = obj && data.ProgramViewModel.menu_key || null;
                p.audit_flag = obj && data.ProgramViewModel.audit_flag || null;
                p.creator = data.ProgramViewModel.creator;
                p.create_time = data.ProgramViewModel.create_time;
                p.modifier = data.ProgramViewModel.modifier;
                p.last_update_time = data.ProgramViewModel.last_update_time;
                item.ProgramViewModel = p;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ProgramPageListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ProgramPageListResponse.js.map

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramViewModel__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ProgramPageResponse = /** @class */ (function (_super) {
    __extends(ProgramPageResponse, _super);
    function ProgramPageResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
            _this.Model.page_name = obj.Model.page_name;
            _this.Model.page_desc = obj.Model.page_desc;
            _this.Model.program_no = obj.Model.program_no;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            if (obj.Model.ProgramViewModel != null) {
                var p = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
                p.program_no = obj.Model.ProgramViewModel.program_no;
                p.program_desc = obj.Model.ProgramViewModel.program_desc;
                p.program_name = obj.Model.ProgramViewModel.program_name;
                p.bus_type_key = obj.Model.ProgramViewModel.bus_type_key;
                p.program_type_key = obj.Model.ProgramViewModel.program_type_key;
                p.program_type_seq = obj.Model.ProgramViewModel.program_type_seq;
                p.program_path_key =
                    (obj && obj.Model.ProgramViewModel.program_path_key) || null;
                p.master_program_no =
                    (obj && obj.Model.ProgramViewModel.master_program_no) || null;
                p.parent_program_no =
                    (obj && obj.Model.ProgramViewModel.parent_program_no) || null;
                p.menu_key = (obj && obj.Model.ProgramViewModel.menu_key) || null;
                p.audit_flag = (obj && obj.Model.ProgramViewModel.audit_flag) || null;
                p.creator = obj.Model.ProgramViewModel.creator;
                p.create_time = obj.Model.ProgramViewModel.create_time;
                p.modifier = obj.Model.ProgramViewModel.modifier;
                p.last_update_time = obj.Model.ProgramViewModel.last_update_time;
                _this.Model.ProgramViewModel = p;
            }
        }
        return _this;
    }
    return ProgramPageResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ProgramPageResponse.js.map

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserViewModel__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var UserListResponse = /** @class */ (function (_super) {
    __extends(UserListResponse, _super);
    function UserListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserViewModel__["a" /* UserViewModel */]();
                item.userName = data.userName;
                item.roleName = [];
                // item.PermissionViewModel=[];
                if (data.roleName != null) {
                    data.roleName.forEach(function (element) {
                        item.roleName.push(element);
                    });
                }
                // if(data.permission_no!=null)
                // {
                //   data.permission_no.forEach(element => {
                //     item.permission_no.push(element);
                //   });
                // }
                item.Email = data.Email;
                item.password = data.password;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return UserListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=UserListResponse.js.map

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSchListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobSchViewModel__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_JobViewModel__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewModel_SchViewModel__ = __webpack_require__(146);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { System } from "./Generic";




/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var JobSchListResponse = /** @class */ (function (_super) {
    __extends(JobSchListResponse, _super);
    // Model: any;
    function JobSchListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobSchViewModel__["a" /* JobSchViewModel */]();
                item.ssis_job_no = data.ssis_job_no;
                item.ssis_job_name = data.ssis_job_name;
                item.sch_no = data.sch_no;
                item.sch_name = data.sch_name;
                item.next_run_date = data.next_run_date_str;
                item.next_run_time = data.next_run_time_str;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.remote_conn_id = data.remote_conn_id;
                item.remote_conn_string = data.remote_conn_string;
                var job = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_JobViewModel__["a" /* JobViewModel */]();
                job.ssis_job_no = data.jobViewModel.ssis_job_no;
                job.ssis_job_name = data.jobViewModel.ssis_job_name;
                var sch = new __WEBPACK_IMPORTED_MODULE_3__ViewModel_SchViewModel__["a" /* SchViewModel */]();
                sch.sch_no = data.schViewModel.sch_no;
                sch.sch_name = data.schViewModel.sch_name;
                sch.sch_description = data.schViewModel.sch_description;
                item.JobViewModel = job;
                item.SchViewModel = sch;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return JobSchListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=JobSchListResponse.js.map

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSchResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// import { JobViewModel } from "../ViewModel/JobViewModel";
// import { SchViewModel } from "../ViewModel/SchViewModel";
var JobSchResponse = /** @class */ (function (_super) {
    __extends(JobSchResponse, _super);
    function JobSchResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        return _this;
        // if (this.DidError === false) {
        //   if (obj.Model.ssis_job_no) {
        //     this.Model = new JobSchViewModel();
        //     this.Model.ssis_job_no = obj.Model.ssis_job_no;
        //     this.Model.sch_no = obj.Model.sch_no;
        //     this.Model.next_run_date = obj.Model.next_run_date;
        //     this.Model.next_run_time = obj.Model.next_run_time;
        //     this.Model.creator = obj.Model.creator;
        //     this.Model.create_time = obj.Model.create_time;
        //     this.Model.modifier = obj.Model.modifier;
        //     this.Model.last_update_time = obj.Model.last_update_time;
        //     let job = new JobViewModel();
        //     job.ssis_job_no = obj.Model.JobViewModel.ssis_job_no;
        //     job.ssis_job_name = obj.Model.JobViewModel.ssis_job_name;
        //     let sch = new SchViewModel();
        //     sch.sch_no = obj.Model.sch.SchViewModel.sch_no;
        //     sch.sch_name = obj.Model.sch.SchViewModel.sch_name;
        //     sch.sch_description = obj.Model.sch.SchViewModel.sch_description;
        //     this.Model.JobViewModel = job;
        //     this.Model.SchViewModel = sch;
        //   }
        // }
    }
    return JobSchResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=JobSchResponse.js.map

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopEventListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobLoopEventViewModel__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JobLoopEventListResponse = /** @class */ (function (_super) {
    __extends(JobLoopEventListResponse, _super);
    function JobLoopEventListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            _this.Model = [];
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobLoopEventViewModel__["a" /* JobLoopEventViewModel */]();
                item.loop_seq = data.loop_seq; //迴圈序號
                item.ssis_job_no = data.ssis_job_no; //SSIS作業編號
                item.job01 = (data && data.job01) || null; //作業迴圈欄位一
                item.job02 = (data && data.job02) || null; //作業迴圈欄位二
                item.job03 = (data && data.job03) || null; //作業迴圈欄位三
                item.event_type_key = data.event_type_key; //觸發事件類別主鍵
                item.event_type = data.event_type; //觸發事件類別
                item.src_path_key = data.src_path_key; //來源路徑主鍵
                item.src_path = data.src_path; //來源路徑
                item.file_keyword = (data && data.file_keyword) || null; //檔案搜尋關鍵字
                item.remote_conn_id = (data && data.remote_conn_id) || null; //遠端連線編號
                item.remote_conn_string = (data && data.remote_conn_string) || null; //遠端連線編號
                item.period_min = data.period_min; //每隔分鐘數
                item.active_start_date = data.active_start_date; //開始作業日期
                item.active_start_time = data.active_start_time; //開始作業時間
                item.next_start_time = data.next_start_time; //下次開始執行時間
                item.sbp_conn_id = data.sbp_conn_id; //sbpclient連線編號
                item.sbp_conn_string = data.sbp_conn_string; //sbpclient連線編號
                item.is_active = data.is_active; //啟用註記
                item.is_active_desc = data.is_active_desc; //啟用註記
                item.creator = data.creator; //鍵檔人員
                item.create_time = data.create_time; //建立時間
                item.modifier = data.modifier; //異動人員
                item.last_update_time = data.last_update_time; //最後更新時間
                item.event_type_desc = data.event_type_key + "-" + data.event_type;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger-left";
                        break;
                    }
                    default:
                        item.is_active_color = "active-left";
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return JobLoopEventListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=JobLoopEventListResponse.js.map

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopEventResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobLoopEventViewModel__ = __webpack_require__(139);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JobLoopEventResponse = /** @class */ (function (_super) {
    __extends(JobLoopEventResponse, _super);
    function JobLoopEventResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            if (obj.Model.loop_seq) {
                _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobLoopEventViewModel__["a" /* JobLoopEventViewModel */]();
                _this.Model.loop_seq = obj.Model.loop_seq; //迴圈序號
                _this.Model.ssis_job_no = obj.Model.ssis_job_no; //SSIS作業編號
                _this.Model.job01 = (obj && obj.Model.job01) || null; //作業迴圈欄位一
                _this.Model.job02 = (obj && obj.Model.job02) || null; //作業迴圈欄位二
                _this.Model.job03 = (obj && obj.Model.job03) || null; //作業迴圈欄位三
                _this.Model.event_type_key = obj.Model.event_type_key; //觸發事件類別主鍵
                _this.Model.src_path_key = obj.Model.src_path_key; //來源路徑主鍵
                _this.Model.file_keyword = (obj && obj.Model.file_keyword) || null; //檔案搜尋關鍵字
                _this.Model.remote_conn_id = (obj && obj.Model.remote_conn_id) || null; //遠端連線編號
                _this.Model.period_min = obj.Model.period_min; //每隔分鐘數
                _this.Model.active_start_date = obj.Model.active_start_date; //開始作業日期
                _this.Model.active_start_time = obj.Model.active_start_time; //開始作業時間
                _this.Model.next_start_time = obj.Model.next_start_time; //下次開始執行時間
                _this.Model.sbp_conn_id = obj.Model.sbp_conn_id; //sbpclient連線編號
                _this.Model.is_active = obj.Model.is_active; //啟用註記
                _this.Model.is_active_desc = obj.Model.is_active_desc; //啟用註記
                _this.Model.creator = obj.Model.creator; //鍵檔人員
                _this.Model.create_time = obj.Model.create_time; //建立時間
                _this.Model.modifier = obj.Model.modifier; //異動人員
                _this.Model.last_update_time = obj.Model.last_update_time; //最後更新時間
            }
        }
        return _this;
    }
    return JobLoopEventResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=JobLoopEventResponse.js.map

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProcessedSqlListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobProcessedSqlViewModel__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JobProcessedSqlListResponse = /** @class */ (function (_super) {
    __extends(JobProcessedSqlListResponse, _super);
    function JobProcessedSqlListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobProcessedSqlViewModel__["a" /* JobProcessedSqlViewModel */]();
                item.ssis_job_no = data.ssis_job_no; //SSIS作業編號
                item.exec_status_key = data.exec_status_key; //執行狀態主鍵
                item.sql_statement = data && data.sql_statement || null; //sql語法
                item.is_active = data.is_active; //啟用註記
                item.creator = data.creator; //建立者
                item.create_time = data.create_time; //建立時間
                item.modifier = data.modifier; //最後更新者
                item.last_update_time = data.last_update_time; //最後更新時間
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger-left";
                        break;
                    }
                    default:
                        item.is_active_color = "active-left";
                }
                item.exec_status = data.exec_status;
                item.exec_status_desc = data.exec_status_desc;
                switch (data.exec_status_key) {
                    case "012|R": {
                        item.exec_status_color = "running-left";
                        break;
                    }
                    case "012|F": {
                        item.exec_status_color = "danger-left";
                        break;
                    }
                    default:
                        item.exec_status_color = "normal-left";
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return JobProcessedSqlListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=JobProcessedSqlListResponse.js.map

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProcessedSqlResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobProcessedSqlViewModel__ = __webpack_require__(140);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JobProcessedSqlResponse = /** @class */ (function (_super) {
    __extends(JobProcessedSqlResponse, _super);
    function JobProcessedSqlResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobProcessedSqlViewModel__["a" /* JobProcessedSqlViewModel */]();
            _this.Model.ssis_job_no = obj.Model.ssis_job_no; //SSIS作業編號
            _this.Model.exec_status_key = obj.Model.exec_status_key; //執行狀態主鍵
            _this.Model.sql_statement = (obj && obj.Model.sql_statement) || null; //sql語法
            _this.Model.is_active = obj.Model.is_active; //啟用註記
            _this.Model.creator = obj.Model.creator; //建立者
            _this.Model.create_time = obj.Model.create_time; //建立時間
            _this.Model.modifier = obj.Model.modifier; //最後更新者
            _this.Model.last_update_time = obj.Model.last_update_time; //最後更新時間
        }
        return _this;
    }
    return JobProcessedSqlResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=JobProcessedSqlResponse.js.map

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineMessageListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_LineMessageViewModel__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LineMessageListResponse = /** @class */ (function (_super) {
    __extends(LineMessageListResponse, _super);
    function LineMessageListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_LineMessageViewModel__["a" /* LineMessageViewModel */]();
                item.tokenname = data.tokenname;
                item.subject_no = data.subject_no;
                item.ssis_job_no = data.subject_no;
                item.subject = data.subject;
                item.message = data.message;
                if (data.message)
                    item.short_message = data.message.substr(0, 50);
                else
                    item.short_message = "";
                item.res_message = data.res_message || null;
                if (data.res_message)
                    item.short_res_message = data.res_message.substr(0, 50);
                else
                    item.short_res_message = "";
                item.sch_cnt = data.sch_cnt;
                item.is_send_now = data.is_send_now;
                item.create_time = data.create_time;
                if (item.sch_cnt > 0)
                    item.sch_color = "danger";
                else
                    item.sch_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return LineMessageListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=LineMessageListResponse.js.map

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineMessageResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_LineMessageViewModel__ = __webpack_require__(141);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LineMessageResponse = /** @class */ (function (_super) {
    __extends(LineMessageResponse, _super);
    function LineMessageResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_LineMessageViewModel__["a" /* LineMessageViewModel */]();
            _this.Model.tokenname = obj.Model.tokenname;
            _this.Model.subject_no = obj.Model.subject_no;
            _this.Model.ssis_job_no = obj.Model.subject_no;
            _this.Model.subject = obj.Model.subject;
            _this.Model.message = obj.Model.message;
            _this.Model.res_message = obj.Model.res_message || null;
            if (obj.Model.message) {
                _this.Model.short_message = obj.Model.message.substr(0, 50);
            }
            else
                _this.Model.short_message = "";
            if (obj.Model.res_message)
                _this.Model.short_res_message = obj.Model.res_message.substr(0, 50);
            else
                _this.Model.short_res_message = "";
            _this.Model.is_send_now = obj.Model.is_send_now;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.sch_cnt = obj.Model.sch_cnt;
            if (_this.Model.sch_cnt > 0)
                _this.Model.sch_color = "danger-left";
            else
                _this.Model.sch_color = "light";
        }
        return _this;
    }
    return LineMessageResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=LineMessageResponse.js.map

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskColumnListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_MaskColumnViewModel__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MaskColumnListResponse = /** @class */ (function (_super) {
    __extends(MaskColumnListResponse, _super);
    function MaskColumnListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_MaskColumnViewModel__["a" /* MaskColumnViewModel */]();
                item.schemaname = data.schemaname; //結構描述
                item.tablename = data.tablename; //資料表
                item.columnname = data.columnname; //欄位名稱
                item.col_start_loc = data.col_start_loc; //資料欄起始位置
                item.col_length = data.col_length; //資料欄位長度
                item.mask = data.mask; //遮罩字元
                item.creator = data.creator; //鍵檔人員
                item.create_time = data.create_time; //建立時間
                item.modifier = data.modifier; //異動人員
                item.last_update_time = data.last_update_time; //最後更新時間
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return MaskColumnListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=MaskColumnListResponse.js.map

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskColumnResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_MaskColumnViewModel__ = __webpack_require__(142);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MaskColumnResponse = /** @class */ (function (_super) {
    __extends(MaskColumnResponse, _super);
    function MaskColumnResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_MaskColumnViewModel__["a" /* MaskColumnViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname; //結構描述
            _this.Model.tablename = obj.Model.tablename; //資料表
            _this.Model.columnname = obj.Model.columnname; //欄位名稱
            _this.Model.col_start_loc = obj.Model.col_start_loc; //資料欄起始位置
            _this.Model.col_length = obj.Model.col_length; //資料欄位長度
            _this.Model.mask = obj.Model.mask; //遮罩字元
            _this.Model.creator = obj.Model.creator; //鍵檔人員
            _this.Model.create_time = obj.Model.create_time; //建立時間
            _this.Model.modifier = obj.Model.modifier; //異動人員
            _this.Model.last_update_time = obj.Model.last_update_time; //最後更新時間
        }
        return _this;
    }
    return MaskColumnResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=MaskColumnResponse.js.map

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageMenuListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageMenuViewModel__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewModel_MenuViewModel__ = __webpack_require__(136);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var ProgramPageMenuListResponse = /** @class */ (function (_super) {
    __extends(ProgramPageMenuListResponse, _super);
    function ProgramPageMenuListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageMenuViewModel__["a" /* ProgramPageMenuViewModel */]();
                item.page_name = data.page_name;
                item.menu_no = data.menu_no;
                item.display_order_no = data.display_order_no;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                var pg = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
                pg.program_no = data.program_pageViewModel.program_no;
                pg.page_name = data.program_pageViewModel.page_name;
                pg.page_desc = data.program_pageViewModel.page_desc;
                item.ProgramPageViewModel = pg;
                var m = new __WEBPACK_IMPORTED_MODULE_3__ViewModel_MenuViewModel__["a" /* MenuViewModel */]();
                m.menu_no = data.menuViewModel.menu_no;
                m.menu_desc = data.menuViewModel.menu_desc;
                item.ProgramPageViewModel = pg;
                item.MenuViewModel = m;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ProgramPageMenuListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ProgramPageMenuListResponse.js.map

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPageMenuResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageMenuViewModel__ = __webpack_require__(67);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgramPageMenuResponse = /** @class */ (function (_super) {
    __extends(ProgramPageMenuResponse, _super);
    function ProgramPageMenuResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramPageMenuViewModel__["a" /* ProgramPageMenuViewModel */]();
            _this.Model.page_name = obj.Model.page_name;
            _this.Model.menu_no = obj.Model.menu_no;
            _this.Model.display_order_no = obj.Model.display_order_no;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return ProgramPageMenuResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ProgramPageMenuResponse.js.map

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePermissionListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_RolePermissionViewModel__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_PermissionViewModel__ = __webpack_require__(66);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var RolePermissionListResponse = /** @class */ (function (_super) {
    __extends(RolePermissionListResponse, _super);
    function RolePermissionListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_RolePermissionViewModel__["a" /* RolePermissionViewModel */]();
                item.RoleName = data.RoleName;
                item.permission_no = data.permission_no;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                var pv = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_PermissionViewModel__["a" /* PermissionViewModel */]();
                pv.permission_no = data.permissionViewModel.permission_no;
                pv.permission_desc = data.permissionViewModel.permission_desc;
                pv.permission_func_desc = data.permissionViewModel.permission_func_desc;
                pv.create_time = data.permissionViewModel.create_time;
                pv.creator = data.permissionViewModel.creator;
                pv.last_update_time = data.permissionViewModel.last_update_time;
                pv.modifier = data.permissionViewModel.modifier;
                item.PermissionViewModel = pv;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return RolePermissionListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=RolePermissionListResponse.js.map

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePermissionResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_RolePermissionViewModel__ = __webpack_require__(143);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RolePermissionResponse = /** @class */ (function (_super) {
    __extends(RolePermissionResponse, _super);
    function RolePermissionResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_RolePermissionViewModel__["a" /* RolePermissionViewModel */]();
            _this.Model.RoleName = obj.Model.RoleName;
            _this.Model.permission_no = obj.Model.permission_no;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return RolePermissionResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=RolePermissionResponse.js.map

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ProgViewModel__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgListResponse = /** @class */ (function (_super) {
    __extends(ProgListResponse, _super);
    function ProgListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ProgViewModel__["a" /* ProgViewModel */]();
                item.schemaname = data.schemaname;
                item.name = data.name;
                item.object_desc = (data && data.object_desc) || null;
                item.program_desc = (data && data.program_desc) || null;
                item.type = (data && data.type) || null;
                item.type_desc = (data && data.type_desc) || null;
                item.ttype = (data && data.ttype) || null;
                item.drop_sql = (data && data.drop_sql) || null;
                item.create_sql = (data && data.drop_sql + data.create_sql + (data.name_property_sql == null ? "" : data.name_property_sql) + (data.category_property_sql == null ? "" : data.category_property_sql)) || null;
                item.create_date = (data && data.create_date) || null;
                item.modify_date = (data && data.modify_date) || null;
                item.category = (data && data.category) || null;
                item.fullname = data.schemaname + "." + data.name;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ProgListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ProgListResponse.js.map

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgViewModel__ = __webpack_require__(147);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgResponse = /** @class */ (function (_super) {
    __extends(ProgResponse, _super);
    function ProgResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgViewModel__["a" /* ProgViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.name = obj.Model.name;
            _this.Model.object_desc = (obj && obj.Model.object_desc) || null;
            _this.Model.type = (obj && obj.Model.type) || null;
            _this.Model.type_desc = (obj && obj.Model.type_desc) || null;
            _this.Model.ttype = (obj && obj.Model.ttype) || null;
            _this.Model.drop_sql = (obj && obj.Model.drop_sql) || null;
            _this.Model.create_sql = (obj && obj.Model.create_sql) || null;
            _this.Model.create_date = (obj && obj.Model.create_date) || null;
            _this.Model.modify_date = (obj && obj.Model.modify_date) || null;
            _this.Model.category = (obj && obj.Model.category) || null;
        }
        return _this;
    }
    return ProgResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ProgResponse.js.map

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteColumnListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_QuoteColumnViewModel__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuoteColumnListResponse = /** @class */ (function (_super) {
    __extends(QuoteColumnListResponse, _super);
    function QuoteColumnListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_QuoteColumnViewModel__["a" /* QuoteColumnViewModel */]();
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.columnname = data.columnname;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return QuoteColumnListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=QuoteColumnListResponse.js.map

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteColumnResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_QuoteColumnViewModel__ = __webpack_require__(144);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuoteColumnResponse = /** @class */ (function (_super) {
    __extends(QuoteColumnResponse, _super);
    function QuoteColumnResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_QuoteColumnViewModel__["a" /* QuoteColumnViewModel */]();
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.columnname = obj.Model.columnname;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return QuoteColumnResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=QuoteColumnResponse.js.map

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoleListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserRoleViewModel__ = __webpack_require__(137);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var UserRoleListResponse = /** @class */ (function (_super) {
    __extends(UserRoleListResponse, _super);
    function UserRoleListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserRoleViewModel__["a" /* UserRoleViewModel */]();
                item.userName = data.userName;
                item.roleName = data.roleName;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return UserRoleListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=UserRoleListResponse.js.map

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoleResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserRoleViewModel__ = __webpack_require__(137);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var UserRoleResponse = /** @class */ (function (_super) {
    __extends(UserRoleResponse, _super);
    function UserRoleResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_UserRoleViewModel__["a" /* UserRoleViewModel */]();
            _this.Model.userName = obj.Model.userName;
            _this.Model.roleName = obj.Model.roleName;
        }
        return _this;
    }
    return UserRoleResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=UserRoleResponse.js.map

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_SchViewModel__ = __webpack_require__(146);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var SchListResponse = /** @class */ (function (_super) {
    __extends(SchListResponse, _super);
    function SchListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_SchViewModel__["a" /* SchViewModel */]();
                item.sch_no = data.sch_no;
                item.sch_name = data.sch_name;
                item.job_cnt = data.job_cnt;
                item.sch_description = data.sch_description;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return SchListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=SchListResponse.js.map

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_SqlViewModel__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SqlListResponse = /** @class */ (function (_super) {
    __extends(SqlListResponse, _super);
    function SqlListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_SqlViewModel__["a" /* SqlViewModel */]();
                item.exec_table_seq = data.exec_table_seq;
                item.exec_group = data.exec_group;
                item.src_schema = data.src_schema;
                item.src_tablename = data.src_tablename;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.exec_seq = data.exec_seq;
                item.is_active = data.is_active;
                item.tran_flag = data.tran_flag == null ? false : data.tran_flag;
                item.db_conn_id = (data && data.db_conn_id) || null;
                item.memo = (data && data.memo) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.db_conn_string = (data && data.db_conn_string) || null;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        item.is_active_color_right = "danger-right";
                        break;
                    }
                    default:
                        {
                            item.is_active_color = "active";
                            item.is_active_color_right = "active-right";
                        }
                }
                if (data.src_schema > "" && data.src_tablename > "")
                    item.src_tablefullname = item.src_schema + "." + item.src_tablename;
                if (data.schemaname > "" && data.tablename > "")
                    item.tablefullname = item.schemaname + "." + item.tablename;
                item.sql_statement = data.sql_statement;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return SqlListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=SqlListResponse.js.map

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_SqlViewModel__ = __webpack_require__(145);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SqlResponse = /** @class */ (function (_super) {
    __extends(SqlResponse, _super);
    function SqlResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_SqlViewModel__["a" /* SqlViewModel */]();
            _this.Model.exec_table_seq = obj.Model.exec_table_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.src_schema = (obj && obj.Model.src_schema) || null;
            _this.Model.src_tablename = (obj && obj.Model.src_tablename) || null;
            _this.Model.schemaname = (obj && obj.Model.schemaname) || null;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.tran_flag = obj.Model.tran_flag == null ? false : obj.Model.tran_flag;
            _this.Model.db_conn_id = (obj && obj.Model.db_conn_id) || null;
            _this.Model.memo = (obj && obj.Model.memo) || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.db_conn_string = (obj.Model && obj.Model.db_conn_string) || null;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            _this.Model.src_tablefullname = obj.Model.src_schema + "." + obj.Model.src_tablename;
            _this.Model.tablefullname = obj.Model.schemaname + "." + obj.Model.tablename;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.sql_statement = obj.Model.sql_statement;
        }
        return _this;
    }
    return SqlResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=SqlResponse.js.map

/***/ })
],[303]);
//# sourceMappingURL=main.js.map