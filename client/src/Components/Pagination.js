import React from 'react';

function Pagination({gamesPerPage, totalGames, paginate, prev, next}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='#!'>
                            {number}
                        </a>
                    </li>

                    )}
                )}
                <button onClick={() => prev()}>Prev</button>
                <button onClick={() => next()}>Next</button>
            </ul>
        </nav>

    )
}

export default Pagination