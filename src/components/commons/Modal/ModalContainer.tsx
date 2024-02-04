import { useState, useEffect, ReactElement } from 'react'
import { createPortal } from 'react-dom'

interface _IReactPortalProps {
  children: React.ReactNode
  wrapperId: _TWrapperId
}

type _TWrapperId = string

function createWrapperAndAppendToBody(wrapperId: _TWrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

function ReactPortal({ children, wrapperId = 'react-portal-wrapper' }: _IReactPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let element = document.getElementById(wrapperId)
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default ReactPortal
