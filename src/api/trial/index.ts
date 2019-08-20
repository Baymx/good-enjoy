import request from '@/utils/request';
const trial: any = {};

trial.getDetails = (params: any) => request({
  url: `/app/product/getProductDetail?id=${params.id}&type=3`,
  method: 'GET',
  data: params,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export default trial;
