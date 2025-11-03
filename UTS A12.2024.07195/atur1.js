document.addEventListener('DOMContentLoaded', function() {
  
  function showTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID'); 
    
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.textContent = time;
    }
  }

  showTime();
  setInterval(showTime, 1000);

});

