function isMatch(s, p) {

  var s_pointer = 0;
  var p_pointer = 0;

  while (p_pointer < p.length){  
    if (p[p_pointer + 1] === "*") {
      if (s[s_pointer] === (p[p_pointer] === '.' ? s[p_pointer] : p[p_pointer])) {
        do_star_match(p[p_pointer]);
      } else {
        p_pointer += 2;
        continue;
      }
    } else {
      if (do_normal_match() === false) {
        return false;
      }
    }
    
    
    if (s_pointer < s.length)  s_pointer++;
    if (p_pointer < p.length) p_pointer++;
  }

  if ( s_pointer == s.length && p_pointer == p.length) return true;
  else{ 
       return false;
    }

  //做*查詢
   function do_star_match(match_str){
    match_str === "." ? s[s_pointer] : match_str;
    while( s_pointer++ < s.length ){
        if (s[s_pointer] !== match_str) {
          p_pointer += 2;
          return;
        }
    }
    
  }

  function do_normal_match(){
      if( p[p_pointer] === '') return false;

      if( p[p_pointer] === '.' ){
          if(s[p_pointer] !== ''){
            return true;
          }
      }
      if( s[s_pointer] === p[p_pointer] ){
        return true;
      }else{
          return false;
      }
  }

}
module.exports = isMatch;
