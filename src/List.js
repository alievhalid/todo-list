import { useState } from "react";

function List() {

    const [todos,setTodos] = useState(
        [
            {
                text: 'Купить ноутбук',
                favorite: false
            },
            {
                text: 'Доделать верстку',
                favorite: false
            },
            {
                text: 'Покормить кота',
                favorite: false
            }
        ]
    )
    const [text,setText] = useState()





const deleteTodo = (indexof) => {
    const filt = todos.filter((todo, index) => {
       if (index === indexof) {
           return false;
       } 
           return true;
       
    })
    setTodos(filt)
}
const makeFavorite = ((ind) => {
    const newTodos = todos.map((item,index) => {
        if(ind === index) {
            return {
                ...item,
                favorite: !item.favorite
            };
        } 
        return item;
    });
    setTodos(newTodos)
})
    const newTodos = todos.map((todo,indexof) => {
        return (
            <div className={todo.favorite ? 'todo selected' : "todo"}>
            <div className='favorite'>
            <button onClick={() => makeFavorite(indexof)}>★</button>
            </div>
            <div className="todo-text">
                {todo.text}
            </div>
            <div className="actions">
                <button onClick={() => deleteTodo(indexof)}>
                    x
                </button>
            </div>
        </div>
        )
    })
    const plus = () => {
        setTodos([
        {
            text: text,
            favorite: false
        },...todos
   
    ]);
    setText("")
    }
    console.log(text);
    return (
        <div className="app">
            <div className="header">
                список дел
            </div>
            <div className="form">
                <input 

                placeholder="Введите текст..." 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                
                <button onClick={plus}>
                    добавить
                </button>

            </div>
            <div className="todos">
              {newTodos} 
            </div>
        </div>
    )
}

export default List;