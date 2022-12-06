const $loader = document.querySelector('.form-loader'),
$response = document.querySelector('.form-response'),
$form = document.querySelector('.contact-form'),
$inputs = document.querySelectorAll('.contact-form [required]'),
$formError = document.querySelector('.form-error');

document.addEventListener('keyup', (e)=>{
    if(e.target.matches('.contact-form [required]')){
        let patron = e.target.pattern || e.target.dataset.pattern;

        if(patron && e.target.value !== ""){
            let expresionRegular = new RegExp(patron);
            if(expresionRegular.exec(e.target.value)){
                $formError.classList.add('d-none');
            }else{
                $formError.classList.remove('d-none');
                $formError.innerHTML = `<p><i class="fa-solid fa-triangle-exclamation"></i> <b>Error:</b> Ingrese un dato valido.</p>`
            }
        }
    }
})

document.addEventListener('submit', (e)=>{
    
    const $loader = document.querySelector('.form-loader'),
    $response = document.querySelector('.form-response');

    $loader.classList.remove('d-none');

    setTimeout(() => { 
        $loader.classList.add('d-none');
        $response.classList.remove('d-none');
        $response.innerHTML = "Formulario enviado correctamente";
        $form.reset(); 

        setTimeout(() => {$response.classList.add('d-none')},3000);

    },3000);
})

