import React, { useCallback, memo } from 'react'
import { FiX, FiMinus, FiSquare } from 'react-icons/fi'

import { Container, WindowActions, DefaultActionButton } from './styles'

function Header(): JSX.Element {
  const handleCloseWindow = useCallback(() => {}, [])
  const handleMinimize = useCallback(() => {}, [])
  const handleMaximize = useCallback(() => {}, [])

  return (
    <Container>
      <strong>Vasco Basket</strong>

      <WindowActions position="right">
        <DefaultActionButton onClick={handleMinimize}>
          <FiMinus />
        </DefaultActionButton>
        <DefaultActionButton onClick={handleMaximize}>
          <FiSquare />
        </DefaultActionButton>
        <DefaultActionButton onClick={handleCloseWindow}>
          <FiX />
        </DefaultActionButton>
      </WindowActions>
    </Container>
  )
}

export default memo(Header)
