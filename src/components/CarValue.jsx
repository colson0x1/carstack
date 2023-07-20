import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    if (!searchTerm) {
      return data.reduce((accumulator, car) => {
        return accumulator + car.cost;
      }, 0);
    }

    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((accumulator, car) => accumulator + car.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
