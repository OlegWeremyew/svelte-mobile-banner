<script>
  import {activeSubscription, isSwitcherActive, isTrialEnabled} from "@/store/state";
  import {sendMultipleCallbacks, t} from "@/utils";

  const handlePurchase = () => {
    sendMultipleCallbacks([
      `http://callquietly.io/getpremium/${$activeSubscription.inapp}`,
    ]);
  };
</script>

<section class="buttons-payment">
  <button
    id="purchase"
    type="button"
    class="purchase-button"
    on:click={handlePurchase}
  >
    {#if ($isSwitcherActive && $isTrialEnabled)}
      <span class="button-text">{t("Try for Free")}</span>
    {:else }
      <span class="button-text">{t("Continue")}</span>
    {/if}
    <div class="button-icon"></div>
  </button>

</section>

<style lang="scss">
  @import "../styles/mixins.scss";

  .buttons-payment {
    margin-bottom: 1.7rem;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 2.4rem;
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

      @include iPhonesAfterX {
        width: 35.5rem;
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
      background: url(../images/icons/arrow.svg) center / contain no-repeat;
      transform: translateY(-50%);
    }
  }

</style>
