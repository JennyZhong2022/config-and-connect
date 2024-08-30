import { Migration } from '@mikro-orm/migrations';

export class Migration20240820063516 extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table `dogs` add `age` int not null;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table `dogs` drop column `age`;');
  }

}
