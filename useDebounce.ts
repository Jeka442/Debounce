export const useDebounce = (func: (...args: any) => any, waitFor: number) => {
  let timeout: number = 0;
  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), waitFor);
  };
  return debounced;
};
