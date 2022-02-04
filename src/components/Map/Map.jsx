import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import edit from '../../assets/icons/edit-icon.svg';
import sort from '../../assets/icons/sort-icon.svg';
import frame1 from '../../assets/icons/frame_1.svg';
import frame2 from '../../assets/icons/frame_2.svg';
import frame3 from '../../assets/icons/frame_3.svg';
import { topMenu, bottomMenu } from '../../utils/menus'
import {
    Logo, Aside, ListWrap, BottomList, TopList, ListItem, ListContentHeader, Link, LisItemIcon,
    Container, YMap, MapYandex, ListTitle, ListIcon, Content, ContentWrap, ListContent, LogoWrapper,
} from './Map.style';
const Maps = () => {
    const location = useLocation();
    const [keys, setKeys] = useState('me');
    const MAPKEY = process.env.REACT_APP_MAP_KEY
    const [active, setActive] = useState(location.pathname);
    const contentList = {
        me:
            <ListContentHeader>
                <ListIcon src={edit} />
                <ListTitle>Мои поля</ListTitle>
                <ListIcon src={search} />
            </ListContentHeader>,
        diagnostics:
            <ListContentHeader>
                <ListIcon src={edit} />
                <ListTitle>Диагностика</ListTitle>
                <ListIcon src={search} />
            </ListContentHeader>,
        recomendation:
            <ListContentHeader>
                <ListIcon src={edit} />
                <ListTitle>Рекомендации</ListTitle>
                <ListIcon src={search} />
            </ListContentHeader>,
        note:
            <ListContentHeader>
                <ListIcon src={edit} />
                <ListTitle>Заметки</ListTitle>
                <ListIcon src={search} />
            </ListContentHeader>,
    }
    return (
        <Container>
            <Aside>
                <LogoWrapper>
                    <Logo src={logo} alt='logo' />
                </LogoWrapper>
                <ListWrap>
                    <TopList>
                        {topMenu.map(({ id, icon, path, title }) => {
                            return (
                                <ListItem onClick={() => {
                                    setKeys(path);
                                    setActive(path);
                                }} active={active === path} key={id}>
                                    <LisItemIcon src={icon} />
                                    <Link onClick={() => setActive(path)} active={active === path} to='/'>{title}</Link>
                                </ListItem>
                            )
                        })}
                    </TopList>
                    <BottomList>
                        {bottomMenu.map(({ id, icon, path, title }) => {
                            return (
                                <ListItem onClick={() => setActive(path)} active={active === path} key={id}>
                                    <LisItemIcon src={icon} />
                                    <Link onClick={() => setActive(path)} active={active === path} to={path}>{title}</Link>
                                </ListItem>
                            )
                        })}
                    </BottomList>
                </ListWrap>
            </Aside>
            <Content>
                <ContentWrap>
                    <ListContent>
                        {contentList[keys]}
                    </ListContent>
                    <YMap query={{ apikey: MAPKEY }}>
                        <MapYandex
                            modules={["package.full"]}
                            defaultState={{ center: [41.304095, 69.270503], zoom: 15 }}>
                        </MapYandex>
                    </YMap>
                </ContentWrap>
            </Content>
        </Container>
    );
};

export default Maps;
