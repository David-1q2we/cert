document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Перевіряємо, чи заповнені всі поля
    if (!name || !email) {
        event.preventDefault(); // Перешкоджаємо відправці форми
        alert("Будь ласка, заповніть всі поля!");
    } else {
        alert("Форма успішно відправлена! Дякуємо за реєстрацію.");
    }
});

// Анімація кнопки "Записатися"
document.querySelector(".btn").addEventListener("click", function() {
    // Зміна кольору кнопки
    this.style.backgroundColor = "#e63946"; 
    this.innerText = "Зареєстровано!"; // Зміна тексту кнопки

    // Повернення до початкового стану через 2 секунди
    setTimeout(() => {
        this.style.backgroundColor = "#ff6347";
        this.innerText = "Записатися";
    }, 2000);