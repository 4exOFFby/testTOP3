const test = () => {
  const form = document.querySelector('[data-form="form"]');
  const firstName = document.querySelector('[data-form="firstName"]');
  const lastName = document.querySelector('[data-form="lastName"]');
  const email = document.querySelector('[data-form="email"]');
  const password = document.querySelector('[data-form="password"]');
  const confirmPassword = document.querySelector('[data-form="confirm-password"]');

  firstName.addEventListener('input', () => {
    let pattern = /^[a-zA-Z'][^0-9]+[a-zA-Z']?$/;
    if (firstName.value.match(pattern)) {
      firstName.setCustomValidity('');
      firstName.classList.add('is-accept');
    } else {
      firstName.setCustomValidity('Имя должно быть длиннее 1 символа и содержать только латинские буквы');
      firstName.classList.remove('is-accept');
      firstName.classList.add('is-wrong');
    }
  });

  lastName.addEventListener('input', () => {
    let pattern = /^[a-zA-Z'][^0-9]+[a-zA-Z']?$/;
    if (lastName.value.match(pattern)) {
      lastName.setCustomValidity('');
      lastName.classList.add('is-accept');
    } else {
      lastName.setCustomValidity('Имя должно быть длиннее 1 символа и содержать только латинские буквы');
      lastName.classList.remove('is-accept');
      lastName.classList.add('is-wrong');
    }
  });

  email.addEventListener('input', () => {
    let pattern = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
    if (email.value.match(pattern)) {
      email.setCustomValidity('');
      email.classList.add('is-accept');
    } else {
      email.setCustomValidity('Некорректный адрес электронной почты');
      email.classList.remove('is-accept');
      email.classList.add('is-wrong');
    }
  });


  password.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{8,45}$/;
    if (password.value.match(pattern)) {
      password.setCustomValidity('');
      password.classList.add('is-accept');
    } else {
      password.setCustomValidity('Пароль должен быть длинне 8 символов, содержать цифру, букву в малом и большом регистре');
      password.classList.remove('is-accept');
      password.classList.add('is-wrong');
    }
  });

  confirmPassword.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{8,45}$/;
    if (confirmPassword.value.match(pattern)) {
      confirmPassword.setCustomValidity('');
      confirmPassword.classList.add('is-accept');
    } else {
      confirmPassword.setCustomValidity('Пароль должен быть длинне 8 символов, содержать цифру, букву в малом и большом регистре');
      confirmPassword.classList.remove('is-accept');
      confirmPassword.classList.add('is-wrong');
    }
  });
};

export {test};
