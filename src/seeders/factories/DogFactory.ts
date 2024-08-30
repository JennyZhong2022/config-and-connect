import { Factory } from '@mikro-orm/seeder';
import { Dog } from '../../dogs/entities/dog.entity';
import { EntityData } from '@mikro-orm/core';
import { faker } from '@faker-js/faker';

export class DogFactory extends Factory<Dog> {
  model = Dog;
  protected definition(): EntityData<Dog> {
    return {
      name: faker.person.firstName(),
      age: faker.number.int({ min: 1, max: 15 }),
      breed: faker.animal.dog(),
    };
  }
}
