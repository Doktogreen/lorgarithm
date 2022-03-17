import React, { Fragment, useState } from "react";

export function PageSwitch(props) {
    const [constantPage, setConstantPage] = useState(1);
    let prospectivePage = props.prospectivePage;
    let button = props.button;
    let component = props.component;
    clickHandler = () =>  {
        setConstantPage(prospectivePage ? prospectivePage : constantPage)
    } 
    return(
        <Fragment>
            {button}
            {prospectivePage ? component : null}
        </Fragment>
    )
}