import React from 'react';
import moment from 'moment'

export default function Example() {
  const today = moment().format('YYYY-MM-DD')
  return <p>Loaded! Today is {today}</p>;
}
