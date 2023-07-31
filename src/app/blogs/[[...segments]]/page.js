const SegmentsPage = ({ params }) => {
  console.log(params);
  const [year, month, id] = params.segments || [];

  return (
    <div>
      segments for year {year || new Date().getFullYear()} for {month} for {id}
    </div>
  );
};

export default SegmentsPage;
