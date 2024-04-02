document.addEventListener('DOMContentLoaded', function() 
{
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) 
    {
        event.preventDefault();        
        const loginInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');       
        const loginValue = loginInput.value.trim();
        const passwordValue = passwordInput.value.trim();      
        if (loginValue === 'admin@gmail.com' && passwordValue === 'admin123') 
        {            
            window.open('../Main/main.html', '_self');
        } 
        else 
        {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Incorrect login or password';
            errorMessage.style.color = 'red';
            form.insertAdjacentElement('afterend', errorMessage);
        }
    });
});
