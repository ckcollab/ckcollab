

const banner_already_shown = !!document.getElementById('cookie-consent')


function deleteBottomBar(){
    // removes cookie consent bar
    document.getElementById('cookie-consent').remove()
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  deleteBottomBar()
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addConsentBar() {
    // constructs elements to make up bottom bar
    const body = document.querySelector('body')
    const container = document.createElement("div")
    const msg = document.createTextNode("By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.")
    const btn = document.createElement('button')

    btn.classList.add("fa-close");
    btn.classList.add("fa");
    btn.addEventListener('click', ()=>setCookie('cookie-consent', true, 365))
    container.classList.add("cookie-consent");
    container.setAttribute('id', 'cookie-consent')

    container.appendChild(msg)
    container.appendChild(btn)
    body.appendChild(container)
}

if (!banner_already_shown && !getCookie('cookie-consent')){
    // if bottom bar doesn't exist and if no cookies exist
    addConsentBar()
}