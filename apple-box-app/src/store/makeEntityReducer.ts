import { EntityAdapter } from '@reduxjs/toolkit';

export default function makeEntityReducer<T>(adapter: EntityAdapter<T>) {
  return {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    setAll: adapter.setAll,
    removeOne: adapter.removeOne,
    removeMany: adapter.removeMany,
    removeAll: adapter.removeAll,
    updateOne: adapter.updateOne,
    updateMany: adapter.updateMany,
    upsertOne: adapter.upsertOne,
    upsertMany: adapter.upsertMany,
  };
}
