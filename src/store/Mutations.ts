/*
 * @description: 全局mutations， 修改state的方法
 * @Author: Gouxinyu
 * @Date: 2020-08-03 23:26:28
 */
interface mutationObj {
    addCount: Function, // 改变插件加载状态
    [propName: string]: any
}

const mutations: mutationObj = {
    addCount(state) {
        state.counter += 1;
    }
}

export default mutations;