// how we can take only odd indexs from array

var a=[25,30,5,25,32,56,24,41,26,22,29,34,79,90]

for(i=0;i<a.length;i++){
    if(a[i]%2===0){
        a.slice(a[i],1)

    }
    console.log(a)
}
