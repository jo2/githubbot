<template>
    <form class="form-horizontal" v-on:submit.prevent="confirm">
        <fieldset>
            <!-- Form Name -->
            <legend>Repository Registration Form</legend>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Team and Repository Name</label>
                <div class="col-md-8">
                    <input v-model="repository.repoName" type="text" placeholder="Team and Repository Name" class="form-control input-md" required="">
                </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
                <label class="col-md-4 control-label">Description</label>
                <div class="col-md-8">
                    <textarea v-model="repository.description" class="form-control">Say something about your project</textarea>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">You</label>
                <div class="col-md-8">
                    <input v-model="repository.creator" type="text" placeholder="Your GitHub Name" class="form-control input-md" required="">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 1</label>
                <div class="col-md-8">
                    <input v-model="repository.teammateOne" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 2</label>
                <div class="col-md-8">
                    <input v-model="repository.teammateTwo" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 3</label>
                <div class="col-md-8">
                    <input v-model="repository.teammateThree" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label">Teammate 4</label>
                <div class="col-md-8">
                    <input v-model="repository.teammateFour" type="text" placeholder="GitHub Name" class="form-control input-md">
                </div>
            </div>

            <!-- Button (Double) -->
            <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-8">
                    <button type="submit" class="btn btn-success">Confirm</button>
                    <button type="reset" class="btn btn-danger">Cancel</button>
                </div>
            </div>

        </fieldset>
    </form>
</template>

<script>
    import { mapState } from 'vuex';
    import { repoService} from "../_services";

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
            confirm: function(e) {
                console.log('click confirm');
                if (this.account.user != null) {
                    repoService.createRepository(this.repository);
                }
            },
            cancel: function() {
                console.log('canceled');
                this.repository = undefined;
            }
        },
        computed: {
            ...mapState({
                account: state => state.account,
                repo: state => state.repository
            })
        }
    };
</script>