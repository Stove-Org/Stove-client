const RankingItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.progamer ? (
        <>
          <span>Top {item.ranking}</span>
          <span>{item.progamer.nickname}</span>
          <span>{item.percent.toFixed(1)}</span>
          <img
            scr={item.progamer.imgUrl}
            alt={`${item.progamer.nickname} 이미지`}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RankingItem;
