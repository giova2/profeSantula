"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayFactory = exports.formFactory = exports.entityGenerator = void 0;
const types_1 = require("../types");
const fs_1 = __importDefault(require("fs"));
const strategy_1 = require("./strategy");
/**
 * Entities generator
 * @param entity
 */
function entityGenerator(name, children = []) {
    const fieldsInCommon = {
        name,
        attributes: [
            {
                key: 'id',
                label: 'Identifier',
                type: types_1.AttributeTypeEnum.IDENTIFIER,
            },
            {
                key: 'name',
                label: 'Name',
                type: types_1.AttributeTypeEnum.NAME,
            }
        ],
        children
    };
    return [
        Object.assign(Object.assign({}, fieldsInCommon), { type: types_1.EntityTypeEnum.FORM }),
        Object.assign(Object.assign({}, fieldsInCommon), { type: types_1.EntityTypeEnum.DISPLAY })
    ];
}
exports.entityGenerator = entityGenerator;
function processChildren(entity) {
    let childrenNames = '';
    for (let i = 0; i < entity.children.length; i++) {
        (0, strategy_1.executeRightFactory)(entity.children[i]);
        if (childrenNames.length === 0) {
            childrenNames = `${entity.children[i].name}`;
        }
        else {
            childrenNames = `${childrenNames}, ${entity.children[i].name}`;
        }
    }
    return childrenNames;
}
function formFactory(entity) {
    const childrenNames = processChildren(entity);
    const contents = `This is a form file with children ${childrenNames}`;
    const pathname = `pages/${entity.name}/[id]`;
    createFilePath(pathname, contents);
}
exports.formFactory = formFactory;
function displayFactory(entity) {
    const childrenNames = processChildren(entity);
    const contents = `This is a display file with children ${childrenNames}`;
    const pathname = `pages/${entity.name}/index`;
    createFilePath(pathname, contents);
}
exports.displayFactory = displayFactory;
function createFilePath(pathname, content) {
    const pathArr = pathname.split('/');
    pathArr.pop();
    let folderName = '.';
    try {
        pathArr.forEach((folder) => {
            folderName = `${folderName}/${folder}`;
            if (!fs_1.default.existsSync(folderName)) {
                fs_1.default.mkdirSync(folderName);
            }
        });
        fs_1.default.writeFile(pathname, content, err => {
            if (err) {
                console.error(err);
            }
            else {
                console.log(`file created at path ${pathname}`);
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}
