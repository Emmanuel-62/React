import React from "react";
import Loading from "./components/Loading.jsx";
import "/public/App.css"
import useFetch, {BaseUrl} from "./hooks/useFetch.js";


function App() {
    const {loading, data, error} = useFetch(BaseUrl)

    return <div className="container">
        <h1 className="text-center">TP2 with Vite + React</h1>
        {loading && <Loading/>}
        {data && <div>
            {JSON.stringify(data)}
        </div>}
    </div>
}

export default App