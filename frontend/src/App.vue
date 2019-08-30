<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse container" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li v-if="account.user != null">
            <router-link class="nav-link" to="/registerProject">Create Project</router-link>
          </li>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="navbar-text">
            {{ account.user == null ? 'Hello' : `Hello ${account.user.username}` }}
          </li>
            <li class="nav-item" v-if="account.user != null">
              <router-link class="nav-link" to="/login">Logout</router-link>
            </li>
            <li class="nav-item" v-else-if="account.user == null">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <h1>GitHub Bot for DO!Hack 2019</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'app',
    computed: {
      ...mapState({
        account: state => state.account,
      })
    },
    methods: {
      ...mapActions({
        clearAlert: 'alert/clear',
      })
    }
  };
</script>
