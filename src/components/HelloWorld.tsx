import { defineComponent, ref, onMounted } from 'vue';
import { ElButton } from 'element-plus';
import axios from 'axios';
interface LeekDataType {
    板块: string;
    涨跌额: string;
    涨跌幅: string;
    总成交量: string;
    总成交额: string;
}

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'mini',
            required: true
        }
    },
    setup(prop) {
        const list = ref<LeekDataType[]>([]);

        const handler = async () => {
            const res = await axios({
                method: 'get',
                url: '/api/public/stock_sector_spot'
            });

            list.value = res.data;
        };
        onMounted(() => {
            handler();
        });

        return () => (
            <div>
                <ElButton size="small" type="primary" dark={true}>
                    {prop.msg}
                </ElButton>
                {list.value.map((item, index) => (
                    <div key={index}>
                        <div>板块: {item['板块']}</div>
                        <div>涨跌额: {item['涨跌额']}</div>
                        <div>涨跌幅: {item['涨跌幅']}</div>
                        <div>总成交量: {item['总成交量']}</div>
                        <div>总成交额: {item['总成交额']}</div>
                    </div>
                ))}
            </div>
        );
    }
});
