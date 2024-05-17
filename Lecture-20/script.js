// Try Catch

const divide = ( a, b) =>{
    if(a==0 || b==0) {
        throw new Error("Can't divide by zero");
    }
    else{
        return a/b;
    }
}

try{
    let result = divide(10,2);
    console.log(result);
}
catch(e){
    console.log("Error Is :"+e);
}