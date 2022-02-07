import { useState } from 'react';
import { topMenu, bottomMenu } from '../../utils/menus'
import {
    Container, YMap, MapYandex, ListTitle, Content, ContentWrap, ListContent, LogoWrapper, ListContentItem,
    Logo, Aside, ListWrap, BottomList, TopList, ListItem, ListContentHeader, LisItemIcon, EditIcon, SearchIcon,
    ListItemTitle, ListContentBody, ListContentButton, Icon_1, Icon_2, Icon_3, ListNumber, ButtonIcon_1, ButtonIcon_2, ButtonIcon_3,
} from './Map.style';
const Maps = () => {
    const [keys, setKeys] = useState('me');
    const MAPKEY = process.env.REACT_APP_MAP_KEY
    const contentList = {
        me: <>
            <ListContentHeader>
                <EditIcon />
                <ListTitle>Мои поля</ListTitle>
                <SearchIcon />
            </ListContentHeader>
            <ListContentItem>
                <Icon_1 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                    <ListContentButton color="red" textColor="red">
                        <ButtonIcon_1 />
                        Выброс
                    </ListContentButton>
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_2 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <ListContentButton color="green" textColor="green">
                        <ButtonIcon_2 />
                        Есть совет
                    </ListContentButton>
                    <ListContentButton color="red" textColor="red">
                        <ButtonIcon_1 />
                        Выброс
                    </ListContentButton>
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_3 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <ListContentButton color="yellow" textColor="yellow">
                        <ButtonIcon_3 />
                        Засыхает
                    </ListContentButton>
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
        </>,
        diagnostics:
            <><ListContentHeader>
                <EditIcon />
                <ListTitle>Диагностика</ListTitle>
                <SearchIcon />
            </ListContentHeader>
                <ListContentItem>
                    <Icon_1 />
                    <ListContentBody>
                        <ListItemTitle>Поле #456</ListItemTitle>
                        <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                        <ListContentButton color="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.08</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_2 />
                    <ListContentBody>
                        <ListItemTitle>Поле #456</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="green" textColor="green">
                            <ButtonIcon_2 />
                            Есть совет
                        </ListContentButton>
                        <ListContentButton color="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.10</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_3 />
                    <ListContentBody>
                        <ListItemTitle>Поле #456</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="yellow" textColor="yellow">
                            <ButtonIcon_3 />
                            Засыхает
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.02</ListNumber>
                </ListContentItem>
            </>,
        recomendation:
            <ListContentHeader>
                <EditIcon />
                <ListTitle>Рекомендации</ListTitle>
                <SearchIcon />
            </ListContentHeader>,
        note:
            <ListContentHeader>
                <EditIcon />
                <ListTitle>Заметки</ListTitle>
                <SearchIcon />
            </ListContentHeader>,
    }
    return (
        <Container>
            <Aside>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <ListWrap>
                    <TopList>
                        {topMenu.map(({ id, icon, path, title }) => {
                            return (
                                <ListItem onClick={() => setKeys(path)} active={keys === path} key={id}>
                                    <LisItemIcon src={icon} />
                                    {title}
                                </ListItem>
                            )
                        })}
                    </TopList>
                    <BottomList>
                        {bottomMenu.map(({ id, icon, path, title }) => {
                            return (
                                <ListItem onClick={() => setKeys(path)} active={keys === path} key={id}>
                                    <LisItemIcon src={icon} />
                                    {title}
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
