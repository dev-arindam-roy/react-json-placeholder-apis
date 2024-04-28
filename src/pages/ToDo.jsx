import React, { useState, useEffect } from 'react'

const apiURL = "https://jsonplaceholder.typicode.com/todos";

const ToDo = () => {

  const [todos, setTodos] = useState([]);

  const allToDos = () => {
    fetch(apiURL).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.length > 0) {
        setTodos(data);
      } else {
        setTodos([]);
      } 
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    allToDos();
  }, []);
  return (
    <>
      <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-md-8'>
                        <strong>ToDos ({todos.length})</strong>
                    </div>
                    <div className='col-md-4'>
                        
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-sm table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length > 0 ?
                            todos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{item.id}</th>
                                        <td>{item.title}</td>
                                        <td className={item.completed == true ? 'text-success' : 'text-danger'}>{item.completed == true ? 'YES' : 'NO'}</td>
                                    </tr>
                                )
                            }) : <tr>
                                <td colSpan="3">No ToDos Found!</td>
                            </tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default ToDo