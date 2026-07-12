import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-inner">
        <p className="footer-text">
          Built with <FiHeart size={14} className="footer-heart" /> by Darshan N Nandagavi
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          padding: 40px 24px;
          border-top: 1px solid var(--border);
          margin-top: 40px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-text {
          color: var(--text-muted);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-heart {
          color: #ff6b6b;
          display: inline;
        }
        .footer-copy {
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </motion.footer>
  )
}
