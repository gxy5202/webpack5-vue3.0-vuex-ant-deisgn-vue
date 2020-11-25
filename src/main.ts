/*
 * @description: 开发模式，vue需要完整入口文件
 * @Author: Gouxinyu
 * @Date: 2020-11-09 00:56:37
 */
import { createApp } from "vue";
import box from "./pages/App.vue";
import store from './store';
import Button from 'ant-design-vue/lib/Button';
import 'ant-design-vue/dist/antd.less';

const app = createApp(box);
app.use(store).use(Button).mount('#app');