<template>
    <form class="form-horizontal">
        <fieldset>
            <!-- Form Name -->
            <legend>Repository Registration Form</legend>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Team and Repository Name</label>
                <div class="col-md-4">
                    <input v-model="repository.repoName" type="text" placeholder="Team and Repository Name" class="form-control input-md" required="">
                </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
                <label class="col-md-4 control-label">Description</label>
                <div class="col-md-4">
                    <textarea v-model="repository.description" class="form-control">Say somethong about your project</textarea>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">You</label>
                <div class="col-md-4">
                    <input v-model="repository.creator" type="text" placeholder="Your GitHub Name" class="form-control input-md" required="">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 1</label>
                <div class="col-md-4">
                    <input v-model="repository.teammateOne" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 2</label>
                <div class="col-md-4">
                    <input v-model="repository.teammateTwo" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 3</label>
                <div class="col-md-4">
                    <input v-model="repository.teammateThree" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 4</label>
                <div class="col-md-4">
                    <input v-model="repository.teammateFour" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Button (Double) -->
            <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-8">
                    <button v-on:click="confirm()" class="btn btn-success">Confirm</button>
                    <button v-on:click="cancel()" class="btn btn-danger">Cancel</button>
                </div>
            </div>

        </fieldset>
    </form>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'RegisterProject',
        data() {
            return {
                repository: {
                    repoName: '',
                    creator: '',
                    teammateOne: '',
                    teammateTwo: '',
                    teammateThree: '',
                    teammateFour: '',
                    description: ''
                }
            };
        },
        methods: {
            ...mapActions('repository', ['createRepository']),
            confirm() {
                if (this.account.user != null) {
                    this.createRepository(this.repository);
                }
            },
            cancel() {
                this.repository = undefined;
            },
            ...mapActions('repo', {
                createRepository: 'createRepository'
            },)
        },
        computed: {
            ...mapState({
                account: state => state.account,
                repo: state => state.repository
            })
        }
    };
</script>