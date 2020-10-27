<template>
  <button
    class="tj-button"
    :class="[
      `tj-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!--如果没有传入内容 当我们没有传入插槽的时候隐藏span-->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "tjButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/common/var.scss";
@import "./styles/mixins/button.scss";
.tj-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $--button-default-background-color;
  border: $--border-base;
  color: $--button-default-font-color;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:focus,
  &:hover {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }
  &:active {
    color: mix(
      $--color-black,
      $--color-primary,
      $--button-active-shade-percent
    );
    border-color: mix(
      $--color-black,
      $--color-primary,
      $--button-active-shade-percent
    );
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.tj-button--primary {
    @include button-variant(
      $--button-primary-font-color,
      $--button-primary-background-color,
      $--button-primary-border-color
    );
  }
  &.tj-button--success {
    @include button-variant(
      $--button-success-font-color,
      $--button-success-background-color,
      $--button-success-border-color
    );
  }
  &.tj-button--warning {
    @include button-variant(
      $--button-warning-font-color,
      $--button-warning-background-color,
      $--button-warning-border-color
    );
  }
  &.tj-button--danger {
    @include button-variant(
      $--button-danger-font-color,
      $--button-danger-background-color,
      $--button-danger-border-color
    );
  }
  &.tj-button--info {
    @include button-variant(
      $--button-info-font-color,
      $--button-info-background-color,
      $--button-info-border-color
    );
  }
  &.is-plain {
    &:hover,
    &:focus {
      background: $--color-white;
      border-color: $--color-primary;
      color: $--color-primary;
    }

    &:active {
      background: $--color-white;
      border-color: mix(
        $--color-black,
        $--color-primary,
        $--button-active-shade-percent
      );
      color: mix(
        $--color-black,
        $--color-primary,
        $--button-active-shade-percent
      );
      outline: none;
    }
  }
  &.is-disabled{
    &,
    &:hover,
    &:focus {
      color: $--button-disabled-font-color;
      cursor: not-allowed;
      background-image: none;
      background-color: $--button-disabled-background-color;
      border-color: $--button-disabled-border-color;
    }

    &.el-button--text {
      background-color: transparent;
    }

    &.is-plain {
      &,
      &:hover,
      &:focus {
        background-color: $--color-white;
        border-color: $--button-disabled-border-color;
        color: $--button-disabled-font-color;
      }
    }
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: $--button-padding-vertical;
  }

  & [class*="tj-icon-"] {
    & + span {
      margin-left: 5px;
    }
  }
}
</style>