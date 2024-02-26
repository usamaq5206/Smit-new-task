
document.addEventListener('DOMContentLoaded', function () {

    let clickInfoDiv = document.createElement('div'); //div done
    clickInfoDiv.id = 'clickInfo';
    document.body.appendChild(clickInfoDiv);
  
    function updateClickInfo(event) {
      let clickX = event.clientX;
      let clickY = event.clientY;
  
      // take date from date objest
      let clickTime = new Date().toLocaleTimeString();
  
      let clickInfo = `Clicked at: (X :${clickX}, Y : ${clickY})<br>Time: ${clickTime}`;
      clickInfoDiv.innerHTML = clickInfo;
      
    }
  
    document.body.addEventListener('click', updateClickInfo);
  });

