window.addEventListener('load',function() {
    let second = 0;
    let minute = 0;
    
    let start = document.getElementById('start');
    let end = document.getElementById('end');
    let showMin = document.getElementById('minute');
    let showSec = document.getElementById('second');
    
    function showSecond() {
        second++;
        showMin.innerText = second;
    } 

    start.addEventListener('click',function() {
        timeId = setInterval(() => {
            second++;
            showSec.innerText = second;
            
            if (second == 60) {
                
                second = 0;
                showSec.innerText = second;
                minute++;
                showMin.innerText = minute;

            }
            
        }, 1000);
    })

    end.addEventListener('click',function() {
        clearInterval(timeId);
        second = '00';
        minute = '00';
        showSec.innerText = second;
        showMin.innerText = minute;
        
    })

})