var numbers = document.querySelectorAll('.n');
var input = document.querySelector('.inp input');
var del=document.querySelector('.del');
var reset =document.querySelector('.res');
var equal = document.querySelector('.equal');


var inp_text='';

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',()=>{

        if(numbers[i].classList.contains('op') && !numbers[i].classList.contains('dot')){
            var op = inp_text.slice(-1);
            if(op=='+'||op=='-'||op=='*'||op=='/'||op=='.' && op==null || inp_text==''){
            
            }else{
                inp_text += numbers[i].innerHTML;
                input.value=inp_text;
            }
            
        }else if(numbers[i].classList.contains('dot')){
            var test = inp_text.slice(-1);
            var op = ['+','-','*','/','.'];
            var table=[];
            for(let i=0;i<op.length;i++){
                table[i]=inp_text.lastIndexOf(op[i]);
            }
            if(Math.max.apply(null,table)==table[4] && table[4]!= -1){
            
            }
            else if(test=='+' ||test=='-' ||test=='/' ||test=='*' ||test=='.' & test==null || inp_text==''){
                
                
            }else{
                inp_text += numbers[i].innerHTML;
                input.value=inp_text;
            }
        }
        else{
            
            inp_text += numbers[i].innerHTML;
            input.value=inp_text;
        }
        
    })
}
function check(text){
    var op = ['+','-','*','/','.'];
    var table=[];
    for(let i=0;i<op.length;i++){
        table[i]=text.lastIndexOf(op[i]);
    }
    if(Math.max.apply(Math,table)==table[4]){
        
    }
    else{}
}

reset.addEventListener('click',()=>{
    inp_text='';
    input.value=inp_text;
})

del.addEventListener('click',()=>{
    inp_text=inp_text.slice(0,-1)
    input.value=inp_text;
})

equal.addEventListener('click',()=>{
    inp_text=isNaN(eval(inp_text))? '':Math.round(eval(inp_text)).toFixed(2);
    input.value=inp_text;
})


var range = document.querySelector('.range input');
var body = document.querySelector('body');
var body_buttons = document.querySelector('.body');
var title = document.querySelector('.title');
range.addEventListener('change',()=>{
    if(range.value==2){
        document.cookie="theme=2; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
        del.classList.add('theme2_del_res');
        reset.classList.add('theme2_del_res');
        body.classList.add('theme2_bg');
        equal.classList.add('theme2_equals');
        body_buttons.classList.add('theme2_body')
        input.classList.add('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.add('theme2_keys')
        }
        title.classList.add('theme2_title');
        range.classList.add('theme2_range');
        //remove
        del.classList.remove('theme3_del_res');
        reset.classList.remove('theme3_del_res');
        body.classList.remove('theme3_bg');
        equal.classList.remove('theme3_equals');
        body_buttons.classList.remove('theme3_body')
        input.classList.remove('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme3_keys')
        }
        title.classList.remove('theme3_title');
        range.classList.remove('theme3_range');
    }else
    if(range.value==1){
        document.cookie="theme=1; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
        del.classList.remove('theme2_del_res');
        reset.classList.remove('theme2_del_res');
        body.classList.remove('theme2_bg');
        equal.classList.remove('theme2_equals');
        body_buttons.classList.remove('theme2_body')
        input.classList.remove('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme2_keys')
        }
        title.classList.remove('theme2_title');
        range.classList.remove('theme2_range');
        //
        del.classList.remove('theme3_del_res');
        reset.classList.remove('theme3_del_res');
        body.classList.remove('theme3_bg');
        equal.classList.remove('theme3_equals');
        body_buttons.classList.remove('theme3_body')
        input.classList.remove('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme3_keys')
        }
        title.classList.remove('theme3_title');
        range.classList.remove('theme3_range');
    }else
    if(range.value==3){
        document.cookie="theme=3; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/;";
        // remove
        del.classList.remove('theme2_del_res');
        reset.classList.remove('theme2_del_res');
        body.classList.remove('theme2_bg');
        equal.classList.remove('theme2_equals');
        body_buttons.classList.remove('theme2_body')
        input.classList.remove('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme2_keys')
        }
        title.classList.remove('theme2_title');
        range.classList.remove('theme2_range');
        // add classes
        del.classList.add('theme3_del_res');
        reset.classList.add('theme3_del_res');
        body.classList.add('theme3_bg');
        equal.classList.add('theme3_equals');
        body_buttons.classList.add('theme3_body')
        input.classList.add('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.add('theme3_keys')
        }
        title.classList.add('theme3_title');
        range.classList.add('theme3_range');
    }
})


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


  range.value=getCookie('theme');
       if(range.value==2){
        document.cookie="theme=2; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
         del.classList.add('theme2_del_res');
        reset.classList.add('theme2_del_res');
        body.classList.add('theme2_bg');
        equal.classList.add('theme2_equals');
        body_buttons.classList.add('theme2_body')
        input.classList.add('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.add('theme2_keys')
        }
        title.classList.add('theme2_title');
        range.classList.add('theme2_range');
        //remove
        del.classList.remove('theme3_del_res');
        reset.classList.remove('theme3_del_res');
        body.classList.remove('theme3_bg');
        equal.classList.remove('theme3_equals');
        body_buttons.classList.remove('theme3_body')
        input.classList.remove('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme3_keys')
        }
        title.classList.remove('theme3_title');
        range.classList.remove('theme3_range');
    }else
    if(range.value==1){
        document.cookie="theme=1; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
        del.classList.remove('theme2_del_res');
        reset.classList.remove('theme2_del_res');
        body.classList.remove('theme2_bg');
        equal.classList.remove('theme2_equals');
        body_buttons.classList.remove('theme2_body')
        input.classList.remove('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme2_keys')
        }
        title.classList.remove('theme2_title');
        range.classList.remove('theme2_range');
        //
        del.classList.remove('theme3_del_res');
        reset.classList.remove('theme3_del_res');
        body.classList.remove('theme3_bg');
        equal.classList.remove('theme3_equals');
        body_buttons.classList.remove('theme3_body')
        input.classList.remove('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme3_keys')
        }
        title.classList.remove('theme3_title');
        range.classList.remove('theme3_range');
    }else
    if(range.value==3){
        document.cookie="theme=3; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/;";
        // remove
        del.classList.remove('theme2_del_res');
        reset.classList.remove('theme2_del_res');
        body.classList.remove('theme2_bg');
        equal.classList.remove('theme2_equals');
        body_buttons.classList.remove('theme2_body')
        input.classList.remove('theme2_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.remove('theme2_keys')
        }
        title.classList.remove('theme2_title');
        range.classList.remove('theme2_range');
        // add classes
        del.classList.add('theme3_del_res');
        reset.classList.add('theme3_del_res');
        body.classList.add('theme3_bg');
        equal.classList.add('theme3_equals');
        body_buttons.classList.add('theme3_body')
        input.classList.add('theme3_inp')
        for(let i=0;i<numbers.length;i++){
            numbers[i].classList.add('theme3_keys')
        }
        title.classList.add('theme3_title');
        range.classList.add('theme3_range');
    }
