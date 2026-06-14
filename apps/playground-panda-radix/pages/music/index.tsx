// import { tiles } from '@bend-ui/styled-system/patterns';
import { tiles } from '@bend-ui/styled-system/patterns';
import Image from 'next/image';
import { MenuBar } from '../../components';
import { layout } from './styles';
import { Sidebar } from './components/Sidebar';
import { listenNowAlbums } from './data/albums';

const Music = () => {
  const classes = layout();
  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <MenuBar>
          <MenuBar.Menu>
            <MenuBar.Trigger>Music</MenuBar.Trigger>
            <MenuBar.Content>
              <MenuBar.Item>About Music</MenuBar.Item>
            </MenuBar.Content>
          </MenuBar.Menu>
          <MenuBar.Menu>
            <MenuBar.Trigger>File</MenuBar.Trigger>
            <MenuBar.Content>
              <MenuBar.Item>New</MenuBar.Item>
            </MenuBar.Content>
          </MenuBar.Menu>
        </MenuBar>
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <h2>Listen now</h2>
        <h3>Top Picks</h3>
        <div className={tiles()}>
          {listenNowAlbums.map((album) => (
            <div key={album.name}>
              <Image
                alt={album.name}
                height={300}
                src={album.cover}
                width={300}
              />
              <span>{album.artist}</span>
              <span>{album.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
