import React from 'react'
import './MyPower.css'
import { Link } from 'react-router-dom';

export default function MyPower() {

    const rows = [
        { id: 1, label: "I - II არბენით", s: 5, h: 2.7, m: 45 },
        { id: 2, label: "II - I ჩარბენით", s: 6, h: 2.7, m: 45 },
        { id: 3, label: "I - II ასვლით", s: 9, h: 2.7, m: 45 },
        { id: 4, label: "II - I ჩასვლით", s: 9, h: 2.7, m: 45 }
    ];

    return (
        <div className="my-power-container">
            <h1>ჩემი სიმძლავრე</h1>

            <p>
                ექსპერიმენტის ჩატარების შემდეგ დავადგინე ყოველი მოქმედების დრო და ის,
                რომ სულ არის 18 საფეხური, ყოველი 15სმ = 0.15მ ⇒ გადაადგილება არის
                0.15 × 18 = 2.7მ. შემდეგ ჩემი მონაცემები გამოვსახე ცხრილის სახით:
            </p>

            <table>
                <thead>
                    <tr>
                        <th>მოქმედება</th>
                        <th>s</th>
                        <th>h</th>
                        <th>m</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                            <td>{row.label}</td>
                            <td>{row.s} წმ</td>
                            <td>{row.h} მ</td>
                            <td>{row.m} კგ</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                როგორც ვიცით, სიმძლავრე გამოითვლება ფორმულით: N =
                <math style={{ margin: "0 5px" }}>
                    <mfrac>
                        <mi>A</mi>
                        <mi>t</mi>
                    </mfrac>
                </math>
                , ხოლო მუშაობა: A = mgh. შესაბამისად:

                N =
                <math style={{ marginLeft: 5 }}>
                    <mfrac>
                        <mi>mgh</mi>
                        <mi>t</mi>
                    </mfrac>
                </math>
            </p>
            <ul className="power-list">
                <li>
                    არბენით: N =
                    <math>
                        <mfrac>
                            <mi>45 × 10 × 2.7</mi>
                            <mi>5</mi>
                        </mfrac>
                    </math>
                    = 243 ვტ
                </li>

                <li>
                    ჩარბენით: N =
                    <math>
                        <mfrac>
                            <mi>45 × 10 × 2.7</mi>
                            <mi>6</mi>
                        </mfrac>
                    </math>
                    = 202.5 ვტ
                </li>

                <li>
                    ასვლით: N =
                    <math>
                        <mfrac>
                            <mi>45 × 10 × 2.7</mi>
                            <mi>9</mi>
                        </mfrac>
                    </math>
                    = 135 ვტ
                </li>

                <li>
                    ჩასვლით: N =
                    <math>
                        <mfrac>
                            <mi>45 × 10 × 2.7</mi>
                            <mi>9</mi>
                        </mfrac>
                    </math>
                    = 135 ვტ
                </li>
            </ul>
        </div>
    );
}
