clock();

function clock(){
  const date = new Date();
  const indent = 2;
  const clockObj = {
    am_pm: date.getHours() >= 12 ? 'pm' : 'am' ,
    horas: date.getHours() % 12 || 12,
    minutos: date.getMinutes(),
    segundos: date.getSeconds(),
    dia: date.toLocaleDateString('es-us', {weekday:'long'}),
    dia: date.getDate(),
    mes: date.toLocaleDateString('es-us', {month:'long'}),
    año: date.getFullYear(),
  }
  const entryFormat = ([key, val]) => {
    return `${' '.repeat(indent)}<span class="property">${key}</span>: ${valFormat(val)}`
  }
  const valFormat = (val) => {
    if(typeof val == 'number') return `<span class="number">${val}</span>`
    else if (typeof val == 'string') return `<span class="string">"${val}"</span>`
  }
  document.querySelector(".watch").innerHTML = `
    <span class="keyword">const</span> <span class="def">clock</span> = {<br>
    ${Object.entries(clockObj).reduce((str, entry) => str + entryFormat(entry) + ',<br>', '')}};`
  
  requestAnimationFrame(clock);
}