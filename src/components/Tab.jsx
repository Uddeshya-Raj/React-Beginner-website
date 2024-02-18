export default function Tab({ buttons, children, ButtonWrapper = 'menu' }) { 
    // a dynamically rendered html element should always be contained 
    // in a variable with its name starting with a capital letter.
    // to instead assign a custom container as a wrapper put the values like this : ButtonWrapper = { Section }
    // ALL DYNAMIC STUFF IN REACT STARTS WITH A CAPITAL LETTER
    return (<>
        <ButtonWrapper>
            {buttons}
        </ButtonWrapper>
        {children}
    </>
    );
}