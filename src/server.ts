import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';
const port = process.env.PORT || 3030;

const app = Fastify({ logger: true });

const start = async () => {

  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3030});
  } catch (err) {
    process.exite(1);
  }
}

start();