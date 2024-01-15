import useGeneres from "../hooks/useGeneres";
const GeneresList = () => {
  const { generes } = useGeneres();
  return (
    <ul>
      {generes.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GeneresList;
