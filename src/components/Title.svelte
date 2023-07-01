<script>
  import {t} from "@/utils";
</script>

<section class="title-payment">
  <div class="title-payment__text">
     <span class="divtext">
        {@html t("Unlock Full<br>Potential of<br><strong>AI CHAT</strong>")}
     </span>
  </div>
</section>

<style lang="scss" global>
  @import "../styles/mixins.scss";

  .title-payment {
    width: 100%;
    margin-bottom: 2rem;

    @include iPhonesAfterX {
      margin-bottom: 6.7rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 2rem;
    }

    &__text {
      position: relative;
      width: 92%;
      height: 12.75rem;
      font-size: 3.6rem;
      font-weight: 800;
      text-align: left;
      margin: 0 auto;

      @include iPhonesAfterX {
        font-size: 4.4rem;
        line-height: 5.5rem;
      }

      strong {
        display: inline;
        font-weight: 800;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
</style>
