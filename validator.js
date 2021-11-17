var lis = document.querySelectorAll('input')
var a = document.getElementById('name')
for (let i = 0;i < lis.length; i++) {
    const a= 'hello'
    lis[i].addEventListener('click',function(e) {
        lis[i].removeAttribute('placeholder')
        lis[i].style.backgroundColor = 'rgb(206, 204, 202)'
        
    })
    lis[i].addEventListener("blur",function() {
       if(!lis[i].placeholder){
           lis[i].placeholder = lis[i].id
       }
       lis[i].style.backgroundColor = ''
    })
}
function validator(options) {
    var formElement = document.getElementById(options.form)
    function validatos(element,input) {
        var input = document.getElementById(element.selector)
        var err = element.test(input.value)
        console.log(err)
    }

    formElement.onsubmit = function(e){
        options.rules.forEach(element => {
            var input = document.getElementById(element.selector)
            if(!element.value){
                e.preventDefault();
                validatos(element,input)
            }
            
        })
    }    
    if(formElement){
        options.rules.forEach(element => {
            var input = document.getElementById(element.selector)
            if(input){
                input.onblur = function() {
                  validatos(element,input)
                }
            }
        });
    }
}
validator.isRequired= function (selector,message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
validator.isEmail= function (selector,message) {
    return{
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}
validator.isPass = function(selector,min) {
    return {
        selector: selector,
        test: function(value) {
            return value>= min ? undefined : 'Vui lòng nhập đủ số kí tự'
        }

    }
}
validator.check = function(selector,confirm,message) {
    return {
        selector: selector,
        test: function (value) {
            return value === confirm() ? undefined : message || 'vui lòng nhập đúng trường này'
        }
    }
}
