import React, { useState, useEffect } from 'react'
import { TestPlot } from '../plot'
import slides from './slides'
import { useHotkeys } from 'react-hotkeys-hook';
import NewWindow from 'react-new-window'
import Draggable from 'react-draggable'


import './bundle.css'
import StScrolly from '@st-graphics/react-scrolly'

import './scene.css'
import { GlobalContext } from "../../../../../components/RootContext"

import { scroller, Element } from 'react-scroll'
import theme from '../../../../../style/theme';

function Scene1 () {
  const prezMode = React.useContext(GlobalContext)
  const [index, setIndex] = useState(-1)
  const [nextSlide, setNextSlide] = useState("slide1")

  const incrementIndex = () => setIndex( prevState => prevState + 1 )
  const decrementIndex = () => setIndex( prevState => prevState - 1 )

  const sceneLength = slides.length
  console.log("num slides", sceneLength)

  useEffect(() => {
    
    if(index < 0) {
      setNextSlide("slide0")
    } else if (index > sceneLength) {
      setNextSlide("slide" + (sceneLength - 1))
    } else {
      setNextSlide("slide"+(index + 1))
    }

    scroller.scrollTo(nextSlide, {
      duration: 500,
      smooth: true,
    })
    
  }, [index])

  useHotkeys('.', () => {
    incrementIndex()
  })

  useHotkeys(',', () => {
    decrementIndex()
  })
 



  const $slides = slides.map((slide, i) => (
    
      <div className="slide" style={prezMode.prezMode ? {'visibility':'hidden'} : null}key={i} id={"slide" + i}>
        <Element name={"slide" + i} />
      <div className="card" style={{paddingTop:"0"}}>{slide}</div>
      </div>
  ))

  //const renderForeground = ({slideIndex}) => {
  const renderForeground = ({slideIndex}) => {
    return (
      <div style={{
     
        'height':'100%',
        'width':'100%'
      }}>
        <Draggable 
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          scale={1}
          >
          <div className="handle" style={{'width':'50%'}}>
            <TestPlot slideIndex={index} />
          </div>
        </Draggable>
        <NewWindow title="Script">
          <div style={{"padding":"20", "backgroundColor":"black", "color":"yellow", "height":"100%"}}>
             {index}
             {slides[index]}
          </div>
        </NewWindow> 
      </div>
    )
  }

  const renderBackground = ({slideIndex}) => {
    console.log("slideIndex: ", slideIndex)
    console.log("index:m ", index)
    return (
        <div className={!prezMode.prezMode ? "background_reg" : "background_prez"}>
        <div className="plot" >
          <TestPlot slideIndex={slideIndex}/>
        </div>
        {prezMode.prezMode &&
        <NewWindow title="Script">
          <div style={{"padding":"20", "backgroundColor":"black", "color":"yellow", "height":"100%"}}>
             {index}
             {slides[index]}
          </div>
        </NewWindow> }
        </div>
    )
  }


  return (
   <div style={prezMode.prezMode ? {'backgroundColor':theme.palette.prezBackground}:null}>
     <StScrolly
        triggerOffset={-200}
        renderBackground = { renderBackground }
        >
          {$slides}     
      </StScrolly>
      
    </div>
  )
}


export default Scene1