import { useSelector } from "react-redux";
import Progamer from "../../../atoms/AdminSetting/Progamer";

const EditProgamer = () => {
  const progamers = useSelector((state) => {
    return state.progamers.progamers;
  });

  return (
    <>
      {progamers ? (
        progamers.map((item, index) => {
          return (
            <tr key={index}>
              <Progamer item={item} />
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default EditProgamer;
