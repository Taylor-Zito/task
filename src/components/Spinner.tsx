import CircularProgress from '@mui/material/CircularProgress';

type color = "secondary" | "success" | "inherit"
export const Spinner = ({ variant }: { variant: color }) => {
    return (
      <CircularProgress className='spinner' size={"2rem"} color={variant} />
  );
}