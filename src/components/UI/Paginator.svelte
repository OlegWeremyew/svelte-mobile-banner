<script>
  import {slide} from "@/store/state";
</script>

<div
  class="pagination"
  class:visible={$slide > 1 && $slide < 4}
>
  <div class="dot"></div>
  <div
    class="dot"
    class:active={$slide === 2}
  ></div>
  <div
    class="dot"
    class:active={$slide === 3}
  ></div>
</div>

<style lang="scss">
  @import "../../styles/mixins.scss";
  .pagination {
    position: absolute;
    bottom: 2.3rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    transition: 0.1s linear;

    @include iPhonesAfterX {
      bottom: 5.55rem;
    }

    &.visible {
      visibility: visible;
    }

    .dot {
      flex-shrink: 0;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      background: rgb(36, 36, 36);
      transition: 0.15s ease-in-out;
      margin: 0 0.2rem;

      &.active {
        width: 1.6rem;
        background: rgb(9, 149, 98);
      }
    }
  }
</style>