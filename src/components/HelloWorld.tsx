import { defineComponent, ref, toRefs, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    setup(prop) {
        interface LeekDataType {
            板块: string;
            涨跌额: string;
            涨跌幅: string;
            总成交量: string;
            总成交额: string;
        }
        const list = ref<LeekDataType[]>([]);

        const handle = async () => {
            const res = await axios({
                method: 'get',
                url: '/api/public/stock_sector_spot'
            });

            list.value = res.data;
            console.log(toRefs(list), 'list.value');
        };
        onMounted(() => {
            handle();
        });

        return () => (
            <div>
                <div>{prop.msg}</div>
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
