import type { Repository, EntityId } from "src/interfaces";

export abstract class BaseRepository<T> implements Repository<T> {
  abstract model: T;
  abstract getAll(): Promise<T[]>;
  abstract getById(id: EntityId): Promise<T>;
  abstract create(data: T): Promise<void>;
  abstract update(id: EntityId, data: Partial<T>): Promise<void>;
  abstract delete(id: EntityId): Promise<void>;
}