<script>
  import {t} from "@/utils";

  export let title
</script>

<section class="page__title">
  <div class="page__title-text">
      <span class="divtext">
        {@html t(title)}
      </span>
  </div>
</section>

<style lang="scss" global>
  @import "../../styles/mixins.scss";

  .page__title {
    width: 100%;
    margin-bottom: 1.5rem;

    @include iPhonesAfterX {
      margin-bottom: 4rem;
    }

    @include tabletPortrait {
      width: 35rem;
      margin: 0 auto 2rem;
    }
  }

  .page__title-text {
    position: relative;
    width: 92%;
    font-size: 3rem;
    font-weight: 800;
    line-height: 4rem;
    text-align: left;
    margin: 0 auto;

    @include iPhonesAfterX {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }

    span {
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