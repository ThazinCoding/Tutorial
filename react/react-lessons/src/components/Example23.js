"use client";
//Example :Conditionally Rendering a list
//Sample data for todos param => todos=[{ id:1,text:"Test1"},
//                                        {id:2,text:"Test2" }]
export default function TodoList({todos=[]}){
    return (
        <ul>
            {todos.length>0?(
                todos.map((task,index) =>
                <li key={task.id}>{task.text}</li>)
            ):
            (<li>No tasks avaliable</li>)
            }
            </ul>
    );
}