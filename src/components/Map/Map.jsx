import moment from 'moment';
import DateButton from '../Button/Date';
import RulerButton from '../Button/Ruler';
import WarningBtn from '../Button/Warning';
import SubmitButton from '../Button/Submit';
import DegreeButton from '../Button/Degree';
import { useRef, useState, useEffect } from 'react';
import { topMenu, bottomMenu } from '../../utils/menus';
import {
    PlusIcon, MinusIcon, PlusMinusBtn,
    Container, YMap, MapYandex, ListTitle, Content, ContentWrap, ListContent, LogoWrapper, ListContentItem,
    Logo, Aside, ListWrap, BottomList, TopList, ListItem, ListContentHeader, LisItemIcon, EditIcon, SearchIcon,
    ListItemTitle, ListContentBody, ListContentButton, Icon_1, Icon_2, Icon_3, ListNumber, ButtonIcon_1, ButtonIcon_2, ButtonIcon_3,
} from './Map.style';
const Maps = () => {
    const map = useRef(null);
    const [zoom, setZoom] = useState(10);
    const [keys, setKeys] = useState('me');
    const MAPKEY = process.env.REACT_APP_MAP_KEY
    useEffect(() => {
        if (map.current) {
            map.current.setZoom(zoom, { duration: 300 });
        }
    }, [zoom]);
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
                    <ListContentButton color="red" hover="red" textColor="red">
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
                    <ListContentButton color="green" hover="green" textColor="green">
                        <ButtonIcon_2 />
                        Есть совет
                    </ListContentButton>
                    <ListContentButton color="red" hover="red" textColor="red">
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
                    <ListContentButton color="yellow" hover="yellow" textColor="yellow">
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
                        <ListItemTitle>Поле #8415</ListItemTitle>
                        <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                        <ListContentButton color="red" hover="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.08</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_2 />
                    <ListContentBody>
                        <ListItemTitle>Поле #1649</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="green" hover="green" textColor="green">
                            <ButtonIcon_2 />
                            Есть совет
                        </ListContentButton>
                        <ListContentButton color="red" hover="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.10</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_3 />
                    <ListContentBody>
                        <ListItemTitle>Поле #3478</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="yellow" hover="yellow" textColor="yellow">
                            <ButtonIcon_3 />
                            Засыхает
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.02</ListNumber>
                </ListContentItem>
            </>,
        recomendation:
            <>
                <ListContentHeader>
                    <EditIcon />
                    <ListTitle>Рекомендации</ListTitle>
                    <SearchIcon />
                </ListContentHeader>
                <ListContentItem>
                    <Icon_1 />
                    <ListContentBody>
                        <ListItemTitle>Поле #9102</ListItemTitle>
                        <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                        <ListContentButton color="red" hover="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.08</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_2 />
                    <ListContentBody>
                        <ListItemTitle>Поле #02154</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="green" hover="green" textColor="green">
                            <ButtonIcon_2 />
                            Есть совет
                        </ListContentButton>
                        <ListContentButton color="red" hover="red" textColor="red">
                            <ButtonIcon_1 />
                            Выброс
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.10</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_3 />
                    <ListContentBody>
                        <ListItemTitle>Поле #871</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <ListContentButton color="yellow" hover="yellow" textColor="yellow">
                            <ButtonIcon_3 />
                            Засыхает
                        </ListContentButton>
                    </ListContentBody>
                    <ListNumber>0.02</ListNumber>
                </ListContentItem>
            </>,
        note: <>
            <ListContentHeader>
                <EditIcon />
                <ListTitle>Заметки</ListTitle>
                <SearchIcon />
            </ListContentHeader>
            <ListContentItem>
                <Icon_1 />
                <ListContentBody>
                    <ListItemTitle>Поле #456</ListItemTitle>
                    <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                    <ListContentButton color="red" hover="red" textColor="red">
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
                    <ListContentButton color="green" hover="green" textColor="green">
                        <ButtonIcon_2 />
                        Есть совет
                    </ListContentButton>
                    <ListContentButton color="red" hover="red" textColor="red">
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
                    <ListContentButton color="yellow" hover="yellow" textColor="yellow">
                        <ButtonIcon_3 />
                        Засыхает
                    </ListContentButton>
                </ListContentBody>
                <ListNumber>0.02</ListNumber>
            </ListContentItem>
        </>,
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
                        <div>{contentList[keys]}</div>
                        <SubmitButton title="+ Добавить" />
                    </ListContent>
                    <YMap query={{ apikey: MAPKEY }}>
                        <MapYandex instanceRef={map}
                            defaultState={{ center: [41.304095, 69.270503], zoom }}>
                            <WarningBtn />
                            <RulerButton />
                            <PlusMinusBtn isMultiple>
                                <PlusIcon onClick={() => setZoom(zoom + 1)} />
                                <MinusIcon onClick={() => setZoom(zoom - 1)} />
                            </PlusMinusBtn>
                            <DateButton date={moment().format('ll')} />
                            <DegreeButton title="13 °" />
                        </MapYandex>
                    </YMap>
                </ContentWrap>
            </Content>
        </Container>
    );
};
export default Maps;