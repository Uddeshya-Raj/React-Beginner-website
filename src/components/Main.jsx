import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import { EXAMPLES } from "../data";
import Card from "./Card";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

export default function Main() {
    let [currentState, setCurrentState] = useState(null); 
    // useState return as array two things:
    // (1) a variable which stores the current state of the component
    // (2) a function which can change the current state of the component
    // input to useState is the initial state of the component.
    // in more complex situations input can be a javascript object.

    function clickHandler(selectedButton){
        setCurrentState(selectedButton);
        console.log(currentState);
    }
    return (
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {/* 
                    <Card image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
                    <Card {...CORE_CONCEPTS[1]}/>
                    <Card {...CORE_CONCEPTS[2]}/>
                    <Card {...CORE_CONCEPTS[3]}/>
                    */}

                    {CORE_CONCEPTS.map((prop) => (<Card key={prop.index} {...prop} />))}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={currentState === 'components'} onSelect={() => clickHandler('components')}>Components</TabButton>
                    <TabButton isSelected={currentState === 'jsx'} onSelect={() => clickHandler('jsx')}>JSX</TabButton>
                    <TabButton isSelected={currentState === 'props'} onSelect={() => clickHandler('props')}>Props</TabButton>
                    <TabButton isSelected={currentState === 'state'} onSelect={() => clickHandler('state')}>States</TabButton>
                </menu>
                {!currentState? <p>Select a topic</p> : <TabContent {...EXAMPLES[currentState]}></TabContent>}
            </section>
        </main>
    );
}