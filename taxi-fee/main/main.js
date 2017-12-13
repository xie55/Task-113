
module.exports=function main(inputs){
    let miles=inputs.miles
    let waitTime=inputs.waitTime
    let consume=6
        if(miles>2&&miles<=8){
            consume+=Math.round((miles-2)*0.8+waitTime*0.25)
        }else if(miles>8){
            consume+=Math.round(4.8+(miles-8)*1.2+waitTime*0.25)
        }else if(miles<=2){
            consume+=Math.round(waitTime*0.25)
        }

    let result=`本次消费${consume}元`
    return result
}

