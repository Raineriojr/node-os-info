import OS from 'os';

const {
  freemem,
  arch,
  totalmem,
  platform
} = OS;
 
export let OSInfo = {};

setInterval(() => {  
  const tmem = totalmem() / 1024 / 1024
  const fmem = freemem() / 1024 / 1024
  const percent = (fmem / tmem) * 100

  const info = {
    Platform: platform(),
    Arch: arch(),
    TotalMem: `${parseInt(tmem)} MB`,
    FreeMem: `${parseInt(fmem)} MB`,
    '%': `${percent.toFixed(2)} %`
  }
  
  console.clear()
  console.table(info)
  OSInfo = info
}, 1000)
