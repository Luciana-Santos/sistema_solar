export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOusideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOusideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOusideClick));
    });
    element.setAttribute(outside, '');
  }
}
