<script>
  import {swiper} from "@/store/state";
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import "swiper/css";

  import {currentFrame} from "@/store/state";
  import PayScreen from "@/screens/PayScreen.svelte";
  import PageWelcome from "@/screens/PageWelcome.svelte";
  import PageAsk from "@/screens/PageAsk.svelte";
  import PageResponse from "@/screens/PageResponse.svelte";
  import Paginator from "@/components/UI/Paginator.svelte";
</script>

<div id="app" class:hide={$currentFrame.isVisible === true}>
  <!--  <div class="frames frames_terms" class:show={$currentFrame.name === "terms" && $currentFrame.isVisible === true}>-->
  <!--    <iframe src="../../terms/en/index.html?popup=true" scrolling="scrolling" title="terms"/>-->
  <!--  </div>-->
  <!--  <div class="frames frames_privacy" class:show={$currentFrame.name === "privacy" && $currentFrame.isVisible === true}>-->
  <!--    <iframe src="../../privacy/en/index.html?popup=true" scrolling="scrolling" title="privacy"/>-->
  <!--  </div>-->

  <Swiper
    class="main-screen-slider"
    slidesPerView={1}
    allowTouchMove={false}
    noSwiping={false}
    lazy={false}
    on:slideChange={()=>{}}
    on:swiper={(e) => {
      swiper.update(()=> $swiper = e.detail[0])
    }}
  >
    <SwiperSlide class="main-screen-slider-item">
      <PageWelcome/>
    </SwiperSlide>
    <SwiperSlide class="main-screen-slider-item">
      <PageAsk/>
    </SwiperSlide>
    <SwiperSlide class="main-screen-slider-item">
      <PageResponse/>
    </SwiperSlide>
    <SwiperSlide class="main-screen-slider-item">
      <PayScreen/>
    </SwiperSlide>
  </Swiper>
  <Paginator/>
</div>

<style lang="scss" global>
  @import "./styles/mixins.scss";
  @import "./styles/default.scss";
  @import "./styles/iframe.scss";
  @import "./styles/no-trial.scss";

  html {
    font-size: 1.5vh;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  #app {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-image: url(images/background/bg@2x.svg);
    background-size: cover;
  }

  .wrapper {
    width: 100%;
  }

  @include iPhonesAfterX {
    /* for iPhone 13 */
    html {
      font-size: 1.19vh; /* = 10px */
    }

    body {
      background-color: transparent;
    }
  }

  @include tabletPortrait {
    html {
      font-size: 1vh;
    }

  }

  @include tabletLandscape {
    html {
      font-size: 1vh;
    }

    #app {
      backdrop-filter: blur(0.52rem);
    }
  }

  .main-screen-slider-item {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.05) !important;
    width: 100% !important;
    height: 100% !important;
  }

  .main-screen-slider {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
</style>
