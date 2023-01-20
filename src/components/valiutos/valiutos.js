import {useEffect, useState} from "react";

const Valiutos=()=>{

    async function loadAsync() {
        setLoading(true);
        let result = await fetch("https://api.frankfurter.app/latest?from=EUR&to=USD");
        let data = await result.json();
        console.log(data)
        setRates(data.rates["USD"]);
        setLoading(false);
    }

    const [rate, setRates]=useState("");
    const [isLoading,setLoading]=useState(false);
    const [category,setCategory]=useState("Dark");


    useEffect(()=>{
        loadAsync();
    }, []);

    let changeCategory=(event)=>{
        setCategory(event.target.value);
    }

    return(
        <div className="mt-5">
            { (isLoading)? <div className="spinner-border text-primary"></div> : <div className="alert alert-info"> { rate } </div>  }
            <hr />
            <div className="mb-3">
                <label className="form-label">Kategorija:</label>
                <select onChange={ changeCategory } className="form-control">
                    <option value="Programming">Programavimas</option>
                    <option value="Dark">Juodas humoras</option>
                    <option value="Miscellaneous">Kita</option>
                </select>
            </div>

            <button className="btn btn-success" onClick={ loadAsync }>Užkrauti</button>
        </div>
    )
}


export default Valiutos;