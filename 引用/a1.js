var list=['1','2','3','4'];

// 求和
var res=list.reduce((num1,num2)=>{
	return Number(num1) + Number(num2);
});
console.log(res);

//sort排序
var arr=[2,3,5,6,8,9,2,1,4,3];
var sorts=arr.sort();
console.log(sorts);

//filter过滤数据,返回满足条件数据(数组);
var f=[50,30,80,60,4,0,52,36,42];
var r_f=f.filter((item)=>{
	return item<=60;
});
console.log(r_f);