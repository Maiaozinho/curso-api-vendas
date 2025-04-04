import { NotFoundError } from '@/common/domain/errors/not-found-error'
import { ProductsInMemoryRepository } from './products-in-memory.reopsitory'

describe('ProductsInMemoryRepository unit tests', () => {
  let sut: ProductsInMemoryRepository

  beforeEach(() => {
    sut = new ProductsInMemoryRepository()
  })

  describe('findByName', () => {
    it('should throw error when product not found', async () => {
      await expect(() => sut.findByName('fake_name')).rejects.toThrow(
        new NotFoundError('Model not found using ID fake_id'),
      )
    })
  })
})
