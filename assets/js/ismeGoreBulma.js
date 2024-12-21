const kisiler = [
    {
        ad: "Furkan",
        yas: 25
    },
    {
        ad: "Onur Han",
        yas: 25
    },
    {
        ad: "Samet",
        yas: 21
    },
    {
        ad: "Ilgın",
        yas: 17
    },
    {
        ad: "Emre",
        yas: 25
    },
];
function kisiBul(bul,isim){
    return bul.find(kisi => kisi.ad === isim);
}
const sonuc = kisiBul(kisiler, "Emre");
console.log(sonuc);
