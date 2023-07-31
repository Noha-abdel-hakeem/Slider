var myImgs= document.querySelectorAll('.content img');
var mainImg= document.getElementById('mainImg');
console.log(myImgs);
for(var i =0;i <myImgs.length ; i++){

myImgs[i].addEventListener('click', function(e){
    mainImg.setAttribute('src',e.target.getAttribute('src') )
    // console.log(e.target.getAttribute('src'));

})
}

// console.log(myImgs[i].getAttribute('src'));
