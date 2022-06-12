export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOusideClick(event) {
    if (!element.constains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOusideClick);
      });
      callback();
    }
  }

  if (!element.hasAttibute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOusideClick);
    });
    element.setAttribute(outside, '');
  }
}
