function getprime(){
    var num=100;
    var res=[];
    for(var i=0;i<num+1;i++){
        res[i]=i;
    }
/////////////////////
    for (var i = 2; i < Math.sqrt(num); i++)
    {
        for (var j = i + 1; j <= num; j++)
        {
            if (res[j] != 0 && res[j] % i == 0)
            {
                res[j] = 0;
            }
        }
    }
//////////////////////////
for (var i = 1, n = 0; i <= num; i++)
    {
        if (res[i] != 0)
        {
            console.log(res[i])
        }
    }
}
getprime();