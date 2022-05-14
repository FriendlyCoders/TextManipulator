import React from 'react'

export default function About(props) {
    
    return (
        <>
        <div class="card mx-4 my-4" style={{color: props.mode === 'light'?'black':'white'}}>
        <div class="card-body" style={{backgroundColor: props.mode === 'light'?'white':'grey'}} >
            <h1 class="card-title mx-4 " style={{color: props.mode === 'light'?'black':'yellow'} }>Play With Text </h1>
            <p class="card-text mx-4 my-4" style={{color: props.mode === 'light'?'black':'white'}}>Utility app to modify, preview and copy text......</p>
        </div>
        </div>
        </>
    )
}
