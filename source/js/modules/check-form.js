const test = () => {
  const form = document.querySelector('[data-form="form"]');
  const firstName = document.querySelector('[data-form="firstName"]');
  const lastName = document.querySelector('[data-form="lastName"]');
  const email = document.querySelector('[data-form="email"]');
  const password = document.querySelector('[data-form="password"]');
  const confirmPassword = document.querySelector('[data-form="confirm-password"]');

  firstName.addEventListener('input', () => {
    if (firstName.value.length < 5) {
      firstName.classList.add('is-wrong');
    } else {
      firstName.classList.add('is-accept');
    }
  });

  lastName.addEventListener('input', () => {
    if (lastName.value.length < 10) {
      lastName.classList.add('is-wrong');
    } else {
      lastName.classList.add('is-accept');
    }
  });

  email.addEventListener('input', () => {
    let pattern = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
    if (email.value.match(pattern)) {
      email.classList.add('is-accept');
    } else {
      email.classList.add('is-wrong');
    }
  });


  password.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{7,14}$/;
    if (password.value.match(pattern)) {
      password.classList.add('is-accept');
    } else {
      password.classList.add('is-wrong');
    }
  });

  confirmPassword.addEventListener('input', () => {
    let pattern = /^[A-Za-z]\w{7,14}$/;
    if (confirmPassword.value.match(pattern)) {
      confirmPassword.classList.add('is-accept');
    } else {
      confirmPassword.classList.add('is-wrong');
    }
  });
};

export {test};
