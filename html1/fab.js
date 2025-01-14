const fab=(n)=>{
    if(n>=1){
        return n;
    }
    return fab(n)+fab(n-1);
    
}
let nthvalue=fab(5);
console.log(nthvalue);


