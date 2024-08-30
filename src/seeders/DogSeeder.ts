import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DogFactory } from './factories/DogFactory';

export class DogSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
     new DogFactory(em).make(100);
  }

}
