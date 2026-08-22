export function validateUserInput(userName) {
    if (!userName || userName.trim() === '') {
        return {
            isValid: false,
            message: 'Por favor, digite um nome de usuário do Github.'
        };
    }

    return {
        isValid: true,
        message: ''
    };
}

export function validateApiResponse(response) {
    if (!response) {
        return {
            isValid: false,
            message: 'Usuário não encontrado. Por favor verifique o nome do usuário e tente novamente.'
        };
    }

    return {
        isValid: true,
        message: ''
    };
}
