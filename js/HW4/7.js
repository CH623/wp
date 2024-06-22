function lcm(a,b){
    var a=10, b=15
    if(a%b==0)
        return b;
    else
        return lcm(b,a%b);
}

console.log(a*b/lcm(a,b));
