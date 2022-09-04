<template>
  <div
    class="input-box"
    v-click-outside="onClickOutside"
    :style="{ width: width }"
    @click="openDropDown"
    :class="{ active: isOpen, read: read }"
  >
    <p v-if="label !== null">{{ label }}</p>
    <div style="position: relative">
      <input
        class="custom"
        :type="type"
        :placeholder="place"
        readonly
        :value="value"
        autocomplete="off"
      />
      <font-awesome-icon :icon="['fas', 'angle-down']" class="arrow" />
    </div>
    <div class="dropdown" v-if="isOpen && option != null">
      <ul>
        <li
          v-for="(option, i) in option"
          :key="i"
          @click="select(option.value)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  name: "InputCustom",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    modelValue: {
      type: null,
      default: null,
    },
    width: String,
    label: {
      type: String,
      default: null,
    },
    place: String,
    type: {
      type: String,
      default: "text",
    },
    option: {
      type: Array,
      default() {
        return [
          { name: "선택 없음", value: null },
          { name: "test", value: 1 },
          { name: "test1", value: 2 },
          { name: "test2", value: 3 },
          { name: "test3", value: 4 },
        ];
      },
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(value) {
      this.$emit("update:modelValue", value);
    },
    onClickOutside() {
      this.isOpen = false;
    },
    openDropDown() {
      if (this.read === false) {
        this.isOpen = !this.isOpen;
      } else {
        return;
      }
    },
  },
  computed: {
    value: function () {
      if (this.modelValue !== null) {
        const selected = this.option.filter(
          (option) => option.value === this.modelValue
        );
        return selected[0].name;
      } else {
        return null;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";

$main: $purple-dark;
.input-box {
  width: 150px;
  position: relative;
  &.read {
    input {
      &:read-only {
        background: rgba($color: $gray, $alpha: 0.1);
      }
    }
  }
  cursor: pointer;
  input {
    &:read-only {
      pointer-events: none;
      background: $white;
      border: 1px solid rgba($color: $black, $alpha: 0.3);
      height: 32px;
      padding: 6px 15px;
    }
  }

  p {
    text-align: left;
    font-weight: 500;
  }
  .arrow {
    color: rgba($color: $purple-dark, $alpha: 1);
    position: absolute;
    right: 15px;
    font-size: 16px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    svg {
      vertical-align: middle;
    }
  }
  &.active {
    .arrow {
      transform: translateY(-50%) rotate(-180deg);
    }
    input {
      border-top: 1px solid $main;
      border-left: 1px solid $main;
      border-right: 1px solid $main;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    }
  }
}
.dropdown {
  position: absolute;
  top: 100%;
  width: 100%;
  background: $white;
  border-bottom: 1px solid $main;
  border-left: 1px solid $main;
  border-right: 1px solid $main;
  border-radius: 0 0 4px 4px;
  padding: 0 10px;
  z-index: 5;
  ul {
    max-height: 150px;
    overflow-y: scroll;
    padding: 5px 0;
    border-top: 1px solid rgba($color: $gray, $alpha: 0.3);
    > li {
      font-size: 14px;
      height: 36px;
      line-height: 36px;
      padding: 0 15px;
      &:hover {
        font-weight: 500;
        color: $main;
        background: rgba($color: $gray, $alpha: 0.05);
      }
    }
  }
}
</style>
