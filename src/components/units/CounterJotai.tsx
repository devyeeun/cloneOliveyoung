import { atom, useStore } from 'jotai'
import { useAtom, useSetAtom, useAtomValue } from 'jotai'
import { useCallback, useEffect, useMemo } from 'react'
import { countAtom } from '../..'

type DerivedAction = { type?: string }
type WriteUpdateType = { discount: number }

const readWriteAtom = atom(
  (get) => get(countAtom) + 2,
  (get, set, newPrice: number) => {
    set(countAtom, newPrice / 2)
    // 동시에 원하는 만큼 atom을 설정할 수 있다.
  }
)

const writeOnlyAtom = atom(
  null, //
  (get, set, update: WriteUpdateType) => {
    set(countAtom, get(countAtom) - update.discount)
  }
)

const readOnlyAtom = atom((get) => get(countAtom) * 3)

const CounterJotai = () => {
  const store = useStore()
  // store.set(countAtom, 3)

  /* 
  get, set과 함께 사용
  1) readWriteAtom
  const [value, setValue] = useAtom(readWriteAtom)

  2) writeOnlyAtom
  const setWriteAtom = useSetAtom(writeOnlyAtom)
  const count = useAtomValue(countAtom)

  3) readOnlyAtom
  const readOnlyValue = useAtomValue(readOnlyAtom)
  
  */

  /* 
  글로벌 하게 선언된 countAtom을 직접적으로 불러와서 사용

  1) 읽기 전용으로 사용
  const [useCountAtom] = useAtom(countAtom)
  
  2) 변수에 직접적으로 할당해서 읽기 전용으로 사용
  const countAtomValue = useAtomValue(countAtom)
  
  3) 쓰기 전용으로 사용 
  const setCount = useSetAtom(countAtom)

  */

  const [count, setCount] = useAtom(countAtom)

  const derivedAtom = useMemo(
    () =>
      atom(
        // derivedAtom의 상태를 countAtom과 동일하게 설정
        (get) => get(countAtom),
        // derivedAtom의 상태 업데이트 함수
        (get, set, action: DerivedAction) => {
          if (action.type === 'init') {
            set(countAtom, 15)
          } else if (action.type === 'change') {
            set(countAtom, 11)
          } else {
            set(countAtom, 8)
          }
        }
      ),
    []
  )

  // derivedAtom mount
  useAtom(derivedAtom)

  derivedAtom.onMount = (set) => {
    set({ type: 'init' })
  }

  const handleClick = useCallback(() => {
    setCount((count) => count + 1)
    //  setValue(30)
    //  setWriteAtom({ discount: 5 })
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Up!</button>
    </div>
  )
}

export { CounterJotai }
