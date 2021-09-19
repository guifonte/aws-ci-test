// const path = require('path')
module.exports = {
  type: 'mysql',
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  synchronize: true,
  entities: [
    `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/entities/index.{js,ts}`
    // path.resolve(__dirname, '**/*.entity{.ts,.js}')
  ]
}