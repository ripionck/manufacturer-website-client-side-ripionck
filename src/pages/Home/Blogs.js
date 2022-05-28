import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">
          How will you improve the performance of a React Application?
        </h3>
        <ul className="list-disc ml-8">
          <li>Keeping component state local where necessary.</li>
          <li>Memoizing React components to prevent unnecessary re-renders.</li>
          <li>Code-splitting in React using dynamic import()</li>
          <li>Windowing or list virtualization in React.</li>
          <li>Lazy loading images in React.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h3>
        <ul className="list-disc ml-8">
          <li>Local state.</li>
          <li>Global state.</li>
          <li>Server state.</li>
          <li>URL state.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          How does prototypical inheritance work?
        </h3>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          What is a unit test? Why should write unit tests?
        </h3>
        <p>
          Unit testing ensures that all code meets quality standards before it's
          deployed. This ensures a reliable engineering environment where
          quality is paramount. Over the course of the product development life
          cycle, unit testing saves time and money, and helps developers write
          better code, more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
