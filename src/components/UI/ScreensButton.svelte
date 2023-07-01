<script>
  import {bannerId, slide, swiper} from "@/store/state";
  import {sendCallback, t} from "@/utils";
  import {showScreenStat} from "@/config.ts";

  export let typeButton = 'not-first'

  const handlePurchase = () => {
    slide.update(() => $slide += 1);
    sendCallback(showScreenStat($slide, $bannerId))
    $swiper.slideNext()
  };
</script>

<section class="buttons">
  <button
    id="purchase"
    type="button"
    class="continue-button"
    on:click={handlePurchase}
  >
    <span class="button-text">{t("Continue")}</span>
    <div class="button-icon"></div>
  </button>

</section>

<style lang="scss">
  @import "../../styles/mixins.scss";

  .buttons {
    margin-bottom: 1.1rem;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 1.3rem;
    }

    button {
      position: relative;
      width: 34.3rem;
      height: 5.6rem;
      font-size: 1.7rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
      border-radius: 1.6rem;
      margin: 0 auto;

      &.continue-button {
        position: relative;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));

        @include iPhonesAfterX {
          width: 35.8rem;
        }
      }

      &.purchase-button {
        position: relative;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));
      }
    }

    .button-icon {
      position: absolute;
      top: 50%;
      right: 1.7rem;
      width: 2.4rem;
      height: 2.4rem;
      background: url(../../images/icons/arrow.svg) center / contain no-repeat;
      transform: translateY(-50%);
    }
  }

</style>
