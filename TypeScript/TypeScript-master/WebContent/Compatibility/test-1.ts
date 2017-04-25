/**
 * Type Compatibility
 * 类型比较.
 */
interface Named {
    name: string;
}
var x: Named;
//判断这个y的类型是{ name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
x = y;

var items = [1, 2, 3];

//不压迫强迫这些额外参数...
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach((item) => console.log(item))

var k = () => ({name: 'Alice'});
var z = () => ({name: 'Alice', location: 'Seattle'});

k = z; // OK
//z = k; //这k()方法缺少了location属性.所以赋给z()方法是会报错的.




