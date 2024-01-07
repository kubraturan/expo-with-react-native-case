import { useAppSelector } from '@redux/hooks';

const useIsSeenGuiding = () => {
  const { isSeenGuiding } = useAppSelector((state) => state.guiding);

  return {
    isSeenGuiding,
  };
};

export default useIsSeenGuiding;
