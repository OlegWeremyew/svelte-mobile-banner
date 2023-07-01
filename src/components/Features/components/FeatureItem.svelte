<script>
  import {t} from "@/utils";

  export let text = '';

</script>

<div class="feature" class:active="{text}">
  <div class="feature__container">
    <div class="feature__icon"></div>
  </div>
  <div class="feature__text">
		<span class="divtext">
			{@html t(text)}
		</span>
  </div>
</div>

<style lang="scss" global>
  @import "../../../styles/mixins.scss";

  .feature {
    display: flex;
    position: relative;
    padding: 0.63rem 2rem 0 1rem;
    min-width: 13.2rem;
    margin-right: 1rem;
    max-width: 95vw;

    @include iPhonesAfterX {
      padding: 1.6rem 2rem 0 1.4rem;
      margin-left: -0.5rem
    }

    &__container {
      margin-right: 1.6rem;
    }

    &__icon {
      position: relative;
      top: 0.3rem;
      width: 1.2rem;
      height: 1.2rem;

      @include iPhonesAfterX {
        width: 1.1rem;
        height: 1.1rem;
      }
    }

    &__text {
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 0.005rem;
      max-width: 95%;

      @include iPhonesAfterX {
        font-size: 1.48rem;
      }
    }
  }
</style>
