import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    // const [gift, setGift] = useState();

    // const gifts = [
    //   "CPU i9",
    //   "RAM 32GB RGB",
    //   "RGB key board"
    // ];

    // const randomGift = () => {
    //   const rand = Math.floor(Math.random() * gifts.length);
    //   setGift(gifts[rand]);
    // }

    // const [name, setName] = useState("");

    // const changeHandle = (value) => {
    //   setName(value);
    // }

    // const clickHandler = () => {
    //   setName("Nguyen Van BB")
    // }


    // <div>
    //   <input type="text" onChange={(e) => changeHandle(e.target.value)} value={name} />
    //   <button onClick={clickHandler}>
    //     Change
    //   </button>
    // </div>



    // const courses = [
    //   {
    //     id: 1,
    //     name: "HTML"
    //   },
    //   {
    //     id: 2,
    //     name: "JS"
    //   },
    //   {
    //     id: 3,
    //     name: "CSS"
    //   }
    // ];

    // const [checked, setChecked] = useState();


    // const changeHandler = (id) => {
    //   setChecked(id)
    // }


    // return (
    //   <div>
    //     {courses.map((course) => {
    //       return (
    //         <div key={course.id}>
    //           <input type="radio" onChange={() => changeHandler(course.id)} checked={checked === course.id} /> {course.name}
    //         </div>
    //       )
    //     })}
    //   </div>
    // );


    // const [checked, setChecked] = useState([]);


    // const courses = [
    //   {
    //     id: 1,
    //     name: "HTML"
    //   },
    //   {
    //     id: 2,
    //     name: "JS"
    //   },
    //   {
    //     id: 3,
    //     name: "CSS"
    //   }
    // ];

    // const changeHandler = (id) => {
    //   let tempChecked = [...checked];
    //   const isChecked = tempChecked.includes(id);
    //   if (isChecked) {
    //     tempChecked = tempChecked.filter((check) => check !== id);
    //   } else {
    //     tempChecked.push(id);
    //   }
    //   setChecked(tempChecked);
    // }

    //Checkbox
    // const changeHandler = (id) => {
    //   setChecked(pre => {
    //     const ischecked = checked.includes(id);
    //     if (ischecked) {
    //       return checked.filter((check) => check !== id)
    //     } else {
    //       return [...pre, id]
    //     }
    //   }
    //   )
    // }


    // return (
    //   <div>
    //     {courses.map((course) => {
    //       return (
    //         <div key={course.id}>
    //           <input type="checkbox" onChange={() => changeHandler(course.id)} checked={checked.includes(course.id)} /> {course.name}
    //         </div>
    //       )
    //     })}
    //   </div>
    // );



    //Todo list

    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        return (JSON.parse(localStorage.getItem("job")) ?? [])
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [jobs])

    const clickHandler = () => {
        setJobs(pre => {
            const newJobs = [...pre, job];

            const jobJson = JSON.stringify(newJobs);
            localStorage.setItem("job", jobJson);

            return newJobs;
        });

        setJob("");
    }

    const changeHandler = (value) => {
        setJob(value);
    }


    return (
        <>
            <div>
                <input type="text" value={job} onChange={e => changeHandler(e.target.value)} ref={inputRef} />
                <button onClick={clickHandler}>Add</button>
            </div>
            <ul>
                {jobs.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default App;
