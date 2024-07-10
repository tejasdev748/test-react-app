import { useButton } from '@mui/base/useButton';

export default function Button() {
  const { getRootProps } = useButton();
  return (
    <button type="button" {...getRootProps()}>
      Click Me
    </button>
  );
}