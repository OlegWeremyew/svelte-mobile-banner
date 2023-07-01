<script>
  import {t} from "@/utils";
  import {isTrialEnabled, subscriptions, activeSubscription, isSwitcherActive, yearPrice} from "@/store/state";

  const setActiveSubscription = () => ({
    period: $isTrialEnabled ? 'week' : 'year',
    inapp: $isSwitcherActive ? $subscriptions.weekTrial : $subscriptions.year
  })

  const changeSwitcherPosition = () => {
    isSwitcherActive.update(() => !$isSwitcherActive);
    if ($isSwitcherActive) {
      isTrialEnabled.update(() => true);
    }

    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section
  class="switcher"
  class:active={$isSwitcherActive}
>
  <div class="switcher-text">
    {#if ($isSwitcherActive)}
      <span class="divtext">
       {@html t("Free Trial Enabled")}
      </span>
    {:else}
     <span class="divtext">
       {@html t("Enable Free Trial")}
     </span>
    {/if}
  </div>
  <div
    class="switcher-button"
    class:active={$isSwitcherActive}
    on:click={changeSwitcherPosition}
  ></div>
</section>

<style lang="scss">
  @import "../styles/mixins.scss";

  .switcher {
    display: grid;
    grid-template-columns: 66% 32%;
    grid-gap: 2%;
    align-items: center;
    width: 34.3rem;
    height: 5.6rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.25);
    border-radius: 1.6rem;
    backdrop-filter: blur(0.4rem);
    margin: 0 auto 0.9rem;

    @include iPhonesAfterX {
      width: 35.5rem;
      margin-bottom: 1.6rem;
    }

    .no-trial-info {
      position: relative;
      opacity: 1;
    }

    .trial-info {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }

    &.active {
      border-color: rgba(255, 255, 255, 1);
    }
  }

  .switcher-text {
    position: relative;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    margin-left: 2.2rem;
  }

  .switcher-button {
    position: relative;
    width: 4.7rem;
    height: 2.8rem;
    background: rgba(115, 115, 115, 0.25);
    border-radius: 2rem;
    margin: 0 auto;
    transition: 0.15s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0.15rem;
      width: 2.6rem;
      height: 2.6rem;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      box-shadow: -0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.35);
      transform: translateY(-50%);
      transition: inherit;
    }

    &.active {
      background: linear-gradient(
                      to bottom,
                      rgb(21, 199, 155),
                      rgb(9, 149, 98)
      );

      &::after {
        transform: translate(1.85rem, -50%);
      }
    }
  }
</style>