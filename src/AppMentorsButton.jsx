import { useReducer } from 'react'
import './AppXY.css'
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  //useReducer(함수 전달, 초기값 전달)
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    //action 객체 전달
    dispatch({ type: 'update', prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const title = prompt(`추가하고 싶은 멘토의 직함은 무엇인가요?`);

    dispatch({ type: 'add', name, title });
  };
  const handleRemove = () => {
    const name = prompt(`삭제하고 싶은 멘토의 이름은 무엇인가요?`);
    
    dispatch({ type: 'remove', name });
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
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate}></Button>
      <Button text='멘토 추가하기' onClick={handleAdd}></Button>
      <Button text='멘토 삭제하기' onClick={handleRemove}></Button>
    </div>
  )
}

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem'
      }}
    >
      {text}
    </button>
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