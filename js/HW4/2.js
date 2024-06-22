function arrayMin(a) {
    var i, min =a[0]
   for(i=0; i<a.length; i++){
        if (a[i]<min){
            min=a[i]
        }
    }
    return min
}

console.log('min=',arrayMin([5, 10, 3, 8, 2]));
