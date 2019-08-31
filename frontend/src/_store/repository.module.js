import { repoService } from "../_services";

const repo = JSON.parse(localStorage.getItem('repository'));
const state = repo;

const actions = {
    createRepository({ dispatch, commit }, { repoName, description, creator, teammateOne, teammateTwo, teammateThree, teammateFour }) {
        repoService.createRepository(repoName, description, creator, teammateOne, teammateTwo, teammateThree, teammateFour)
            .then(
                repository => {
                    console.log(repository);
                },
                error => {
                    console.log(error);
                }
            );
    }
};

export const repository = {
    namespaced: true,
    state,
    actions
};