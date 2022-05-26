# useDebounce
useDebounce is a function that takes another function as a parameter, wraps that function in a closure, and returns the new function to implement the “wait for a bit” behavior\
\
The idea - useDebounce takes callback function and milliseconds to wait till execution\
Then it returns a debounced function.
when we call the debounced function it will start the timer and execute the callback after the given time.\
if we call the debounced function again it will reset the time.

useDebounce takes 2 parameters
- func: callback function
- waitFor: number of milliseconds to wait



## Usage example

```typescript
const SimpleExample = () => {
  const myDebouncingFunc = useDebounce((value: string) => {
    console.log(value);
  }, 1000);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    myDebouncingFunc(e.target.value);
  };

  return (
    <div className='App'>
      <input onChange={changeHandler} />
    </div>
  );
};
```
