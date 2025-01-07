import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export function ArticleCard({ title, excerpt, author, date, category, image }: ArticleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-blue-600 dark:text-blue-400">{category}</span>
        <h2 className="text-xl font-bold mt-2 mb-3">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </motion.article>
  );
}