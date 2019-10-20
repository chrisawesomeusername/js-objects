console.log('time for dogs');


//objects are a data type that can store different types of data
//objects can contain functions called methods
//objects have properties and its values called key-value pair
//objects are declared with curly braces
//object property value is seperated by  comma
//object property and its value are seperatedby colon
// an array of objects are seperated by comma

// var dog = {name:'John', age:7, height:40}
//either way of writing these objects are acceptable



document.getElementById('dog1').addEventListener('click',function(){

var dog1 = {
  name: 'John',
  age: 7,
  height: 40,
  photo: 'images/john.jpg'
};
  //access property values
  document.getElementById('result').innerHTML = '</br> The dog\'s name is ' + dog1.name;
  document.getElementById('result').innerHTML += '</br> The dog is ' + dog1.age + ' years old';
  document.getElementById('result').innerHTML += '</br> and is ' + dog1.height +'cm tall';
  document.getElementById('result').innerHTML += '</br><img class="img-thumbnail" src=" ' + dog1.photo + '" alt="dog1" />';
});




document.getElementById('dog2').addEventListener('click', function(){


  var dog2 = {
    name: 'Sam',
    age: 10,
    height: 73,
    breed: 'Labrador',
    male: 'true',
    photo: 'images/sam.jpg'
  };
  document.getElementById('result').innerHTML = '</br> The dog\'s name is ' + dog2.name;
  document.getElementById('result').innerHTML += '</br> The dog is ' + dog2.age + ' years old';
  document.getElementById('result').innerHTML += '</br> and is ' + dog2.height +'cm tall.';
  document.getElementById('result').innerHTML += '</br> THIS cool dog is a ' + dog2.breed;
  if (dog2.male === 'true') {
    document.getElementById('result').innerHTML += '<br/> male dog';
  }
  else {
    document.getElementById('result').innerHTML += 'female dog';
  }
  document.getElementById('result').innerHTML += '</br><img class="img-thumbnail" src=" ' + dog2.photo + '" alt="dog2" />';
});



document.getElementById('change').addEventListener('click', function(){
  var changedName = document.getElementById('newName').value;
  console.log(changedName);
  document.getElementById('result').innerHTML = '</br> Dog new name is ' + changedName;
  document.getElementById('result').innerHTML += '</br> The dog is ' + dog1.age + ' years old';
  document.getElementById('result').innerHTML += '</br> and is ' + dog1.height +'cm tall';
  document.getElementById('result').innerHTML += '</br><img class="img-thumbnail" src=" ' + dog1.photo + '" alt="dog1" />';

});
