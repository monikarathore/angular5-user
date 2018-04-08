export function Localstorage(obj: Object, key: string){
    Object.defineProperty(obj,key, {
        get: function () {
            return localStorage.getItem(key);
        },
        set: function (value) {
            return localStorage.setItem(key, value);
        }
    })
}
