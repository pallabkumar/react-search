import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { postData } from '../utils/http';
import moment from 'moment';
import { addDays } from 'date-fns';
import { ES_API_URL, QUERY } from './../constant';

const ESSearch = () => {
  const [filteredSailings, setFilteredSailings] = useState();
  const [searchTimeInMs, setSearchTimeInMs] = useState(0);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 30),
      key: "selection"
    }
  ]);

  useEffect(() => {
    fetchData(moment(state[0].startDate).format('YYYY-MM-DD'), moment(state[0].endDate).format('YYYY-MM-DD'));
  }, [state]);

  const fetchData = (startDate, endDate) => {
    postData(
      ES_API_URL,
      JSON.parse(JSON.stringify(QUERY).replace("startDate", startDate).replace("endDate", endDate ? endDate : startDate))
    ).then((data) => {
      setFilteredSailings(data.hits.hits);
      setSearchTimeInMs(data.took);
    });
  }

  const handleOnChange = (ranges) => {
    const { selection } = ranges;
    setState([selection]);

    let { startDate, endDate } = selection;
    startDate = moment(selection.startDate).format('YYYY-MM-DD');
    endDate = moment(selection.endDate).format('YYYY-MM-DD');
    fetchData(startDate, endDate);
  };

  return (
    <div>
      <DateRangePicker
        onChange={handleOnChange}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      <hr className="rounded" />
      {
        filteredSailings && filteredSailings.length > 0 ? ( 
        <>
          <h1 className="search-results">About {filteredSailings.length} results ({searchTimeInMs/1000} seconds)</h1>
          <Scroll>
            <SearchList data={filteredSailings} />
          </Scroll>
        </>
        ) : <React.Fragment></React.Fragment>
      }
    </div>
  );
};

ESSearch.propTypes = {
  onChange: PropTypes.func
};

export default ESSearch;
