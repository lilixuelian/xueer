function inverse(s) {
  var arr = s.split('');
  var i = 0, j = arr.length - 1;
  while (i < j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    i++;
    j--;
  }
  return arr.join('');
}
1、输出：



function repeat(str, num) {
  if(num<=0)
      return "";
  var save_ = str
  for(var i=1;i<num;i++)
    str+=save_ ;
  return str;
}
repeat("abc", 3);
2、输出：




function factorialize(num) {
  if (num < 0) { 
        return -1; 
    } else if (num === 0 || num === 1) { 
        return 1; 
    } else { 
        return (num * factorialize(num - 1)); 
    } 
}
factorialize(5);
3、输出：




function bubbleSort(arr){
      for(var i=0;i<arr.length-1;i++){
          for(var j=0;j<arr.length-i-1;j++){
              if(arr[j]>arr[j+1]){
                  var temp=arr[j];
                  arr[j]=arr[j+1];
                  arr[j+1]=temp;
              }
          }
      }
      return arr;
  }
 console.log(bubbleSort([6,1,2,4,3,5]))
4、输出：




var arr1 = [1,2,3,44,44,11,2,3,333,3,3];
    function removeRepeat(arr){
        var removeArr = [],obj = {};
        for(var i = 0, l = arr.length; i < l; i++){
            if(!obj[arr[i]]){
                removeArr.push(arr[i]);
                obj[arr[i]] = 1;
            }
        };
        return removeArr;
    }
    var singleArr = removeRepeat(arr1);
console.log(singleArr);
5、输出：