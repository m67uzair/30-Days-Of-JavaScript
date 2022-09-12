
wrapperDiv = document.createElement('div');
document.body.appendChild(wrapperDiv);
wrapperDiv.style.maxWidth = '50%'
wrapperDiv.style.height = '20%'
wrapperDiv.style.display = 'flex'
wrapperDiv.style.flexWrap = 'wrap'

wrapperDiv.style.margin = '0 auto'

for (let i = 0; i <= 101; i++) {
  div = document.createElement("div");
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.backgroundColor = '#f64ee4'
  div.style.margin = '1px'
  div.style.textAlign = 'center'
  div.style.lineHeight = '50px'

  div.textContent = i ;
  wrapperDiv.appendChild(div);
}
