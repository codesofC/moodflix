"use client";

import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import PickMood from "@/components/PickMood";
import CardItem from "@/components/CardItem";
import { CardItemProps } from "@/types";
import { useGlobalContext } from "@/context/globalContext/useGlobalContext";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export default function Home() {
  const { theme } = useTheme();
  const { isLoading, allShows, error } = useGlobalContext();

  return (
    <main className={cn(theme, "flex-1 bg-background flex flex-col")}>
      <Navbar />
      <PickMood />
      <div className="space-y-4 px-6 lg:px-32 xl:px-64 2xl:px-96 py-4 mt-8 mb-4">
        <h2 className="sm:text-xl font-bold text-secondary-foreground">
          {" "}
          Enjoy yourself with:{" "}
        </h2>
        {!isLoading ? (
          allShows.length > 0 ? (
            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: .1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-6"
            >
              {allShows.map((item: CardItemProps) => (
                <motion.div 
                  key={item.uid}
                  variants={{
                    hidden: {
                      x: -50,
                    },
                    show: {
                      x: 0,
                      transition: {
                        duration: .3
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                >

                  <CardItem {...item} />
                </motion.div>
              ))}
            </motion.div>
          ) : error.length > 0 ? (
            <div className="w-full mt-24 sm:text-xl font-semibold text-center text-secondary-foreground flex flex-col gap-1 items-center">
              <span>{error}</span>
              <span> Please try later! </span>
            </div>
          ) : (
            <div className="w-full mt-24 sm:text-xl font-semibold text-center text-secondary-foreground">
              Let me make you in <strong>mood</strong>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}
