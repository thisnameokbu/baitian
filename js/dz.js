function gowhere1(formname) 
	{
	 var url; 
	 url = "  http://www.baidu.com/baidu"; 
	 document.search_form.tn.value = "baidu";
	 formname.method = "get";
	 formname.action = url;
	 return true; 
	} 


$(function  () {
	$("#word").focus(function(){
		$("#word").css("width","160px");
	}).blur(function() {
		$("#word").css('width', '80px');
	});



	

})