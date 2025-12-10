import React from "react";
import "./CalcYourPower.css";

export default function CalcYourPower() {
    const [powers, setPowers] = React.useState({
        powerRunning: null,
        powerRunningDown: null,
        powerClimbing: null,
        powerDescending: null,
    });

    function CalcPower(e) {
        e.preventDefault();
        const mass = parseFloat(e.target.mass.value);
        const distance = parseFloat(e.target.distance.value);
        const timeRunning = parseFloat(e.target.timeRunning.value);
        const timeRunningDown = parseFloat(e.target.timeRunningDown.value);
        const timeClimbing = parseFloat(e.target.timeClimbing.value);
        const timeDescending = parseFloat(e.target.timeDescending.value);
        const g = 10;

        const powerRunning = (mass * g * distance) / timeRunning;
        const powerRunningDown = (mass * g * distance) / timeRunningDown;
        const powerClimbing = (mass * g * distance) / timeClimbing;
        const powerDescending = (mass * g * distance) / timeDescending;

        setPowers({
            powerRunning,
            powerRunningDown,
            powerClimbing,
            powerDescending,
        });
    }
    const showPower = (value) =>
        value != null ? value.toFixed(0) + " ვტ" : "-";

    return (
        <div className="calc-your-power-container">
            <div className="header">
                <h1>გამოთვალე შენი სიმძლავრე</h1>
                <p>
                    ახლა შენც შეგიძლია იგივე ექსპერიმენტი გაიმეორო და გამოითვალო
                    შენი სიმძლავრე. შეიყვანე შენი მონაცემები ქვედა ველებში.
                </p>
            </div>

            <div className="form-table">
                <form onSubmit={CalcPower}>
                    <div className="form">
                        <div className="input-wrap">
                            <label>მასა (კგ)</label>
                            <input
                                name="mass"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                        <div className="input-wrap">
                            <label>სიმაღლე / განვლილი მანძილი (მ)</label>
                            <input
                                name="distance"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                        <div className="input-wrap">
                            <label>დრო არბენისას (წმ)</label>
                            <input
                                name="timeRunning"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                        <div className="input-wrap">
                            <label>დრო ჩარბენით (წმ)</label>
                            <input
                                name="timeRunningDown"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                        <div className="input-wrap">
                            <label>დრო ასვლისას (წმ)</label>
                            <input
                                name="timeClimbing"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                        <div className="input-wrap">
                            <label>დრო ჩამოსვლისას (წმ)</label>
                            <input
                                name="timeDescending"
                                type="number"
                                className="form-inp"
                                required
                                onFocus={(e) =>
                                    e.target.parentNode.classList.add(
                                        "focus",
                                        "not-empty"
                                    )
                                }
                                onBlur={(e) => {
                                    e.target.parentNode.classList.remove(
                                        "focus"
                                    );
                                    if (!e.target.value)
                                        e.target.parentNode.classList.remove(
                                            "not-empty"
                                        );
                                }}
                            />
                        </div>
                    </div>
                    <button type="submit">გამოთვალე სიმძლავრე</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>მოქმედება</th>
                            <th>სიმძლავრე</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>არბენით</td>
                            <td>{showPower(powers.powerRunning)}</td>
                        </tr>
                        <tr>
                            <td>ჩარბენით</td>
                            <td>{showPower(powers.powerRunningDown)}</td>
                        </tr>
                        <tr>
                            <td>ასვლით</td>
                            <td>{showPower(powers.powerClimbing)}</td>
                        </tr>
                        <tr>
                            <td>ჩამოსვლით</td>
                            <td>{showPower(powers.powerDescending)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
