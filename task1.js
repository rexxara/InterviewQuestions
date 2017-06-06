var bigInt = require('./BigInteger.min.js');
console.time('aaa')

var prime=getPrime();
var res="1";
for(let i=1,length=prime.length;i<length;i++){
    res=bigInt(res).multiply(prime[i])
}

var countTarget=res.toString().split("");
console.log(countTarget.length)
var count=[];
for(var i=0;i<10;i++){
    count[i]=0;
}
for(var i=0;i<countTarget.length;i++){
    count[countTarget[i]]++;
}
for(var i=0;i<count.length;i++){
    console.log(i+" occured "+count[i]+" times")
}


function getPrime(){
    var lim=10000;
    var res=[];
    for(var i=0;i<lim+1;i++){
        res[i]=i;
    }
    for (var i = 2; i < Math.sqrt(lim); i++){
        for (var j = i + 1; j <= lim; j++){
            if (res[j] != 0 && res[j] % i == 0){
                res[j] = 0;
            }
        }
    }
var finRes=[];
for (var i = 1, n = 0; i <= lim; i++){
        if (res[i] != 0){
            finRes.push(res[i])
        }
    }
	finRes.unshift();
return finRes;
}
console.timeEnd('aaa')