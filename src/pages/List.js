import React from 'react'
import { useParams } from 'react-router-dom'

function List() {
    let params = useParams()

    return (
        <div className="List">
            <h2>List</h2>
            <p>List id: {params.listId}</p>
        </div>
    );
}

export default List;
