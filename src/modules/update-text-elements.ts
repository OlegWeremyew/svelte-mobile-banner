import {
  isTrialEnabled,
  bannerId,
  yearPrice,
  weekPrice,
  yearPriceByWeek,
} from "@/store/state";
import {setFontSizes} from "@/utils";

const global = window as any;

export function updateTextElements(): void {
  console.log("UTE started");

  if (Object.keys(global.injectdata.inapps).length > 0) {
    const inapps: string[] = Array.from(Object.keys(global.injectdata.inapps));

    let trialAvailable: boolean = true;
    isTrialEnabled.update(() => false); // this will affect to features, purchase note, active subscribe

    inapps.forEach((inapp: string) => {
      if (global.injectdata.inapps[inapp].trial_available === false) {
        trialAvailable = false;
      }

      switch (inapp) {
        case 'chatbox.sub.gr1.1y_40':
          yearPrice.update(() => global.injectdata.inapps[inapp].price);
          yearPriceByWeek.update(() => global.injectdata.inapps[inapp].rated_price);
          break;

        case "chatbox.sub.gr1.1w_7":
          weekPrice.update(() => global.injectdata.inapps[inapp].price);
          break;
      }
    });

    if (!trialAvailable) {
      document.body.classList.add("no_trial");
      bannerId.update((value: string): string => (value += "_no_trial"));
      isTrialEnabled.update(() => false);
    }
  }

  setFontSizes("footer", ".features");
}
