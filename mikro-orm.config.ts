import { defineConfig, LoadStrategy } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';
import { config } from 'dotenv';
config();


export default defineConfig({
   // specifies a mysql database connection
   driver: MySqlDriver,
   // localhost might work here but this is more likely
   host: process.env.DB_HOST,
   // port that mysql runs on. usually 3306
   port: Number(process.env.DB_PORT),
   // root user is default, you might have configured one
   user:  process.env.DB_USER,
   // whatever your mysql root password is. mac users comment out
   password: process.env.DB_PASSWORD,
   dbName: process.env.DB_USER,
   // for output of sql queries in terminal
   debug: true,
   // path to entities
   entitiesTs: ['src/**/*.entity.ts'],
   entities: ['dist/**/*.entity.js'],
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    pathTs: 'src/migrations',
    path: 'dist/migrations',
  },
  seeder: {
    pathTs: 'src/seeders',
    path: 'dist/seeders',
  },
   extensions: [Migrator, SeedManager],
})