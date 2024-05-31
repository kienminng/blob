<template>
    <section class="container">
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
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                    aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                </label>
            </div>

            <!-- Submit button -->
            <button type= "submit"  data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Register</button>
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
                this.$router.push('/')

            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>