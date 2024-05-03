"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeTypeEnum = exports.EntityTypeEnum = void 0;
var EntityTypeEnum;
(function (EntityTypeEnum) {
    EntityTypeEnum["FORM"] = "form";
    EntityTypeEnum["DISPLAY"] = "display";
    EntityTypeEnum["BDD"] = "bdd";
    EntityTypeEnum["API"] = "api";
})(EntityTypeEnum || (exports.EntityTypeEnum = EntityTypeEnum = {}));
var AttributeTypeEnum;
(function (AttributeTypeEnum) {
    AttributeTypeEnum["IDENTIFIER"] = "id";
    AttributeTypeEnum["NAME"] = "name";
    AttributeTypeEnum["IMAGE"] = "image";
    AttributeTypeEnum["DATE"] = "date";
})(AttributeTypeEnum || (exports.AttributeTypeEnum = AttributeTypeEnum = {}));
