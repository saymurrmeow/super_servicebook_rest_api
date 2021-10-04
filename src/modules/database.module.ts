import { Module, OnApplicationShutdown } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { Pool } from 'pg';

import { PostgresService } from '../services/postgres.service';

const postgresPoolFactory = async (configService: ConfigService) => {
  return new Pool({
    user: configService.get('POSTGRES_USER'),
    host: configService.get('POSTGRES_HOST'),
    database: configService.get('POSTGRES_DB'),
    password: configService.get('POSTGRES_PASSWORD'),
    port: configService.get('POSTGRES_PORT'),
  });
};

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'DATABASE_POOL',
      inject: [ConfigService],
      useFactory: postgresPoolFactory,
    },
    PostgresService,
  ],
  exports: [PostgresService],
})
export class DataBaseModule implements OnApplicationShutdown {
  constructor(private readonly moduleRef: ModuleRef) {}

  onApplicationShutdown() {
    const pool = this.moduleRef.get('DATABASE_POOL') as Pool;
    pool.end();
  }
}
