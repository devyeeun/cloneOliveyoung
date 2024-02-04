import { useAtom } from 'jotai'
import { atomWithStorage, RESET } from 'jotai/utils'

const textAtom = atomWithStorage('text', 'hello')

const AtomWithStorage = () => {
  const [text, setText] = useAtom(textAtom)

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText(RESET)}>Reset (to 'hello')</button>
    </>
  )
}

export {AtomWithStorage}