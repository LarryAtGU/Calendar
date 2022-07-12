import React from 'react';
import { useState, MouseEvent } from 'react';
import { Weekday, Date } from '../../type';
import { Weekdays } from '../configs/Weekdays';
import { monthDates } from '../configs/MonthDays';

export const Calendar:React.FC<{}> = ({}) => {

    const [selectdDate, setSelectedDate] = useState<string|null>();

    const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(e.currentTarget.getAttribute("value"));

    }

    const generateDates = (date:number) => {
        let selectedDateNum:number=selectdDate ? parseInt(selectdDate) :0;
        for(let i=0; i<7 ; ++i ) {
            return <button className={`date ${date===18 ? "today":""} 
                ${date===selectedDateNum ? "selected":""}`} 
             onClick={handleChange} value={date}><p>{date}</p></button>
        }

    }
    const generateWeeks = (dates:Array<Date>) => {
        let daysInWeek=7;
        let tmpArray=[];


        for(let i=0; i< dates.length; i+=daysInWeek) {
            tmpArray.push(dates.slice(i,i+daysInWeek));
        }
        return tmpArray;
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container">
            <span>February 2021</span>
            </div>
            <div className="weekdays-container">
            {Weekdays.map(day =>
                <div className="week-day">{day}</div>
                )}
            </div>    
            <div className="calendar">
                {generateWeeks(monthDates).map(week => 
                <div className="week">
                    {week.map(day => (generateDates(day.day))
                        )}
                
                </div>

                )

                }
            </div>
        </div>
    )
}