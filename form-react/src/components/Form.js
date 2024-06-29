import React from 'react'
import { useState } from 'react';
export const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ email, setEmail] = useState("")
    const [ contact, setContact ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ subjects, setSubjects] = useState({
        JavaScript: false,
        Python: false,
        ReactJs: false
    })
    const [ resume, setResume ] = useState("")
    const [ url, setUrl ] = useState();
    const [ selectedOption, setSelectedOption] = useState("")
    const [ about, setAbout ] = useState("")
    const [ submittedDetails, setSubmittedDetails] = useState({})

    function handleSubjects(sub){
        setSubjects(prevSub => {
            let newstate = {
                ...prevSub
            }
            newstate[sub] = !prevSub[sub]
            return newstate
        })
    }

    function handleReset(){
        setFirstName("");
        setLastName("");
        setContact("");
        setEmail("");
        setGender("");
        setSubjects({
            JavaScript: false,
            Python: false,
            ReactJs: false})
        setResume("");
        setUrl("")
        setSelectedOption("");
        setAbout("");
    }

    function handleSubmit(e){
        e.preventDefault();

        setSubmittedDetails(s => ({ ...s,
            "First Name": firstName,
            "Last Name": lastName,
            "Email Id": email,
            "Contact": contact,
            "Gender": gender,
            "Subjects Liked": subjects,
            "Resume": resume,
            "url": url,
            "Course Selected": selectedOption,
            "About": about 
        }));

        console.log(submittedDetails)
    }

  return (
    //action and method is not here
    <form>    
        <label htmlFor="firstName">
            First Name* 
        </label>
        <input 
            type="text"
            autoComplete= "off"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Enter First Name'
            
        />
        <label htmlFor="lastName">
            Last Name* 
        </label>
        <input 
            type="text"
            autoComplete="off"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
            }}
            placeholder="Enter Last Name"
            
        />

        <label htmlFor="email">
            Enter Mail* 
        </label>
        <input 
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            
        />

        <label htmlFor="tel">
            Contact*
        </label>
        <input 
            type="tel" 
            name='tel'
            id='tel'
            autoComplete='off'
            placeholder='Enter Telephone Number'
            value={contact}
            onChange={(e) => {
                setContact(e.target.value)
            }}
            
        />

        <label htmlFor="gender">
            Gender*
        </label>
        <input 
            type="radio"
            name='gender'
            id='male'
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
                setGender(e.target.value)
            }}
        />
        Male
        <input 
            type="radio"
            name='gender'
            id='female'
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
                setGender(e.target.value)
            }}
        />
        Female
        <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) =>
                setGender(e.target.value)
            }
        />
        Other
        <label htmlFor="lang">
            Favourite CS Languages
        </label>
        <input 
            type="checkbox"
            id="lang"
            value="JavaScript"
            checked={subjects.JavaScript === true}
            onChange={(e) => {
                handleSubjects("JavaScript")
            }}
        />
        JavaScript
        <input 
            type="checkbox"
            id="lang"
            value="Python"
            checked={subjects.Python === true}
            onChange={(e) => {
                handleSubjects("Python")
            }}
        />
        Python
        <input 
            type="checkbox"
            id="lang"
            value="ReactJs"
            checked={subjects.ReactJs === true}
            onChange={(e) => {
                handleSubjects("ReactJs")
            }}
        />
        ReactJs
        <label htmlFor="file">
            Upload Resume*
        </label>
        <input
            type="file"
            name='file'
            id='file'
            accept='.pdf'
            onChange={(e) => {
                setResume(e.target.files)
            }}
        />
        <label htmlFor="url">
            Enter url
        </label>
        <input 
            type="url"
            id='url'
            name='url'
            onChange={(e) => {
                setUrl(e.target.value)
            }}
            placeholder='Enter url'
        />

        <label>
            Select Your Choice
        </label>
        <select
            name='select'
            id='select'
            value={selectedOption}
            onChange={(e) => {
                setSelectedOption(e.target.value)
            }}
        >
            <option 
                value=""
                defaultValue = {selectedOption === ""}
                onChange={(e) => {
                    setSelectedOption(e.target.value)
                }}
            >
                Select your answer
            </option>
            <optgroup label='Beginner'>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </optgroup>
            <optgroup label='Intermediate'>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="MangoDB">MangoDB</option>
            </optgroup>
        </select>
        <label htmlFor="about">
            About
        </label>
        <textarea
            name="about" 
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => {
                setAbout(e.target.value)
            }}
        >
        </textarea>
        <button
            type='reset'
            value="reset"
            onClick = {() => handleReset()}
        >
            Reset
        </button>
        <button
            type='submit'
            value="submit"
            onClick = {(e) => 
                handleSubmit(e)
            }
        >
            Submit
        </button>
    </form>
  )
}
