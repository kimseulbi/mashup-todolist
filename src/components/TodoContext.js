import React, { useReducer, createContext, useContext, useRef } from "react";

/* context 사용하는 이유: 프로젝트의 규모가 커질때는 매우 유용 */

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: true,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

/*
세가지의 액션 리듀서
 CREATE: 액션안에 todo항목을 넣어서 dispatch
 TOGGLE: 모든 todo의 변환, todo.id가 action.id가 같다면 done값을 기존값의 반전값으로 업데이트, todo.id가 action.id가 다르다면 유지
 REMOVE: 모든 항목을 비교해서 일치하지 않는것만 가져오겠다
*/
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      console.log(typeof state);
      console.log(action.todo);
      // concat: 배열을 하나의 배열로 합쳐즘
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/* 
state위한 dispatch위한 Context를 만들었는데
나중에 최적화를 위함 
 ex) TodoCreate에서는 dispatch만 필요함.그런데 한 context안에 state, dispatch를 넣어두면 불필요한 렌더링응 하게됨
*/

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  /* useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.  */
  const nextId = useRef(5);
  console.log(nextId);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

/* hook */
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
