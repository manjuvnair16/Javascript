function fromWhere(you,me,question){
  let keys = Object.keys(you);
  if (question === "Where are you from?"){
    let i = 0;
    while (you[keys[i]] === me[keys[i]] && i < keys.length){
        i++;
    }
    if (i === keys.length) {
      return "Same as you."
    }
    else {
      let result_str =  "I am from " + me[keys[i]] + ".";
      return result_str;
    }
  }
  else if (question.match(/What (country|province|city|town|street) are you from?/)){
    let location = question.match(/(?:What )(country|province|city|town|street) are you from?/)[1];
    location = location.split('')[0].toUpperCase()+location.split('').slice(1).join('');
    if (you[location] === me[location]){
      return "Same as you.";
    }
    else{
      return "I am from " + me[location] + ".";
    }
  }
  else{
    return "What are you saying?";
  }
  
}


var you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"},
    me ={Country:"AA", Province:"BB", City:"XX", Town:"YY", Street:"ZZ"};

console.log(fromWhere(you,me,"Where are you from?"));

console.log(fromWhere(you,me,"What country are you from?"));

console.log(fromWhere(you,me,"What city are you from?"));

console.log(fromWhere(you,me,"What street are you from?"));

console.log(fromWhere(you,me,"How are you?"));

console.log(fromWhere(you,me,"What university are you from?"));

you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"};
me ={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"};
console.log(fromWhere(you,me,"Where are you from?"));

/*console log
I am from XX.
Same as you.
I am from XX.
I am from ZZ.
What are you saying?
What are you saying?
Same as you.
*/

/*
------------------------------
Alternate Solutions
------------------------------
//Solution 1
function where(you, me){
    let [a, b] = [me, you].map(Object.values)
    for (let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return `I am from ${a[i]}.`
          
    }
    return 'Same as you.'
}

function filter(obj, key){
    return Object.keys(obj).reduce((a, v) => {
        if (v.slice(1) == key.slice(1)) a[v.toLowerCase()] = obj[v];
        return a;
    }, {})
}

function fromWhere(you, me, question){
    if (question.startsWith('Where')) return where(you, me);
    let q = question.split(' ')[1];
    let [c, d] = [filter(you, q), filter(me, q)];
    return q in c ? where(c, d) : 'What are you saying?';
}


//Solution 2
function fromWhere(you,me,question){
  let arr1 = Object.values(me)
  let arr2 =  Object.values(you)
  let arrs = ["Country", "Province", "City", "Town", "Street"]
  if(question == "Where are you from?"){
    let temp = arr1.find((x, i) => x != arr2[i])
    return temp ? `I am from ${temp}.` : "Same as you."
  }
  if(arrs.some(x => new RegExp(`${x}`, "ig").test(question))){
    let temp = arrs.find(name => new RegExp(`${name}`, "ig").test(question))
    return you[temp] == me[temp] ? "Same as you." : `I am from ${me[temp]}.`
  } 
  return "What are you saying?"    
}
*/
