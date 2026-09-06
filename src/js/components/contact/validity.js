export const useValidity = () => {
    const initValidation = () => {
        const form = document.querySelector('.get-started__form');
        if (!form) return;

        const fields = form.querySelectorAll('input, textarea');
        const successEl = form.querySelector('.get-started__form-success');
        const submitButton = form.querySelector('button[type="submit"]');

        const errorMessages = {
            'first-name': {
                valueMissing: 'Please enter the name',
                tooShort: 'The name must contain at least 2 characters.',
            },
            'last-name': {
                valueMissing: 'Please enter the last name',
                tooShort: 'The last name must contain at least 2 characters.',
            },
            email: {
                valueMissing: 'Please enter your email address',
                typeMismatch: 'Enter the correct email address',
            },
            'phone-number': {
                valueMissing: 'Please enter your phone number',
                typeMismatch: 'Enter the correct phone number',
                patternMismatch: 'Enter the correct phone number',
            },
            message: {
                valueMissing: 'Please enter the message',
                tooShort: 'The message must contain at least 100 characters.',
            },
        };

        const getErrorMessage = (field) => {
            const { validity } = field;
            const messages = errorMessages[field.name];

            if (!messages) return 'Incorrect value';

            if (validity.valueMissing) return messages.valueMissing;
            if (validity.tooShort) return messages.tooShort;
            if (validity.typeMismatch) return messages.typeMismatch;
            if (validity.patternMismatch) return messages.patternMismatch || messages.typeMismatch;

            return 'Incorrect value';
        };

        const getWrapper = (field) => field.closest('.get-started__form-label');

        const getErrorEl = (field) => {
            const wrapper = getWrapper(field);
            return wrapper ? wrapper.querySelector('.get-started__form-error') : null;
        };

        const showError = (field) => {
            const errorEl = getErrorEl(field);
            field.classList.add('get-started__form-input--invalid');

            if (errorEl) {
                errorEl.textContent = getErrorMessage(field);
                errorEl.classList.add('get-started__form-error--visible');
            }
        };

        const hideError = (field) => {
            const errorEl = getErrorEl(field);
            field.classList.remove('get-started__form-input--invalid');

            if (errorEl) {
                errorEl.textContent = '';
                errorEl.classList.remove('get-started__form-error--visible');
            }
        };

        const validateField = (field) => {
            if (field.validity.valid) {
                hideError(field);
                return true;
            }
            showError(field);
            return false;
        };

        const showSuccessMessage = () => {
            if (!successEl) return;

            successEl.textContent = 'Thank you! Your message has been sent successfully.';
            successEl.classList.add('get-started__form-success--visible');

            setTimeout(() => {
                successEl.classList.remove('get-started__form-success--visible');
                successEl.textContent = '';
            }, 5000);
        };

        const resetFormState = () => {
            form.reset();

            fields.forEach((field) => hideError(field));
        };

        fields.forEach((field) => {
            field.addEventListener('blur', () => validateField(field));

            field.addEventListener('input', () => {
                if (field.classList.contains('get-started__form-input--invalid')) {
                    validateField(field);
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isFormValid = true;
            let firstInvalidField = null;

            fields.forEach((field) => {
                const isValid = validateField(field);
                if (!isValid) {
                    isFormValid = false;
                    if (!firstInvalidField) firstInvalidField = field;
                }
            });

            if (isFormValid) {

                showSuccessMessage();
                resetFormState();

                if (submitButton) submitButton.focus();
            } else if (firstInvalidField) {
                firstInvalidField.focus();
            }
        });
    };

    document.addEventListener('DOMContentLoaded', initValidation);
};