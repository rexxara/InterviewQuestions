var points=[[0,100],[50,150],[100,100],[100,0],[50,-50],[0,0],[20,21],[80,21],[80,81],[20,81]]
var leftest=Infinity;
var leftestPoint=[];
var borderPoints=[];
var direction=0;
for(var i=0;i<points.length;i++){
    if(points[i][0]<leftest){
        leftest=points[i][0];
        leftestPoint=points[i]
    }
}
function getdir(a,b){
    var c=getDrictionPosition(a);
    var AA=Math.sqrt(Math.pow(c[0]-b[0],2)+Math.pow(c[1]-b[1],2))
    var BB=Math.sqrt(Math.pow(c[0]-a[0],2)+Math.pow(c[1]-a[1],2))
    var CC=Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1],2))
    var cosa=(Math.pow(BB,2)+Math.pow(CC,2)-Math.pow(AA,2))/(2*BB*CC)
    return Math.floor(Math.acos(cosa)*180/Math.PI)
}
function main(a){
    var minDeg=Infinity;
    var _nextPoint;
    for(var i=0;i<points.length;i++){
        if(getdir(a,points[i])<minDeg){
            minDeg=getdir(a,points[i])
            _nextPoint=points[i];
        }
    }
    direction+=minDeg
    points = points.filter(function(value){
        return JSON.stringify(value)!=JSON.stringify(_nextPoint);
    });
    borderPoints.push(_nextPoint);
    if(_nextPoint==leftestPoint){
        console.log("end")
        return 0;
    }
    
    if(_nextPoint){
       main(_nextPoint) 
    }
}

main(leftestPoint)

function getDrictionPosition(a){
    res=[0,0];
    res[0]=Math.sin(direction*Math.PI/180)+a[0];
    res[1]=Math.cos(direction*Math.PI/180)+a[1];
    return res;
}
function getArea(){
    console.log(borderPoints)
    borderPoints[0];
    var area=0;
    for(var i=2;i<borderPoints.length;i++){
        area+=getTarea(borderPoints[i],i)
    }
    function getTarea(c,index){
        var a=borderPoints[0];
        var b=borderPoints[index-1];
        var AA=Math.sqrt(Math.pow(c[0]-b[0],2)+Math.pow(c[1]-b[1],2))
        var BB=Math.sqrt(Math.pow(c[0]-a[0],2)+Math.pow(c[1]-a[1],2))
        var CC=Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1],2))
        var s=(AA+BB+CC)/2
        var area=Math.sqrt(s*(s-AA)*(s-BB)*(s-CC));
        return area;
    }
    console.log(Math.floor(area))
}
getArea();