let log = document.createTextNode('?');   // let log = new Text('?');

function pause(time) {
    return new Promise(res => {
        setTimeout(() => res("Was right click"), time);
    })
}

async function logButtons(e) {
  log.data = `${e.buttons} (${e.type})`;  // log.nodeValue= `${e.buttons} (${e.type})`;
  if (e.buttons === 2) {
      const after = await pause(2000);
      console.log(after);
  } else {
      console.log("Not right click")
  }
}

document.addEventListener('mouseup', logButtons);
document.addEventListener('mousedown', logButtons);
// document.addEventListener('mousemove', logButtons);

document.querySelector('#log').appendChild(log)