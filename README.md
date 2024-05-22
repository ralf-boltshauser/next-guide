# Initialization
```bash
$ npx create-next-app@latest next-guide            
Need to install the following packages:
create-next-app@14.2.3
Ok to proceed? (y) y
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes 
```

# Basic Routing
Start the app
```bash
npm run dev
```
go on `http://localhost:3000/` and you will see the root page located at `src/app/page.tsx`. But this page is actually not the only thing that is rendered. It is rendered as children of all parent or sibling layouts. In this case the `src/app/layout.tsx`.

NextJs uses file based routing, to show this you can navigate to `http://localhost:3000/hello` and you will see the about page located at `src/app/hello/page.tsx`. This is because the route is folder based and within the hello folder there is a page.tsx. This always has to be called page.tsx, there are other conventions like route.ts or loading.tsx which we will see later.

# Dynamic Routing
To create a dynamic route you can create a folder with square brackets `[]` in the name. For example `src/app/posts/[id]/page.tsx`. This will create a dynamic route that can be accessed by `http://localhost:3000/posts/1` or `http://localhost:3000/posts/2`. The `id` is a variable that can be accessed in the page.tsx file. The id can be retrieved through the params.