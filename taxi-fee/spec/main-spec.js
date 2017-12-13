const main = require('../main/main');

describe('taxi fee', function () {
    it("no more then 2miles,no waitTime",function(){
        let inputs={miles:2,waitTime:0}
        let result=main(inputs)

        expect(result).toEqual('本次消费6元')
    })

    it("no more then 2 miles,waitTime exists",function(){
        let inputs={miles:1.5,waitTime:6}
        let result=main(inputs)

        expect(result).toEqual('本次消费8元')
    })

    it("more then 2miles but no more then 8 miles,no waitTime",function(){
        let inputs={miles:7.5,waitTime:0}
        let result=main(inputs)

        expect(result).toEqual('本次消费10元')
    })

    it("more then 2miles but no more then 8 miles,waitTime exists",function(){
        let inputs={miles:7.5,waitTime:5}
        let result=main(inputs)

        expect(result).toEqual('本次消费12元')
    })

    it("more then 8 miles,no waitTime",function(){
        let inputs={miles:10,waitTime:0}
        let result=main(inputs)

        expect(result).toEqual('本次消费13元')
    })

    it("more then 2miles but no more then 8 miles,waitTime exists",function(){
        let inputs={miles:10,waitTime:5}
        let result=main(inputs)

        expect(result).toEqual('本次消费14元')
    })
});
