import { useState, useEffect } from "react";


const GetSUB = () => {

    const [data, setData] = useState([]);
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "");

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };
        fetch("http://localhost:8080/item", requestOptions)
            .then((response) => response.text())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="container">
            {data.map((datas) => (
                <table datas={datas}></table>
            ))}
        </div>
    )

}
export default GetSUB;