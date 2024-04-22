import React, { useState, useEffect } from 'react'

const apiEndPoint = "https://jsonplaceholder.typicode.com/photos";
const limit = 200;

const Image = () => {

    const [images, setImages] = useState([]);
    const [imgId, setImgId] = useState('');

    const findImageById = () => {
        fetch(`${apiEndPoint}/${imgId}`).then((response) => {
            return response.json();
        }).then((data) => {
            if (data && Object.keys(data).length > 0) {
                setImages([data]);
            } else {
                setImages([]);
            }
            console.log(data);
        })
    }

    const allImages = () => {
        fetch(apiEndPoint).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.length > 0) {
                setImages(data);
            } else {
                setImages([]);
            }
            setImgId('');
            console.log(data);
        });
    }

    useEffect(() => {
        allImages();
    }, [])

  return (
    <>
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-md-8'>
                        <strong>Images ({images.length})</strong>
                    </div>
                    <div className='col-md-2'>
                        <input type='number' id="postId" className='form-control' placeholder='ID' value={imgId} onChange={(e) => setImgId(e.target.value)} />
                    </div>
                    <div className='col-md-2' style={{textAlign: 'right'}}>
                        <button type='button' className='btn btn-success' onClick={findImageById}>GET</button>
                        <button type='button' className='btn btn-danger ms-2' onClick={allImages}>ALL</button>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <div className='row'>
                {
                    images.length > 0 ? 
                    images.map((item, index) => {
                        return (
                            index < limit &&
                            <div className='col-md-4 mt-2' key={index}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <strong>ID: {item.id}</strong>
                                    </div>
                                    <div className='card-body'>
                                        <img src={item.thumbnailUrl} title={item.title} alt={item.title} className='img-thumbnail' />
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className='alert alert-danger'>
                            <strong>No Photo Found!</strong>
                        </div>
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Image