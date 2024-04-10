import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { routes } from './routes';

const portHost = process.env.PORT || 3030;
const hostAdress = '0.0.0.0'

const app = Fastify({ logger: true });

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

//app.addHook('onSend', (request, reply, payload, next) => {
 // reply.header('Access-Control-Allow-Origin', '*');
 // next();
//});

const start = async () => {
  await app.register(routes);

  try {
    await app.listen(portHost, hostAdress);

  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();
