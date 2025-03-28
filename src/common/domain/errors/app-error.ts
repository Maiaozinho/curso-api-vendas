export class AppError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

// se o pai sabe x coisa, o filho tambem vai saber x coisa.

// mas o filho tambem sabe y coisa, que o pai nao sabe
