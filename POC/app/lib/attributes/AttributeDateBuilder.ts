import { AttributeTypeEnum } from "../enums";
import { AttributeBuilder } from "./AttributeBuilder";
import { AttributeDate } from "./AttributeDate";

export class AttributeDateBuilder extends AttributeBuilder {

  attribute: AttributeDate

  constructor(key: string, type: AttributeTypeEnum){
    super(key, type)
    this.attribute = new AttributeDate(key, type)
  }

  setTimezone(timezone: string){
    this.attribute.timezone = timezone
    return this 
  }
}
