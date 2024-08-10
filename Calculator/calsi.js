
	function num(val){
	document.getElementById("a").value += val;
	}
function clr(){
document.getElementById("a").value ="";	
}
	function solve(){
		let num = document.getElementById("a").value;
		let b= num.split(/(\+|\-|\*|\/)/g).map(function (ele){
    return ele.trim();
})


    let temp = [...b];
while(temp.length>1){

  if(temp.includes("/")){
	  divition()
  }
  else if(temp.includes("*")){
	  multiply();
  }
  else if(temp.includes("-")){
	  subraction();
  }
  else if(temp.includes("+")){
	  addision();
  }

}

	
function divition(){
for(let i=0;i<temp.length;i++){
    if(temp[i]=="/"){
        temp[i] = Number(temp[i-1])/Number(temp[i+1])
        temp.splice(i-1,3,temp[i])
        
    }
}
}

function multiply(){
for(let i=0;i<temp.length;i++){
    if(temp[i] == "*"){
        temp[i] = Number(temp[i-1]) * Number(temp[i+1])
        temp.splice(i-1,3,temp[i])
        
    }
}
}

function subraction(){
for(let i=0;i<temp.length;i++){
    if(temp[i] == "-"){
        temp[i] =Number(temp[i-1]) - Number(temp[i+1])
        temp.splice(i-1,3,temp[i])
    }
}
}

function addision(){
for(let i=0;i<temp.length;i++){
    if(temp[i] == "+"){
        temp[i] = Number(temp[i-1]) + Number(temp[i+1])
        temp.splice(i-1,3,temp[i])
    }
}

}
document.getElementById("a").value=temp[0];
	}

function factorial(){
	let num = document.getElementById("a").value;
	let ans =1;
	for(let i=1;i<=num;i++){
		ans *= i;
	}
	document.getElementById("a").value =`${ans}`;
}

function armstrong(){
	let num = document.getElementById("a").value;
	let ans =0;
	let temp = num;
	let digit = howmany(temp);
	function howmany(temp){
		let string =  temp.toString();
		let n = string.length;
		return n ;
	}
		
	while(temp > 0){
		let rem = temp % 10;
		ans = ans + Math.pow(rem , digit)
		temp = Math.floor(temp/10);
	}
	if( num == ans){
		document.getElementById("a").value="Given Num is Armstrong";
	}
	else{
		document.getElementById("a").value="Given Num is not an Armstrong";
	}
}
	
function polinomial(){
    let num = document.getElementById("a").value;
	let str =num.toString();
	let n =str.length;
	let sum =""
	for(let i=n-1;i>=0;i--){
		sum += str[i];
	}
	document.getElementById("a").value=sum;
}

function sqrt(){
	 let num = document.getElementById("a").value;
	 let sq = Math.sqrt(num);
	 
	document.getElementById("a").value=sq;
}



