import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import AlokasiChart from "./alokasiChart";
import { Icon } from "@iconify/react";
// import "./style.css";

const BidangCard = () => {
  const [cardData] = useState([
    {
      date: 1,
      link: "https://drive.google.com/file/d/1uKoSqr5TnS7moHgILUQ_y2DoJI-lqwXX/view?usp=drive_link",
      nomor_kontrak: "0131.PJ/HKM.02.01/PLNIP060000/2023",
      tanggal_mulai: "01 Jan 2024",
      tanggal_selesai: "31 Des 2025",
      skema: "Sewa",
      mitra: "PT BRI",
      nilai_kontrak: "248,648,000",
    },
    {
      date: 2,
      link: "https://drive.google.com/file/d/18sXcWpD5uE4axXf8e5b4eTh01SleQvWV/view?usp=drive_link",
      nomor_kontrak: "0068.PJ/061/SLAPGU/2022",
      tanggal_mulai: "23 Mar 2022",
      tanggal_selesai: "22 Mar 2025",
      skema: "Sewa",
      mitra: "PT ADC",
      nilai_kontrak: "82,219,446",
    },
    {
      date: 3,
      link: "https://drive.google.com/file/d/1BAxSl-2qE_lF-LRgL272WrkOxnHXLDHe/view?usp=drive_link",
      nomor_kontrak: "0211.PJ/DAN.01.03/PLNIP060000/2023",
      tanggal_mulai: "12 Des 2022",
      tanggal_selesai: "11 Des 2027",
      skema: "Sewa",
      mitra: "PT ADC",
      nilai_kontrak: "115,968,908",
    },
    {
      date: 4,
      link: "https://drive.google.com/file/d/1e5JhwLqkT0oHOqeECCmXH8gknIWriRGK/view?usp=drive_link",
      nomor_kontrak: "0106.PJ/HKM.02.01/PLNIP060000/2023",
      tanggal_mulai: "-",
      tanggal_selesai: "24 Okt 2028",
      skema: "Pinjam Pakai dengan Kompensasi",
      mitra: "PLN UID BANTEN",
      nilai_kontrak: "159,055,912",
    },
    {
      date: 5,
      link: "https://drive.google.com/file/d/1kkKR3yvdWekv6y4pAQAt8m_RQcqz6kK0/view?usp=drive_link",
      nomor_kontrak: "0001.HKM.02.01/PLNIP060000/2023",
      tanggal_mulai: "12 Jun 2023",
      tanggal_selesai: "12 Jun 2028",
      skema: "Pinjam Pakai tanpa Kompensasi",
      mitra: "PLN UIT JBB",
      nilai_kontrak: "473,451,593",
    },
    {
      date: 6,
      link: "https://drive.google.com/file/d/12fi40L6ZNP5BL7bTSg-5N4sM-5PzShS7/view?usp=drive_link",
      nomor_kontrak: "00595.PJ/061/SLAPGU/2022",
      tanggal_mulai: "1 Jan 2023",
      tanggal_selesai: "31 Des 2025",
      skema: "Sewa",
      mitra: "PT XL",
      nilai_kontrak: "626,539,506",
    },
    {
      date: 7,
      link: "https://drive.google.com/file/d/14ekFuRXpd13bUXhL4-a-KZOiBsswdNrn/view?usp=drive_link",
      nomor_kontrak: "0437.PJ/061/SLAPGU/2022",
      tanggal_mulai: "-",
      tanggal_selesai: "-",
      skema: "Sewa",
      mitra: "PT BNI",
      nilai_kontrak: "25,669,140",
    },
    {
      date: 8,
      link: "https://drive.google.com/file/d/1CtuYheRjxYVezyxnMEG3i19RKvArtRB5/view?usp=sharing",
      nomor_kontrak: "0665.PJ/061/SLAPGU/2022",
      tanggal_mulai: "-",
      tanggal_selesai: "-",
      skema: "Pinjam Pakai dengan Kompensasi",
      mitra: "PT EPN",
      nilai_kontrak: "248,648,000",
    },
    {
      date: 9,
      link: "https://drive.google.com/file/d/1_bKFIVeCbfXBdhW4E-p5Twa45Vhkw_ai/view?usp=drive_link",
      nomor_kontrak: "0058.PJ/061/SLAPGU/2022",
      tanggal_mulai: "-",
      tanggal_selesai: "-",
      skema: "Sewa",
      mitra: "KOPERASI",
      nilai_kontrak: "194,451,220",
    },
    {
      date: 10,
      link: "https://drive.google.com/file/d/1kmHqvrMTPMyIZ0_v0O0_SJBppiQwg_1C/view?usp=drive_link",
      nomor_kontrak: "01-",
      tanggal_mulai: "1 Sept 2022",
      tanggal_selesai: "31 Aug 2024",
      skema: "Pinjam Pakai dengan Kompensasi",
      mitra: "PT DOOSAN",
      nilai_kontrak: "4,481,724,329",
    },
  ]);

  const openSheet = (link) => {
    window.open(
      link,
      "_blank" // <- This is what makes it open in a new window.
    );
    // console.log(link);
  };

  // console.log(data);
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[40px]">
          {cardData.length !== 0
            ? cardData.map((sheet, i) => {
                return (
                  <div
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setOpenTab(i + 2);
                    // }}
                    className="cursor-pointer"
                    key={i}
                  >
                    {/* {console.log(bid)} */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <motion.div
                        initial={{
                          y: 100,
                          opacity: 0,
                        }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: i / 8,
                          y: { type: "spring", stiffness: 60 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1,
                        }}
                        className={`rounded-[23px] p-4  bg-[#F4FBF3] overflow-hidden  hover:shadow-xl outline outline-offset-0 outline-[9px] outline-white shadow-lg mb-2`}
                      >
                        <p className="lg:text-[20px] 2xl:text-[25px]  uppercase font-bold  text-zinc-800">
                          {sheet.mitra}
                        </p>
                        <p className="text-[10px] 2xl:text-[10px] text-gray-500 mb-4">
                          {sheet.nomor_kontrak}
                        </p>
                        <p className="text-[12px] 2xl:text-[15px] text-gray-500">
                          Berlaku dari:
                        </p>
                        <p className="flex  items-center gap-2 text-[25px] lg:text-[20px] 2xl:text-[25px] font-bold text-green-600">
                          {sheet.tanggal_mulai}
                        </p>
                        <p className="text-[12px] 2xl:text-[15px] text-gray-500">
                          Sampai dengan:
                        </p>
                        <p className="flex  items-center gap-2 text-[25px] lg:text-[20px] 2xl:text-[25px] font-bold text-red-600">
                          {sheet.tanggal_selesai}
                        </p>
                        <div className="mt-1">
                          <p className="text-gray-600 text-[12px] 2xl:text-[15px]">
                            Nilai Kontrak
                          </p>
                          <p className="flex  items-center gap-2 text-[25px] lg:text-[20px] 2xl:text-[25px] font-bold text-sky-600">
                            Rp {sheet.nilai_kontrak}
                          </p>
                        </div>
                        <button
                          onClick={() => openSheet(sheet.link)}
                          className=" flex items-center gap-2 bg-orange-400 py-2 2xl:py-3 px-4 2xl:px-8 mt-4 rounded-[12px] lg:text-[11px] 2xl:text-[14px] font-semibold hover:bg-opacity-75"
                        >
                          <Icon icon="teenyicons:ms-excel-outline" />
                          Buka Kontrak
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })
            : [...Array(4)].map((x, i) => (
                <motion.div
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i / 8,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className=" animate-pulse"
                  key={i}
                >
                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-[20px]"></div>
                    <h1 className="w-4/6 h-2 mt-4 bg-gray-200 rounded-[15px]"></h1>
                  </div>
                </motion.div>
              ))}
        </div>
        <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>
        {/* <section className="flex flex-col lg:flex-row w-full ">
          <AlokasiChart data={bidang}></AlokasiChart>
        </section> */}
      </div>
    </>
  );
};

export default BidangCard;
