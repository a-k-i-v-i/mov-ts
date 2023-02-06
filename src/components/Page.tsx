import { log } from "console"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedDispatch } from "../hooks/useDispatch"
import { useTypedSelector } from "../hooks/useSelector"
import { fetchPage } from "../store/actionCreaters/page"



const Page = ()=>{
    const {page, loader, error} = useTypedSelector((s)=> s.page)
    const {fetchPage} = useTypedDispatch()
    useEffect(()=>{
       fetchPage()
     },[])

    if(loader ){
        return <p>Loading...</p>
    }

    if(error){
        return <h3>Error!!!</h3>
    }
    console.log(page)
    return (
        <div>{
            page.map((el)=> (
                <div>{}</div>
            ))}
        </div>
    )
}

export default Page