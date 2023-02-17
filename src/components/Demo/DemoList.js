import React, { useMemo, useState, useCallback } from 'react';
import Button from '../UI/Button/Button';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const [listTitle, setListTitle] = useState("Ascending");
  const { items } = props;
  const changeTitleHandler = useCallback(() => {
    if(listTitle === "Ascending"){
      setListTitle("Descending");
    }else if(listTitle === "Descending"){
      setListTitle("Ascending");
    }
  }, [listTitle]);

  const sortedList = useMemo(() => {
    if (listTitle === 'Ascending') {
      return items.sort((a, b) => a - b);
    } else {
      return items.sort((a, b) => b - a);
    }
  }, [items,listTitle]); 
  return (
    <div className={classes.list}>
      <h2>{listTitle}<Button onClick={changeTitleHandler}>{`Change ${listTitle}`}</Button></h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
