import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const duration = 2000
const defaultStyle={
    transition: 'transform 300ms ease-in',
    transform: 'scale(0.5)',
}
const getTransitionStyles = {
    entering: { transform: 'scale(1)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(0.5)' },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props
    return (
      <TransitionGroup>
        <ReactTransition
          key={location}
          timeout={duration}
        >
          {status => (
            <div style={{
                ...defaultStyle,
                ...getTransitionStyles[status]
              }}>
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition