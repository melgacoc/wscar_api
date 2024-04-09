import Fastify from 'fastify';
import { routes } from './routes';

const portHost = process.env.PORT || 3030;

const app = Fastify({ logger: true });

app.addHook('onSend', (request, reply, payload, next) => {
  reply.header('Access-Control-Allow-Origin', '*');
  next();
});

const start = async () => {
  await app.register(routes);

  try {
    await app.listen(parseInt(portHost));

  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();
