import { createApp } from 'vue';
import App from '@/App';
import 'uno.css';
import './style/index.scss';
// element css
import 'element-plus/dist/index.css';
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css';
// element plus
import ElementPlus from 'element-plus';
// element icons
import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);

// register the element Icons component
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).mount('#app');
