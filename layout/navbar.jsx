"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const Navbar = () => {
  const params = useParams();
  // console.log(params);
  const [openTab, setOpenTab] = useState(params.bidang ?? "/");

  const listBidang = [
    { fullName: "ALL", url: "/" },
    { fullName: "2022", url: "februari" },
    { fullName: "2023", url: "maret" },
    { fullName: "2024", url: "april" },
    { fullName: "2025", url: "mei" },
  ];

  return (
    <>
      <section className="w-full container mt-[50px]" id="middle">
        {/* <div>{JSON.stringify(charData)}</div> */}
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="lg:text-[35px] 2xl:text-[40px] font-medium text-center tracking-wide"
        >
          Data Pendayagunaan Aset Properti
        </motion.p>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex flex-wrap"
        >
          <div className="w-full">
            <div className="space-x-[24px] mt-[20px] mb-[40px] lg:text-[17px] 2xl:text-[20px] text-neutral-500 text-center">
              {listBidang.map((bid, i) => {
                return (
                  <Link
                    href={bid.url}
                    key={i}
                    className={
                      "inline-block px-3 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-100 " +
                      (openTab === bid.url
                        ? "text-gray-900 bg-[#F3F4F6] font-bold  "
                        : "text-gray-600 ")
                    }
                    onClick={(e) => {
                      setOpenTab(bid.url);
                    }}
                    data-toggle="tab"
                    role="tablist"
                  >
                    {bid.fullName}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Navbar;
