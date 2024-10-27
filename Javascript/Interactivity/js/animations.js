const animatedBox = document.getElementById('animatedBox');
const startAnimation = document.getElementById('startAnimation')
const stopAnimation = document.getElementById('stopAnimation');

startAnimation.addEventListener('click', function(){
    animatedBox.classList.add('bouncing', 'rotating')
});

stopAnimation.addEventListener('click', function(){
    animatedBox.classList.remove('bouncing', 'rotating');
})