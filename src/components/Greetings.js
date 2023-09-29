import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/reducers/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  console.log(greeting);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{greeting.greeting}</h1>
    </div>
  );
};

export default Greetings;
