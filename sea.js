// JavaScript Document

var ship=0,check1=0,Stop=0;	
var sea= new Array(100);
var sea2= new Array(100);
var shipnumber=0;
var shipset=new Array();
var shipnum=0;var cheat=false;
for (var a=0;a<100;a++){
	sea[a]=0;
	sea2[a]=0;
	
}
$(document).ready(function(){
	$("#Cheatmode").click(function(){
		cheat=true;
	});
	 $("#start").click(function(){
	  $("#start1").fadeOut();
	  	for (var a=0;a<10;a++){
			var c= document.createElement('tr');
			document.getElementById('sea').appendChild(c);
			for (var b=0;b<10;b++){
				var d= document.createElement('td');
				var dd= document.createElement('button');
				dd.setAttribute('class', "btn");
				dd.setAttribute('id', a*10+b);
				dd.textContent	= 0;
				d.appendChild(dd);
				document.getElementById('sea').appendChild(d);
		}
		for (var b=0;b<10;b++){
	  		var space=document.createElement('td');
			space.textContent='/';
			document.getElementById('sea').appendChild(space);
		}
			
		for (var b=0;b<10;b++){
			var d= document.createElement('td');
			var dd= document.createElement('button');
			dd.setAttribute('id', 100+(a*10+b));
			dd.setAttribute('class', "atn");
			dd.textContent	= '?';
			d.appendChild(dd);
			document.getElementById('sea').appendChild(d);
		}
		}
		click2();
		click3();
});
});
  
		

function  click2(){

$("#station").text("The first ship");  
var Click=document.createElement('button');
	Click.textContent='Next';
	Click.setAttribute('id','next');
	$("#station2").append(Click); 
	  	$("#next").live("click",function(){
		if(ship!=2){
			alert('not complete1')
		}else{
				for (var b=0;b<100;b++){
					if($("#"+b).text()==1){
					sea[b]=1;
					shipset[shipnum]=b;
					shipnum++;
					}}
				for (var b=0;b<100;b++){
					if($("#"+b).text()==1){
					$("#"+b).text('S');
					}}	
					shipnumber++;
					ship=0;
					
			if(shipnumber==1){
				$("#station").text("The second ship");
			}
			if(shipnumber==2){
				$("#station").text("The thrid ship");
			}
			if(shipnumber==3){
				$("#station").text("The fourth ship");
			}
			if(shipnumber==4){
				$("#station").text("Attack time");
				$("#next").remove();
				Stop=1;
				AI();
				attack();
				
			}
			}
});   

}
function  click3(){

  $(".btn").live("click",function(){
	 if(Stop==0){
    var abc=$(this).attr('id');
	if(sea[abc]==1){
		alert('error for Location of existence')
	}else{
	if(ship==0){
		$("#"+abc).text(1);
		ship++;
		check1=Number(abc);
	}else if(ship==1){
			if(abc==check1){
			$("#"+abc).text(0);
			ship--;
			check1=0;
				}else if(Number(abc)==(check1+10)){
					if((Number(abc)/10)>8){
						alert('error for no space1')
					}else if(sea[Number(abc)+10]==1||sea[Number(abc)+20]==1){
						alert('error for Location of existence');
					}else{
					$("#"+abc).text(1);
					$("#"+(Number(abc)+10)).text(1);	
					$("#"+(Number(abc)+20)).text(1);
					ship++
					}}else if(Number(abc)==(check1+1)){
					if(Number(abc)%10>8){
						alert('error for no space')
					}else if(sea[Number(abc)+1]==1||sea[Number(abc)+2]==1){
						alert('error for Location of existence');
					}else{
					$("#"+abc).text(1);
					$("#"+(Number(abc)+1)).text(1);	
					$("#"+(Number(abc)+2)).text(1);
					ship++
				}}else if(Number(abc)==(check1-10)){
					if((Number(abc)/10)<2){
						alert('error for no space')
					}else if(sea[Number(abc)-10]==1||sea[Number(abc)-20]==1){
						alert('error for Location of existence');
					}else{
					$("#"+abc).text(1);
					$("#"+(Number(abc)-10)).text(1);	
					$("#"+(Number(abc)-20)).text(1);
					ship++
				}}else if(Number(abc)==(check1-1)){
					if(Number(abc)%10<2){
						alert('error for no space')
					}else if(sea[Number(abc)-1]==1||sea[Number(abc)-2]==1){
						alert('error for Location of existence');
					}else{
					$("#"+abc).text(1);
					$("#"+(Number(abc)-1)).text(1);	
					$("#"+(Number(abc)-2)).text(1);
					ship++
				}}else{
					alert('error')
		}}else if(ship==2){
			if($("#"+abc).text()==1){
				for (var b=0;b<100;b++){
					if(sea[b]==1){
					}else{
					$("#"+ b).text(0);
					}
				}
				ship=0;
				
				}else{
					
			}
}
}
}else{
	
}

  });
}





