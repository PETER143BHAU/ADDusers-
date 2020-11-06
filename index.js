// var datato = document.getElementById('data');
var counter = 0;
function addUser(){
	var datato = document.getElementById('data');
	var select = document.getElementById('selected1')

	var inputdata = datato.value;
	// console.log(inputdata)

	
	var ist = '<div id="selected1" '+counter+ '> '+
	'<input type="text"  value="'+inputdata+'" class="form-controler" id="learn" disabled>  =====>>> '+
	'  <button type="button"  class="btn-1" onclick="edit(this.id)" '+counter+' id="edit'+counter+'">EDIT</button>'+
	'----<button type="button"  class="btn-2" onclick="UPDATE(this.id)" '+counter+' id="UPDATE'+counter+'">UPDATE</button>'+
	' ----<button type="button"  class="btn-3" onclick="REMOVE(this.id)" '+counter+' id="REMOVE'+counter+'">REMOVE</button></div>'
	select.insertAdjacentHTML('beforeend',ist)
	counter++;
}

function edit(editId){
	// console.log(editId)
	var parent = document.getElementById(editId).parentNode ;
// 	// var child= document.getElementById()
	var input = document.getElementById('learn')
	input.removeAttribute('disabled')




}
function UPDATE(updateId){
	var tag = document.getElementById('learn')
	tag.setAttribute("disabled",'disabled')
	console.log(tag)
}
function REMOVE(removeId){
	var parent = document.getElementById(removeId).parentNode ;
	parent.remove();

	
}