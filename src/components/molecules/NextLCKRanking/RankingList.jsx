import RankingItem from "./RankingItem";

const RankingList = ({ item }) => {
  return (
    <>
      {item.items.map((item, index) => {
        return <RankingItem item={item} key={index} />;
      })}
    </>
  );
};

export default RankingList;
