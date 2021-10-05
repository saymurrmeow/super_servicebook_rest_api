export default () => ({
  POSTGRES_PORT: process.env.DATABASE_PORT || '5432',
  POSTGRES_HOST: process.env.DATABASE_PORT || 'localhost',
  POSTGRES_USER: process.env.DATABASE_USER || 'postgres',
  POSTGRES_DB: process.env.DATABASE || 'blog',
  POSTGRES_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
});
