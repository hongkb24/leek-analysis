<script setup lang="ts" name="HelloWorld">
import axios from 'axios';
import { onMounted, ref } from 'vue';

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

    list.value = res.data as LeekDataType[];
};
const elementRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
    setInterval(() => {
        handle();
    }, 1000);
});
</script>

<template>
    <div ref="elementRef">
        <div v-for="(item, index) in list" :key="index">
            <div>板块: {{ item['板块'] }}</div>
            <div>涨跌额: {{ item['涨跌额'] }}</div>
            <div>涨跌幅: {{ item['涨跌幅'] }}</div>
            <div>总成交量: {{ item['总成交量'] }}</div>
            <div>总成交额: {{ item['总成交额'] }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    color: #fff;
    background-color: #fff;
    font-size: 16px;
}
</style>
