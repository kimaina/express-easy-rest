"use strict";
const metadata_1 = require("../../metadata/metadata");
const metadata_keys_1 = require("../../metadata/metadata-keys");
function ControllerExceptionFilter(handler) {
    return function (target) {
        metadata_1.Metadata.define(metadata_keys_1.CONTROLLER_EXCEPTION_FILTER_METADATA_KEY, handler, target);
    };
}
exports.ControllerExceptionFilter = ControllerExceptionFilter;
