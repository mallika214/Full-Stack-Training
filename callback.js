function func1(callback){
    setTimeout(()=>{
        console.log(`second function executed`);
        callback();
    },1000);

}

function func2(){
    setTimeout(()=>{
        console.log(`third function executed`);
        callback();
    },1000);

}

function func3(){
    setTimeout(()=>{
        console.log(`first function executed`);
        callback();
    },1000);

}

func1.then(func2).then(func3)