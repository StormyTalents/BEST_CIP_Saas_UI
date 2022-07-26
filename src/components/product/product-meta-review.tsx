import { useState } from "react";
import { Collapse } from "@components/common/accordion";
import ReviewForm from "@components/common/form/review-form";
// TODO: Replace with new product type
// TODO: `import { Product } from "@framework/types"`
import { ProductFragment } from "@gql/generated";

interface Props {
  product: ProductFragment;
}

const ProductMetaReview: React.FC<Props> = ({ product }) => {
  const [expanded, setExpanded] = useState<number>(0);
  return (
    <>
      {product?.metadata?.map((item: any, index: any) => (
        <Collapse
          i={index}
          key={item.title}
          title={item.title}
          translatorNS="review"
          content={
            product?.metadata?.length === item.id ? (
              <>
                {item.content} <ReviewForm />
              </>
            ) : (
              item.content
            )
          }
          expanded={expanded}
          setExpanded={setExpanded}
          variant="transparent"
        />
      ))}
    </>
  );
};

export default ProductMetaReview;
