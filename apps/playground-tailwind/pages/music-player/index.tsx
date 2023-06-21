import Link from 'next/link';
import Image from 'next/image';
import {
  TbArrowsShuffle,
  TbBellFilled,
  TbBooks,
  TbDots,
  TbHeart,
  TbHome,
  TbLayoutSidebarRightCollapse,
  TbNorthStar,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  TbRepeat,
  TbSearch,
  TbSettings,
} from 'react-icons/tb';
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  cn,
  DropdownMenu,
  Level,
  Stack,
  Switch,
  Text,
  Tiles,
} from '@particles/tailwind';

const navItemStyles =
  'flex flex-row items-center gap-2 hover:bg-slate-200 py-2 px-2 rounded';

/* eslint-disable-next-line */
export interface MusicPlayerProps {}

export function MusicPlayer(props: MusicPlayerProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="h-full flex-none px-4 py-6">
        <Stack as="nav" className="h-full gap-1">
          <Link href="/">Particles</Link>
          <Link href="/music-player/" className={navItemStyles}>
            <TbHome />
            Home
          </Link>
          <Link href="/music-player/search" className={navItemStyles}>
            <TbSearch />
            Search
          </Link>
          <Link href="/music-player/favorites" className={navItemStyles}>
            <TbHeart />
            Favorites
          </Link>
          <Link href="/music-player/discover" className={navItemStyles}>
            <TbNorthStar />
            Discover
          </Link>
          <Link href="/music-player/library" className={navItemStyles}>
            <TbBooks />
            Library
          </Link>
          <Link
            href="/music-player/settings"
            className={cn(navItemStyles, 'mt-auto')}
          >
            <TbSettings />
            Settings
          </Link>
          <Switch onLabel="Dark mode" />
          <Link href="/music-player/account">
            <Avatar src="images/astronaut.jpg" />
          </Link>
        </Stack>
      </aside>
      {/* Main content */}
      <main className="flex-1 px-3 py-4">
        <Level>
          <Text>Home</Text>
          <DropdownMenu>
            <DropdownMenu.Target
              as={Button}
              palette="secondary"
              icon={<TbBellFilled />}
              label="Notifications"
            />
            <DropdownMenu.Menu>
              <DropdownMenu.MenuItem>A notification</DropdownMenu.MenuItem>
            </DropdownMenu.Menu>
          </DropdownMenu>
        </Level>
        <div>
          {/* Carousel */}
          <Card>
            <Text>Headline</Text>
            <Text>Title</Text>
          </Card>
        </div>
        <div>
          {/* TODO: 2 columns grid */}
          <div>
            <Text>Recently Played</Text>
            <div>
              {/* Repeat elements */}
              {/* Move to component */}
              <Level>
                <div>
                  <Text>Song title</Text>
                  <Text>Artist</Text>
                </div>
                <ButtonGroup>
                  <Button icon={<TbPlayerPlayFilled />}>Play</Button>
                  <DropdownMenu>
                    <DropdownMenu.Target
                      as={Button}
                      icon={<TbDots />}
                      palette="secondary"
                      label="More"
                    />
                    <DropdownMenu.Menu>
                      <DropdownMenu.MenuItem>Hello</DropdownMenu.MenuItem>
                    </DropdownMenu.Menu>
                  </DropdownMenu>
                </ButtonGroup>
              </Level>
            </div>
          </div>
          <div>
            <Text>Your Lovely Playlist</Text>
            <Tiles>
              <Card>
                <Text>Playlist 1</Text>
              </Card>
              <Card>
                <Text>Playlist 2</Text>
              </Card>
              <Card>
                <Text>Playlist 3</Text>
              </Card>
              <Card>
                <Text>Playlist 4</Text>
              </Card>
            </Tiles>
          </div>
        </div>
      </main>
      {/* Player */}
      <aside className="flex-none px-5 py-4">
        {/* Drawer */}
        <Level>
          <Text>Now playing</Text>
          <Button
            palette="secondary"
            icon={<TbLayoutSidebarRightCollapse />}
            label="Collapse"
            onClick={() => alert('Implement drawer')}
          />
        </Level>
        <Stack>
          <Image
            src="/images/album-art-1.jpg"
            alt="Album cover"
            width={300}
            height={300}
          />
          <Text>Song title</Text>
          <Text>Artist</Text>
        </Stack>
        <div>Waveform</div>
        <ButtonGroup>
          <Button icon={<TbArrowsShuffle />}>Shuffle</Button>
          <Button icon={<TbPlayerTrackPrevFilled />}>Previous</Button>
          <Button label="Pause" icon={<TbPlayerPauseFilled />} isRounded />
          <Button icon={<TbPlayerTrackNextFilled />}>Next</Button>
          <Button icon={<TbRepeat />}>Repeat</Button>
        </ButtonGroup>
        <hr />
        <div>
          <Text>Your Queue</Text>
          <Level>
            <div>
              <Text>Song title</Text>
              <Text>Artist</Text>
            </div>
            <Button icon={<TbPlayerPlayFilled />}>Play</Button>
          </Level>
          <Level>
            <div>
              <Text>Song title</Text>
              <Text>Artist</Text>
            </div>
            <Button icon={<TbPlayerPlayFilled />}>Play</Button>
          </Level>
        </div>
      </aside>
    </div>
  );
}

export default MusicPlayer;
