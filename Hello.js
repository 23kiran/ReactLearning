import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'lbl1',className:'labelclass'},
    React.createElement('h1',null, 'hello from code')
    )
}

export default Hello