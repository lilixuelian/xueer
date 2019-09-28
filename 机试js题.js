// 阅读下面代码，试分析会输出什么。
// 你可能会用到：
// split() 方法用于把一个字符串分割成字符串数组。题目中为how变成h,o,w
// .length为获取字符串长度，包括结尾/0
// join() 方法用于把数组中的所有元素放入一个字符串。
// push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

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
  var save = str
  for(var i=1;i<num;i++)
    str+=save ;
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