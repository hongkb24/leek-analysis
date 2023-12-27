import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
    name: 'Loading',
    render() {
        return (
            <div class="loading-box">
                <div class="loading-wrap">
                    <span class="dot dot-spin">
                        <i />
                        <i />
                        <i />
                        <i />
                    </span>
                </div>
            </div>
        );
    }
});
