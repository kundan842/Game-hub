import useGeneres from "../hooks/useGeneres";
const GeneresList = () => {
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GeneresList;
