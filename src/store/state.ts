import {writable} from "svelte/store";
import * as config from "@/config";
import {
  IActiveSubscription,
  IBannerId,
  ICurrentFrame,
  ISubscriptions,
  ISwitcherActive,
  ITrialEnabled,
  IPrice, ISlide
} from "./types";

export const bannerId: IBannerId = writable(config.bannerId);

export const isTrialEnabled: ITrialEnabled = writable(false);

export const isSwitcherActive: ISwitcherActive = writable(false);

export const yearPrice: IPrice = writable('0');
export const weekPrice: IPrice = writable('0');
export const yearPriceByWeek: IPrice = writable('0');

export const slide: ISlide = writable(1);

export const currentFrame: ICurrentFrame = writable({
  name: "",
  isVisible: false,
});

export const subscriptions: ISubscriptions = writable({
  year: "chatbox.sub.gr1.1y_40",
  week: "chatbox.sub.gr1.1w_7",
  weekTrial: "chatbox.sub.gr1.1w3trial_7",
  day: "3",
});

export const activeSubscription: IActiveSubscription = writable({
  period: "year",
  inapp: "chatbox.sub.gr1.1y_40",
});

export const swiper: any = writable(null)