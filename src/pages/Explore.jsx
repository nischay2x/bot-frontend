import React, { useState } from 'react';
import { useEffect } from 'react';
import "./explore.css";
import CONFIG from "../config.json";

export default function Explore() {

    const [bikes, setBikes] = useState([]);
    const [fullList, setFullList] = useState([]);
    const [query, setQuery] = useState("");
    const [brands, setBrands] = useState([]);
    const [filter, setFilter] = useState({ type : [], brand : [] });

    useEffect(() => {
        setBikes(CONFIG.bikes);
        setFullList(CONFIG.bikes);
        let distinctBrand = [];
        fullList.forEach(b => {
            if(!distinctBrand.includes(b.brand)){
                distinctBrand.push(b.brand)
            }
        })
        setBrands(distinctBrand);
    }, [fullList]);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if(!query){
            setBikes(fullList);
        } else {
            const regQuery = new RegExp(query, "i");
            let filtered = fullList.filter(b => (regQuery.test(b.brand) || regQuery.test(b.model)));
            setBikes(filtered);
        }
    }

    const onFilterChange = (e) => {
        const target = e.target;
        if(target.checked){
            const newValues = [...filter[target.name], target.value]
            setFilter(prev => {
                return { ...prev, [target.name] :  [...newValues]}
            })
        } else {
            const newValues = filter[target.name].filter(v => v !== target.value);
            setFilter(prev => {
                return { ...prev, [target.name] : [...newValues]}
            })
        }
    }

    const onFilterSubmit = (e) => {
        e.preventDefault();
        let filteredList = [];
        if(filter.brand.length && filter.brand.length){
            filteredList = fullList.filter(item => (filter.brand.includes(item.brand) && filter.type.includes(item.type)));
            setBikes(filteredList);
        }
        
    }

    return (
        <main className='explore-main'>
            <div className="container">
                <form className="search-bar-hold p-1 d-flex" style={{ gap : "2px" }} onSubmit={onSearchSubmit}>
                    <input type="text" className='form-control' placeholder='Search Bikes' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className='btn btn-warning' type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <br />
            </div>
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="filter-box border p-0 col-12 col-sm-11 col-md-8 col-lg-4 col-xl-2">
                    <div className="bg-white">
                        <div className="p-2 text-center bg-warning">
                            <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>FILTER</span>
                        </div>
                        <form className="d-flex flex-wrap" onSubmit={onFilterSubmit}>
                            <div className="col-6 col-md-6 col-lg-12 my-2">
                                <h6>Brand</h6>
                                {
                                    brands.map((brand, idx) => {
                                        return (
                                            <div className="form-check" key={idx}>
                                                <input className="form-check-input" value={brand} onChange={onFilterChange} type="checkbox" name='brand' />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    {brand}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-6 col-md-6 col-lg-12 my-2">
                                <h6>Vehicle Type</h6>
                                <div className="form-check">
                                    <input className="form-check-input" value="B" onChange={onFilterChange} type="checkbox" name='type' />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Bike
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" value="S" onChange={onFilterChange} type="checkbox" name='type' />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Scooty
                                    </label>
                                </div>
                            </div>
                            <div className="col-12 my-2 d-flex">
                                <button className="btn btn-primary ml-auto btn-sm" type='submit'>Apply</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="bikes-container d-flex flex-wrap col-12 col-sm-12 col-md-10 col-lg-8 col-xl-10 border">
                        {
                            bikes.map((bike, idx) => {
                                return (
                                    <div key={idx} className="card-hold my-2 bg-transparent col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                        <div className="card">
                                            <div className="card-img">
                                                <img src={bike.image} alt={bike.model} width="100%" />
                                            </div>
                                            <div className="card-body">
                                                <h6>{bike.brand} - {bike.model}</h6>
                                                <p>{bike.rent} - {bike.type} - {bike.brand}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </main>
    )
}
