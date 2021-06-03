import React,{useEffect} from 'react'

const FakeStore = () => {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default FakeStore
