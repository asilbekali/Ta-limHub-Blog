"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-8 md:p-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
        >
          Biz haqimizda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg text-center mb-8"
        >
          Zamonaviy bilimlar, real ko‘nikmalar va kuchli kelajak sari yo‘l.
        </motion.p>

        <div className="space-y-5 text-white/90 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-semibold text-white">Ta’lim Hub</span> — bu
            dasturlash, texnologiya va zamonaviy kasblarni o‘rganishni
            istaganlar uchun yaratilgan innovatsion ta’lim platformasi. Biz
            nazariyani real amaliyot bilan uyg‘unlashtiramiz.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            Bizning maqsadimiz — o‘quvchilarni faqat bilim bilan emas, balki
            mustaqil fikrlash, muammo yechish va real loyihalarda ishlash
            ko‘nikmalari bilan ham qurollantirish.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Ta’lim Hub’da har bir talaba individual rivojlanadi, mentorlar bilan
            ishlaydi va bozor talablariga mos bilimlarga ega bo‘ladi.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          {[
            { title: "Amaliy ta’lim", color: "bg-blue-500/30" },
            { title: "Tajribali mentorlar", color: "bg-green-500/30" },
            { title: "Real loyihalar", color: "bg-purple-500/30" },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-6 py-3 ${item.color} backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-medium hover:scale-105 transition`}
            >
              {item.title}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
