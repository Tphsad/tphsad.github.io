// JavaScript Document
	var shipnumber1=4;
	var attacknumber=0;
	var stop1=0;
function attack(){
	stop1=0;
	var destroy1=false;var destroy2=false;var destroy3=false;var destroy4=false;
	var shipattacted= new Array();var shipattactednum=0;
	var save;
	$(".atn").live("click",function(){
		if(stop1==0){
    var abc=$(this).attr('id');
	if($("#"+abc).text()=="A"){
		$("#"+abc).text(function(){return save.toString();});
		attacknumber--;
	}else{
	if(attacknumber<shipnumber1){
	if($("#"+abc).text()!="H"&&$("#"+abc).text()!="N"){
			save=$("#"+abc).text();
		$("#"+abc).text("A");
		attacknumber++;		
	}else{
		alert("space was attacked");
	}
	}else{
		alert('Attacknumber full!');
	}
	}}
	});
	var Click=document.createElement('button');
	Click.textContent='Attack';
	Click.setAttribute('id','attack');
	$("#Text").append(Click); 
	$("#attack").live("click",function(){
		if(attacknumber<shipnumber1){
			alert("You still can attack "+(shipnumber1-attacknumber)+" times");
		}else{
				AIattack();
				for (var b=100;b<200;b++){
					if($("#"+b).text()=='A'){
						if(sea2[(b-100)]==1){
							sea2[(b-100)]=2;
							$("#"+b).text('H');
							shipattacted[shipattactednum]=(b-100);
							shipattactednum++;
							}else{
							$("#"+b).text('N');
						}}}

							for(var c=0;c<=shipattactednum;c++){
								for(var d=0;d<16;d++){	
									if(shipattacted[c]==shipset2[d]){
										shipset2[d]=1000;
	
							}}}
							
							if(destroy1==false){
								var ship01 =shipset2[0]+shipset2[1]+shipset2[2]+shipset2[3];
							}
							if(destroy2==false){
								var ship02 =shipset2[4]+shipset2[5]+shipset2[6]+shipset2[7];
							}
							if(destroy3==false){
								var ship03 =shipset2[8]+shipset2[9]+shipset2[10]+shipset2[11];
							}
							if(destroy4==false){
								var ship04 =shipset2[12]+shipset2[13]+shipset2[14]+shipset2[15];
							}
								if(ship01==4000){
									alert("ship1 destroy!");
									destroy1=true;
									shipnumber2--;
									ship01=5000;
								}
								if(ship02==4000){
									alert("ship2 destroy!");
									destroy2=true;
									shipnumber2--;
									ship02=5000;
								}
								if(ship03==4000){
									alert("ship3 destroy!");
									destroy3=true;
									shipnumber2--;
									ship03=5000;
								}
								if(ship04==4000){
									alert("ship4 destroy!");
									destroy4=true;
									shipnumber2--;
									ship04=5000;
								}
								if(destroy4==true&&destroy3==true&&destroy2==true&&destroy1==true){
									alert("You Are Winner");
									
									$("#attack").remove();
									stop1=1;
										
							
								}
							
	attacknumber=0;

}})
};