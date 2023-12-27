import request from '@/utils/request/index';

export const stock_us_spot_em = () =>
    request.get<StockApiResponse>('/api/public/stock_zh_a_hist?symbol=000100');
