import { atom, useAtom, useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'

const SelectAtomData = {
  name: {
    first: 'Kim',
    last: 'YeEun',
  },
  birth: {
    year: 2000,
    month: 'Jan',
    day: 1,
    time: {
      hour: 1,
      minute: 1,
    },
  },
}

// 오리지널 atom
const personAtom = atom(SelectAtomData)

// person.name을 추적, person.name 객체가 변경되면 업데이트됩니다.
const nameAtom = selectAtom(personAtom, (person) => person.name)

// person.birth를 추적합니다.
const birthAtom = selectAtom(personAtom, (person) => person.birth)

const SelectAtom = () => {
  const [person, setPerson] = useAtom(personAtom)

  const handleClick = () => {
    setPerson({
      ...person,
      name: { first: 'Jo', last: 'SeHo' },
    })
  }

  return (
    <div>
      성 : <span>{person.name.first}</span>
      <br />
      이름 : <span>{person.name.last}</span>
      <br />
      <button onClick={handleClick}>이름바꾸자!</button>
    </div>
  )
}
export { SelectAtom }
