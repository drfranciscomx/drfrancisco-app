import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function index() {
  return (
    <div className={styles.footer}>
      {/* Social Links */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-4 gap-3 flex flex-row sm:flex-col items-center justify-between"
      >
        <div className="flex flex-row gap-3">
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://m.facebook.com/drfranciscorodriguezplasticsurgeon"
            target="_blank"
          >
            <FaFacebookF color="#ffffff" size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.linkedin.com/in/drfrancisco-rodriguez-336771297/"
          >
            <FaLinkedin color="#ffffff" size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            transition={{ duration: 0.09 }}
            className="[text-decoration:none] rounded bg-ghostwhite flex flex-col p-2 items-center justify-center border-[1px] border-solid border-gray-white"
            href="https://www.instagram.com/drfrancisco_rodriguez/?hl=es"
          >
            <FaInstagram color="#ffffff" size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
