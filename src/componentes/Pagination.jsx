import Button from './Button';

function Pagination({ eventPrev, eventNext }) {
  return (
    <>
      <Button event={eventPrev} children="Previous" />
      <Button event={eventNext} children="Next" />
    </>
  );
}

export default Pagination;
