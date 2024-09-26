<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center pb-5"
    >
      {{ $t("auth.header.login") }}
    </h1>
    <Form
      :validation-schema="schema"
      class="space-y-4 md:space-y-6"
      @submit="SubmitLoginForm"
      v-slot="{ meta }"
    >
      <div>
        <sw-input
          :label="$t('auth.field.email')"
          placeholder="name@company.com"
          type="email"
          name="email"
          v-model="email"
        ></sw-input>
      </div>
      <div>
        <sw-input
          :label="$t('auth.field.password')"
          placeholder="••••••••"
          type="password"
          name="password"
          v-model="password"
          required
        ></sw-input>
      </div>
      <sw-seperator :text="$t('auth.extras.or')"></sw-seperator>
      <sw-sso-sign-in></sw-sso-sign-in>
      <div class="flex items-center justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="text-gray-500 dark:text-gray-300">{{
              $t("auth.extras.rememberMe")
            }}</label>
          </div>
        </div>

        <router-link
          :to="{ name: 'auth.reset.password' }"
          class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {{ $t("auth.extras.forogtPassword") }}
        </router-link>
      </div>

      <sw-button :disabled="!meta.valid" size="lg" type="submit" class="w-full h-[42px]" :loading="loadingRequest">{{
        $t("auth.extras.text.login")
      }}</sw-button>

      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        {{ $t("auth.extras.forogtPassword") }}
        <router-link
          :to="{ name: 'auth.register' }"
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          {{ $t("auth.extras.text.signUp") }}
        </router-link>
      </p>
    </Form>
    <sw-toast ref="showToast" divide></sw-toast>
  </div>
</template>

<script setup lang="ts">
import { SwButton, SwInput, SwSeperator, SwSsoSignIn, SwToast } from "@/global";
import { ref } from "vue";
import { Form } from "vee-validate";
import { object, string } from 'yup';

import _ from "lodash";
import AuthService from "@/api/services/auth.service";
import { UserAuthStore } from "@/store/AuthStore/AuthStore";
import { LoginInput } from "@/api/types/auth/types";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const authUser = UserAuthStore();

const validateField = {
  email: {
    showSnackbar: false,
  },
  password: {
    showSnackbar: false,
  },
  authentication_error: {
    showSnackbar: true,
  },
};

var loadingRequest = ref<boolean>(false);
const showToast = ref();

const email = ref();
const password = ref();

const schema = object({
  email: string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  password: string()
    .required("This field is required"),
});

function SubmitLoginForm(
  values : LoginInput,
  event: any  
): void {
  loadingRequest.value = true;

  AuthService.login(values)
    .then((response: any) => {
      let useInfo = response.data;

      loadingRequest.value = false;

      authUser.setAuthUser({
        name: useInfo.data.name,
        email: useInfo.data.email,
        avatar: useInfo.data.avatar,
        userId: useInfo.data.user_id,
        token: useInfo.data.access_token,
      });
      const intendedUrl = route.query.redirect;
      if (intendedUrl !== undefined) {
        window.location.assign( "/" + intendedUrl);
      } else {
        router.push({
          name: "manageWorkspace",
        });
      }
    })
    .catch((error) => {

      loadingRequest.value = false;

      const errors = error.response.data.error;
      if (errors !== undefined) {
        _.each(validateField, (item, key) => {
          if (errors[key] !== undefined) {
            if (!item.showSnackbar) {
              event.setFieldError(key, errors[key][0]);
            } else {
              showToast.value.show("danger", errors[key][0]);

              console.log( showToast.value.visible);
              showToast.value.visible = true;
            }
          }
        });
      }
    });
}
</script>
