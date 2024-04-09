import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const portHost = process.env.PORT || 3030;

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen(portHost);
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();
