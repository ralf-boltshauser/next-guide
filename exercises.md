# NextJs / React Exercises

Choose which app you would like to build and follow the requirements.

## Todo App
Build a Todo App which has the following features:

All on the client side
- Have a default list of todos fetched from the following api: https://jsonplaceholder.typicode.com/todos
- Add a todo
- Mark a todo as done
- Globally switch the theme to danger mode, which changes the navbar background color to red and instead of marking todos as done you delete them

Code Requirements:
- Use a custom component for displaying the todos which uses the useContext hook to get the theme
- Use a useState hook to store the todos
- Use a useEffect hook to fetch the todos

## Meme Generator
(this might require an account on imgflip.com)
Build a Meme Generator which has the following features:

All on the client side
- Have a default list of memes fetched from the following api: https://imgflip.com/api
- Create memes
- Upvote memes and sort them by upvotes
- A collection of liked memes

Code Requirements:
- Use a custom component for displaying the memes
- Use a useState hook to store the upvotes for the memes
- Use a context provider to store the liked memes
- Use useEffect hook to fetch the memes