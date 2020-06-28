import React from 'react'
import './index.css'
import ResponsiveWrapper from './ResponsiveWrapper'
import useWindowSize from './Hooks/UseWindowSize';

let boxesArr = [

  // ROW 1
  [
    { class: 'col-2', box: 'orange', txt: '2 columns' },
    { class: 'col-2', box: 'blue', txt: '2 columns' },
    { class: 'col-2', box: 'green', txt: '2 columns' },
    { class: 'col-2', box: 'black', txt: '2 columns' },
    { class: 'col-2', box: 'black', txt: '2 columns' },
    { class: 'col-2', box: 'black', txt: '2 columns' }
  ],

  // ROW 2
  [
    { class: 'col-2-3', box: 'orange', txt: '2-3 columns' },
    { class: 'col-2-3', box: 'blue', txt: '2-3 columns' },
    { class: 'col-2-3', box: 'green', txt: '2-3 columns' },
    { class: 'col-2-3', box: 'green', txt: '2-3 columns' }
  ],

  // ROW 3
  [
    { class: 'col-3', box: 'orange', txt: '3 columns' },
    { class: 'col-3', box: 'blue', txt: '3 columns' },
    { class: 'col-3', box: 'green', txt: '3 columns' },
    { class: 'col-3', box: 'black', txt: '3 columns' }
  ],

  //ROW 4
  [
    { class: 'col-4', box: 'blue', txt: '4 columns' },
    { class: 'col-4', box: 'green', txt: '4 columns' },
    { class: 'col-4', box: 'black', txt: '4 columns' }
  ],

  //ROW 5
  [
    { class: 'col-6', box: 'blue', txt: '6 columns' },
    { class: 'col-6', box: 'green', txt: '6 columns' }
  ],

  //ROW 6
  [
    { class: 'col-12', box: 'black', txt: '6 columns' }
  ]
]

const ResponsiveBoxes = () => {

  const size = useWindowSize()
  
  return(
    <main role="main">

    {boxesArr.map((boxArr, ind) => {
      return(
        <div 
        key={`boxRow${ind}`}
        className="row">
        {boxArr.map((b,idx) => {
          return(
            <ResponsiveWrapper 
            key={`individualBox${idx} row${ind}`}
            boxWrapperClass={b.class}
            boxClassName={b.box}
            boxTxt={b.txt}
            parentSize={size}/>
          )
        })}
      </div>)
    })}

  </main>)
}

export default ResponsiveBoxes;