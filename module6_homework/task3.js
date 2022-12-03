function getSum () {
	var result=0;
	for (var i = 0; i < arguments.length; i++) {
		if(arguments.length instanceof Array){
  			for (var i = 0; i < arguments.length; i++){
  				result +=(arguments[i]=(!isNaN(+arguments[i]))?+arguments[i]:0);}
  			}else if(!isNaN(+arguments[i])){
					result +=arguments[i];
  			}else{
				continue;
  			}
	};
	return result;
};
var sum = getSum(1, '1', 'one', [2, '2', 'two']);
console.log( sum ); // 6