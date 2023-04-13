import { v4 as uuid } from 'uuid';
import { Cat } from './interfaces/cat.interface';
import { GetCatDto } from './create-cat.dto';

const cats: { [key: string]: Cat } = {};

const read = (id: string): GetCatDto => {
  const cat = cats[id];
  return { id, ...cat };
};

const create = (cat: Cat) => (cats[uuid()] = cat);
const readAll = (): GetCatDto[] =>
  Object.entries(cats).map((x: [string, Cat]) => ({
    id: x[0],
    ...x[1],
  }));
const update = (id: string, newCat: Cat) => (cats[id] = newCat);
const remove = (id: string) => delete cats[id];

export default { create, read, readAll, update, remove };
