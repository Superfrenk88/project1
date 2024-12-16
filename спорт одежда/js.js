const button = document.getElementById('toggleButton');
const list = document.getElementById('myList');

button.addEventListener('click', () => {
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'flex';
        button = 'toggleButton';

    } else {
        list.style.display = 'none';
        button = 'toggleButton';

    }
});