<template>
  <main>
    <div class="login-card">
      <img src="" alt="" />
      <h1>애들아 놀자</h1>
      <input type="text" placeholder="아이디를 입력하세요." />
      <input type="password" placeholder="비밀번호를 입력하세요." />
      <button @click="$router.push({ name: 'Dashboard' })">로그인</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminLogin",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
main {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/images/background/admin-login.jpg") center center
    no-repeat;
  background-size: cover;
  position: relative;
}

.login-card {
  width: 660px;
  height: 770px;
  background: rgba($color: $white, $alpha: 0.5);
  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  box-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.16);
  padding: 100px 40px;
  text-align: center;
  img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
  }
  h1 {
    display: inline-block;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 70px;
    position: relative;
    &:after {
      content: "Admin";
      position: absolute;
      right: -20px;
      top: 0;
      transform: translateX(100%);
      font-size: 18px;
      padding: 5px 20px;
      border-radius: 20px;
      background: $purple-light;
      color: $white;
    }
  }
  input {
    display: block;
    background: $white;
    width: 80%;
    height: 60px;
    border-radius: 50px;
    margin: 0 auto 20px;
    padding: 0 40px;
    color: $black;
    font-weight: 700;
    font-size: 20px;
    &:focus {
      box-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.4);
    }
    &::placeholder {
      color: $gray;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
      box-shadow: 0 0 0 1000px white inset;
    }
    &:last-of-type {
      margin-bottom: 120px;
    }
  }
  button {
    width: 80%;
    height: 60px;
    border-radius: 50px;
    background: $purple;
    color: $white;
    font-size: 24px;
    font-weight: 700;
    &:hover {
      box-shadow: 3px 3px 6px rgba($color: $black, $alpha: 0.4);
    }
  }
}
</style>
