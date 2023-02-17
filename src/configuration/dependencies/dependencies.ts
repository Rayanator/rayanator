import { inMemoryDependencies } from './in-memory-dependecies';
import { prodDependencies } from './prod-dependencies';

export const dependencies: any[] =
  process.env.NODE_ENV === 'production'
    ? prodDependencies
    : inMemoryDependencies;
