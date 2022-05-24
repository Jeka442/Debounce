export const useDebounce = (func: (...args: any) => any, waitFor: number) => {
  let timeout: number = 0;
  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), waitFor);
  };
  return debounced;
};





/////Simple example:
In the example we have simle input that will console log the value after 1 second after the user stop typing

//   const SimpleExample = () => {
//     const myDebouncingFunc = useDebounce((value: string) => {
//       console.log(value);
//     }, 1000);

//     const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//       myDebouncingFunc(e.target.value);
//     };

//     return (
//       <div className='App'>
//         <input onChange={changeHandler} />
//       </div>
//     );
//   };
