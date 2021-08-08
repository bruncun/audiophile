import { useQueryClient } from "react-query";
import { getProductBySlug } from "hooks/useApi";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function usePrefetchProductBySlugOnInView(slug: string) {
  const [isSeen, setIsSeen] = useState(false);
  const queryClient = useQueryClient();
  const { ref, inView } = useInView();

  async function prefetchData() {
    await queryClient.prefetchQuery(["product", slug], () =>
      getProductBySlug(slug)
    );
  }

  if (!isSeen && inView) {
    prefetchData();
    setIsSeen(true);
  }

  return ref;
}

export default usePrefetchProductBySlugOnInView;
