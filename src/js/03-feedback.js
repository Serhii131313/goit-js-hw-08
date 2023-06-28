import throttle from 'lodash.throttle';

// Отримуємо посилання на форму та її елементи
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Отримуємо поточний стан сховища
const storedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// Заповнюємо поля форми зі збереженими значеннями
emailInput.value = storedState.email || '';
messageInput.value = storedState.message || '';

// Функція для збереження стану форми у локальне сховище
const saveFormState = throttle(() => {
    const state = {
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

// Обробник події input, який зберігає стан форми
form.addEventListener('input', saveFormState);

// Обробник події submit форми
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Очищуємо сховище
    localStorage.removeItem('feedback-form-state');
    // Очищуємо поля форми
    emailInput.value = '';
    messageInput.value = '';
    // Виводимо об'єкт з поточними значеннями у консоль
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    };
    console.log(formData);
});