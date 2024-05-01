const fastify=require('fastify');
const db=require('./database.js');
// const usersRoutes=require('./routes/users.js');
// const pagesRoutes=require('./routes/pages.js');

const server=fastify({ logger: true });

server.get('/', async (req,res) => {
    return {message: 'API works'}
});

port=3000;
server.listen(port, () => {
  server.log.info(`server listening on ${port}`);
});