export function setPrice(price: string, selector: string): void {
  const priceContainers = document.querySelectorAll(selector);

  if (priceContainers) {
    Array.from(priceContainers).forEach(function (item: HTMLElement) {
      item.innerHTML = `${price}`;
    });
  } else {
    console.warn("Price containers not found");
  }
}
