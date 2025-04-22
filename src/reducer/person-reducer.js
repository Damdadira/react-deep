export default function personReducer(person, action) {
  switch(action.type) {
    case 'update': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          // 기존의 이름과 변경할 멘토의 이름이 같다면 새로운 객체를 만들어 반환
          if(mentor.name === prev){
            return { ...mentor, name: current };
          }
          return mentor; //아니면 원래꺼 리턴
        }), 
      };
    }
    case 'add': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }]
      };
    }
    case 'remove': {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter(mentor => mentor.name !== name)
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}