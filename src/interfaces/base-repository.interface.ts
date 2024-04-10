export type EntityId = string | number;

export interface Repository<T> {
  model: T;
  getAll: () => Promise<T[]>;
  getById: (id: EntityId) => Promise<T>;
  create: (data: T) => Promise<void>;
  update: (id: EntityId, data: Partial<T>) => Promise<void>;
  delete: (id: EntityId) => Promise<void>;
};