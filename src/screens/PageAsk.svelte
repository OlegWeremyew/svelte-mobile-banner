<script>
  import ScreensButton from "@/components/UI/ScreensButton.svelte";
  import ScreenDescription from "@/components/UI/ScreenDescription.svelte";
</script>

<div class="page_ask">
  <section class="page_ask-dialogs"></section>
  <ScreenDescription title="<strong>Ask Anything</strong><br>You Want"/>
  <ScreensButton/>
</div>

<style lang="scss">
  @import "../styles/mixins.scss";

  .page_ask {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.05) !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 4.4rem;
    background-image: url(../images/background/page_ask-bg@2x.svg);
    background-size: cover;

    @include iPhonesAfterX {
      background-image: url(../images/background/page_ask-bg@3x.svg);
      background-size: cover;
      padding-bottom: 7.8rem;
    }

    .page_ask-dialogs {
      width: 34.3rem;
      height: 39.3rem;
      background-image: url(../images/dialog-ask@2x.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin: 0 auto 2.1rem;

      @include iPhonesAfterX {
        width: 35.8rem;
        height: 40.9rem;
        background-image: url(../images/dialog-ask@3x.svg);
        margin-bottom: 5.5rem;
      }
    }
  }

</style>
