import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Welcome to My Blog. </h2>
            <div className="flex flex-col w-full p-2">
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>1. What are the different ways to manage a state in a React application?</h3>
                    <p>
                        We can manage state in React various ways.<br></br>
                        #1- useState and React State-useContext :
                        useState hook in React is used by many React beginners when they first start using state in React.
                        The initial state is taken as an argument in useState hook.<br></br>Initially when the React component renders, and returns two values. The values are the state update function and the current state. For displaying the current state of the component current state is used and for changing the current state the state update function is used.<br></br>
                        useContext helps in passing the props down the components tree. React's Context API helps in passing the props between the grandfather component to the grandchild component. This process doesn't bother the other React Components which are available in the chain.
                        <br></br>
                        #2- useReducer :
                        The idea of React's useReducer has been taken from JavaScript Reducer. Generally, the current state is held by the Reducer along with action with payload and then it results out the new state.
                        <br></br>
                        #3- Redux :
                        With Redux, the state can be managed globally by the use of an external force. The Redux Reducer's work is to act upon two Redux actions and there is no dependency on the Redux Library.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>2. How does prototypical inheritance work?</h3>
                    <p>
                        JavaScript does not have classes unlike other languages. It uses the concept of prototypes and prototype chaining for inheritance. Prototypal inheritance is all about objects. Objects inherit properties from other objects. In prototypal inheritance, instead of defining the structure through a class, you simply create an object. This object then gets reused by new objects . Instances are typically instantiated via factory functions or Object.create() method. Instances may be composed from many different objects, allowing for easy selective inheritance. It is more flexible than Classic Inheritance . Any existing object can become a class from which additional objects will be spawned. This is handy where your objects offer several sets of services and/or they undergo a lot of state transformation before your program arrives at the point where the inheritance is needed.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>3. What is a unit test? Why should we write unit tests?</h3>
                    <p>
                        Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.<br></br>
                        Here, are the key reasons to perform unit testing:<br></br>
                        1. Unit tests help to fix bugs early in the development cycle and save costs.<br></br>
                        2. It helps the developers to understand the testing code base and enables them to make changes quickly.<br></br>
                        3. Good unit tests serve as project documentation.<br></br>
                        4. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>4. React vs. Angular vs. Vue.</h3>
                    <p>
                        Angular: Angular is one of the mature frameworks, having good contributors and ensuring a complete package for app development. On the other side, it requires steep learning and creating watchers to view updates which may put off new app developers. All in all Angular is an ideal option for companies with the requirement for large scale apps.<br></br>

                        React: React is now half a decade old and has an outgrown community for support. It has gained worldwide acceptance and is a good choice for front-end development. It is ideal for startups looking to create SPAs. React is an excellent choice for those just starting out with front-end JavaScript frameworks development and developers looking for more flexibility.<br></br>

                        Vue: It is a young library without any backing from major companies but still considered as a strong competitor for Angular and React. Due to its flexibility and ease of use, it has become a choice of industry giants. It seems to be increasing significantly in the web development field by combining best features of Angular and React.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;