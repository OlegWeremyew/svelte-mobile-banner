<script>
  import {getCallbackDomain, sendMultipleCallbacks} from "@/utils";
  import {closeBannerStat, restorePurchaseStat} from "@/config";
  import {bannerId} from "@/store/state";
  import {t} from "@/utils/index.ts";

  function handleCloseButtonClick(){
    sendMultipleCallbacks([
      closeBannerStat($bannerId),
      "http://callback.io/close",
    ]);
  }

  function handleRestoreButtonClick() {
    sendMultipleCallbacks([
      restorePurchaseStat($bannerId),
      `${getCallbackDomain()}/getpremium/restore`,
    ]);
  }
</script>

<header>
  <!-- svelte-ignore a11y-missing-attribute -->
  <header>
    <a
      href="javascript:void(0);"
      class="close"
      on:click={handleCloseButtonClick}
    ></a>
    <a
      href="javascript:void(0);"
      class="restore"
      on:click={handleRestoreButtonClick}
    >
       <span>
         {@html t("Restore")}
       </span>
    </a>
  </header>
</header>

<style lang="scss">
  @import "../styles/mixins.scss";

  header {
    position: absolute;
    top: -0.2rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-top: 2rem;

    @include iPhonesAfterX {
      margin-top: 4.1rem;
    }

    .close {
      width: 1.7rem;
      height: 1.7rem;
      background: url(../images/icons/close.svg) center / contain no-repeat;
      margin: 0 1.5rem;
    }

    .restore {
      position: relative;
      top: 0.2rem;
      margin: 0 1.5rem;
      opacity: 0.5;

    }
  }
</style>
