function vectorPrime(a,b){
    var c=[]
    for(let i=0; i<a.length; i++){
        c[i] = a[i]+b[i];
    }
    return c
}

console.log(vectorPrime([1,2],[3,4]))
