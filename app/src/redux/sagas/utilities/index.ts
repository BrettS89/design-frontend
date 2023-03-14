import { User, DesignSystems, Palettes, Variables } from '../../../types';
import { api } from '../../../api';

export const initialFetch = async (user: User): Promise<[DesignSystems, Palettes, Variables]> => {
  // fetch design systems, variables, and palettes
  const designSystems = api
    .service('design/system')
    .find({
      query: {
        teamId: user.teamId,
        $limit: 100,
        $sort: { _id: -1 },
      },
    }) as Promise<DesignSystems>;

  const palettes = api
    .service('design/palette')
    .find({
      query: {
        accountId: user.accountId,
        $limit: 100,
        $sort: { _id: -1 },
      },
    }) as Promise<Palettes>;

  const variables = api
    .service('design/variable')
    .find({
      query: {
        accountId: user.accountId,
        designSystemId: { $exists: false },
        $limit: 100,
        $sort: { _id: -1 },
      },
    }) as Promise<Variables>;

    return Promise.all([designSystems, palettes, variables]);
};
