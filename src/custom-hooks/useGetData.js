import {useState, useEffect} from 'react';
import { db } from '../firebase.config';
import { collection, getDocs } from 'firebase/firestore';


const useGetData = (collectionName) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(false);
    const collectionRef = collection(db, collectionName);
    const c = 1;
    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collectionRef);
            setData(data.docs.map(doc=>({...doc.data(), id: doc.id})));
            setLoading(false);
            console.log(c);
        }
        if(!data)
        {
            getData();
        }
    }, [data, loading]);

  return {data, loading};
}

export default useGetData