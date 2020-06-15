import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const url = 'http://localhost:5000'



const Formbody = () => {

// The state of the text field

const [kipulaake, setkipulaake] = useState({
   firstKipu: '',
   secondKipu: '',
   thirdKipu: '',
   forthKipu:''
});


// This function handles the change in the text field

const handleChange = (event)=> {
    const {value, name } = event.target;

    setkipulaake((prevValue) =>{
        if(name === "firstMed"){
            return{
                firstMed:value,
                secondMed: prevValue.secondMed,
                thirdMed: prevValue.thirdMed,
                forthMed: prevValue.forthMed
            }
        }
        else if(name === "secondMed"){
            return{
                firstMed: prevValue.firstMed,
                secondMed: value,
                thirdMed: prevValue.thirdMed,
                forthMed: prevValue.forthMed
            }
        }
        else if(name === "thirdMed"){
            return{
                firstMed: prevValue.firstMed,
                secondMed: prevValue.thirdMed,
                thirdMed: value,
                forthMed: prevValue.forthMed
            }
        }
        else if(name === "forthMed"){
            return{
                firstMed: prevValue.firstMed,
                secondMed: prevValue.forthMed,
                thirdMed: prevValue.thirdMed,
                forthMed: value
            }
        }

    })
}

// http request to calculate the kipu
const laskeKaikki = (event)=>{
    event.preventDefault()
   axios.post(`${url} `)
}

    return (
        <div className="container">
            <form style={{width:'40%'}}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="medicine"> Kipulääke </label>
                    </div>
                  <div className="col-75">

                         <select name="medicine">
                             <option value="oxycontin">Oxycontin 10mg/ml</option>
                         <option value="morphin">Morphin 20mg/ml</option>
                             <option value="palladon">Palladon 50mg/ml</option>
                            
                         </select> 
                         <input 
                         type="text" 
                         name="firstMed" 
                         value={kipulaake.firstKipu}
                         onChange={handleChange}
                         placeholder="määräys mg">
                    
                         </input>
                  </div>
             
                </div>
{/* ......................................................................... */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="medicine2"> Rauhotava </label>
                    </div>
                  <div className="col-75">

                         <select name="medicine2">
                             <option value="loratzepaami1">Loratzepaami 2mg/ml</option>
                             <option value="loratzepaami2">Loratzepaami 4mg/ml</option>
                             <option value="ativan1">Ativan 2mg/ml</option>
                             <option value="ativan2">Ativan 4mg/ml</option>
                            
                         </select> 
                            <input 
                            type="text" 
                            name="secondMed" 
                            value={kipulaake.secondKipu}
                            onChange={handleChange}
                            placeholder="määräys mg">

                            </input>
                  </div>
                </div>
{/* ......................................................................... */}
                  <div className="row">
                    <div className="col-25">
                        <label htmlFor="medicine3"> Serenase </label>
                    </div>
                  <div className="col-75">

                         <select name="medicine3">
                             <option value="serenase">Serenase 5mg/ml</option>
                           
                            
                         </select> 
                             <input 
                             type="text" 
                             name="thirdMed" 
                             value={kipulaake.thirdKipu}
                             onChange={handleChange}
                             placeholder="määräys mg">
    
                             </input>
                  </div>
                </div>

    {/* ......................................................................... */}
    

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="medicine4"> Lima poiston </label>
                    </div>
                  <div className="col-75">

                         <select name="medicine4">
                             <option value="robinul">Robinul 0.2mg/ml</option>
                         </select> 
                             <input 
                             type="text" 
                             name="forthMed" 
                             value={kipulaake.forthKipu}
                             onChange={handleChange}
                             placeholder="määräys mg">
    
                             </input>
                  </div>
                </div>
     {/* ........................................................................................*/}
                <div className="row">
                      <input type="submit" value="Laske" onClick={laskeKaikki}></input>
                </div>
            </form>
        </div>
    )
}

export default Formbody
