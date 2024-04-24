"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeRightFactory = void 0;
const types_1 = require("../types");
const factory_1 = require("./factory");
const factories = {
    [types_1.EntityTypeEnum.FORM]: (entity) => (0, factory_1.formFactory)(entity),
    [types_1.EntityTypeEnum.DISPLAY]: (entity) => (0, factory_1.displayFactory)(entity),
    [types_1.EntityTypeEnum.API]: () => (undefined),
    [types_1.EntityTypeEnum.BDD]: () => (undefined),
};
function executeRightFactory(entity) {
    try {
        factories[entity.type](entity);
    }
    catch (error) {
        console.error(error);
    }
}
exports.executeRightFactory = executeRightFactory;
