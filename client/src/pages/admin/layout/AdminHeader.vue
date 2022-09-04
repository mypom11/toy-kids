<template>
  <header>
    <div class="header-wrap">
      <div class="left-side">
        <div class="logo">
          <img src="" alt="" />
          <h1>애들아 놀자</h1>
        </div>
        <div class="burger-icon" @click="$store.commit('admin/CHANGE_SIDEBAR')">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
      </div>
      <div class="right-side">
        <h2>{{ $route.meta.title }}</h2>
        <button class="logout">로그아웃</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AdminHeader",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.header-wrap {
  @include flex(space-between, stretch);
  height: 80px;
  background: $white;
  box-shadow: 0px 3px 6px rgba($color: $black, $alpha: 0.1);
  position: relative;
  z-index: 100;
}
.left-side {
  @include flex;
  width: 323px;
  padding: 0 20px;
  background: rgba($color: $purple-dark, $alpha: 0.3);
  .logo {
    @include flex;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .burger-icon {
    width: 36px;
    height: 36px;
    @include flex(center);
    border-radius: 5px;
    color: $black;
    cursor: pointer;
    font-size: 24px;
    &:hover {
      background: rgba($color: $purple-dark, $alpha: 0.3);
      box-shadow: 1px 1px 6px rgba($color: $black, $alpha: 0.4);
    }
  }
}
.right-side {
  @include flex;
  flex: 1;
  padding: 0 50px;
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  .logout {
    font-size: 16px;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 20px;
    background: $purple-dark;
    color: $white;
    &:hover {
      box-shadow: 1px 1px 6px rgba($color: $black, $alpha: 0.4);
    }
  }
}
</style>
