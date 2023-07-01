<script>
  import Buttons from "@/components/Buttons.svelte";
  import Header from "@/components/Header.svelte";
  import Features from '@/components/Features/index.svelte'
  import Footer from "@/components/Footer.svelte";
  import Switcher from "@/components/Switcher.svelte";
  import Title from "@/components/Title.svelte";
  import Subscribes from "@/components/Subscribes.svelte";
</script>

<section class="page_payment">
  <Header/>
  <Title/>
  <Features/>
  <Switcher/>
  <Subscribes/>
  <Buttons/>
  <Footer/>
</section>

<style lang="scss">
  @import "../styles/mixins.scss";

  .page_payment {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.05) !important;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background-image: url(../images/background/bg@2x.svg);
    background-size: cover;

    @include iPhonesAfterX {
      background-image: url(../images/background/bg@3x.svg);
      background-size: cover;
      padding-bottom: 2.2rem;
    }
  }

</style>