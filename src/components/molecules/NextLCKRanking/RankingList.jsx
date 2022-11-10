import RankingItem from "./RankingItem";

const RankingList = ({ item }) => {
  return (
    <>
      {item.items.map((item) => {
        return <RankingItem item={item} />;
      })}
    </>
  );
};

export default RankingList;
