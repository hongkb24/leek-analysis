interface StockData {
    开盘: number;
    成交量: number;
    成交额: number;
    振幅: number;
    换手率: number;
    收盘: number;
    日期: string;
    最低: number;
    最高: number;
    涨跌幅: number;
    涨跌额: number;
}

// 用于 API 返回的数组类型
type StockApiResponse = StockData[];
