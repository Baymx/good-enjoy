import request from '@/utils/request.js';
const grass: any = {};

grass.save = (params: object) => request({
  url: `/broker/role/saveRole`,
  method: 'POST',
  data: params,
});

export default grass;
