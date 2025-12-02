function process(x,callback){
    console.log('Gia tri '+x);
    callback();
}
function done(){
    console.log('Xu ly xong');
}
process(5,done);//output: Gia tri 5 va Xu ly xong o duoi