import { AttributeBuilder } from "./attributes/AttributeBuilder";

import { AttributeDateBuilder } from "./attributes/AttributeDateBuilder";
import { EntityBuilder } from "./EntityBuilder";
import { AttributeTypeEnum, EntityTypeEnum } from "./enums";


const attributeBuilder = new AttributeBuilder('name', AttributeTypeEnum.NAME)
const nameAttribute = attributeBuilder.setLabel('Name').setRenderFormField().setRenderTableField().getAttribute()
const attributeDateBuilder = new AttributeDateBuilder('date', AttributeTypeEnum.DATE)
const dateAttribute = attributeDateBuilder.setLabel('Date').setTimezone('GMT-3').setRenderFormField().setRenderTableField().getAttribute()
const attributes = [nameAttribute, dateAttribute]

const entityBuilderTable = new EntityBuilder('section', EntityTypeEnum.TABLE)
entityBuilderTable.addAttributes(...attributes)
entityBuilderTable.setRenderTable()
const entityBuilderForm = new EntityBuilder('section', EntityTypeEnum.FORM)
entityBuilderForm.addAttributes(...attributes)
entityBuilderForm.setRenderForm()

export const entityTable = entityBuilderTable.getEntity()
export const entityForm = entityBuilderForm.getEntity()
