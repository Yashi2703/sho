import React from "react";
function Using() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => {
            console.log(json.data);
            const markup = json.data.map(el => {
                return (
                    <li>
                        <div>
                            <img src="${el.avatar}"/>

                        </div>
                        <div>
                            <span>{el.first_name}</span>
                            <span>{el.last_name}</span>

                        </div>
                        <p>{el.email}</p>
                    </li>
                )
            });
            console.log(markup);
            

        })
}
export default Using;