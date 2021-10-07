<template>
  <div class="w-full md:flex md:flex-row  text-black overflow-hidden h-screen">
    <div class="hidden md:flex-1  md:bg-hero-login md:flex" />
    <div class="md:flex-1 py-24 object-fit">
      <div class="md:hidden content-center flex flex-col justify-center align-middle">
        <img
          src="../../assets/imgs/logo.png"
          class="w-3/5 mx-auto block"
        >
      </div>
      <div class=" hidden md:flex text-center font-medium mb-5">
        <div
          ref="login"
          class="flex-1 "
          :class="{ active: loginActive }"
          @click="toggleForm('login')"
        >
          Login
        </div>
        <div
          ref="signup"
          class="flex-1"
          :class="{ active: signupActive }"
          @click="toggleForm('register')"
        >
          Signup
        </div>
      </div>
      <h4 class="text-center mb-10">
        Welcome back Admin
      </h4>
      <p class="text-sm ml-16">
        Enter your details to continue
      </p>
      <Form
        v-if="mode === 'login'"
        class="ml-16 mt-8 w-full"        
      >
        <label>Email Address</label>
        <div class="">
          <Field
            name="email"
            type="email"
            :rules="isRequired"
          />
        </div>
        <div class="">
          <ErrorMessage name="email" />
        </div>

        <div>
          <label>Password</label>
          <div class="">
            <Field
              name="password"
              type="password"
              :rules="isRequired"
            />
          </div>
          <div>
            <ErrorMessage name="password" />
          </div>
        </div>
      </Form>

      <Form
        v-if="mode === 'register'"
        class="mx-auto w-full"
      >
        <div>
          <label class="text-left">Name</label>
          <div class="">
            <Field
              name="name"
              type="text"
              :rules="isRequired"
            />
          </div>
          <div class="">
            <ErrorMessage name="name" />
          </div>
        </div>

        <label>Email Address</label>
        <div class="">
          <Field
            name="email"
            type="email"
            :rules="isRequired"
          />
        </div>
        <div class="">
          <ErrorMessage name="email" />
        </div>

        <div>
          <label>Password</label>
          <div class="">
            <Field
              name="password"
              type="password"
              :rules="isRequired"
            />
          </div>
          <div>
            <ErrorMessage name="password" />
          </div>

          <div class="flex justify-around">
            <button
              class=""
              type="submit"
            >
              Register
            </button>

            <small class="">forgot password?</small>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
	import { Form, Field, ErrorMessage } from 'vee-validate';
	export default {
		components: {
			Field,
			Form,
			ErrorMessage,
		},
		data() {
			return {
				mode: 'login',
				loginActive: true,
				signupActive: null,
				isRequired: {},
			};
		},
		methods: {
			toggleForm(option) {
				if (option === this.mode) {
					console.log('stay here');
				} else {
					if (option === 'login') {
						this.loginActive = true;
						this.mode = 'login';
						this.signupActive = false;
					} else {
						this.mode = 'register';
						this.signupActive = true;
						this.loginActive = false;
					}
				}
			},
		},
	};
</script>
