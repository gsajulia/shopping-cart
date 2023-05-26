import Image from "next/image";
import monitor from "../../public/monitor.svg"
import gamerChair from "../../public/gamerChair.svg"
import gamerKeyboard from "../../public/gamerKeyboard.svg"
import headset from "../../public/headset.svg"
import gamerDuck from "../../public/gamerDuck.svg"

export const items = [
    {
        id: 1,
        title: "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD",
        price: 8599.90,
        quantity: 1,
        img: monitor,
        alt: "imagem de um monitor",
    },
    {
        id: 2,
        title: "Cadeira Gamer  RGB - Preta com Iluminação (Led)",
        price: 959.90,
        quantity: 1,
        img: gamerChair,
        alt: "imagem de uma cadeira gamer",
    },
    {
        id: 3,
        title: "Teclado Gamer Mecânico Low Profile RGB AW510K 580",
        price: 1002.90,
        quantity: 1,
        img: gamerKeyboard,
        alt: "imagem de um teclado gamer mecânico",
    },
    {
        id: 4,
        title: "Headset Gamer RGB Preto",
        price: 550.90,
        quantity: 1,
        img: headset,
        alt: "imagem de um headset",
    },
    {
        id: 5,
        title: "A fanstastic Duck Gamer",
        price: 150.90,
        quantity: 1,
        img: gamerDuck,
        alt: "imagem de um duck gamer",
    },
];

export const couponsOptions = [
    { name: "rocketseat", percentualDiscount: 0.3 },
    { name: "neverstoplearning", percentualDiscount: 0.5 },
];
