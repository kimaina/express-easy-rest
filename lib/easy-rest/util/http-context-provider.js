"use strict";
var HttpContextProvider = (function () {
    function HttpContextProvider() {
    }
    HttpContextProvider.getContext = function (req) {
        var context = req[HttpContextProvider.HTTP_CONTEXT_KEY];
        if (!context) {
            console.warn("Http context is not available. Perhaps it wasn't yet initialized");
            return null;
        }
        return context;
    };
    HttpContextProvider.setContext = function (req, httpContext) {
        req[HttpContextProvider.HTTP_CONTEXT_KEY] = httpContext;
    };
    HttpContextProvider.HTTP_CONTEXT_KEY = '_easy-rest-context';
    return HttpContextProvider;
}());
exports.HttpContextProvider = HttpContextProvider;