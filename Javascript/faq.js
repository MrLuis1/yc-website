const categories = document.querySelectorAll('#faq-items .categorie');
const containerQuestions = document.querySelectorAll('.container-questions');
const questions = document.querySelectorAll('.questions .item-question');
let dataSet = null;

categories.forEach((categorie)=>{
    categorie.addEventListener('click', (e)=>{

        categories.forEach((element)=>{
            element.classList.remove('activa');
        })
        e.currentTarget.classList.toggle('activa');
        dataSet = categorie.dataset.categories;
        

        // Se activa el contenedor de preguntas

        containerQuestions.forEach((container)=>{
            if(container.dataset.categories === dataSet){
                container.classList.add('activo');
            }else{
                container.classList.remove('activo');
            }
        })
    })
});

questions.forEach((question)=>{
    question.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('activa');

        const anwser = question.querySelector('.anwser');
        const height = anwser.scrollHeight;
        
        if(!anwser.style.maxHeight){
            // En caso de que la propiedad no tenga valor se agrega uno
            anwser.style.maxHeight = height + "px";
        }else{
            // Si la propiedad tiene un valor se ejecuta esto
            anwser.style.maxHeight = null;
        }

        questions.forEach((element)=>{
            if(question !== element){
                element.classList.remove('activa');
                element.querySelector('.anwser').style.maxHeight = null;
            }
        })

    });
});