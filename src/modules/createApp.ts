import {getLocationPathStatus} from "@/utils";
import App from "../App.svelte";

export const createApp = (): ProxyConstructor => {
  return getLocationPathStatus('index_organic')
    ? (
      new App({
        target: document.getElementById("organic"),
        props: {isOrganicPage: true},
      })
    ) : (
      new App({
        target: document.getElementById("nonorganic"),
        props: {isOrganicPage: false},
      })
    )
}
