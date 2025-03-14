import { Skeleton, Stack } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={300} height={200} />
      <Skeleton variant="rectangular" width={300} height={200} />
    </Stack>
  );
};

export default ProductSkeleton;
