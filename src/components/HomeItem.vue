<template>
  <div class="profile mt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div class="card" style="width: 18rem">
            <img :src="user.profileimage" class="card-img-top" alt="..." />
          </div>
        </div>

        <div class="col-md-6">
          <ul class="ms-5">
            <li class="mb-4">
              <span>نام : </span><span>{{ user.name }}</span>
            </li>
            <li class="mb-4">
              <span>نام کاربری : </span><span>{{ user.username }}</span>
            </li>
            <li class="mb-4">
              <span>ایمیل : </span><span>{{ user.email }}</span>
            </li>
            <li class="mb-4">
              <span>تاریخ عضویت : </span><span>{{ user.registerdate }}</span>
            </li>
            <router-link
              to="/profile/edit"
              class="btn btn-success w-50"
              @click="showedit"
              >برای ویرایش کلیک کنید</router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />

  <div v-if="namayeshedit" class="card w-50 mx-auto">
    <div class="card-body">
      <div
        v-if="namayeshalert"
        class="alert alert-danger w-100 mx-auto"
        role="alert"
      >
        لطفا کد تاییدیه ایمیل را عدد 1234 قرار دهید
      </div>
      <div class="userform mt-5">
        <div class="container">
          <form @submit.prevent="validation">
            <div class="mb-3">
              <label for="name" class="form-label">نام :</label>
              <input
                v-model="name"
                type="text"
                class="form-control w-100"
                id="name"
                placeholder="نام خود را وارد کنید .."
              />
            </div>

            <div class="mb-3">
              <label for="username" class="form-label">نام کاربری :</label>
              <input
                v-model="username"
                type="text"
                class="form-control w-100"
                id="username"
                placeholder="نام کاربری خود را وارد کنید .."
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">ایمیل :</label>
              <input
                v-model="email"
                type="email"
                class="form-control w-100"
                id="email"
              />
            </div>

            <div class="mb-3">
              <label for="taeedie" class="form-label">تاییدیه ایمیل : </label>
              <input
                type="text"
                class="form-control w-100"
                v-model="taeedieemail"
                id="taeedie"
              />
              <span class="text-danger"
                >کد تاییدیه ایمیل :<span class="text-danger">1234</span></span
              >
            </div>

            <div class="mb-3">
              <label for="date" class="form-label">تاریخ عضویت :</label>
              <input
                v-model="date"
                type="date"
                class="form-control w-100"
                id="date"
                disabled
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">انتخاب عکس کاربر :</label>
              <select class="form-select w-100" v-model="userimage">
                <option
                  value="https://inkareha.com/wp-content/uploads/2020/07/passport-photo-action-FarhadMomtazbaf.jpg"
                >
                  عکس اول
                </option>
                <option
                  value="http://sepiaphoto.ir/wp-content/uploads/2019/10/1-1024x741.jpg"
                >
                  عکس دوم
                </option>
              </select>

              <button type="submit" class="btn btn-success mt-3 w-100">
                ویرایش
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />
</template>

<script>
import { reactive, ref } from "vue";
import Swal from "sweetalert2";
export default {
  setup() {
    const user = reactive({
      name: "armin",

      username: "armindev",

      email: "armin.beikshahi@gmail.com",

      registerdate: "1401/01/01",

      profileimage:
        "https://inkareha.com/wp-content/uploads/2020/07/passport-photo-action-FarhadMomtazbaf.jpg",
    });

    const name = ref("");
    const username = ref("");
    const email = ref("");
    const date = ref("");
    const userimage = ref("");
    const taeedieemail = ref("");
    const namayeshalert = ref(false);
    const namayeshedit = ref(false);

    name.value = user.name;
    username.value = user.username;
    email.value = user.email;
    date.value = user.registerdate;
    userimage.value = user.profileimage;

    function validation() {
      if (taeedieemail.value == "") {
        namayeshalert.value = true;
      }

      if (taeedieemail.value !== "" && /^1234$/.test(taeedieemail.value)) {
        user.name = name.value;
        user.username = username.value;
        user.email = email.value;
        user.registerdate = date.value;
        user.profileimage = userimage.value;

        namayeshalert.value = false;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "ویرایش انجام شد",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    validation();

    function showedit() {
      namayeshedit.value = true;
    }

    return {
      user,
      name,
      username,
      email,
      date,
      userimage,
      validation,
      namayeshalert,
      taeedieemail,
      showedit,
      namayeshedit,
    };
  },
};
</script>

<style>
html {
  direction: rtl !important;
}
</style>
