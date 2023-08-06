const validateEmail = (email: string): boolean => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
};

const validateTelephone = (tel: string): boolean => {
    const pattern = /^\d{9,15}$/;
    return pattern.test(tel);
};

export { validateEmail, validateTelephone };
