import { useState } from 'react'
import './AppXY.css'

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    setPerson((person) => ({ 
      ...person, 
      mentors: person.mentors.map((mentor) => {
        // 기존의 이름과 변경할 멘토의 이름이 같다면 새로운 객체를 만들어 반환
        if(mentor.name === prev){
          return { ...mentor, name: current };
        }
        return mentor; //아니면 원래꺼 리턴
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const title = prompt(`추가하고 싶은 멘토의 직함은 무엇인가요?`);

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }]
    }))
  };
  const handleRemove = () => {
    const name = prompt(`삭제하고 싶은 멘토의 이름은 무엇인가요?`);
    
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(mentor => mentor.name !== name)
    }))
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>
        멘토 이름 바꾸기
      </button>
      <button onClick={handleAdd}>
        멘토 추가하기
      </button>
      <button onClick={handleRemove}>
        멘토 삭제하기
      </button>
    </div>
  )
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자'
    },
    {
      name: '제임스',
      title: '시니어개발자'
    },
  ]
}