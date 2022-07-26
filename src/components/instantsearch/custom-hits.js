import { useHits } from "react-instantsearch-hooks-web";
import { Hits } from "./hits";

// reference https://github.com/algolia/react-instantsearch/blob/master/packages/react-instantsearch-hooks-web/src/widgets/Hits.tsx
export const CustomHits = (props) => {
  const { hits, results, sendEvent } = useHits(props);
  return (
    <>
      <Hits products={hits} />
    </>
  );
};
