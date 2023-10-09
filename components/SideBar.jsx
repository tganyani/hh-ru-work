import styles from "../styles/SideBar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CircleIcon from "@mui/icons-material/Circle";
import HouseIcon from "@mui/icons-material/House";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import TourIcon from "@mui/icons-material/Tour";
import GradeIcon from "@mui/icons-material/Grade";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StyleIcon from "@mui/icons-material/Style";
import LaptopIcon from "@mui/icons-material/Laptop";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import useMediaQuery from "@mui/material/useMediaQuery";

const navList = [
  {
    id: 1,
    russian: "Лента",
    english: "",
    icon: <FlashOnIcon />,
  },
  {
    id: 2,
    russian: "Происшествия",
    english: "production",
    icon: <PriorityHighIcon />,
  },
  {
    id: 3,
    russian: "Авто",
    english: "avto",
    icon: <DriveEtaIcon />,
  },
  {
    id: 4,
    russian: "Бизнес",
    english: "business",
    icon: <BusinessCenterIcon />,
  },
  {
    id: 5,
    russian: "Здоровье",
    english: "health",
    icon: <MedicalServicesIcon />,
  },
  {
    id: 6,
    russian: "Крипто",
    english: "crypto",
    icon: <CircleIcon />,
  },
  {
    id: 7,
    russian: "Недвижимость",
    english: "realEstate",
    icon: <HouseIcon />,
  },
  {
    id: 8,
    russian: "Образование",
    english: "education",
    icon: <SchoolIcon />,
  },
  {
    id: 9,
    russian: "Политика",
    english: "politics",
    icon: <GavelIcon />,
  },
  {
    id: 10,
    russian: "Туризм",
    english: "tourism",
    icon: <TourIcon />,
  },
  {
    id: 11,
    russian: "Шоу-бизнес",
    english: "showBusiness",
    icon: <GradeIcon />,
  },
  {
    id: 12,
    russian: "Спорт",
    english: "sports",
    icon: <SportsSoccerIcon />,
  },
  {
    id: 13,
    russian: "Стиль",
    english: "style",
    icon: <StyleIcon />,
  },
  {
    id: 14,
    russian: "Наука и технологии",
    english: "science",
    icon: <LaptopIcon />,
  },
  {
    id: 15,
    russian: "Экономика",
    english: "economics",
    icon: <CurrencyExchangeIcon />,
  },
];
export default function SideBar({ openMenu, setOpenMenu }) {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:730px)");
  return (
    <div className={openMenu ? styles.container : styles.close}>
      <ul>
        {navList.map((nav) => (
          <Link href={`/${nav.english}`} key={nav.id}>
            <li
              onClick={matches?() => setOpenMenu(!openMenu):""}
              style={{
                backgroundColor:
                  router.asPath === `/${nav.english}` ? "black" : "",
                color: router.asPath === `/${nav.english}` ? "#ff6b00" : "",
              }}
            >
              {nav?.icon}
              <div
                style={{
                  color: router.asPath === `/${nav.english}` ? "white" : "",
                }}
              >
                {nav.russian}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
