
 // Error handler functions
 function showError(inputEl, message) {
    const group = inputEl.closest('.input_group');
    const errorSpan = group.querySelector('.error');
    if (errorSpan) errorSpan.innerText = message;
  }

  function clearFieldError(inputEl) {
    const group = inputEl.closest('.input_group');
    const errorSpan = group.querySelector('.error');
    if (errorSpan) errorSpan.innerText = '';
  }

  // Individual field validators
  function validateName(inputEl) {
    const value = inputEl.value.trim();
    if (value.length < 3) {
      showError(inputEl, 'Name must be at least 3 characters.');
      return false;
    }
    return true;
  }

  function validateEmail(inputEl) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(inputEl.value.trim())) {
      showError(inputEl, 'Enter a valid email address.');
      return false;
    }
    return true;
  }

  function validatePhone(inputEl) {
    if (!/^\d{10}$/.test(inputEl.value.trim())) {
      showError(inputEl, 'Phone must be 10 digits.');
      return false;
    }
    return true;
  }

  function validatePasswordMatch(passEl, confirmEl) {
    if (passEl.value !== confirmEl.value) {
      showError(confirmEl, 'Passwords do not match.');
      return false;
    }
    return true;
  }

  function validatePasswordLength(inputEl) {
    if (inputEl.value.length < 6) {
      showError(inputEl, 'Password must be at least 6 characters.');
      return false;
    }
    return true;
  }

  // Form validity checker
  function checkFormValidity() {
    const nameValid = validateName(document.getElementById('name'));
    const fatherValid = validateName(document.getElementById('father_name'));
    const motherValid = validateName(document.getElementById('mother_name'));
    const emailValid = validateEmail(document.getElementById('email'));
    const phoneValid = validatePhone(document.getElementById('phone'));
    const passwordValid = validatePasswordLength(document.getElementById('create_pass'));
    const matchValid = validatePasswordMatch(
      document.getElementById('create_pass'),
      document.getElementById('confirm_pass')
    );

    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.classList.remove('valid', 'invalid');
    if (nameValid && fatherValid && motherValid && emailValid && phoneValid && passwordValid && matchValid) {
      submitBtn.classList.add('valid');
    } else {
      submitBtn.classList.add('invalid');
    }
  }

  // Attach blur listeners
  document.getElementById('name').addEventListener('blur', function () {
    validateName(this); checkFormValidity();
  });
  document.getElementById('father_name').addEventListener('blur', function () {
    validateName(this); checkFormValidity();
  });
  document.getElementById('mother_name').addEventListener('blur', function () {
    validateName(this); checkFormValidity();
  });
  document.getElementById('email').addEventListener('blur', function () {
    validateEmail(this); checkFormValidity();
  });
  document.getElementById('phone').addEventListener('blur', function () {
    validatePhone(this); checkFormValidity();
  });
  document.getElementById('create_pass').addEventListener('blur', function () {
    validatePasswordLength(this); checkFormValidity();
  });
  document.getElementById('confirm_pass').addEventListener('blur', function () {
    validatePasswordMatch(
      document.getElementById('create_pass'),
      document.getElementById('confirm_pass')
    ); checkFormValidity();
  });

  // Clear errors on input
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      clearFieldError(input);
      checkFormValidity();
    });
  });