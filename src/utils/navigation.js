export const navigateTo = (path) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('pushstate'));
  window.scrollTo(0, 0);
};
