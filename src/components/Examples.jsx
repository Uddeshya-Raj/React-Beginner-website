import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "./Section";
import Tab from "./Tab";

export default function Examples() {
    let [currentState, setCurrentState] = useState(null);
    // useState return as array two things:
    // (1) a variable which stores the current state of the component
    // (2) a function which can change the current state of the component
    // input to useState is the initial state of the component.
    // in more complex situations input can be a javascript object.

    function clickHandler(selectedButton) {
        setCurrentState(selectedButton);
        console.log(currentState);
    }
    return (
        <Section title="Examples" id="examples">
            {/* <menu>
                <TabButton isSelected={currentState === 'components'} onClick={() => clickHandler('components')}>Components</TabButton>
                <TabButton isSelected={currentState === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
                <TabButton isSelected={currentState === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
                <TabButton isSelected={currentState === 'state'} onClick={() => clickHandler('state')}>States</TabButton>
            </menu>
            {!currentState ? <p>Select a topic</p> : <TabContent {...EXAMPLES[currentState]}></TabContent>} 
            
            // Instead a modular Tab component can be used which has both 'tab button' and 'tab content' functionality
            
            */}


            <Tab buttons={
                <>
                    <TabButton isSelected={currentState === 'components'} onClick={() => clickHandler('components')}>Components</TabButton>
                    <TabButton isSelected={currentState === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
                    <TabButton isSelected={currentState === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
                    <TabButton isSelected={currentState === 'state'} onClick={() => clickHandler('state')}>States</TabButton>
                </>
            }>
                {!currentState ? <p>Select a topic</p> : <TabContent {...EXAMPLES[currentState]}></TabContent>}
            </Tab>
            
        </Section>
    );
}