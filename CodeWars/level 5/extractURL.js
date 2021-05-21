function domainName(url){
  let urlCopy = url;
  const regExp = /^(http:\/\/|https:\/\/|www.)?(www.)?(.+?\.).+/;
  return urlCopy.replace(regExp, "$3").slice(0,-1);
  
}

console.log(domainName("http://google-test.com"));
console.log(domainName("http://www.google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("https://www.youtube.com"));
console.log(domainName("youtube.com"));

/*console log
google-test
google
xakep
youtube
youtube
youtube
*/

//--------------------------------
/*Alternate Solutions

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}
