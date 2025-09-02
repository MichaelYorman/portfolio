function setCookie(name,value,days) {
    let expires="";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime()+days*24*60*60*1000);
        expires="; expires="+date.toUTCString();

    document.cookie=name+"="+encodeURIComponent(value)+expires+"; path=/"
    console.log(name+" has been set to "+value)
    }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
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
function deleteCookie(name) {
    document.cookie=name+"=; Max-Age=-99999999; path=/"
}

function checkCookie() {
    let lang=getCookie("language");
    if (lang!="") {
        return(lang)
    } else {
        return("")
    }
}

export {setCookie,getCookie,deleteCookie,checkCookie};