import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='md:flex gap-5 mt-7'>
            <aside className="w-full h-screen p-6 sm:w-60 bg-gray-100 ">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">questions</h2>
                        <div className="flex flex-col space-y-1">
                            <Link title='What are the different ways to manage a state in a React application?' >questions 1...</Link>
                            <Link title='How does prototypical inheritance work?'>questions 2...</Link>
                            <Link title='What is a unit test? Why should we write unit tests?' >questions 3...</Link>
                            <Link  title='React vs. Angular vs. Vue?'>questions 4...</Link>

                        </div>
                    </div>

                </nav>
            </aside>


            <div className="">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-50 md:p-7">


                    <div className="mt-3 text-start ">
                        <p className="text-2xl font-bold hover:underline">What are the different ways to manage a state in a React application?</p>
                        <p className="mt-2">In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</p>
                        <ul>
                            <li> We can use URL to store some data e.g. Keeping such data in the URL allows users to share deep links with others.</li>
                            <li>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</li>
                            <li>The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.</li>
                            <li>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. </li>
                            <li>The fifth option is to compute the new state based on the available state and we do not need to declare a state at all.</li>
                        </ul>
                    </div>
                    <div className="mt-3 text-start">
                        <p className="text-2xl font-bold hover:underline">How does prototypical inheritance work?</p>
                        <p className="mt-2">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        
                    </div>
                    <div className="mt-3 text-start">
                        <p className="text-2xl font-bold hover:underline">What is a unit test? Why should we write unit tests?</p>
                        <p className="mt-2">works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        
                    </div>
                    <div className="mt-3 text-start">
                        <p className="text-2xl font-bold hover:underline">React vs. Angular vs. Vue?</p>
                        <p className="mt-2">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;