import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import Square from './Square'

class PaintCanvas extends Component {
  constructor() {
      super();
    
      this.state = {
          selectedColor: 'white',
          painting: false
      }

      this.changeSelectedColor = this.changeSelectedColor.bind(this)
  }

    togglePainting = () => {
        this.setState({painting: !this.state.painting})
    }


    changeSelectedColor(color) {
        this.setState({ selectedColor: color })
    }

    draw() {
        let squares = [];

        for(let i = 0; i < 5000; i++) {
            squares.push(<Square 
                key={i}  
                selectedColor={this.state.selectedColor}
                painting={this.state.painting}
                 />)
        }
        return squares
    }
  
  
    render() {
    return (
      <div>
        <ColorPicker handleColorClick={this.changeSelectedColor}/>
        <div
         style={{display: 'flex', flexWrap: 'wrap'}}
         onMouseDown={this.togglPainting}
         onMouseUp={this.togglePainting}>{this.draw()}</div>
      </div>
    )
  }
}

export default PaintCanvas
