import {
  Divider,
  Page,
  Typography,
  IconButton,
  Search,
} from '@org/design-system';
import {
  DollarSendCircle,
  DollarReceiveCircle,
  Bank1,
  TrophyStar,
  Bell,
} from '@org/icons';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 relative w-full h-full">
      <div className="relative mt-[-16px] ml-[-16px] mr-[-16px] bg-primary mb-[42px]">
        <div className="p-4 pb-[90px]">
          <Page.Header>
            <IconButton.Wrapper variant="primary" size="sm">
              <TrophyStar width="24px" height="24px" />
            </IconButton.Wrapper>

            <Search.Search />

            <IconButton.Wrapper variant="primary" size="sm">
              <Bell width="24px" height="24px" />
            </IconButton.Wrapper>
          </Page.Header>
          <p>adasdsa</p>
          <p>adasdsa</p>
          <p>adasdsa</p>
          <p>adasdsa</p>
          <p>adasdsa</p>
        </div>
        <div className="absolute bottom-[-44px] left-0 right-0 h-[88px] px-4">
          <div className="flex row justify-evenly items-center w-full h-full bg-neutral-900 rounded-xl">
            <div className="flex flex-col items-center gap-1">
              <DollarSendCircle
                height="28px"
                width="28px"
                className="text-primary-400"
              />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Send
              </Typography>
            </div>

            <Divider orientation="vertical" size="half" />

            <div className="flex flex-col items-center gap-1">
              <DollarReceiveCircle
                height="28px"
                width="28px"
                className="text-yellow-800"
              />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Request
              </Typography>
            </div>

            <Divider orientation="vertical" size="half" />

            <div className="flex flex-col items-center gap-1">
              <Bank1 height="28px" width="28px" className="text-orange-800" />
              <Typography
                variant="label"
                size="sm"
                className="text-neutral-200"
              >
                Bank
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        quibusdam nihil qui suscipit tenetur deserunt, ratione itaque adipisci
        officiis ullam rem reprehenderit corporis natus quaerat temporibus autem
        excepturi. Nisi, reiciendis.
      </div>
    </div>
  );
};

export default Home;
