<template>
  <aside :class="{ hide: $store.state.admin.isSidebar === false }">
    <nav>
      <ul>
        <li v-for="(nav, i) in $store.state.admin.adminNav" :key="i">
          <router-link :to="nav.link">
            <div>
              <div class="icons">
                <font-awesome-icon :icon="['fas', `${nav.icon}`]" />
              </div>
              <h3>{{ nav.title }}</h3>
            </div>
            <font-awesome-icon :icon="['fas', 'angle-right']" class="arrow" />
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
aside {
  position: absolute;
  width: 323px;
  padding: 50px 20px;
  min-height: calc(100vh - 80px);
  background: $purple-dark;
  height: calc(100% - 80px);
  transition: 0.2s;
  top: 80px;
  left: 0;
  &.hide {
    left: -323px;
  }
}
nav > ul {
  > li {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    > a {
      padding: 0 40px;
      @include flex;
      height: 58px;
      color: $white;
      border-radius: 5px;
      > div {
        @include flex(flex-start);
        gap: 20px;
        .icons {
          width: 25px;
          text-align: center;
          font-size: 20px;
        }
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
      }
      .arrow {
        transform: translateX(0px);
        transition: 0.2s;
      }
      &:hover {
        background: rgba($color: $white, $alpha: 0.1);
        .arrow {
          transform: translateX(10px);
        }
      }
      &.router-link-active {
        background: $white;
        color: $black;
        h3 {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
