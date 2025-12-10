import React from 'react'
import './Information.css'
import { Link } from 'react-router-dom'

export default function Information() {
    return (
        <>
            <div className="info-container">
                <h1>ჩვენი სიმძლავრის გამოთვლა</h1>
                <p>ალბათ გაინტერესებთ რა სიმძლავრის გამომუშავება შეგიძლიათ.
                    ზოგჯერ ამის გარკვევა რთულია, თუმცა არა ყოველთვის.
                    თქვენ შეგიძლიათ გაიგოთ თქვენ მიერ გამომუშავებული სიმძლავრე კიბეეზე ასვლისას: 
                    <ul>
                        <li>დაინიშნეთ დრო და აირბინე კიბეები. (პირველი სართულიდან მეორე სართულამდე). ეცადეთ, რომ ეს რაც შეიძლება სწრაფად გააკეთოთ.
                        </li>
                        <li>დაინიშნეთ დრო და ჩამოირბინეთ კიბეები. ეცადეთ, რომ ეს რაც შეიძლება სწრაფად გააკეთოთ.
                        </li>
                        <li>ახლა გაიმეორეთ პირველი ნაბიჯი, მაგრამ ამჯერად აიარეთ კიბეები ისე, როგორც ყოველთვის ადიხართ.
                        </li>
                        <li>ამჯერად ჩამოიარე კიბეები ისე, როგორც ყოველთვის ჩამოდიხარ.
                        </li>
                    </ul>
                </p>
                <div className="nav-btns">
                    <button className='nav-btn'> <Link className="nav-btn-link" to="/MyPower">ჩემი სიმძლავრე</Link></button>
                    <button className='nav-btn'> <Link to="/Q&A" className='nav-btn-link'>Q&A</Link></button>
                    <button className='nav-btn'> <Link className="nav-btn-link" to="/CalculateYourPower">გამოთვალე შენი სიმძლავრე</Link></button>
                </div>
            </div>
        </>
    )
}
