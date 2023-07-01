<script>
  import {t} from "@/utils/index.ts";
  import {isSwitcherActive} from "@/store/state";
</script>

<section class="features">
  <!--{#each features as {text}, index (index)}-->
  <!--  <FeaturesItem {text} />-->
  <!--{/each}-->
  <table>
    <tr>
      <td class="feature-item">
        <div class="feature-icon feature-icon_star">⭐</div>
        <div class="feature-text">
                <span class="divtext">
                  {@html t("Unlimited chat messages")}
                </span>
        </div>
      </td>
      <td class="feature-item">
        <div class="feature-icon feature-icon_rocket">🚀</div>
        <div class="feature-text">
                <span class="divtext">
                  {@html t("Powered by ChatGPT & GPT-4")}
                </span>
        </div>
      </td>
      <td class="feature-item">
        <div class="feature-icon feature-icon_confetti">🎉</div>
        <div class="feature-text">
                <span class="divtext">
                  {@html t("Ad-free experience")}
                </span>
        </div>
      </td>
      <td class="feature-item">
        <div class="feature-icon">
          <div
            class="feature-icon_money no-trial-info moved"
            class:active={!$isSwitcherActive}
          >💰
          </div>
          <div
            class="feature-icon_no-payment trial-info moved"
            class:active={$isSwitcherActive}
          >🚫
          </div>
        </div>
        <div class="feature-text">
           <span
             class="divtext no-trial-info moved"
             class:active={!$isSwitcherActive}
           >
             {@html t("Best value")}
           </span>
          <span
            class="divtext trial-info moved"
            class:active={$isSwitcherActive}
          >
            {@html t("No payment now")}
           </span>
        </div>
      </td>
    </tr>
  </table>
</section>

<style lang="scss">
  @import "../../styles/mixins.scss";

  .features {
    width: 100%;
    margin-bottom: 2.6rem;

    @include iPhonesAfterX {
      margin-bottom: 3.1rem;
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

    table {
      width: 34.3rem;
      margin: 0 auto;
    }

    td {
      position: relative;
      display: grid;
      grid-template-columns: 2.4rem calc(100% - 3.4rem);
      grid-gap: 1rem;
      height: 2.4rem;
      align-items: center;
      margin-bottom: 0.6rem;

      @include iPhonesAfterX {
        height: 3.1rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .feature-text {
      position: relative;
      font-size: 1.7rem;
      font-weight: 600;
      text-align: left;
    }

    .feature-icon,
    .feature-text {
      .moved {
        position: absolute;
        pointer-events: none;
        opacity: 0;

        &.active {
          position: relative;
          opacity: 1;
        }
      }
    }

    .feature-icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      width: 2.4rem;
      height: 2.4rem;
      font-size: 2.4rem;
      background: center / contain no-repeat;
    }
  }
</style>
