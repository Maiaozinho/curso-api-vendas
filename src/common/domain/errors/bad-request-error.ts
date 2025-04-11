import { AppError } from './app-error'

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 404)
    this.name = 'BadRequestError'
  }
}
