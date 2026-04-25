# REACT INSTALLATION:

- ## At beginner level use this command:
  - method1 : npx create-vite@latest
  - method2 for cool developers: npm create vite@latest

- ## At intermediate level USE THIS COMMAND:
  - npx create-vite@latest. : dot ka matlab install in current folder, without dot ek folder create krke usme dalega

    ### Things to remember when using intermediate level command:

        1. package name= ziggy
        2. Framework= React
        3. variant= javaScript

- ## At Advance level use this command
  - npx create-vite@latest . --template react
  - ### Also add this in vite.config.js file :
        - server:{ port:5173 , open:true,}

- ## Run command:
  - # npm run dev

===================================================
<br><br>

# INSTALLATION THEORY YOU SHOULD KNOW:

-     package      |      purpose
      next         |    Nexjs framework
      react        |    React core
      react-dom    |    React DOM renderer

- ## Konsa kidhr jaega:
  - npm install -D package_ka_name : isse dev dependencies m package install hoga
  - npm install package_ka_name : isse dependencies m hoga install package
  - npm init : to create package.json file but it is lengthy process so we use
  - npm init -y: ek commande mei sab
  - npm install packagekanaam : package install krne k liye
  - TRY this ghr pr: npm install is-odd

- ## Gobal package installation:
  - npm install -g pakage_ka_naam : -- isse C Drive m jaake install hogi
- ## Local package installation:
  - npm install axios : axios package ka naam hai
- ## Temporary installation : for runner tool and scaffolding tool
  - npx nodemon ya npmx create-vite@latest : krke kuch likhte hai npx se temporary installation hoti hai vite jo bundler hai uska or fir vite folder structure create krke deta hai react ka hamare current folder mei
  - npx full form: node package executor
  - create-vite is a scaffolding package that creates a basic folder structure.

<br> <br>

# THOERY:

- node_modules:
  - This is a folder automatically created when you run npm install (or yarn install/pnpmg install).
  - It contains all the installed dependencies(packages) your project needs,including React,Vite,EsLint and any third-party libraries.
  - IMPORTANT: Never edit files inside it manually, and do not commit it to Git(it's usually ignored via .gitignore)
- public:
  - Folder for static files (like images,favicon) that are served as-is.

- .gitignore:
  - Files that tell Git which files/folders to ignore(e.g node_modules)
- eslint.config.js:
  - eslint.config.js is the configuration file for ESLint-a populare tool that analyzes your JavaScript/TypeScript code for errors,bugs,and style issues
  - eslint.config.js tells ESLint how to check your codde and what rules to follow.

- package-json:
  - It is the most important file in any JavaScript/Node.js project.
  - It acts like the identity card of your project.
    - What it contains?:
      - Project name,version ,description
      - All dependencies (packages) your project needs
      - Scripts (like npm run dev, npm run build)
      - Author,license,etc.

- package-lock.json:
  - It is auto-genrated files created by npm.
  - It records the exact version of every package and sub-package installed.
    - WHY it exists?
      - To ensure everyone on the team gets the same exact versions of packages.
- README.md
  - A markdown file that servers as the documentation for your project.

- vite.config.js:
  - configuration file for Vite(build tool & dev server).

- bundler: multiple files ko combine krke ek server create krta hai or usko browser p chaalata hai ssath m unused code ko bhi htata hai.

- read from claude: script type='module'
  <br> <br> <br>

# INTERVIEW QUESTION:

## 1. Why react?

- HTML ,CSS,JS is time taking as well as it make changes in the real DOM but in case of react it creates virtual dom
- #### WHY USE REACT IF YOU KNOW HTML CSS,JS?
  1. AUTOMATIC UI UPDATES
  2. REUSABLE COMPONENTS
  3. HANDLES LARGE APPS EASILY
  4. VIRTUAL DOM
  5. STATE MANAGEMENT
  6. INDUSTRY STANDARD
  7. RICH ECOSYSTEM

## 2. WHAT IS REACT AND THEIR FEATURES?

- REACT is a free open source JavaScript Library built by Facebook in 2013m used to build fast and interactive user interface for web application.
- #### Key Features:

      1. It is a Library not a Framework.
      2. Component Based
      3. Uses JSX
      4. Virtual DOM
      5. One way data flow
      6. Maintained by Meta

- #### WHAT IS package.json file?
  - It is configuration file in every Node.js/React projects that stores important information about your project like its name,version,dependencies and scripts

  - #### Key Properties:
    1. Project identity: stores basic info like project name,version and description
    2. Dependencies:lists all the external packages /libraries your project need to run
    3. Dev Dependencies: lists packages only needed during development (not in production)
    4. Scripts:stores shortcut commands like "start"," build","test" to run project
    5. Auto-created

## 3. What is JSX? What are the rules to rite JSX?

- JSX stands for JavaScript XML.
- It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.
- It was introduced by Facebook (Meta) for React.

There rules are:-

1. Return Only One Parent Element
2. All Tags (including Self-Closing Tags) Must Be Properly Closed .
3. Use CamelCase for Attributes (ex:- onclick, onChange)
4. JavaScript Expressions in {}
5. To write comment in JSX use
   `{/* */}`
6. Don't use if-else directly inside JSX instead use ternary or logical operator.
7. Use className instead of class.
8. Use htmlFor instead of for in label tag.

## 4. What is a component in React? Types of component?

A component in React is a reusable(self-contained) piece of code that returns some piece of JSX.

It is of 2 types

1. Class Based component(CBC)
   - A Class Component is a JavaScript class that extends React.Component.
   - It has render() method to return JSX.
   - It was the traditional way of writing React components before 2019.

2. Function Based Component (FBC)
   - A function based component is a simple javascript function which returns some piece of jsx.
   - It is now the recommended and most popular way to write components in modern React.

## 5. What is React.Fragment and What is Empty Fragment?

1. Fragment:- A wrapper component that lets you group multiple elements without adding an extra DOM node to the HTML output.

2. Empty Fragment:- A shorthand syntax for React.Fragment that does the same thing — groups elements without extra DOM nodes — but doesn't support the key prop.

Note:- we can not write id and className attribute in both fragment.

## 6. What is Component Composition?

Component Composition is the practice of calling one component inside another component.

#### Example

```
function Header() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Header />  {/* Header component called inside App */}
    </div>
  );
}
```

## 7. What is Props?

Props (short for "properties") are a mechanism used to pass data from one component to another, typically in a unidirectional (top-down) flow from parent to child.

#### Example

```
  // Parent passes props
  <Greeting name="Alice" age={25} />

  // Child receives and uses them
  function Greeting({ name, age }) {
    return <h1>Hello, {name}! You are {age} years old.</h1>;
  }
```

## 8. what is default props?

Default props in React allow you to define fallback values for a component's properties (props)

#### Example

```
function Greeting({ name = "Guest", age = 18 }) {
  return (
    <h1>Hello, {name}! You are {age} years old.</h1>
  );
}

<Greeting />
Component call Without passing props:
```

## 9. Why we use Props or characteristics of props?

##### Characteristics

- Immutable:- a child component cannot modify its own props
- Unidirectional:- data flows only from parent → child
- Any type:- strings, numbers, arrays, objects, functions, even JSX
- Destructured:- commonly destructured in the function signature for cleaner code

##### Usecase

- Pass Data:- Send data from parent component to child component
- Reusability:- Same component can be used multiple times with different data
- Dynamic Content:- Components show different content based on props received
- Avoid Repetition:- Write the component once, reuse it anywhere
- Communication:- The only way for a parent to talk to a child component

## 10. What is Children prop?

1.  children prop is a special, built-in property that allows you to pass content between the opening and closing tags of a component.
2.  Anything placed inside a component's tags is automatically passed to that component as props.children.
3.  Children can be strings, numbers, JSX elements, arrays, or even functions.

#### Example

```
 function Card({ children }) {
   return <div className="card">{children}</div>;
 }

 // Now you can put ANYTHING inside Card Component
 <Card>
   <h2>Title</h2>
   <p>Description here</p>
 </Card>
```

## 11. What is Props Drilling?

1. Prop Drilling is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not use that data

##### NOTE: To avoid props drilling we use context API, React State Management Libraries.

#### Example

```
    // ✅ Data starts here in Parent
    function Parent() {
      const name = "Alice";
      const age = 25;

      return (
        <div>
          <h1>I am Parent</h1>
          <Child name={name} age={age} />  {/* passing to Child */}
        </div>
      );
    }


    // ✅ Child receives and passes down to SubChild
    function Child({ name, age }) {
      return (
        <div>
          <h2>I am Child</h2>
          <SubChild name={name} age={age} />  {/* passing to SubChild */}
        </div>
      );
    }


    // ✅ SubChild finally uses the data
    function SubChild({ name, age }) {
      return (
        <div>
          <h3>I am SubChild</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      );
    }
```

## 12. What is render prop?

1.  Render Prop is when you pass a function as a prop to a component, and that component calls the function to render something.

#### Example

```
     // Component accepts a function as a prop
     function Greet({ render }) {
       return <div>{render("Alice")}</div>; // calls the function
     }

     // Passing a function as a prop
     <Greet render={(name) => <h1>Hello, {name}!</h1>} />

     // Output → Hello, Alice!
```
