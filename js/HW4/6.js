function gcd(a,b){
    if(a>b){
        let m = a;
        let n = b;
    }
    else{
         m = b;
         n = a;
    }
    while(n != 0){
        let d = m % n;
        m = n;
        n = d;
    }
    return m;
}
console.log(gcd(18,16))
