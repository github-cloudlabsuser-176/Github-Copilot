import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

//take a sentence as input
// revrse the input sentence
// the start of the sentence  must start with a capital letter
//for javascript



const ReverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
console.log(ReverseSentence('hello world')); //output: Dlrow Olleh
console.log(ReverseSentence('this is a test')); //output: Tset A Si Siht

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

  //As an illustration, pull names out of the data array
    const names = data.map((group) => {
        return group.map((person) => {
        return person.name;
        });
    });
    console.log(names); //output: [ [ 'John', 'Jane' ], [ 'Bob' ] ]

    //MAp through an arrays of objects
    //Example: Extract names from the data array
    // Desired outcome: ['John', 'Jane', 'Bob']

      //Example: Extract names from the data array
      // Desired outcome: ['John', 'Jane', 'Bob']
      const names = data.flatMap((group) => {
        return group.map((person) => {
          return person.name;
        });
      });
      console.log(names); //output: [ 'John', 'Jane', 'Bob' ]