<script>
  import {currentFrame} from "@/store/state";
  import {setIframeEvents, t} from "@/utils";

  function handleTermsButtonClick() {
    currentFrame.update(() => ({name: "terms", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }

  function handlePrivacyButtonClick() {
    currentFrame.update(() => ({name: "privacy", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }
</script>

<footer>
  <div class="links">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="javascript:void(0);" class="terms" on:click={handleTermsButtonClick}>
      <span class="divtext">
        {t('Terms of Use')}
      </span>
    </a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="javascript:void(0);" class="privacy" on:click={handlePrivacyButtonClick}>
      <span class="divtext">
        {t('Privacy Policy')}
      </span>
    </a>
  </div>
</footer>

<style lang="scss" global>
  @import "../styles/mixins.scss";

  .links {
    position: relative;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.3) !important;
    margin: 0 auto 2.2rem;

    @include iPhonesAfterX {
      margin-bottom: 2.9rem;
    }

    a {
      position: relative;
      max-width: calc(100% / 2);

      span {
        text-decoration: underline;
      }
    }
  }
</style>
