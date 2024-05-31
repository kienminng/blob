<template>
    <section class="header container">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form @submit="login($event)">
                    <!-- Email input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="text" id="loginName" class="form-control" v-model="Authenticaion.usernameOrEmail" />
                        <label class="form-label" for="loginName" >Email or username</label>
                    </div>

                    <!-- Password input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" id="loginPassword" class="form-control"  v-model="Authenticaion.password"/>
                        <label class="form-label" for="loginPassword">Password</label>
                    </div>

                    <!-- 2 column grid layout -->
                    <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-3 mb-md-0">
                                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                <label class="form-check-label" for="loginCheck"> Remember me </label>
                            </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">
                            <!-- Simple link -->
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init
                        class="btn btn-primary btn-block mb-4">Sign in</button>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService';
export default {
    name: 'Login-compt',
    data() {
        return {
            Authenticaion: {
                "usernameOrEmail": '',
                "password": ''
            }
        }
    },
    computed :{

    },
    methods : {
        login(event){
            event.preventDefault();
            const data = this.Authenticaion ; 
            AuthenticationService.login(data)
            .then(response => {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("refreshToken",response.data.refreshToken);
                this.$router.push("/")
            }).catch(e=> {
                console.log(e)
            })
        }
    }
}
</script>
<style>
.header {
    margin: 0 auto;
    align-items: center;
    margin-top: 5%;
}

.button {
    display: block;
    width: 100px;
    height: 30px;
    margin: 0 auto
}
</style>