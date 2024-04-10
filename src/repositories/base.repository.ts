import type { Repository, EntityId } from "src/interfaces";

export class BaseRepository<T> implements Repository<T> {
  model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll() {
    return [this.model];
  }

  async getById(_id: EntityId) {
    return this.model;
  }

  async create(_data: T) {}

  async update(_id: EntityId, _data: Partial<T>) {}

  async delete(_id: EntityId) {}
}
