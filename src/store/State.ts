/*
 * @description: 全局状态管理
 * @Author: Gouxinyu
 * @Date: 2020-08-03 23:27:27
 */

interface stateObj {
    counter: number,
    [propName: string]: any
}

const state: stateObj = {
    counter: 0
}

export default state;