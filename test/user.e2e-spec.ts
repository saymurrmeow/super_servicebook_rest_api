import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { UserModule } from '../src/modules/user.module';

describe('User controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should return todo', () => {
    return request(app.getHttpServer()).get('/user').expect(200).expect('todo');
  });

  afterAll(async () => {
    await app.close();
  });
});
