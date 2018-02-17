document.addEventListener('deviceready', function(){
  var form = document.getElementById('form');
  var btnAdd = document.getElementById('add');
  var taskList = document.getElementById('list');
  var input = document.getElementById('input');

  //prevent form to be submitted
  form.addEventListener('submit', function(event){
    event.preventDefault();
  })

  //
  btnAdd.addEventListener('click', function(){
    //alert('clicked');
    //get the input
    //alert(input.value);
    var task = input.value;
    //display the input our ul
    taskList.innerHTML += "<li class='item'>"+task+"</li>";
  })


}, false);
