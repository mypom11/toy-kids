<template>
  <div>
    <AdminHeader />
    <main>
      <AdminSidebar />
      <div class="content" :class="{ sm: $store.state.admin.isSidebar }">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import AdminHeader from "./AdminHeader.vue";
import AdminSidebar from "./AdminSidebar.vue";
export default {
  name: "AdminMain",
  components: { AdminHeader, AdminSidebar },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
main {
  @include flex(flex-start, stretch);
  background: rgba($color: $gray, $alpha: 0.4);
  .content {
    flex: 1;
    min-height: calc(100vh - 80px);
    transition: 0.2s;
    margin-left: 0;
    padding: 50px;
    &.sm {
      margin-left: 323px;
    }
  }
}
</style>
