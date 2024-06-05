<template>
    <div>

    </div>
    <section class="container col-4" style="margin-top: 100px; border-radius: 1px;">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">

            <li class="nav-item" role="presentation">
                <router-link to="/login">
                    <a class="nav-link" id="tab-register" data-mdb-pill-init role="tab" aria-controls="pills-register"
                        aria-selected="false">Login</a>
                </router-link>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-mdb-pill-init role="tab" aria-controls="pills-login"
                    aria-selected="true">Register</a>
            </li>
        </ul>
        <form id="registrationForm" @submit="register($event)">
            <div class="text-center mb-3">
                <p>Sign up</p>
            </div>

            <!-- Username input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" v-model="RegisterForm.username" />
                <label class="form-label" for="registerUsername">Username</label>
                <p v-show="this.errorForm.username != ''" style="color: red !important;"> {{ this.errorForm.username }}</p>
            </div>

            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" v-model="RegisterForm.email" />
                <label class="form-label" for="registerEmail">Email</label>
                <p v-show="this.errorForm.email != ''" style="color: red !important;"> {{ this.errorForm.email }}</p>
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" v-model="RegisterForm.password" />
                <label class="form-label" for="registerPassword">Password</label>
                <p v-show="this.errorForm.password != ''" style="color: red !important;"> {{ this.errorForm.password }}</p>
            </div>

            <!-- Repeat Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control"
                    v-model="RegisterForm.repeatPassword" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                <p v-show="this.errorForm.repeatPassword != ''" style="color: red !important;"> {{
                    this.errorForm.repeatPassword}} </p>
            </div>

            <!-- adress input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerAddress" class="form-control" v-model="RegisterForm.address" />
                <label class="form-label" for="registerAddress">Address</label>
                <p v-show="this.errorForm.address != ''" style="color: red !important;"> {{ this.errorForm.address }}</p>
            </div>


            <!-- Phone number input -->
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" v-model="RegisterForm.phoneNumber" />
                <label class="form-label" for="registerName">phone Number</label>
                <p v-if="this.errorForm.phoneNumber" style="color: red !important;"> {{ this.errorForm.phoneNumber }}
                </p>
            </div>

            <!-- Checkbox -->
            <!-- <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                    aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                </label>
            </div> -->
            <!-- Submit button -->
            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3"
                style=" margin-right: 10px !important">Register</button>
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
            RegisterForm: {
                "username": '',
                "email": '',
                "password": '',
                "repeatPassword": '',
                "address": '',
                "phoneNumber": '',
            },
            errorForm: {
                "username": '',
                "email": '',
                "password": '',
                "repeatPassword": '',
                "address": '',
                "phoneNumber": '',
            },
            submitted: false
        }
    },
    computed: {

    },
    methods: {
        clear() {
            this.RegisterForm.email = '',
                this.RegisterForm.username = '',
                this.RegisterForm.password = '',
                this.RegisterForm.repeatPassword = '',
                this.RegisterForm.address = '',
                this.RegisterForm.phoneNumber = ''

            this.errorForm.email = '',
                this.errorForm.username = '',
                this.errorForm.password = '',
                this.errorForm.repeatPassword = '',
                this.errorForm.address = '',
                this.errorForm.phoneNumber = ''
        },

        register(event) {
            event.preventDefault();
            if (this.validateForm()) {
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

        },

        validateForm() {
            let check = 0;
            if (this.RegisterForm.username === '') {
                this.errorForm.username = "Username is valid"
                check = 1;
            }
            if (this.RegisterForm.email === '') {
                this.errorForm.email = "email is valid"
                check = 1;
            }
            if (this.RegisterForm.password === '') {
                this.errorForm.password = "password is valid"
                check = 1;
            }
            if (this.RegisterForm.password != this.RegisterForm.repeatPassword ||  this.RegisterForm.repeatPassword === '') {
                this.errorForm.repeatPassword = "your repeat password is valid"
                check = 1;
            }
            if (this.RegisterForm.address === '') {
                this.errorForm.address = "address is valid"
                check = 1;
            }
            if (this.RegisterForm.phoneNumber === '' || this.RegisterForm.phoneNumber.length < 10) {
                this.errorForm.phoneNumber = "Username is valid"
                check = 1;
            }
    
            console.log(this.errorForm)
            if(check == 1 ){
                return false;
            }
            return true;
            
        },

        clearFormValidate() {

        }
    }
}
</script>