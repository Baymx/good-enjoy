import request from '@/utils/request';
const trial: any = {};

trial.getDetails = (params: any) => request({
  url: `/app/article/getArticleById?id=${params.id}`,
  method: 'GET',
  data: params,
});

export default trial;
