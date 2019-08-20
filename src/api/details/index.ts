import request from '@/utils/request';
const details: any = {};

details.getArticleDetails = (params: object) => request({
  url: `/app/article/getArticleById?id=${params.id}`,
  method: 'GET',
  data: params,
});

details.getApplyDetails = (params: object) => request({
  url: `/app/report/getReportDetail?id=${params.id}`,
  method: 'GET',
  data: params,
});

export default details;
