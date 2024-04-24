"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./utils/factory");
const strategy_1 = require("./utils/strategy");
const [sectionFormEntity, sectionDisplayEntity] = (0, factory_1.entityGenerator)('section');
const [areaFormEntity, areaDisplayEntity] = (0, factory_1.entityGenerator)('area', [sectionFormEntity, sectionDisplayEntity]);
(0, strategy_1.executeRightFactory)(areaFormEntity);
(0, strategy_1.executeRightFactory)(areaDisplayEntity);
