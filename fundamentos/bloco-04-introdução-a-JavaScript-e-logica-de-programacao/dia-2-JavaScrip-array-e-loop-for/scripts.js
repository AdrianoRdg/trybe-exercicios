let nume=[1,2,3,4,5,6,7,8,9,2,3,2];
let a='';
  if (nume.length!=11){
    a = nume.join('');
  } else {
     a = nume.slice(0, 2);;
    console.log("(" +a + ")");
  }
  let b = a.substring(2,4);
console.log(a);
console.log(b);