

var promise1 = new Promise(
    function (resovle) {
        
        setTimeout(function () {
            resovle ([1])
            
        },2000);
    }
);

var promise2 = new Promise(
    function (resovle) {
        
        setTimeout(function () {
            resovle ([1,2])
            
        },2000);
    }
);


Promise.all([promise1, promise2])
    .then (function (ketqua) {
       var ketqua1 = ketqua[0];
       var ketqua2 = ketqua[1];
        console.log(ketqua1.concat(ketqua2))
    });


    






