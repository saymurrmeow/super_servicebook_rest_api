import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class PostgresService {
  private readonly logger = new Logger(PostgresService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {
    console.log(process.env.TEST);
  }

  executeQuery<T>(queryText: string, values: any[] = []): Promise<T[]> {
    return this.pool.query(queryText, values).then((result: QueryResult) => {
      return result.rows;
    });
  }

  // TODO DRY
  executeRow<T>(queryText: string, values: any[] = []): Promise<T> {
    return this.pool.query(queryText, values).then((result: QueryResult) => {
      return result.rows[0];
    });
  }
}
