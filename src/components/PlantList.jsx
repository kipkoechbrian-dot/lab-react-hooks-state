import PlantCard from "./PlantCard";

// Maps over the plants array (already filtered by App) and renders a card for each
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;