import { AppError } from '@/common/domain/errors/app-error'
import 'dotenv/config' // Carrega as variáveis de ambiente do arquivo .env
import { z } from 'zod'

// Definindo o schema para as variáveis de ambiente
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
  API_URL: z.string().default('http://localhost:3333'),
  DB_TYPE: z.literal('postgres').default('postgres'),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  DB_SCHEMA: z.string().default('public'),
  DB_NAME: z.string().default('postgres'),
  DB_USER: z.string().default('postgres'),
  DB_PASS: z.string().default('postgreS'),
})

// Validando as variáveis de ambiente
const _env = envSchema.safeParse(process.env)

// Verificando se as variáveis de ambiente são válidas
if (_env.success === false) {
  throw new AppError('invalid environment variables')
}

// Exportando as variáveis de ambiente validadas
export const env = _env.data
