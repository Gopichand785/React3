import React,{useState,useEffect} from 'react'
const TodoApp = () => {
    const initialvalue={
        firstname:"",
        country:"",
        number:"",
        role :""
    };
    const [inputvalues,setinputvalues ]=useState(initialvalue)
    const [store,setstore]=useState([])
    const [inputerrors,setinputerrors]=useState({})
    const [issubmit,setissubmit]=useState(false)
    const [search,setsearch]=useState("")

    const chanageHandler=(e)=>{
     setinputvalues({...inputvalues,[e.target.name]:e.target.value  })
     console.log(setinputvalues)
    }
    const submitHandler=(e)=>{
     e.preventDefault()
     setinputerrors(Validate(inputvalues));
     setissubmit(true);
    }
  useEffect(()=>{
    if (Object.keys(inputerrors).length===0 && issubmit){
      const  newStore=[...store,inputvalues]
      setstore(newStore)
    }
  },
  [inputerrors]
  )
  //delete button 
 const deleteHandler=(indexvalue)=>{
    const FilteredTodo= store.filter((swi,index)=>index !==indexvalue)
    setstore(FilteredTodo); 
 }
const editHandler=(editindexvalue)=>{
    const FilteredTodo=store.filter(
        (elem,index)=>index !== editindexvalue
    )
    setstore(FilteredTodo)
    const editSelector=store.find((elem,index)=>index==editindexvalue)
    setinputvalues({
        firstname:editSelector.firstname,
        country:editSelector.country,
        number:editSelector.number,
        role:editSelector.role
    })
}

  const Validate=(values)=>{
    const error={}
    if(!values.firstname){
        error.firstname="Enter your firstname!"
    }
    else {
        error.firstname="please Enter Alphabets only"
    }
    if(!values.country){
        error.country="please enter your country"
    }
    if(!values.number){
        error.number="please enter your numbers"
    }
    if(!values.role){
        error.role="CHOOSE YOUR ROLE"
    }
    return error
  }
  return (
    <div>
        <h5>cricket</h5>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter your name' name="firstname" value={inputvalues.firstname} onChange={chanageHandler} />            
            <small>{inputerrors.firstname}</small>
             <input type='text' placeholder='country'  name='country' value={inputvalues.country} onClick={chanageHandler} />
                <small>{inputerrors.country}</small>
                <input type="text" placeholder='enter a vaid number' maxLength={10} name='number' value={inputvalues.number} onClick={chanageHandler}/>
                <small>{inputerrors.number}</small>
                <select name='role' onChange={chanageHandler} value={inputvalues.role   }>
                    <option value= "" disabled selected hidden>
                        CHOOSE YOUR ROLE
                    </option>
                 <option>BATSMAN</option>
                 <option>BOLWER</option>
                 <option>ALL-ROUNDER</option>
                 <option>WICKET-KEEPER</option>
                </select>
                <small>{inputerrors.role}</small> <br/>
                <button>save</button>
                   </form>
    <button onClick={(e)=>{setsearch(e.target.value)}} value="Batsman" className='Role'>BATSMAN </button>
    <button onClick={(e)=>{setsearch(e.target.value)}} value="Bowler" className='Role'>BOLWER</button>
    <button onClick={(e)=>{setsearch(e.target.value)}} value="All-Rounder" className='Role'>ALL-ROUNDER </button>
    <button onClick={(e)=>{setsearch(e.target.value)}} value="WICKET-KEPPER" className='Role'>WICKET-KEPPER</button>
    <button onClick={(e)=>{setsearch(e.target.value)}} value="All-players" className='Role'>ALL</button>
{Object.keys(store).length >0? (
    <table style={{width:"100%"}} >
<thead>
<tr>
<th>S.No</th>
<th>Name</th>
<th>country</th>
<th>mobile number</th>
<th>Role</th>
<th>Mobile Number</th>
</tr>
</thead> 
<tbody>
    {store.filter((val)=>{
        if(search===""){
            return val
           }else if(val.role.toLowercase().includes(search.toLowerCase())){
            return val
           }
    }).map((todo,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{todo.firstname}</td>
                <td>{todo.country}</td>
                <td>{todo.number}</td>
                <td>{todo.role}</td>

                <td>
                    <button onClick={()=>editHandler(index)} className='editbutton'>Edit</button>
                    <button onClick={()=>deleteHandler(index)} className='Deletebutton'>Delete</button>
                </td> 
            </tr>
        )
    })
    }
</tbody>  
 </table>
):null }
    </div>
  )
}

export default TodoApp