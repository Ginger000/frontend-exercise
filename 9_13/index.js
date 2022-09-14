const agreeBtn = document.querySelector('.register');
const checkBox = document.querySelector('.agreeCheck');
console.log(agreeBtn);
console.log(checkBox);

agreeBtn.addEventListener('click', () => {
    checkBox.checked = true;
});
