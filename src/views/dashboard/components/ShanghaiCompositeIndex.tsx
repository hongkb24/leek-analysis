import {
    defineComponent,
    onBeforeUnmount,
    onMounted,
    ref,
    shallowRef
} from 'vue';
import { init, ECharts } from 'echarts';
import { option, markLine, markPoint } from './option';
import { stock_us_spot_em } from '@/api/public';

export default defineComponent({
    name: 'ShanghaiCompositeIndex',

    setup() {
        const shanghaiCompositeIndexRef = ref<HTMLElement | null>(null);
        const chart = shallowRef<ECharts | null>(null);

        onMounted(async () => {
            const res = await stock_us_spot_em();

            chart.value = init(shanghaiCompositeIndexRef.value);

            option.xAxis = [{ data: res.map((item) => item.日期) }];

            option.series = [
                {
                    type: 'line',
                    showSymbol: false,
                    data: res.map((item) => item.收盘),
                    markLine,
                    markPoint
                }
            ];

            chart.value.setOption(option);
        });

        onBeforeUnmount(() => {
            chart.value?.clear();
            chart.value?.dispose();
        });

        return () => (
            <div
                ref={shanghaiCompositeIndexRef}
                class="w-90vw h-500px"
                id="shanghai-composite-index"
            ></div>
        );
    }
});
