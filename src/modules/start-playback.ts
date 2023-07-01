import {showScreenStat, startBanner} from "@/config";
import {bannerId} from "@/store/state";
import {sendMultipleCallbacks} from "@/utils";

let id: string;
bannerId.subscribe((value: string): void => {
  id = value;
});

export function startPlayback(isHidden: boolean): void {
  if (isHidden === false) {
    sendMultipleCallbacks([
      startBanner(id),
      showScreenStat(1, id)
    ]);
  }
}
