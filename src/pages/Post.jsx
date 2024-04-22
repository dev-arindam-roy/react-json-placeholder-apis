import React, { useState, useEffect } from 'react'

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

const Post = () => {

    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('');

    const allPosts = () => {
        fetch(apiEndPoint).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.length > 0) {
                setPosts(data);
            } else {
                setPosts([]);
            }
            setPostId('');
            console.log(data);
        })
    }

    const findPostById = () => {
        fetch(`${apiEndPoint}/${postId}`).then((response) => {
            return response.json();
        }).then((data) => {
            if (data && Object.keys(data).length > 0) {
                setPosts([data]);
            } else {
                setPosts([]);
            }
            console.log(data);
        })
    }
    useEffect(() => {
        allPosts();
    }, []);
  return (
    <>
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-md-8'>
                        <strong>Posts ({posts.length})</strong>
                    </div>
                    <div className='col-md-2'>
                        <input type='number' id="postId" className='form-control' placeholder='ID' value={postId} onChange={(e) => setPostId(e.target.value)} />
                    </div>
                    <div className='col-md-2' style={{textAlign: 'right'}}>
                        <button type='button' className='btn btn-success' onClick={findPostById}>GET</button>
                        <button type='button' className='btn btn-danger ms-2' onClick={allPosts}>ALL</button>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-sm table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.length > 0 ?
                            posts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                )
                            }) : <tr>
                                <td colSpan="3">No Post Found!</td>
                            </tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Post