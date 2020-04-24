
class Exmple {
    constructor(options, elementId) {
        this.data = options.data || {};
        this.el = document.querySelector(elementId);
        this.init();    
    }

    init() {
        this.observer();
    }

    
    
    
    observer() {
        const handler = {
            get: (target, propkey) => {
                console.log(`监听到${propkey}被取,值为:${target[propkey]}`);
                return target[propkey];
            },
            set: (target, propkey, value) => {
                if(target[propkey] !== value){
                    console.log(`监听到${propkey}变化啦,值变为:${value}`);
                }
                return true;
            }

        };
        this.data = new Proxy(this.data, handler);
    }
}
const exmple = new Exmple({
    data: {
        name: 'cmy',
    },
},'#test');