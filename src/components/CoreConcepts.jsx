import Card from "./Card";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts(){
    return(
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {/* 
                <Card image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
                <Card {...CORE_CONCEPTS[1]}/>
                <Card {...CORE_CONCEPTS[2]}/>
                <Card {...CORE_CONCEPTS[3]}/>
                */}

                {CORE_CONCEPTS.map((prop) => (<Card key={prop.index} {...prop} />))}
            </ul>
        </Section>
    );
}