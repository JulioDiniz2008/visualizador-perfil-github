import { fetchUserProfile } from './api.js';
import { validateUserInput, validateApiResponse } from './validators.js';
import { 
    getDOMElements, 
    showLoadingState, 
    clearResults, 
    renderUserProfile, 
    showError 
} from './ui.js';

const { btnSearch, inputSearch, profileResults } = getDOMElements();

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    
    const inputValidation = validateUserInput(userName);
    if (!inputValidation.isValid) {
        showError(inputValidation.message);
        return;
    }

    try {
        showLoadingState(profileResults);

        
        const userData = await fetchUserProfile(userName);

        
        const apiValidation = validateApiResponse(userData);
        if (!apiValidation.isValid) {
            showError(apiValidation.message);
            clearResults(profileResults);
            return;
        }

        
        renderUserProfile(userData, profileResults);
        console.log(userData);

    } catch (error) {
        console.error(error);
        showError('Ocorreu um erro ao buscar o perfil do usuário. Por favor tente novamente mais tarde.');
        clearResults(profileResults);
    }
});
