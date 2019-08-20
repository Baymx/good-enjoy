import request from '@/utils/request';
const details: any = {};

details.getArticleDetails = (params: any) => request({
  url: `/app/article/getArticleById?id=${params.id}`,
  method: 'GET',
  data: params,
  headers: { 'Content-Type': 'multipart/form-data' },
});

details.getApplyDetails = (params: any) => request({
  url: `/app/report/getReportDetail?id=${params.id}`,
  method: 'GET',
  data: params,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export default details;
