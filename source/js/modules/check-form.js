const checkFormField = () => {
  const form = document.querySelector('[data-form="form"]');
  const firstName = document.querySelector('[data-form="firstName"]');
  const lastName = document.querySelector('[data-form="lastName"]');
  const email = document.querySelector('[data-form="email"]');
  const password = document.querySelector('[data-form="password"]');
  const confirmPassword = document.querySelector('[data-form="confirm-password"]');
  const firstNameLabel = document.querySelector('[data-form="firstNameLabel"]');
  const lastNameLabel = document.querySelector('[data-form="lastNameLabel"]');
  const emailLabel = document.querySelector('[data-form="emailLabel"]');
  const passwordLabel = document.querySelector('[data-form="passwordLabel"]');
  const confirmPasswordLabel = document.querySelector('[data-form="confirmPasswordLabel"]');
  const successMessage = document.querySelector('.form-success');



  firstName.addEventListener('input', () => {
    let pattern = /^[a-zA-Z'][^0-9]+[a-zA-Z']?$/;
    if (firstName.value.match(pattern)) {
      firstName.setCustomValidity('');
      firstName.classList.add('is-accept');
      firstNameLabel.classList.add('is-accepted');
    } else {
      firstName.setCustomValidity('Имя должно быть длиннее 1 символа и содержать только латинские буквы');
      firstName.classList.remove('is-accept');
      firstNameLabel.classList.remove('is-accepted');
      firstName.classList.add('is-wrong');
    }
  });

  lastName.addEventListener('input', () => {
    let pattern = /^[a-zA-Z'][^0-9]+[a-zA-Z']?$/;
    if (lastName.value.match(pattern)) {
      lastName.setCustomValidity('');
      lastName.classList.add('is-accept');
      lastNameLabel.classList.add('is-accepted');
    } else {
      lastName.setCustomValidity('Фамилия должно быть длиннее 1 символа и содержать только латинские буквы');
      lastName.classList.remove('is-accept');
      lastNameLabel.classList.remove('is-accepted');
      lastName.classList.add('is-wrong');
    }
  });

  email.addEventListener('input', () => {
    let pattern = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
    if (email.value.match(pattern)) {
      email.setCustomValidity('');
      email.classList.add('is-accept');
      emailLabel.classList.add('is-accepted');
    } else {
      email.setCustomValidity('Некорректный адрес электронной почты');
      email.classList.remove('is-accept');
      emailLabel.classList.remove('is-accepted');
      email.classList.add('is-wrong');
    }
  });


  password.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{8,45}$/;
    if (password.value.match(pattern)) {
      password.setCustomValidity('');
      password.classList.add('is-accept');
      passwordLabel.classList.add('is-accepted');
    } else {
      password.setCustomValidity('Пароль должен быть длинне 8 символов, содержать цифру, букву в малом и большом регистре');
      password.classList.remove('is-accept');
      passwordLabel.classList.remove('is-accepted');
      password.classList.add('is-wrong');
    }
  });

  confirmPassword.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{8,45}$/;
    if (confirmPassword.value.match(pattern)) {
      confirmPassword.setCustomValidity('');
      confirmPassword.classList.add('is-accept');
      confirmPasswordLabel.classList.add('is-accepted');
    } else {
      confirmPassword.setCustomValidity('Пароль должен быть длинне 8 символов, содержать цифру, букву в малом и большом регистре');
      confirmPassword.classList.remove('is-accept');
      confirmPasswordLabel.classList.remove('is-accepted');
      confirmPassword.classList.add('is-wrong');
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('пароли не совпадают');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('is-success');
    form.reset();
    successMessage.style.display = 'grid';
  });
};

export {checkFormField};
