// Data Flow: Step 2

import { apiUpdateBanner } from 'data-source/banner';
import { apiListBanner } from 'data-source/banner';

// transform data to fit with UI;
export const bannerService = {
  listBanner: function (params) {
    return apiListBanner(params).then((response) => {
      return response.data;
    });
  },

  updateBanner: function (params) {
    return apiUpdateBanner(params).then((response) => {
      return response.data;
    });
  },
};
