const Alia = ({ index, alia, isEdit, alias, setProgamer }) => {
  const onRemove = () => {
    setProgamer((prev) => {
      const newAlias = [...prev.alias];
      if (index > -1) {
        newAlias.splice(index, 1);
      }
      return { ...prev, alias: newAlias };
    });
  };
  return (
    <>
      <li>{alia}</li>
      {isEdit ? <button onClick={onRemove}>삭제</button> : <></>}
    </>
  );
};

export default Alia;
