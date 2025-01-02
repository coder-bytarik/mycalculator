document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear')) {
                result.value = '';
            }
            else if (button.classList.contains('delete')) {
                result.value = result.value.slice(0, -1);
            }
            else if (button.classList.contains('equal')) {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Hata';
                }
            }
            else {
                result.value += button.textContent;
            }
        });
    });
});