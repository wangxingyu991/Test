// 工具函数集合

export const formateDate = function(val){
        let time = new Date(val);
        let Y = time.getFullYear();
        let M = time.getMonth();
        let D = time.getDate();
        let H = time.getHours();
        let Mo = time.getMinutes();
        let s = time.getSeconds();
        let fullDate = Y + "年" + M + "月" + D +"日" + H +"时"+ Mo+"分"+s+"秒"
        return fullDate;
}
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
    let len = Math.min(arr1.length, arr2.length)
    let i = -1
    let res = []
    while (++i < len) {
        const item = arr2[i]
        if (arr1.indexOf(item) > -1) res.push(item)
    }
    return res
}

