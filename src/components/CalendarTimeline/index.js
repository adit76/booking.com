import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, setOptions, Datepicker, formatDate } from '@mobiscroll/react';

import InputCheckBox from '../../components/InputCheckBox';
import filterOptions from '../../data/filterOptions';

import './index.scss';

import calendarData from '../../data/calendarData';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const myResources = [{
  id: 1,
  name: 'Room Status',
}, {
  id: 2,
  name: 'Room to sell',
}, {
  id: 3,
  name: 'Net Booked',
}, {
  id: 4,
  name: 'Standard Rate',
}, {
  id: 5,
  name: 'Non Refundable Rate',
}, {
  id: 6,
  name: 'Weekly Rate',
}];

function App() {
    const [refDate, setRefDate] = React.useState();
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [rangeVal, setRangeVal] = React.useState([]);
    // const [buttonText, setButtonText] = React.useState([]);
    const [calView, setCalView] = React.useState(
        {
            timeline: {
                type: 'day',
                size: 14,
                eventList: true
            }
        }
    );

    const startDate = React.useRef();
    const endDate = React.useRef();

    // returns the number of days between two dates
    const getNrDays = React.useCallback((start, end) => {
        return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1;
    }, []);

    // returns the formatted date
    const getFormattedRange = React.useCallback((start, end) => {
        return formatDate('MMM D, YYYY', new Date(start)) + (end && getNrDays(start, end) > 1 ? (' - ' + formatDate('MMM D, YYYY', new Date(end))) : '');
    }, [getNrDays]);

    const onChange = React.useCallback((args) => {
        const date = args.value;
        setRangeVal(date);
        if (date[0] && date[1]) {
            startDate.current = date[0];
            endDate.current = date[1];
        }
    }, []);

    const onClose = React.useCallback(() => {
        if (startDate.current && endDate.current) {
            // navigate the calendar
            setCurrentDate(startDate.current);
            // set calendar view
            setRefDate(startDate.current);
            setCalView({
                timeline: {
                    type: 'day',
                    size: getNrDays(startDate.current, endDate.current),
                    eventList: true
                }
            });
        }
        setRangeVal([startDate.current, endDate.current]);
    }, [getNrDays]);

    const onPageLoading = React.useCallback((args) => {
        const sDate = args.firstDay;
        const end = args.lastDay;
        const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
        startDate.current = sDate;
        endDate.current = eDate;
        setTimeout(() => {
            // set button text
            // setButtonText(getFormattedRange(sDate, eDate));
            // set range value
            setRangeVal([sDate, eDate]);
            // navigate the calendar
            setCurrentDate(sDate);
        });
    }, [getFormattedRange]);

    const boxInputProps = {
        className: 'md-mobile-picker-box-label',
        inputStyle: 'box',
        placeholder: 'Please Select...'
    };

    const customWithNavButtons = () => {
        return <React.Fragment>
            <div className='CalendarFilter'>
                <Datepicker
                    controls={['calendar']}
                    select="range"
                    display="anchored"
                    showOverlay={false}
                    touchUi={true}
                    buttons={[]}
                    inputProps={boxInputProps}
                    onClose={onClose}
                    onChange={onChange}
                    value={rangeVal}
                />

                <div className="FormGroup">
                    <InputCheckBox name="calendarOptions" options={filterOptions.calendarOptions} />
                </div>
            </div>
        </React.Fragment>;
    }

    return (
        <Eventcalendar
            selectedDate={currentDate}
            renderHeader={customWithNavButtons}
            view={calView}
            data={calendarData}
            resources={myResources}
            onPageLoading={onPageLoading}
            refDate={refDate}
        />
    );
}


export default App;