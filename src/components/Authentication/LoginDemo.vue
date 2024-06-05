<template>
    <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style="z-index: 2000;">
        <div class="container-fluid">
            <!-- Navbar brand -->
            <a class="navbar-brand nav-link" target="_blank">
                <strong>BLog</strong>
            </a>
            <button class="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

        </div>
    </nav>
    <div id="intro" class="bg-image shadow-2-strong">
        <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.8);">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-md-8">
                        <form class="bg-white rounded shadow-5-strong p-5">
                            
                            <!-- Email input -->
                            <div class="form-outline mb-4" data-mdb-input-init>
                                <input type="text" id="form1Example1" class="form-control" />
                                <label class="form-label" for="form1Example1">Username</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4" data-mdb-input-init>
                                <input type="password" id="form1Example2" class="form-control" />
                                <label class="form-label" for="form1Example2">Password</label>
                            </div>

                            <!-- 2 column grid layout for inline styling -->
                            <div class="row mb-4">
                                <div class="col d-flex justify-content-center">
                                    <!-- Checkbox -->
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3"
                                            checked />
                                        <label aria-disabled="true" class="form-check-label" for="form1Example3">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <div class="col text-center">
                                    <!-- Simple link -->
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block" data-mdb-ripple-init>Sign
                                in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService';
export default {
    name: "demo",
    data() {
        return {
            passwordError: false,
            usernameError: false,
            checkCount: 0
        }
    },
    computed: {
        Authentication() {
            return this.$store.state.Authenticaion
        }

    },
    watch: {
    },
    methods: {
        login(event) {

            event.preventDefault();
            const data = this.Authenticaion;
            AuthenticationService.login(data)
                .then(response => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken")
                    localStorage.setItem("token", response.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    localStorage.setItem("username" , response.data.username);
                    this.$router.push("/")
                }).catch(e => {
                    console.log(e)
                })
        },
        checkForm: function (e) {
            this.count = 0;
            if (!this.Authenticaion.usernameOrEmail) {
                this.usernameError = true;
            } else {
                this.usernameError = false;
                this.count++;
            }
            if (!this.Authenticaion.password) {
                this.passwordError = true;
            } else {
                this.passwordError = false;
                this.count++
            }
            console.log(this.Errors)
            if (this.count == 2) {
                this.login(e);
            }
            e.preventDefault();
        }
    }
}
</script>
<style>
#intro {
    background-color: #fff !important;
    height: 100vh;
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
    #intro {
        margin-top: -58.59px;
    }
}

.navbar .nav-link {
    color: #fff !important;
}
</style>