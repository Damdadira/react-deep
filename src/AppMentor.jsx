import { useState } from 'react'
import './AppXY.css'

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자'
    }
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={() => {
        const name = prompt(`what's your mentor's name?`, `기본값`);
        setPerson(prev => ({ ...prev, mentor: { ...prev.mentor, name }}));
      }}>
        멘토 이름 바꾸기
      </button>
      <button onClick={() => {
        const title = prompt(`what's your mentor's title?`);
        setPerson(prev => ({ ...prev, mentor: { ...prev.mentor, title }}));
      }}>
        멘토 타이틀 바꾸기
      </button>
    </div>
  )
}