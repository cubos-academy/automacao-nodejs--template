import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  TWILIO_ACCOUNT_SID: z.coerce.string(),
  TWILIO_AUTH_TOKEN: z.coerce.string(),
  TWILIO_WHATSAPP_NUMBER: z.coerce.string(),
  MY_WHATSAPP_NUMBER: z.coerce.string()
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Variáveis de ambiente inválidas', _env.error.format())

  throw new Error('Variáveis de ambiente inválidas.')
}

export const env = _env.data