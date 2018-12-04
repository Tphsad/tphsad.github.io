// JavaScript Document
	var shipnumber2=4;
	var attacknumber2=0;
	var destroy1a=false;var destroy2a=false;var destroy3a=false;var destroy4a=false;
function AIattack(){
	
	var number1,number2,number3,number4;
	var hit= new Array(4);
	for(var d=0;d<4;d++){hit[d]=500;}
	var hitlist= new Array();var hitlistnum=0;
	var hited= new Array();var hitednum=0;
	var repeat=0;var repeat2=0;var repeat3=0;var repeat4=0;
		
		
	if(hitlist.length==0){
		while(true){
		number1=Math.floor(Math.random()*100);
		if($("#"+number1).text()!='H'&&$("#"+number1).text()!='N'){
			break;
		}}
		if(shipnumber2>=2){
		while(true){
		number2=Math.floor(Math.random()*100);
		if(number2!=number1&&$("#"+number2).text()!='H'&&$("#"+number2).text()!='N'){
		break;}}
		}
		if(shipnumber2>=3){
		while(true){
		number3=Math.floor(Math.random()*100);
		if(number3!=number1&&number3!=number2&&$("#"+number3).text()!='H'&&$("#"+number3).text()!='N'){
		break;}}
		}
		if(shipnumber2>=4){
		while(true){
		number4=Math.floor(Math.random()*100);
		if(number4!=number1&&number4!=number2&&number4!=number3&&$("#"+number4).text()!='H'&&$("#"+number4).text()!='N'){
		break;}}
		}}
	
		
		
		if(sea[number1]==1){
		sea[number1]=2;
		$("#"+number1).text('H');
		hit[0]=number1;
		hited[hitednum]=number1;
		hitednum++;
		}else{
		$("#"+number1).text('N');
		}
		
		if ((100-hitednum)>=2){
		if(sea[number2]==1){
		sea[number2]=2;
		$("#"+number2).text('H');
		hit[1]=number2;
		hited[hitednum]=number2;
		hitednum++;
		}else{
		$("#"+number2).text('N');
		}}
		
		if ((100-hitednum)>=3){
		if(sea[number3]==1){
		sea[number3]=2;
		$("#"+number3).text('H');
		hit[2]=number3;
		hited[hitednum]=number3;
		hitednum++;
		}else{
		$("#"+number3).text('N');
		}}
		
		if ((100-hitednum)>=4){
		if(sea[number4]==1){
		sea[number4]=2;
		$("#"+number4).text('H');
		hit[3]=number4;
		hited[hitednum]=number4;
		hitednum++;
		}else{
		$("#"+number4).text('N');
		}}
		
		hitlistnum=hitlist.length;
		for(var d=0;d<4;d++){
			if(hit[d]!=500){
			for(var c=0;c<hitlistnum;c++){
				if(hitlist[c]==hit[d]+10){
					repeat=1;
					}
				if(hitlist[c]==hit[d]-10){
					repeat2=1;
					}
				if(hitlist[c]==hit[d]+1){
					repeat3=1;
					}
				if(hitlist[c]==hit[d]-1){
					repeat4=1;
					}
			}
			if(repeat==0){
			hitlist[hitlistnum]=hit[d]+10;
			hitlistnum++;
			}
			if(repeat2==0){
			hitlist[hitlistnum]=hit[d]-10;
			hitlistnum++;
			}
			if(repeat3==0){
			hitlist[hitlistnum]=hit[d]+1;
			hitlistnum++;
			}
			if(repeat4==0){
			hitlist[hitlistnum]=hit[d]-1;
			hitlistnum++;
			}
			
			repeat=0;repeat2=0;repeat3=0;repeat4=0;
			for(var d=0;d<4;d++){hit[d]=500;}
		}
		}
		for(var c=0;c<hitednum;c++){
			for(var d=0;d<16;d++){	
				if(hited[c]==shipset[d]){
					shipset[d]=1000;
	
							}}}
							
							if(destroy1a==false){
								var ship001 =shipset[0]+shipset[1]+shipset[2]+shipset[3];
							}
							if(destroy2a==false){
								var ship002 =shipset[4]+shipset[5]+shipset[6]+shipset[7];
							}
							if(destroy3a==false){
								var ship003 =shipset[8]+shipset[9]+shipset[10]+shipset[11];
							}
							if(destroy4a==false){
								var ship004 =shipset[12]+shipset[13]+shipset[14]+shipset[15];
							}
								if(ship001==4000){
									alert("Your ship1 is destroyed!");
									destroy1a=true;
									shipnumber1--;
									ship001=5000;
								}
								if(ship002==4000){
									alert("Your ship2 is destroyed!");
									destroy2a=true;
									shipnumber1--;
									ship002=5000;
								}
								if(ship003==4000){
									alert("Your ship3 is destroyed!");
									destroy3a=true;
									shipnumber1--;
									ship003=5000;
								}
								if(ship004==4000){
									alert("Your ship4 is destroyed!");
									destroy4a=true;
									shipnumber1--;
									ship004=5000;
								}
								if(destroy4a==true&&destroy3a==true&&destroy2a==true&&destroy1a==true){
									alert("Gameover");
									$("#attack").remove();
									stop1=1;	
							
								}

			
	
}