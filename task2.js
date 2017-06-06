var a=Math.pow(2,12);
var denominator=[]
var numerator=[];
for(var i=0;i<a;i++){
    var target=i.toString(2)
    var count=0;
    for(var j=0;j<target.length;j++){
        if(target[j]=="1"){
            count=count+1;
        }
    }
    if(count==8){
    denominator.push(target)
    }
}
console.log(denominator.length)
for(var i=0;i<denominator.length;i++){
    if(denominator[i].indexOf("1111")>0){
        numerator.push(denominator[i])
    }
}
console.log(numerator.length)
console.log(numerator.length/denominator.length)