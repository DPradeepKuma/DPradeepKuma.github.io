//  console.log("hello i am writting conditionals");
//  let age=5;
//  if(age>18){
//     conso
//  }



// let a=prompt("Enter the letter:-");
// if(a=="a"||a=="A"||a=="e"||a=="E"||a=="i"||a=="I"||a=="o"||a=="O"||a=="u"||a=="U"){
//    alert("letter your inserted is vowel");
// }
// else{
//    alert("letter you inserted is counsent");
// }






let a=prompt("Enter a year wheather it is a leap year or not");

if(a%4==0){
   if(a%100==0){
      if(a%400==0){
         console.log("it is a leap year");
      }
      console.log("its's not a leap year");
   }
   console.log("it's a leap year");

}