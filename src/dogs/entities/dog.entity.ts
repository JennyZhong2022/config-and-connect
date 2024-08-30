import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({tableName:'dogs'})
export class Dog { 
  @PrimaryKey()
  id: number;
  @Property()
  breed: String;
  @Property()
  name: String;
  @Property()
  age: number;
}
