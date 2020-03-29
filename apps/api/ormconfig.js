module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: 5432,
  username: process.env.DB_USERNAME || 'backend',
  password: process.env.DB_PASSWORD || 'backend123',
  database: process.env.DB_NAME || 'backend',
  entities: ['dist/**/**.entity{.ts,.js}'],
  migrations: ['dist/**/migrations/*{.ts,.js}'],
  synchronize: false
};
