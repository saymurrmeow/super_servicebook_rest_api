import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PostgresService {
  private readonly logger = new Logger(PostgresService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  executeQuery(): Promise<void> {
    return Promise.resolve();
  }
}
