import React,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import {Link } from 'react-router-dom'
import {ListItem} from './ListItem';

 const Dashboard = ({dashBoard, getAllPlanets}) => {
     const [searchItem, setSearchItem] = useState("");
     const [allPlanets, setAllPlanets] = useState([]);
     const [searchCount, setSearchCount] = useState(0)

    useEffect(() => {
        getAllPlanets()
    }, []);

    useEffect(() => {
        setAllPlanets(dashBoard.planets)
    }, [dashBoard.planets])

    const handleSearch = (e) => {
        const getUser = JSON.parse(localStorage.getItem("user"));

        if(getUser === "Luke Skywalker"){
            setSearchItem(e.target.value)
            const filterPlanets = dashBoard.planets.filter(filterBy => parseInt(filterBy.population) === parseInt(e.target.value));
            setAllPlanets([...filterPlanets]);
            if(!e.target.value){
                setAllPlanets(dashBoard.planets)
            }
        }else{
            /// need to refactor

            if(searchCount < 15){
                setSearchItem(e.target.value)
                const filterPlanets = dashBoard.planets.filter(filterBy => parseInt(filterBy.population) === parseInt(e.target.value));
                setAllPlanets([...filterPlanets]);
                setSearchCount(searchCount + 1);
                if(!e.target.value){
                    setAllPlanets(dashBoard.planets)
                }
            }else{
                /// need to refactore
                alert("search exceeds 15")
            }
        }
        
        console.log(dashBoard.planets)
    } 
    return (
        <div className="container">
        <Link to="/">Login</Link>
        <h3>Dashboard</h3>
        {
            dashBoard.loading &&
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        <div className="row">
        <div className="input-group">
            <input type="search" value={searchItem} onChange={handleSearch} className="searchItemBox" placeholder="...search by population" />
        </div>
        <div className="searchItemList">
            <ul className="list-group">
            {
            allPlanets && allPlanets.map((planet,index) => (
                <ListItem planet={planet} key={index}/>
            ))
            }
            </ul>
        </div>
        </div>            
        </div>
    )
}

export default Dashboard