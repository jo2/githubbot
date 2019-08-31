import config from 'config';
import { userService } from '../_services';
import {authHeader} from "../_helpers";

export const repoService = {
    createRepository
};

function createRepository(repository) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(repository),
    };

    return fetch(`${config.apiUrl}/createRepository`, requestOptions)
        .then(handleResponse)
        .then(repo => {
            localStorage.setItem('repository', JSON.stringify(repo));
            return repo;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}