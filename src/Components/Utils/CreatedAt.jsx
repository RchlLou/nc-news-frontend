export default function CreatedAt({date}) {
  const formattedDate = new Date(Date.parse(date));

  return (
    <p>{`${formattedDate.getDate()}-${formattedDate.getMonth()}-${formattedDate.getFullYear()}`}</p>
  );
}
