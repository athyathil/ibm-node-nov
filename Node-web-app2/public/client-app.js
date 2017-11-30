/**
 * http://usejsdoc.org/
 */

console.log('-client-app.j-');


$(function(){
	$('#todosBtn').click(function(e){
		$.ajax('todos',{
			method:'GET',
			success:function(resp){
				console.log(resp);
			}
		});
	});
});
