var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("img");
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, c.width, c.height);
var dot = [];
var width = 438;
var height = 233;
var count = 0;
var matrx = [];


Array.prototype.clone = function () { 
return this.slice(0); 
} 

for (var i = 0; i < imgData.data.length; i += 4) {
    var tf = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
    dot.push(tf)
}
for (var i = 1; i <= height; i++) {
    var line = [];
    for (var j = (i - 1) * width; j < i * width; j++) {
        line.push(dot[j])
    }
    matrx.push(line);
}
//应该有个对象或者数组表示preline都属于res的第几个结果
var res = [];
var preLineIndex=[];
for (j = 0; j < height; j++) {
    //
    var tempLine = [];
    var count = 0;
    for (var i = 0; i < width; i++) {
        if (matrx[j][i] < 500 && matrx[j][i - 1] > 500) {
            tempLine[count] = [];
            tempLine[count].push([j, i])
            count++
        }
        if (matrx[j][i] < 500 && (matrx[j][i + 1] < 500 || matrx[j][i - 1] < 500)) {
            tempLine[count - 1].push([j, i])
        }
    }
    //内层循环得到了tempLine
     if(preLine){
        for(var x=0;x<tempLine.length;x++){
            outerLoop:
            for(var y=0;y<tempLine[x].length;y++){
                for(var z=0;z<preLine.length;z++){
                    for(var a=0;a<preLine[z].length;a++){

                    if(tempLine[x][y][0]*tempLine[x][y][1]-width==preLine[z][a][0]*preLine[z][a][1]){
                        if(!res[preLineIndex[z]]){
                            res[preLineIndex[z]]=[];
                        }
                        res[preLineIndex[z]].push(tempLine[x])
                        break outerLoop;
                    }else{
                        res[preLineIndex.length]=tempLine[x];
                        //preLineIndex.push(preLineIndex.length)
                    }
                }
                }
            }
        }
     }
     if(res.length==0&&tempLine.length>0){
         res=tempLine.clone();
         for(var i=0;i<tempLine.length;i++){
             preLineIndex.push(i);
         }
     }
    var preLine=tempLine.clone();
}
console.log(res.length)
//500为界
//  if(matrx[iii][i]<500&&(matrx[iii][i+1]<500||matrx[iii][i-1]<500)){
//      tempLine.push(matrx[iii][i])
//  }










//var newImgData=ctx.getImageData(0,0,c.width,c.height);
//750以上 白色  750以下蓝色

// var dot=[];
// var length=438;
// var border=[];
// var count=0;
// for (var i=0;i<imgData.data.length;i+=4)
//   {
//       var tf=imgData.data[i]+imgData.data[i+1]+imgData.data[i+2];
//           dot.push(tf)
// }
// for(var i=0;i<dot.length;i++){
//     var temp=[];
//     if(dot[i+1]){
//         temp.push(dot[i+1])
//     }
//     if(dot[i-1]){
//         temp.push(dot[i-1])
//     }
//     if(dot[i-1-length]){
//         temp.push(dot[i-1-length])
//     }
//     if(dot[i-1+length]){
//         temp.push(dot[i-1+length])
//     }
//     if(dot[i+1+length]){
//         temp.push(dot[i+1+length])
//     }
//     if(dot[i+1-length]){
//         temp.push(dot[i+1-length])
//     }
//     if(dot[i+length]){
//         temp.push(dot[i+length])
//     }
//     if(dot[i-length]){
//         temp.push(dot[i-length])
//     }
//     var hasblue=0;
//     var haswhite=0;
//     for(var j=0;j<temp.length;j++){
//         if(temp[j]<600){
//             hasblue=1
//         }else{
//             haswhite=1
//         }
//     }
//     if((hasblue+haswhite)==2){
//         border.push(i)
//     }
// }
// //console.log(border)
// //border[0]
// function hasNeibor(a,index){
//  for(var i=0;i<border.length;i++){
//      if(index==i){
//          continue
//      }
//      if(Math.abs(a-border[i])<2||Math.abs(a+438-border[i])<2||Math.abs(a-438-border[i])<2){
//          //console.log(border[i],a)
//      }
//  }
// }
// for(var i=0;i<border.length;i++){
//     hasNeibor(border[i],i)
// }

// hasNeibor(border[0])
// for(var i=0;i<newImgData.data.length;i+=4){
//     newImgData.data[i]=255;
//     newImgData.data[i+1]=255;
//     newImgData.data[i+2]=255;
//     newImgData.data[i+3]=255;
// }
// for(var i=0;i<border.length;i+=4){
//     newImgData.data[border[i]*4]=0;
//     newImgData.data[border[i]*4+1]=0;
//     newImgData.data[border[i]*4+2]=0;

//     newImgData.data[border[i+1]*4]=0;
//     newImgData.data[border[i+1]*4+1]=0;
//     newImgData.data[border[i+1]*4+2]=0;

//     newImgData.data[border[i+2]*4]=0;
//     newImgData.data[border[i+2]*4+1]=0;
//     newImgData.data[border[i+2]*4+2]=0;

//     newImgData.data[border[i+3]*4]=0;
//     newImgData.data[border[i+3]*4+1]=0;
//     newImgData.data[border[i+3]*4+2]=0;
// }
// ctx.putImageData(newImgData,0,0);