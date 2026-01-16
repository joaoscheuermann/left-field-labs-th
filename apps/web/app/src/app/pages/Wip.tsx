import { Typography, Box, Button } from '@org/design-system';
import { AngleLeft } from '@org/icons';
import { useNavigate } from 'react-router-dom';

const Wip = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex flex-col h-full gap-4 items-center justify-center p-8 text-center">
      <Typography variant="title" size="lg" className="text-white mb-4">
        Nothing to see here...
      </Typography>

      <Button.Wrapper
        variant="white"
        outline
        size="md"
        className="w-fit"
        onClick={() => navigate(-1)}
      >
        <Button.Icon>
          <AngleLeft />
        </Button.Icon>
        <Button.Label>Go Back</Button.Label>
      </Button.Wrapper>
    </Box>
  );
};

export default Wip;
