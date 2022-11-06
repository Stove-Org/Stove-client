const Hashtag = ({ index, hashtag, isEdit, setNews }) => {
  const onRemove = () => {
    setNews((prev) => {
      const newHashtags = [...prev.hashtagViews];
      if (index > -1) {
        newHashtags.splice(index, 1);
      }
      return { ...prev, hashtagViews: newHashtags };
    });
  };
  return (
    <>
      <li>{hashtag.hashtag ? hashtag.hashtag : hashtag}</li>
      {isEdit ? <button onClick={onRemove}>삭제</button> : <></>}
    </>
  );
};

export default Hashtag;
