<script>
  import {setIframeEvents, t} from "@/utils/index.ts";
  import {onMount} from "svelte";
  import {currentFrame} from "@/store/state.ts";

  let ppAndTouBlock

  onMount(() => {
    ppAndTouBlock.children[1].addEventListener('click', () => {
      currentFrame.update(() => ({name: "terms", isVisible: true}));
      setIframeEvents($currentFrame.name);
    })

    ppAndTouBlock.children[2].addEventListener('click', () => {
      currentFrame.update(() => ({name: "privacy", isVisible: true}));
      setIframeEvents($currentFrame.name);
    })
  })
</script>

<footer>
  <div class="links-pp">
      <span bind:this={ppAndTouBlock}>
        {@html t("By proceeding, you accept our<br><a>Terms of Use</a> and <a>Privacy Policy</a>")}
      </span>
  </div>
</footer>

<style lang="scss" global>
  @import "../../styles/mixins.scss";

  .links-pp {
    height: 3.6rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-bottom: 0.8rem;
    color: rgb(98, 103, 112);

    a {
      color: rgb(255, 255, 255);
      text-decoration: underline;
    }
  }

  @media only screen and (max-aspect-ratio: 56 / 100) {
    .links-pp {
      margin-bottom: 4.1rem;
    }
  }
</style>
