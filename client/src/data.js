import { useState, useEffect } from 'react';

function useGetData(url) {
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch('/api' + url).then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return data
}

export default useGetData;