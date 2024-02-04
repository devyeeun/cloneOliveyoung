import { StyledDimmer } from './Dimmer.styles'

interface DimmerProps {
  fade?: 'in' | 'out'
  handleClick?(): void
  children: React.ReactNode
}

const Dimmer = ({ fade, handleClick, children }: DimmerProps) => {
  return (
    <StyledDimmer
      onClick={(e) => {
        if (handleClick) {
          const target = e.target as HTMLElement
          if (target.classList.length > 1) {
            handleClick()
          }
        }
      }}
    >
      {children}
      {'하하'}
    </StyledDimmer>
  )
}

export { Dimmer }
