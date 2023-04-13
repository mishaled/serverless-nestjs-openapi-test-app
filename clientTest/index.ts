import { DefaultApi } from '../tools/openapi-generator/.build/apis/DefaultApi';
import { Configuration } from '../tools/openapi-generator/.build/runtime';

const api = new DefaultApi(new Configuration());

const harta = async () => {
  const createResult = await api.catsControllerCreate({
    createCatDto: {
      age: 1,
      breed: 'sdfds',
      name: 'dsf',
    },
  });

  const cats = await api.catsControllerFindAll();
  const cat = await api.catsControllerFindOne(createResult.id);
  const deletedCaat = await api.catsControllerRemove(createResult.id);
};
