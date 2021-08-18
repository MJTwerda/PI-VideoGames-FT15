import React from 'react';

function Pagination({gamesPerPage, totalGames, paginate, prev, next, numPag}) {
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
                <button onClick={() => prev()} disabled={numPag === 1}>Prev</button>
                <button onClick={() => next()} disabled={numPag === pageNumbers.length}>Next</button>
            </ul>
        </nav>

    )
}

export default Pagination