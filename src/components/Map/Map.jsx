import moment from 'moment';
import AsideHeader from './AsideHeader';
import DateButton from '../Button/Date';
import SmallButton from '../Button/Small';
import RulerButton from '../Button/Ruler';
import WarningBtn from '../Button/Warning';
import SubmitButton from '../Button/Submit';
import DegreeButton from '../Button/Degree';
import { useRef, useState, useEffect } from 'react';
import { topMenu, bottomMenu } from '../../utils/menus';
import {
    PlusIcon, MinusIcon, PlusMinusBtn,
    Logo, Aside, ListWrap, BottomList, TopList, ListItem, LisItemIcon,
    Container, YMap, MapYandex, Content, ContentWrap, ListContent, LogoWrapper, ListContentItem,
    ListItemTitle, ListContentBody, Icon_1, Icon_2, Icon_3, ListNumber, ButtonIcon_1, ButtonIcon_2, ButtonIcon_3,
} from './style';
import { Polygon } from 'react-yandex-maps';
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
            <AsideHeader title="Мои" />
            <ListContentItem>
                <Icon_1 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_2 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_2 />} color="green" hover="green" textColor="green" title="Есть совет" />
                    <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_3 />
                <ListContentBody>
                    <ListItemTitle>Поле #123</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_3 />} color="yellow" hover="yellow" textColor="yellow" title="Засыхает" />
                </ListContentBody>
                <ListNumber>0.03</ListNumber>
            </ListContentItem>
        </>,
        diagnostics:
            <>
                <AsideHeader title="Диагностика" />
                <ListContentItem>
                    <Icon_1 />
                    <ListContentBody>
                        <ListItemTitle>Поле #8415</ListItemTitle>
                        <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                    </ListContentBody>
                    <ListNumber>0.08</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_2 />
                    <ListContentBody>
                        <ListItemTitle>Поле #1649</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_2 />} color="green" hover="green" textColor="green" title="Есть совет" />
                        <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                    </ListContentBody>
                    <ListNumber>0.10</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_3 />
                    <ListContentBody>
                        <ListItemTitle>Поле #3478</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_3 />} color="yellow" hover="yellow" textColor="yellow" title="Засыхает" />
                    </ListContentBody>
                    <ListNumber>0.02</ListNumber>
                </ListContentItem>
            </>,
        recomendation:
            <>
                <AsideHeader title="Рекомендации" />
                <ListContentItem>
                    <Icon_1 />
                    <ListContentBody>
                        <ListItemTitle>Поле #9102</ListItemTitle>
                        <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                    </ListContentBody>
                    <ListNumber>0.08</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_2 />
                    <ListContentBody>
                        <ListItemTitle>Поле #02154</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_2 />} color="green" hover="green" textColor="green" title="Есть совет" />
                        <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                    </ListContentBody>
                    <ListNumber>0.10</ListNumber>
                </ListContentItem>
                <ListContentItem>
                    <Icon_3 />
                    <ListContentBody>
                        <ListItemTitle>Поле #871</ListItemTitle>
                        <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                        <SmallButton icon={<ButtonIcon_3 />} color="yellow" hover="yellow" textColor="yellow" title="Засыхает" />
                    </ListContentBody>
                    <ListNumber>0.02</ListNumber>
                </ListContentItem>
            </>,
        note: <>
            <AsideHeader title="Заметки" />
            <ListContentItem>
                <Icon_1 />
                <ListContentBody>
                    <ListItemTitle>Поле #456</ListItemTitle>
                    <ListItemTitle subtext={true}>Нет культуры</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                </ListContentBody>
                <ListNumber>0.08</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_2 />
                <ListContentBody>
                    <ListItemTitle>Поле #456</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_2 />} color="green" hover="green" textColor="green" title="Есть совет" />
                    <SmallButton icon={<ButtonIcon_1 />} color="red" hover="red" textColor="red" title="Выброс" />
                </ListContentBody>
                <ListNumber>0.10</ListNumber>
            </ListContentItem>
            <ListContentItem>
                <Icon_3 />
                <ListContentBody>
                    <ListItemTitle>Поле #456</ListItemTitle>
                    <ListItemTitle subtext={true}>Пшеница твердая</ListItemTitle>
                    <SmallButton icon={<ButtonIcon_3 />} color="yellow" hover="yellow" textColor="yellow" title="Засыхает" />
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
                        <SubmitButton align='left' padding="12px" height="46px" title="+ Добавить" />
                    </ListContent>
                    <YMap query={{ apikey: MAPKEY }}>
                        <MapYandex instanceRef={map} defaultState={{ center: [41.304095, 69.270503], zoom }}>

                            <Polygon
                                onDrag={(e) => {
                                    console.log(e);
                                }}
                                geometry={[
                                    [
                                        [41.26051526495563, 69.21265869140286],
                                        [41.39416680731886, 69.41265869140341],
                                        [41.34813203080575, 69.44424438476248],
                                        [41.21438528828364, 69.24424438476147],
                                    ]
                                ]}
                                options={{
                                    fillColor: '#00FF00',
                                    strokeColor: '#0000FF',
                                    opacity: 0.5,
                                    strokeWidth: 5,
                                    strokeStyle: 'solid',
                                    draggable: true
                                }}
                            />
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