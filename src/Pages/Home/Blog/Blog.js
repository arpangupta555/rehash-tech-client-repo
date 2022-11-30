import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">BLOG SECTION</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What are the different ways to manage a state in a React application?</h3>
                        <p className="md:pl-0 md:col-span-7">Local (UI) state – Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.

                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                            Global (UI) state – Global state is data we manage across multiple components.

                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                            Sometimes state we think should be local might become global.

                            Server state – Data that comes from an external server that must be integrated with our UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
                        <p className="md:pl-0 md:col-span-7">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p></div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
                        <p className="md:pl-0 md:col-span-7">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
                    </div>

                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
                        <p className="md:pl-0 md:col-span-7">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;