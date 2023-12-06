const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const match_span = document.querySelector('label[for="password"] span')

password.addEventListener('input', (e) => {
    console.log(confirm_password.value)
    if(e.target.value == confirm_password.value){
        console.log("success");
        password.classList.replace('error', 'success')
        confirm_password.classList.replace('error', 'success')
        match_span.style.visibility = 'hidden';
    }else{
        password.classList.remove('success');
        confirm_password.classList.remove('success');
        password.classList.add('error');
        confirm_password.classList.add('error');
        match_span.style.visibility = 'visible';
    }
   
})

confirm_password.addEventListener('input', (e) => {
    if(e.target.value == password.value){
        console.log("success")
        password.classList.replace('error', 'success')
        confirm_password.classList.replace('error', 'success')
        match_span.style.visibility = 'hidden';
    }else{
        password.classList.remove('success');
        confirm_password.classList.remove('success');
        password.classList.add('error');
        confirm_password.classList.add('error');
        match_span.style.visibility = 'visible';
    }
})