// Define a utility function to pad numbers
function padNumber(num, digits) {
    let str = String(num);
    while (str.length < digits) {
      str = '0' + str;
    }
    return str;
  }
  
  // Update the updateClock function to use the padNumber utility function
  function updateClock() {
    const now = new Date();
    const dname = now.getDay();
    const mo = now.getMonth();
    const dnum = now.getDate();
    const yr = now.getFullYear();
    let hou = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    let pe = 'AM';
  
    if (hou >= 12) {
      pe = 'PM';
    }
    if (hou === 0) {
      hou = 12;
    }
    if (hou > 12) {
      hou -= 12;
    }
  
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minutes', 'seconds', 'period'];
    const values = [week[dname], months[mo], padNumber(dnum, 2), yr, padNumber(hou, 2), padNumber(min, 2), padNumber(sec, 2), pe];
  
    for (let i = 0; i < ids.length; i++) {
      const element = document.getElementById(ids[i]);
      if (element) {
        element.textContent = values[i];
      }
    }
  }
  
  updateClock();
  
  setInterval(updateClock, 1000);

  export function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000);
  }