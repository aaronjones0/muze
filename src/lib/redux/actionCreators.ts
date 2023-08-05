import { TVSeries } from '@muze/model/TVSeries';

export const tvSeriesAdded = (tvSeries: TVSeries) => {
  return {
    type: 'tv-series/added',
    payload: tvSeries,
  };
};
