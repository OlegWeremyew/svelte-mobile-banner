export const bannerId = "012"

export const injectdata = {
  inapps: {
    'chatbox.sub.gr1.1y_40': {
      duration: 1,
      duration_type: 'year',
      price: '39.99$',
      rated_price: '0.77$',
      duration_rate: 0.01923
    },
    'chatbox.sub.gr1.1w_7': {
      duration: 1,
      duration_type: 'week',
      trial_duration_type: 'day',
      price: '6.99$',
      rated_price: '6.99$',
      duration_rate: 1
    },
    'chatbox.sub.gr1.1w3trial_7': {
      trial_available: false,
    },
  },
};

export const restorePurchaseStat = (): string =>
  `http://callquietly.io/statistic?amplitude_event_name=event_banner_restore`;
export const closeBannerStat = (bannerId: string): string =>
  `http://callquietly.io/statistic?amplitude_event_name=event_banner_close&param=banner_id:${bannerId}`
export const startBanner = (bannerId: string): string =>
  `callquietly://callquietly.io/statistic?amplitude_event_name=event_banner_show&param=banner_id:${bannerId}`
export const showScreenStat = (slide: number, bannerId: string): string =>
  `callquietly://callquietly.io/statistic?amplitude_event_name=onboarding_screen_show&param=type:1&param=step:${slide}&param=banner_id:${bannerId}`;

// export const tapOnLegalInfoStat = (info: string, bannerId: string): string =>
//   `callquietly://callquietly.io/amplitude_statistic?event_name=tap_info_banner&tap=${info}&placement=embedded-launch&banner=${bannerId}`;
// export const tapOnInappStat = (inapp: string, bannerId: string): string =>
//   `callquietly://callquietly.io/amplitude?amplitude_event_name=banner_purchase&placement=enter_app&banner_id=${bannerId}&product_id=${inapp}`;

// switch off loading animation
export const disableBuiltinAnimations = 1;
// transparent background in SN module
export const transparentBackground = 1;
// switch off close-button in SN module
export const disableBuiltinClose = 1;
