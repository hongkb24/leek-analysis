import { defineComponent } from 'vue';
import Dashboard from '@/views/dashboard/index.vue';

export default defineComponent({
    name: 'App',
    setup() {
        return () => <Dashboard />;
    }
});
