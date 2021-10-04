import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class PostgresService {
  private readonly logger = new Logger(PostgresService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  executeQuery<T>(queryText: string, values: any[] = []): Promise<T[] | T> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    return this.pool.query(queryText, values).then((result: QueryResult) => {
      this.logger.debug(`Executed query, result size ${result.rows.length}`);
      return result.rows;
    });
  }
}
