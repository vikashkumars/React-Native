import {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () =>{
    const[results,setResults]=useState('');
    const[errormsg,setErrormsg]=useState('');

    const searchApi =async (searchTerm) => {
      try{
      const response = await yelp.get('/search',{
          params:{
              limit:5,
              term:searchTerm,
              location:'san jose'

          }
      });
      setResults(response.data.businesses)
  }catch(err){
      console.log(err);
     // setErrormsg('something went wrong');
  }
  };
    //Call searchapi when component
    //is first rendered !bad code
    //searchApi('pasta')
    useEffect(()=>{
        searchApi('pasta');
    },[]

    );
    return [searchApi,results, errormsg];
};