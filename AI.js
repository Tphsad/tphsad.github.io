
var shipset2=new Array();
var shipnum2=0;

function AI(){
var AIshipnumber=0;
while(AIshipnumber<4){
 	var number=Math.floor(Math.random()*100);
	var number2=Math.floor(Math.random()*4);
	var number3=number+100;
 if(sea2[number]!=1){
switch (number2){
 case 0:
 if(sea2[number+10]!=1&&sea2[number+20]!=1&&sea2[number+30]!=1&&((number)/10)<7){
	sea2[number]=1;
		shipset2[shipnum2]=number;shipnum2++;
	sea2[number+10]=1;
		shipset2[shipnum2]=number+10;shipnum2++;
	sea2[number+20]=1;
		shipset2[shipnum2]=number+20;shipnum2++;
	sea2[number+30]=1;
		shipset2[shipnum2]=number+30;shipnum2++;
if(cheat==true){
	 $("#"+number3).text(1);$("#"+(Number(number3)+10)).text(1);$("#"+(Number(number3)+20)).text(1);$("#"+(Number(number3)+30)).text(1);
}
	 AIshipnumber++;
	
	break;
 }
 case 1:
 if(sea2[number-10]!=1&&sea2[number-20]!=1&&sea2[number-30]!=1&&((number)/10)>3){
	sea2[number]=1;
 		shipset2[shipnum2]=number;shipnum2++;
	sea2[number-10]=1;
		shipset2[shipnum2]=number-10;shipnum2++;
	sea2[number-20]=1;
		shipset2[shipnum2]=number-20;shipnum2++;
	sea2[number-30]=1;
		shipset2[shipnum2]=number-30;shipnum2++;
		if(cheat==true){
	$("#"+number3).text(1);$("#"+(Number(number3)-10)).text(1);$("#"+(Number(number3)-20)).text(1);$("#"+(Number(number3)-30)).text(1);
		}
	AIshipnumber++;
	break;
 }
 case 3:
 if(sea2[number+1]!=1&&sea2[number+2]!=1&&sea2[number+3]!=1&&((number)%10)<7){
	sea2[number]=1;
 		shipset2[shipnum2]=number;shipnum2++;
	sea2[number+1]=1;
		shipset2[shipnum2]=number+1;shipnum2++;
	sea2[number+2]=1;
		shipset2[shipnum2]=number+2;shipnum2++;
	sea2[number+3]=1;
		shipset2[shipnum2]=number+3;shipnum2++;
		if(cheat==true){
	$("#"+number3).text(1);$("#"+(Number(number3)+1)).text(1);$("#"+(Number(number3)+2)).text(1);$("#"+(Number(number3)+3)).text(1);
		}AIshipnumber++;
	break;
 }
 case 4:
 if(sea2[number-1]!=1&&sea2[number-2]!=1&&sea2[number-3]!=1&&((number)%10)>3){
	sea2[number]=1;
 		shipset2[shipnum2]=number;shipnum2++;
	sea2[number-1]=1;
		shipset2[shipnum2]=number-1;shipnum2++;
	sea2[number-2]=1;
		shipset2[shipnum2]=number-2;shipnum2++;
	sea2[number-3]=1;
		shipset2[shipnum2]=number-3;shipnum2++;
		if(cheat==true){
	$("#"+number3).text(1);$("#"+(Number(number3)-1)).text(1);$("#"+(Number(number3)-2)).text(1);$("#"+(Number(number3)-3)).text(1);
		}AIshipnumber++;
	break;
 }
 case 5:
 continue;
 
}
 }else{
	continue;
 }

}

}