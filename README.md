# REACT with Json Placeholder API

```js
import React, { useState, useEffect } from 'react'

const apiEndPoint = "https://jsonplaceholder.typicode.com/photos";

const ImageLimit = () => {

    //image bucket & album id bucket (main)
    const [images, setImages] = useState([]);
    const [albumIds, setAlbumIds] = useState([]);

    //filters
    const [imgId, setImgId] = useState('');
    const [limit, setLimit] = useState(10);
    const [albumId, setAlbumId] = useState(1);

    //another api call
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

    //here is the main thing, where apply all filters (ablum id & limit)
    //and final image bucket is ready for display
    const allImages = () => {
        fetch(apiEndPoint).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.length > 0) {
                let filterByAlbumId = [];
                let imageBoxLimit = [];
                filterByAlbumId = data.filter((item) => {
                    if (item.albumId == albumId) {
                        return item;
                    }
                })
                if (filterByAlbumId.length > 0) {
                    filterByAlbumId.map((item, index) => {
                        if (index < limit) {
                            imageBoxLimit.push(item);
                        }
                    })
                }
                setImages(imageBoxLimit);
            } else {
                setImages([]);
            }
            console.log(data);
        });
    }

    //same api endpoint call but here only collect the album ids
    const allAlbumIds = () => {
        fetch(apiEndPoint).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.length > 0) {
                let collectIds = [];
                data.map((item) => {
                    collectIds.push(item.albumId);
                })
                if (collectIds.length > 0) {
                    let uniqueItems = [...new Set(collectIds)];
                    setAlbumIds(uniqueItems);
                } else {
                    setAlbumIds([]);
                }
            } else {
                setAlbumIds([]);
            }
        });
    }

    const resetAll = () => {
        setImgId('');
        setLimit(10);
        setAlbumId(1);
    }

    //this useEffect is call on page load & once any of these 2 dependency params value changes 
    useEffect(() => {
        allImages();
    }, [albumId, limit])

    //this useEffect is call only 1 time - page load
    useEffect(() => {
        allAlbumIds();
    }, [])

  return (
    <>
    .......
    ........
```

## Few JSX Rendering

```js
<div className='card-body'>
    <div className='row'>
    {
        images.length > 0 ? 
        images.map((item, index) => {
            return (
                <div className='col-md-4 mt-2' key={index}>
                    <div className='card'>
                        <div className='card-header'>
                            <strong>ID: {item.id}</strong> | 
                            &nbsp;<strong>Album: {item.albumId}</strong>
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
```

```js
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
```