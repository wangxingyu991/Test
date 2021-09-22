var sessionFun = {
    set(key,value){
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}
export default sessionFun