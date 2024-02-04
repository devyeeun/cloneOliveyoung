import { useCallback, useState } from 'react'

const useClickNextBtn = () => {
  const [pageNum, setPageNum] = useState(1)

  const handleClickBtn = useCallback(() => {
    if (setPageNum === undefined) return

    setPageNum((prev) => {
      if (prev === 2) {
        return 1
      } else {
        return prev + 1
      }
    })
  }, [setPageNum])

  return { pageNum, handleClickBtn }
}

export { useClickNextBtn }
