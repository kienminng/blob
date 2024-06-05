<template>
    <section class="container" style="margin-top: 100px;">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            
            <li class="nav-item" role="presentation">
                <router-link to="/login">
                <a class="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Login</a>
                </router-link>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Regsster</a>
            </li>
        </ul>
        <form id="registrationForm" @submit="register($event)">
            <div class="text-center mb-3">
                <p>Sign up</p>
            </div>

            <!-- Username input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" v-model="RegisterForm.username"/>
                <label class="form-label" for="registerUsername">Username</label>
            </div>

            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" v-model="RegisterForm.email"/>
                <label class="form-label" for="registerEmail">Email</label>
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" v-model="RegisterForm.password"/>
                <label class="form-label" for="registerPassword">Password</label>
            </div>

            <!-- Repeat Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" v-model="RegisterForm.repeatPassword" />
                <label class="form-label" for="registerRepeatPassword" >Repeat password</label>
            </div>

             <!-- adress input -->
             <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerAddress" class="form-control" v-model="RegisterForm.address"/>
                <label class="form-label" for="registerAddress">Address</label>
            </div>


             <!-- Phone number input -->
             <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" v-model="RegisterForm.phoneNumber"/>
                <label class="form-label" for="registerName">phone Number</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
                    aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                </label>
            </div>
            <!-- Submit button -->
            <button type= "submit"  data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3" style=" margin-right: 10px !important" >Register</button>
            <!---clear button-->
            <button class="btn btn-primary btn-block mb-3" type="button" @click="clear"> clear</button>
            
        </form>
    </section>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService';
export default {
    name: 'Register-form',
    data() {
        return {
            RegisterForm : {
                "username": '',
                "email": '',
                "password" : '',
                "repeatPassword": '',
                "address": '',
                "phoneNumber": '',
            },
            submitted: false
        }
    },
    computed:{

    },
    methods : {
        clear(){
            this.RegisterForm.email = '',
            this.RegisterForm.username = '' ,
            this.RegisterForm.password = '',
            this.RegisterForm.repeatPassword = '',
            this.RegisterForm.address = '',
            this.RegisterForm.phoneNumber = ''
        },

        register(event) {
            event.preventDefault();
            const data = this.RegisterForm;
            console.log(data)
            AuthenticationService.register(data)
            .then(response => {
                console.log(response.data)
                this.submitted = true;
                this.$router.push('/login')

            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>